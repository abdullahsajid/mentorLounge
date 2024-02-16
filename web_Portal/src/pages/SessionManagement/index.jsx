import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar4 from "components/Sidebar4";

const SessionManagementPage = () => {
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
        <div className="text-sm">
          <Text className="text-sm">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Mentor Management</Text>
        </div>
      ),
      href: "/mentormanagement",
      active: window.location.pathname === "/mentormanagement",
    },
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Session Management
          </Text>
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
          <div className="flex flex-1 flex-col font-proximasoft gap-[31px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-10 items-center justify-center p-[13px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-3.5 md:ml-[0] ml-[835px] md:mt-0 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mr-[54px] p-2.5 w-auto">
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
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-between w-[95%] md:w-full">
              <div className="w-full">
                <Input
                  name="group152"
                  placeholder="Search"
                  className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                  wrapClassName="border border-gray-900_1e border-solid flex md:mt-0 mt-0.5 rounded-[21px] w-full md:w-full
                  flex justify-center items-center"
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
              </div>
              <div className="flex items-center">
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[125px] md:ml-[0] ml-[394px] rounded-[20px]"
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
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[198px] md:ml-[0] ml-[11px] rounded-[20px]"
                  leftIcon={
                    <div className="h-[19px] mt-[5px] mb-1 mr-[7px] w-[19px] rounded-[5px]">
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
                    Schedule New
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins gap-4 items-start justify-start w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[62%] md:w-full">
                <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center py-5 px-5 rounded-[27px]
                   shadow-bs5 w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full h-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-full md:w-full">
                        <div className="flex flex-row gap-7 items-start justify-between w-full">
                          <Text
                            className="text-black-900_01 text-lg"
                            size="txtPoppinsMedium18"
                          >
                            Interview Techniques of UIUX Design
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_notification.svg"
                            alt="notification"
                          />
                        </div>
                        <div className="flex flex-row font-proximasoft items-start justify-start w-[62%] md:w-full">
                          <Img
                            className="h-4 rounded-[3px] w-4"
                            src="images/img_outlinetime.svg"
                            alt="outlinetime"
                          />
                          <Text
                            className="capitalize ml-1 text-[15px] text-blue_gray-700"
                            size="txtProximaSoftRegular15Bluegray700"
                          >
                            Wednesday , 3 October
                          </Text>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full">
                          <div className="flex flex-col h-max items-center justify-center">
                            <div className="flex flex-col gap-[34px] justify-start w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start mr-11 w-[85%] md:w-full">
                                <Text
                                  className="border border-lime-700 border-solid h-[21px] px-[9px] rounded-[10px] text-[10px]
                                   text-blue_gray-700 flex items-center"
                                  size="txtPoppinsMedium1118"
                                >
                                  Career Advice
                                </Text>
                                <Text
                                  className="border border-lime-700 border-solid h-[21px] px-2 rounded-[10px] text-[10px]
                                   text-blue_gray-700 flex items-center"
                                  size="txtPoppinsMedium1118"
                                >
                                  Interview Techniques
                                </Text>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-6 pt-3" style={{borderTop:"1px solid #BA35351A"}}>
                            <div className="flex ">
                                <Img
                                  className=" bottom-[0] h-[29px] left-[7%] rounded-[50%] w-[29px]"
                                  src="images/img_ellipse49.png"
                                  alt="ellipseFortyNine"
                                />
                              
                              <Img
                                className=" bottom-[0] h-[29px] left-[12%] rounded-[50%] w-[29px]"
                                src="images/img_ellipse50.png"
                                alt="ellipseFifty"
                              />
                            </div>
                            <div>
                                <Text
                                  className="text-[12.8px] text-purple-700 underline"
                                  size="txtPoppinsMedium128"
                                >
                                  Reviews
                                </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-proximasoft items-center justify-start p-[25px] sm:px-5 
              rounded-[21px] shadow-bs2 w-[38%] h-screen">
                <div className="flex flex-col gap-[41px] items-center justify-start mt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                      size="txtProximaSoftSemiBold30"
                    >
                      Reviews
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                  <List
                    className="flex flex-col font-poppins gap-[18px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                          <Img
                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                            src="images/img_ellipse10_1.png"
                            alt="ellipseTen"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Session with Alexa
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-700"
                              size="txtPoppinsRegular10"
                            >
                              Lorem ipsum dolor sit amet, consectetur{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-[10px] text-blue_gray-700"
                        size="txtPoppinsMedium10"
                      >
                        3m
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-black-900_4c w-[86%]" />
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-2 items-start justify-between w-full">
                          <Img
                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                            src="images/img_ellipse10_2.png"
                            alt="ellipseTen"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Session with Jacob
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-700"
                              size="txtPoppinsRegular10"
                            >
                              Lorem ipsum dolor sit amet, consectetur{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-[10px] text-blue_gray-700"
                        size="txtPoppinsMedium10"
                      >
                        Yesterday
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionManagementPage;
