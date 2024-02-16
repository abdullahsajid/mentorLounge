import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, Switch, Text } from "components";
import Sidebar5 from "components/Sidebar5";

const SettingsTwoPage = () => {
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
              <div className="flex md:flex-col flex-row font-poppins gap-[18px] items-start justify-between w-full">
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
                      <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] rounded-[10px] shadow-bs23 w-auto">
                        <Text
                          className="sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-gray-900_87 w-auto"
                          size="txtPoppinsSemiBold2038"
                        >
                          Security
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[166px] rounded-[10px] shadow-bs23 sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-center"
                        size="lg"
                      >
                        Notifications
                      </Button>
                    </div>
                    <div className="h-[49px] mb-[433px] rounded-[10px] shadow-bs23 w-full"></div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-proximasoft gap-[18px] items-center justify-start md:mt-0 mt-2 w-[77%] md:w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02"
                      size="txtProximaSoftSemiBold30Gray90002"
                    >
                      Notification{" "}
                    </Text>
                    <Img
                      className="h-[33px]"
                      src="images/img_user_purple_700_33x54.svg"
                      alt="user_One"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col font-poppins gap-[22px] items-center justify-center p-[17px] rounded-[15px] w-full">
                    <List
                      className="flex flex-col gap-7 items-center mt-1.5 w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Commission Notifications{" "}
                              </Text>
                              <Text
                                className="mt-[3px] text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about commission earned
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>
                          
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Mentor Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about updates of Mentor
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>
                          
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Mentee Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about updates of Mentee
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>
                          
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Session Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                              New sessions and updates
                            </Text>
                            </div>
                            <Switch
                            onColor=""
                            offColor=""
                            onHandleColor="#743c95"
                            offHandleColor="#743c95"
                            value={true}
                            className=""
                          />
                          </div>
                            
                        </div>
                      </div>
                    </List>
                    
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

export default SettingsTwoPage;
