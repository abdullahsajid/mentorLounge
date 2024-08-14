import React, { useEffect, useState } from "react";
import { Button, Img, Input} from "components";
import { useGetAllMentorMutation } from "features/apis/mentee";
import { mentorPayload } from "utils/payload-utils";
import Loader from "pages/Loader";
import Items from "components/AllMentor/Items";
import { Link } from "react-router-dom";

const MentorManagementPage = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [getAllMentors,{isLoading}] = useGetAllMentorMutation()
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

  const toggleHandler = () => {
    setIsCheck(!isCheck)
  }

  const getMentorData = async () => {
    const {data} = await getAllMentors(payload)
    setAllMentors(data)
  }

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
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center ml-auto w-full"style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full mb-5">
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 sm:p-0 w-full">
            <div className="flex sm:flex-col flex-row font-poppins gap-[10px] items-center 
              justify-end mt-[45px] w-full md:w-full pr-12 sm:px-2">
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
            <div className="w-[96%] sm:w-full overflow-auto sm:px-2 mt-5">
              <table className="table-auto bg-white-A700 font-poppins 
                  rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                <thead>
                  <tr style={{ borderBottom: "2px solid #BA35351A" }}>
                    <th className="px-5"></th>
                    <th className="p-3 px-9">Name</th>
                    <th className="p-3 px-9">Email</th>
                    <th className="p-3 px-9">Expertise</th>
                    <th className="p-3 px-9">Rates</th>
                    <th className="p-3 px-9">Availabilty</th>
                    <th className="p-3 px-9">Approval</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                {isLoading ? (
                    <tr>
                      <td></td>
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
                  ) :
                  (
                    <>
                    <Items allMentors={allMentors?.data?.mentors} check={'mentorManage'} isCheck={isCheck} toggleHandler={toggleHandler} />
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
            {/* start */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorManagementPage;
