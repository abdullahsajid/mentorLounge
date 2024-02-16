import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar5 from "components/Sidebar5";

const SettingsPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] w-[27px]"
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
          src="images/img_search_purple_700_24x24.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar5 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-proximasoft gap-[42px] items-center justify-start md:px-5 w-full">
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
              <div className="flex flex-row gap-2.5 items-center justify-center mr-[27px] p-2.5 w-auto">
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
            <div className="flex flex-col gap-[13px] items-start justify-start w-[96%] md:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_03"
                size="txtProximaSoftSemiBold35"
              >
                Account Settings
              </Text>
              <div className="flex md:flex-col flex-row font-poppins gap-[27px] items-start justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-7 sm:px-5 rounded-[30px] w-[22%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[143px] items-start justify-start my-[7px] pb-[62px] md:pr-10 sm:pr-5 pr-[62px] w-[91%] md:w-full">
                    <div className="flex flex-col gap-[12.74px] items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] rounded-[10px] shadow-bs23 w-auto">
                        <Text
                          className="sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-gray-900_87 w-auto"
                          size="txtPoppinsSemiBold2038"
                        >
                          My Profile
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[119px] rounded-[10px] shadow-bs23 sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-center"
                        size="lg"
                      >
                        Security
                      </Button>
                      <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] rounded-[10px] shadow-bs23 w-auto">
                        <Text
                          className="sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-gray-900_87 w-auto"
                          size="txtPoppinsSemiBold2038"
                        >
                          Notifications
                        </Text>
                      </div>
                    </div>
                    <div className="h-[49px] mb-[433px] rounded-[10px] shadow-bs23 w-full"></div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-proximasoft items-start justify-start w-[77%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02"
                    size="txtProximaSoftSemiBold30Gray90002"
                  >
                    Security
                  </Text>
                  <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-[17px] p-[17px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                          size="txtPoppinsSemiBold22"
                        >
                          Local Password Authentication
                        </Text>
                        <Button
                          className="!text-gray-100_07 cursor-pointer font-museosansrounded font-semibold leading-[normal] min-w-[164px] sm:mt-0 mt-[5px] rounded-[10px] shadow-bs24 text-[15px] text-center"
                          size="lg"
                        >
                          Update Password
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[5px] text-gray-600_02 text-sm"
                          size="txtPoppinsRegular14Gray60002"
                        >
                          Email
                        </Text>
                        <input
                          className="font-semibold leading-[normal] 
                          border-2 border-solid rounded-lg text-base px-5 py-2"
                          placeholder="arnold_negger21@gmail.com"
                          value={"arnold_negger21@gmail.com"}
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[15px]  md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-5 items-center justify-between md:w-full">
                          <div className="flex flex-row items-center justify-evenly sm:w-full">
                            <Text
                              className="text-gray-600_02 text-sm mr-2"
                              size="txtPoppinsRegular14Gray60002"
                            >
                              Old Password:
                            </Text>
                            <input
                              className="font-museosansrounded font-semibold leading-[normal]
                                rounded-lg text-base px-5 py-2 border-2 border-solid w-[100px]"
                              color="gray_900_19"
                              size="md"
                              placeholder="********"
                              value={"********"}
                            />
                              
                          </div>
                          <div className="flex flex-row gap-[9px] items-center justify-between sm:w-full">
                            <Text
                              className="text-gray-600_02 text-sm mr-2"
                              size="txtPoppinsRegular14Gray60002"
                            >
                              New Password:
                            </Text>
                            <input
                              className="cursor-pointer font-museosansrounded font-semibold leading-[normal] 
                               rounded-lg text-base px-5 py-2 border-2 border-solid w-[100px]"
                              color="gray_900_19"
                              size="md"
                              placeholder="********"
                              value={"********"}
                            />
                              
                          </div>
                          <div className="flex flex-row items-center justify-evenly md:w-full">
                          <Text
                            className="text-gray-600_02 text-sm mr-2"
                            size="txtPoppinsRegular14Gray60002"
                          >
                            Confirm Password:
                          </Text>
                          <input
                            className="cursor-pointer font-museosansrounded font-semibold leading-[normal]
                            w-[100px] rounded-lg text-base px-5 py-2 border-2 border-solid"
                            color="gray_900_19"
                            size="md"
                            placeholder="********"
                            value={"********"}
                          />
                            
                        </div>
                        </div>
                        
                      </div>
                      <a
                        href="javascript:"
                        className="mt-[11px] text-cyan-400 text-xs underline"
                      >
                        <Text size="txtPoppinsRegular12Cyan400">
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[15px] p-[25px] sm:px-5 rounded-[15px] w-full">
                    <Text
                      className="ml-0.5 sm:ml-[0] text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      Two Factor Authentication
                    </Text>
                    <Button
                      className="cursor-pointer font-museosansrounded font-semibold leading-[normal] mb-2.5 min-w-[97px] mr-[3px] rounded-[10px] shadow-bs24 text-[15px] text-center"
                      size="md"
                    >
                      Enable
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
