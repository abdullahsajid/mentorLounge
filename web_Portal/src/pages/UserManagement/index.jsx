import React, { useEffect, useState } from "react";
import { Button, Img, Input, Text } from "components";
import { useGetAllMentorsMutation,useGetAllMenteesMutation} from "features/apis/admin";
import { Link } from "react-router-dom";
import { mentorPayload } from "utils/payload-utils";
import Loader from "pages/Loader";
import Items from "components/AllMentor/Items";

const UserManagementPage = () => {
  const [getAllMentors,{isLoading}] = useGetAllMentorsMutation()
  const [allMentors,setAllMentors] = useState([])
  const [itemOffset,setItemOffset] = useState(0)
  const [payload,setPayload] = useState({
    sortproperty: "createdAt",
    sortorder: -1,
    offset: itemOffset,
    limit: 5,
    query: {
        critarion: {active : true},
        userFields: "_id email name profile_picture_url",
        addedby: "_id email name",
        lastModifiedBy: "_id email name"
    }
  })


  const getMentorData = async () => {
    const {data} = await getAllMentors(payload)
    setAllMentors(data)
  }

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] mt-1.5 w-[27px]"
          src="images/img_outlinemoney.svg"
          alt="outlinemoney"
        />
      ),
      label: "Finance",
      href: "/finance",
      active: window.location.pathname === "/finance",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_blue_gray_300.svg"
          alt="checkmark"
        />
      ),
      label: "Analytics",
      href: "/analyticsandreporting",
      active: window.location.pathname === "/analyticsandreporting",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_vector_blue_gray_300.svg"
          alt="vector"
        />
      ),
      label: "Customer Services",
      href: "/customerservice",
      active: window.location.pathname === "/customerservice",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_blue_gray_300.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Mentor Management
          </Text>
        </div>
      ),
      href: "/mentormanagement",
      active: window.location.pathname === "/mentormanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Session Management</Text>
        </div>
      ),
      href: "/sessionmanagement",
      active: window.location.pathname === "/sessionmanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Content Management</Text>
        </div>
      ),
      href: "/contentmanagement",
      active: window.location.pathname === "/contentmanagement",
    },
  ];

  useEffect(() => {
    getMentorData()
  },[payload])

  const handlerPageNext = async (e) => {
    e.preventDefault()
    const newOffset = itemOffset + 5
    setItemOffset(newOffset)
    setPayload((prevPayload) => ({
      ...prevPayload,
      offset: newOffset
    }));
  }

  const handlerPagePrevious = async (e) => {
    e.preventDefault()
    const newOffset = Math.max(0,itemOffset - 5)
    setItemOffset(newOffset)
    setPayload((prevPayload) => ({
      ...prevPayload,
      offset: newOffset
    }));
  }
  

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins w-full ml-auto sm:!w-full md:!w-full h-full"
      style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 sm:px-0 w-full">
           
            <div className="flex sm:flex-col flex-row font-poppins gap-[10px] 
            items-center justify-end mt-[45px] w-full pr-12 sm:px-2">
              <Input
                name="group152"
                placeholder="Search"
                className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                wrapClassName="border border-gray-900_1e border-solid flex rounded-[21px] w-[25%] sm:w-full"
                prefix={
                  <Img
                    className="mt-[5px] mb-1 mx-2.5 w-[20px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[125px] rounded-[20px]"
                leftIcon={
                  <div className="h-[19px] mt-[5px] mb-1 mr-2 w-[19px] rounded-[5px]">
                    <Img
                      className="h-[19px] rounded-[5px]"
                      src="images/img_outline_settings_fine_tuning_tuning.svg"
                      alt="Outline / Settings, Fine Tuning / Tuning "
                    />
                  </div>
                }
                size="sm"
              >
                <div className="font-medium text-[19.13px] text-left">
                  Filter
                </div>
              </Button>
            </div>
            <Text
              className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-full pl-8 mb-5"
              size="txtProximaSoftSemiBold40Black90001"
            >
              Mentors
            </Text>
            <div className="w-[96%] sm:w-full overflow-auto sm:px-2">
              <table className="table-auto bg-white-A700 font-poppins 
                rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                <thead>
                  <tr
                  style={{borderBottom:"2px solid #BA35351A"}}>
                    <th className="px-5"></th>
                    <th className="p-3 px-9">Name</th>
                    <th className="p-3 px-9">Email</th>
                    <th className="p-3 px-9">Status</th>
                    <th className="p-3 px-9">Expertise</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                {isLoading ? (
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="py-5">
                        <div className="flex justify-center items-center w-full">
                          <Loader widthAlign={true} customStyle={'!h-full !justify-end'}/>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ) : (
                    <>
                    <Items allMentors={allMentors?.data?.mentors} />
                    <tr className="!w-full">
                      <td className="!w-full flex justify-center items-center p-3">
                        <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold ${itemOffset === 0 && 'opacity-70 cursor-not-allowed'}`}
                        onClick={handlerPagePrevious}
                        disabled={itemOffset === 0}
                        >
                          Previous
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="!w-full flex justify-center items-center p-3">
                        <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold
                          ${allMentors?.data?.mentors.length < 5 && "opacity-70 cursor-not-allowed"}`}
                          onClick={handlerPageNext}
                          disabled={allMentors?.data?.mentors.length < 5}
                        >
                          Next
                        </button>
                      </td>
                    </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
              <Text
                className="ml-2 md:ml-[0] mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-full
                pl-8 mb-5"
                size="txtProximaSoftSemiBold40Black90001"
              >
                Mentees
              </Text>
              <div className="w-[96%] sm:w-full overflow-auto sm:px-2 mb-3">
                <table className="table-auto bg-white-A700 font-poppins 
                  rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                  <thead>
                    <tr
                    style={{borderBottom:"1px solid #BA35351A"}}>
                      <th className="px-5"></th>
                      <th className="p-3 px-9">Name</th>
                      <th className="p-3 px-9">Email</th>
                      <th className="p-3 px-9">Status</th>
                      <th className="p-3 px-9">Expertise</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    <tr className="overflow-hidden">
                      <td className="p-3 px-5 sm:p-0 ">
                      <Img
                            className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12 sm:ml-[15px]"
                            src="images/img_unsplashzqv4fcmzkuq.png"
                            alt="unsplashzqv4fcm"
                          />
                      </td>
                      <td  className="text-center">Bisa</td>
                      <td  className="text-center">bisa@gmail.com</td>
                      <td  className="text-center">Verified</td>
                      <td  className="text-center">Ui Design</td>
                      <td className="text-base text-purple-700 underline sm:p-[13px] sm:px-[18px]">
                        View Details
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default UserManagementPage;
