import React, { useState } from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar4 from "components/Sidebar4";

const MentorManagementPage = () => {
  const [isCheck,setIsCheck] = useState(false)
  const toggleHandler = () => {
    setIsCheck(!isCheck)
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

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar4 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-10 items-center justify-end p-[13px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-3.5 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mr-3 p-2.5 w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_profilepic2.png"
                  alt="profilepicTwo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtProximaSoftSemiBold20"
                  >
                    Antonio
                  </Text>
                  <Img
                    className="h-1.5 w-2"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-[10px] items-center 
              justify-end mt-[45px] w-full md:w-full pr-12">
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
            <table className="table-auto bg-white-A700 flex flex-col font-poppins 
              rounded-[24px] shadow-bs19 w-[96%] p-5 mt-5">
              <thead>
                <tr className="flex md:flex-col flex-row md:gap-5 items-start justify-around w-full md:w-full py-3"
                style={{borderBottom:"1px solid #BA35351A"}}>
                  <th className="flex justify-evenly w-full mx-12 mr-[4.5rem]">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Expertise</th>
                    <th>Rates</th>
                    <th>Availabilty</th>
                    <th>Approval</th>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-row justify-around items-center py-3">
                  <td className="w-[100px] flex justify-center items-center">
                    <Img
                        className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12"
                        src="images/img_unsplashzqv4fcmzkuq.png"
                        alt="unsplashzqv4fcm"
                      />
                  </td>
                  <td className="flex justify-evenly w-full">
                    <td>Bisa</td>
                    <td>bisa@gmail.com</td>
                    <td>Ui Design</td>
                    <td>
                      <svg width="49" height="17" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08283 5.83444L7.92308 2.12844C7.97665 2.02119 8.05904 1.93098 8.161 1.86793C8.26297 1.80488 8.38049 1.77148 8.50037 1.77148C8.62026 1.77148 8.73777 1.80488 8.83974 1.86793C8.94171 1.93098 9.0241 2.02119 9.07766 2.12844L10.9179 5.83444L15.0319 6.43228C15.1506 6.44873 15.2622 6.49822 15.3541 6.57508C15.446 6.65195 15.5144 6.75311 15.5516 6.867C15.5887 6.98089 15.5931 7.10294 15.5642 7.2192C15.5353 7.33547 15.4743 7.44127 15.3882 7.52453L12.4118 10.4074L13.1145 14.4804C13.2044 15.0031 12.6519 15.4012 12.1795 15.1547L8.50037 13.2309L4.82058 15.1547C4.34883 15.4019 3.79633 15.0031 3.88629 14.4797L4.58896 10.4067L1.61254 7.52382C1.52682 7.4405 1.4662 7.33481 1.43755 7.21875C1.40891 7.10269 1.41341 6.98093 1.45052 6.8673C1.48764 6.75366 1.55588 6.65273 1.64751 6.57595C1.73913 6.49917 1.85046 6.44964 1.96883 6.43299L6.08283 5.83444Z" fill="#CBA13D"/>
                        <path d="M22.0828 5.83444L23.9231 2.12844C23.9766 2.02119 24.059 1.93098 24.161 1.86793C24.263 1.80488 24.3805 1.77148 24.5004 1.77148C24.6203 1.77148 24.7378 1.80488 24.8397 1.86793C24.9417 1.93098 25.0241 2.02119 25.0777 2.12844L26.9179 5.83444L31.0319 6.43228C31.1506 6.44873 31.2622 6.49822 31.3541 6.57508C31.446 6.65195 31.5144 6.75311 31.5516 6.867C31.5887 6.98089 31.5931 7.10294 31.5642 7.2192C31.5353 7.33547 31.4743 7.44127 31.3882 7.52453L28.4118 10.4074L29.1145 14.4804C29.2044 15.0031 28.6519 15.4012 28.1795 15.1547L24.5004 13.2309L20.8206 15.1547C20.3488 15.4019 19.7963 15.0031 19.8863 14.4797L20.589 10.4067L17.6125 7.52382C17.5268 7.4405 17.4662 7.33481 17.4376 7.21875C17.4089 7.10269 17.4134 6.98093 17.4505 6.8673C17.4876 6.75366 17.5559 6.65273 17.6475 6.57595C17.7391 6.49917 17.8505 6.44964 17.9688 6.43299L22.0828 5.83444Z" fill="#CBA13D"/>
                        <path d="M38.0828 5.83444L39.9231 2.12844C39.9766 2.02119 40.059 1.93098 40.161 1.86793C40.263 1.80488 40.3805 1.77148 40.5004 1.77148C40.6203 1.77148 40.7378 1.80488 40.8397 1.86793C40.9417 1.93098 41.0241 2.02119 41.0777 2.12844L42.9179 5.83444L47.0319 6.43228C47.1506 6.44873 47.2622 6.49822 47.3541 6.57508C47.446 6.65195 47.5144 6.75311 47.5516 6.867C47.5887 6.98089 47.5931 7.10294 47.5642 7.2192C47.5353 7.33547 47.4743 7.44127 47.3882 7.52453L44.4118 10.4074L45.1145 14.4804C45.2044 15.0031 44.6519 15.4012 44.1795 15.1547L40.5004 13.2309L36.8206 15.1547C36.3488 15.4019 35.7963 15.0031 35.8863 14.4797L36.589 10.4067L33.6125 7.52382C33.5268 7.4405 33.4662 7.33481 33.4376 7.21875C33.4089 7.10269 33.4134 6.98093 33.4505 6.8673C33.4876 6.75366 33.5559 6.65273 33.6475 6.57595C33.7391 6.49917 33.8505 6.44964 33.9688 6.43299L38.0828 5.83444Z" fill="#CBA13D"/>
                      </svg>
                    </td>
                    <td>Available</td>
                    <td>
                      <div className="flex items-center justify-center">
                        <label class="toggle-container w-[109px]">
                          <input type="checkbox" checked={isCheck} onChange={toggleHandler}/>
                          <span class={`toggle-slider approve-toggle p-[10px] ${isCheck ? 'flex justify-start items-center text-[13px] text-[#fff]' : 'flex justify-end items-center text-[11px]'}`}>
                            {isCheck ? 'Approve' : 'Disapprove'}
                          </span>
                        </label>
                      </div>
                    </td>
                  </td>
                  <td className="text-base text-purple-700 underline text-[13px] w-[100px] flex justify-center items-center">
                    View Details
                  </td>
                </tr>
              </tbody>
            </table>
            {/* start */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorManagementPage;
