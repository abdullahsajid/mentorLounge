import React, { useState, lazy } from "react";
import { Button, Img, Input, Text } from "components";
const MentorsProfile = lazy(() => import("components/Admin/MentorsProfile"))
const MenteeProfile = lazy(() => import("components/Admin/MenteeProfile"))

const UserManagementPage = () => {
  const [filterItem, setFilterItem] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [menteeSearch,setMenteeSearch] = useState("")
  const [menteefilterItem, setMenteeFilterItem] = useState(false)
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeMenteeFilter, setActiveMenteeFilter] = useState(null);
  const [itemOffset, setItemOffset] = useState(0)
  const [menteeOffset, setMenteeOffset] = useState(0)
  const [payload, setPayload] = useState({
    sortproperty: "createdAt",
    sortorder: -1,
    offset: itemOffset,
    limit: 5,
    query: {
      critarion: {
        active: true,
        "role": { "$in": ["mentor"] }
      },
      userFields: "_id email name profile_picture_url approved",
      addedby: "_id email name",
      lastModifiedBy: "_id email name"
    }
  })

  const [menteePayload, setMenteePayload] = useState({
    sortproperty: "createdAt",
    sortorder: -1,
    offset: menteeOffset,
    limit: 5,
    query: {
      critarion: {
        active: true,
        "role": { "$in": ["mentee"] }
      },
      userFields: "_id email name profile_picture_url approved",
      addedby: "_id email name",
      lastModifiedBy: "_id email name"
    }
  })

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

  const handlerFilter = (e, name, value) => {
    e.preventDefault();
    setPayload((prevPayload) => ({
      ...prevPayload,
      query: {
        critarion: {
          [name]: value,
          "role": { "$in": ["mentor"] },
        },
        userFields: prevPayload.query.userFields,
        addedby: prevPayload.query.addedby,
        lastModifiedBy: prevPayload.query.lastModifiedBy,
      },
    }));
    setActiveFilter({ name, value });
  };

  const handlerSearchMentor = (e, value) => {
    e.preventDefault();
    setPayload((prevPayload) => ({
      ...prevPayload,
      query: {
        critarion: {
          "name": {"$regex":`${value}`, "$options": "i"},
          "email": {"$regex":`${value}`, "$options": "i"},
          "role": { "$in": ["mentor"] },
        },
        userFields: prevPayload.query.userFields,
        addedby: prevPayload.query.addedby,
        lastModifiedBy: prevPayload.query.lastModifiedBy,
      },
    }));
    setSearchValue(value);
  };

  const handlerSearchMentee = (e, value) => {
    e.preventDefault();
    setMenteePayload((prevPayload) => ({
      ...prevPayload,
      query: {
        critarion: {
          "name": {"$regex":`${value}`, "$options": "i"},
          "email": {"$regex":`${value}`, "$options": "i"},
          "role": { "$in": ["mentee"] },
        },
        userFields: prevPayload.query.userFields,
        addedby: prevPayload.query.addedby,
        lastModifiedBy: prevPayload.query.lastModifiedBy,
      },
    }));
    setMenteeSearch(value);
  };

  const handlerMenteeFilter = (e, name, value) => {
    e.preventDefault();
    setMenteePayload((prevPayload) => ({
      ...prevPayload,
      query: {
        critarion: {
          [name]: value,
          "role": { "$in": ["mentee"] },
        },
        userFields: prevPayload.query.userFields,
        addedby: prevPayload.query.addedby,
        lastModifiedBy: prevPayload.query.lastModifiedBy,
      },
    }));
    setActiveMenteeFilter({ name, value });
  };



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
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  handlerSearchMentor(e, e.target.value);
                }}
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
                onClick={() => setFilterItem(!filterItem)}
              >
                <div className="font-medium text-[19.13px] text-left !font-poppins">
                  Filter
                </div>
              </Button>
            </div>
            {filterItem &&
              (<div className="flex items-center gap-3 mt-3">
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeFilter?.name === 'approved' && activeFilter?.value === true ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerFilter(e, 'approved', true)}
                >
                  Approve
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeFilter?.name === 'approved' && activeFilter?.value === false ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerFilter(e, 'approved', false)}
                >
                  disapprove
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeFilter?.name === 'active' && activeFilter?.value === true ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerFilter(e, 'active', true)}
                >
                  Available
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeFilter?.name === 'active' && activeFilter?.value === false ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerFilter(e, 'active', false)}
                >
                  unavailable
                </button>
                {/* <input
                  type="text"
                  placeholder="Search by name"
                  onChange={(e) => handlerFilterSearch(e, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Search by email"
                  onChange={(e) => handlerFilterSearch(e, 'email', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Search by expertise"
                  onChange={(e) => handlerFilterSearch(e, 'mentorFeilds', e.target.value)}
                /> */}

              </div>)}
            <Text
              className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] !font-poppins text-black-900_01 w-full pl-8 mb-5"
              size="txtProximaSoftSemiBold40Black90001"
            >
              Mentors
            </Text>
            <div className="w-[96%] sm:w-full overflow-auto sm:px-2">
              <table className="table-auto bg-white-A700 !font-poppins 
                rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                <thead>
                  <tr
                    style={{ borderBottom: "2px solid #BA35351A" }}>
                    <th className="px-5"></th>
                    <th className="p-3 px-9">Name</th>
                    <th className="p-3 px-9">Email</th>
                    <th className="p-3 px-9">Status</th>
                    <th className="p-3 px-9">Expertise</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                  <MentorsProfile
                    payload={payload}
                    setPayload={setPayload}
                    itemOffset={itemOffset}
                    setItemOffset={setItemOffset}
                  />
                </tbody>
              </table>
            </div>
            {/* <div className="flex justify-end pr-12 mt-5 w-full"> */}
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
                value={menteeSearch}
                onChange={(e) => {
                  setMenteeSearch(e.target.value);
                  handlerSearchMentee(e, e.target.value);
                }}
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
                onClick={() => setMenteeFilterItem(!menteefilterItem)}
              >
                <div className="font-medium text-[19.13px] text-left !font-poppins">
                  Filter
                </div>
              </Button>
            </div>
            {menteefilterItem &&
              (<div className="flex items-center gap-3 mt-3">
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeMenteeFilter?.name === 'approved' && activeMenteeFilter?.value === true ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerMenteeFilter(e, 'approved', true)}
                >
                  Approve
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeMenteeFilter?.name === 'approved' && activeMenteeFilter?.value === false ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerMenteeFilter(e, 'approved', false)}
                >
                  disapprove
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeMenteeFilter?.name === 'active' && activeMenteeFilter?.value === true ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerMenteeFilter(e, 'active', true)}
                >
                  Available
                </button>
                <button
                  className={`px-5 py-3 rounded-md font-medium !font-poppins text-[19.13px] ${activeMenteeFilter?.name === 'active' && activeMenteeFilter?.value === false ? 'bg-[#5c2c73]' : 'bg-[#743C95]'} text-[#fff]`}
                  onClick={(e) => handlerMenteeFilter(e, 'active', false)}
                >
                  unavailable
                </button>
                {/* <input
                    type="text"
                    placeholder="Search by name"
                    onChange={(e) => handlerFilterSearch(e, 'name', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Search by email"
                    onChange={(e) => handlerFilterSearch(e, 'email', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Search by expertise"
                    onChange={(e) => handlerFilterSearch(e, 'mentorFeilds', e.target.value)}
                  /> */}
              </div>)}
            <Text
              className="ml-2 md:ml-[0] mt-[25px] sm:text-4xl !font-poppins md:text-[38px] text-[40px] text-black-900_01 w-full
                pl-8 mb-5"
              size="txtProximaSoftSemiBold40Black90001"
            >
              Mentees
            </Text>
            <div className="w-[96%] sm:w-full overflow-auto sm:px-2 mb-3">
              <table className="table-auto bg-white-A700 !font-poppins 
                  rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                <thead>
                  <tr
                    style={{ borderBottom: "1px solid #BA35351A" }}>
                    <th className="px-5"></th>
                    <th className="p-3 px-9">Name</th>
                    <th className="p-3 px-9">Email</th>
                    <th className="p-3 px-9">Status</th>
                    <th className="p-3 px-9">Expertise</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                  <MenteeProfile 
                    menteeOffset={menteeOffset}
                    setMenteeOffset={setMenteeOffset}
                    menteePayload={menteePayload}
                    setMenteePayload={setMenteePayload}
                  />
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
