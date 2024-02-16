import React, { useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import DesktopNineteenPage from "pages/DesktopNineteen";
import DesktopThreePage from "pages/DesktopThree";

const DesktopSeventeenPage = () => {
  const [toggleNotification, setNotificationToggle] = useState(false)
  const [toggleCalender, setCalenderToggle] = useState(false)
  const toggleHandler = () => {
    setNotificationToggle(!toggleNotification)
    setCalenderToggle(false)
  }
  const toggleCalenderHandler = () => {
    setCalenderToggle(!toggleCalender)
    setNotificationToggle(false)
  }
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[29px] w-[29px]"
          src="images/img_profile.svg"
          alt="profile"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_rewind.svg"
          alt="rewind"
        />
      ),
      label: "Search",
    },
    {
      icon: (
        <Img className="h-[26px] w-[26px]" src="images/img_bag.svg" alt="bag" />
      ),
      label: "Sessions",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_search.svg"
          alt="search_One"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-proximasoft">
        <div className={`bg-[#f8f5f9] flex flex-col items-end justify-center p-7 sm:px-5 w-full ${toggleNotification && "opacity-[.2]"} ${toggleCalender && "opacity-[.2]"}`}>
          <div className="flex flex-col items-start justify-start mb-[157px] mt-[35px] md:px-5 w-[77%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, Antonio
              </Text>
              
              <div className="flex flex-row items-center gap-5">
                <Button
                  className={`bg-[#fff] border border-purple-700 border-solid flex h-[51px] items-center justify-center
                   w-[51px] ${toggleCalender && "bg-[#743c95]"} `}
                  shape="round"
                  color="gray_50"
                  size="md"
                  onClick={toggleCalenderHandler}
                >
                  <i class={`fa-regular fa-calendar text-[22px] ${toggleCalender && "text-[#fff]"}`}></i>
                </Button>
                <Button
                  className={`flex items-center justify-center border border-purple-700 border-solid h-[51px] p-[9px] rounded-[25px]
                  w-[51px] ${toggleNotification && "bg-[#743c95]"}`}
                  color="white_A700"
                  size="xs"
                  onClick={toggleHandler}
                >
                  <i class={`fa-regular fa-bell text-[22px] ${toggleNotification && "text-[#fff]"}`}></i>
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-5 w-[19%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Button
                  name="inputfield"
                  placeholder="Update Profile"
                  className="leading-[normal] text-base flex rounded-2xl"
                  wrapClassName="flex rounded-[27px] w-full"
                  color="purple_700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="mr-3">
                      <Img
                        className="my-auto"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  Update Profile
                </Button>
              </div>
            </div>
            <Text
              className="mt-[23px] sm:text-[25px] md:text-[30px] text-[35px] text-gray-900 sm:mb-3"
              size="txtProximaSoftSemiBold40"
            >
              Requests
            </Text>
            <div className="flex flex-row w-full gap-5 sm:flex-col-reverse">
              <div className="flex flex-col gap-3 w-full">
                {/* start */}
                <div className="flex md:flex-col flex-row font-poppins md:gap-[58px] items-center justify-between mt-2.5 w-full">
                  <div className="bg-white-A700 border border-gray-900_1e border-solid flex md:flex-1 flex-col items-center
                  justify-end p-[19px] rounded-[14px] w-full md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-start mt-2.5 w-full relative">
                      <Img
                        className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                        src="images/img_ellipse43.png"
                        alt="ellipseFortyThree"
                      />
                      <div className="flex flex-col items-center w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-1 text-[18.84px] text-black-900 sm:text-[15px]"
                            size="txtPoppinsSemiBold1884"
                          >
                            Product Designer Career Discussion
                          </Text>
                        </div>
                        <div className="w-full">
                            <Text
                              className="text-[18.84px] text-blue_gray-700 sm:text-[15px]"
                              size="txtPoppinsMedium1884"
                            >
                              Request By Dakarai
                            </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row items-center w-full">
                          <div className="flex flex-row mb-[15px] gap-3 w-full">
                            <div className="flex flex-row items-center gap-2 mt-[-0.32px]">
                                <Img
                                  className="h-[19px] w-[19px] sm:h-[14px] sm:w-[14px]"
                                  src="images/img_clock.svg"
                                  alt="clock"
                                />
                                <Text
                                  className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                  size="txtPoppinsRegular1468"
                                >
                                  30 minutes
                                </Text>
                              </div>
                              <div className="flex flex-row items-center gap-2">
                                <Img
                                  className="h-[17px] rounded-[3px] w-[17px] sm:h-[14px] sm:w-[14px]"
                                  src="images/img_outlinetime.svg"
                                  alt="outlinetime"
                                />
                                <Text
                                  className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                  size="txtPoppinsRegular1468"
                                >
                                  Wednesday,3 October
                                </Text>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto flex flex-col justify-between items-end h-full absolute right-0 bottom-0 sm:bottom-[-8px]">
                          <Text
                              className="text-[15.7px] text-blue_gray-700"
                              size="txtPoppinsMedium157"
                            >
                            3m
                          </Text>
                          <Text
                            className="text-[15.7px] text-purple-700 underline w-max"
                            size="txtPoppinsMedium157Purple700"
                          >
                            View Details
                          </Text>
                        </div>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="flex md:flex-col flex-row font-poppins md:gap-[58px] items-center justify-between mt-2.5 w-full">
                  <div className="bg-white-A700 border border-gray-900_1e border-solid flex md:flex-1 flex-col items-center
                  justify-end p-[19px] rounded-[14px] w-full md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-start mt-2.5 w-full relative">
                      <Img
                        className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                        src="images/img_ellipse43.png"
                        alt="ellipseFortyThree"
                      />
                      <div className="flex flex-col items-center w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-1 text-[18.84px] text-black-900 sm:text-[15px]"
                            size="txtPoppinsSemiBold1884"
                          >
                            Product Designer Career Discussion
                          </Text>
                        </div>
                        <div className="w-full">
                            <Text
                              className="text-[18.84px] text-blue_gray-700 sm:text-[15px]"
                              size="txtPoppinsMedium1884"
                            >
                              Request By Dakarai
                            </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row items-center w-full">
                          <div className="flex flex-row mb-[15px] gap-3 w-full">
                            <div className="flex flex-row items-center gap-2 mt-[-0.32px]">
                                <Img
                                  className="h-[19px] w-[19px] sm:h-[14px] sm:w-[14px]"
                                  src="images/img_clock.svg"
                                  alt="clock"
                                />
                                <Text
                                  className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                  size="txtPoppinsRegular1468"
                                >
                                  30 minutes
                                </Text>
                              </div>
                              <div className="flex flex-row items-center gap-2">
                                <Img
                                  className="h-[17px] rounded-[3px] w-[17px] sm:h-[14px] sm:w-[14px]"
                                  src="images/img_outlinetime.svg"
                                  alt="outlinetime"
                                />
                                <Text
                                  className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                  size="txtPoppinsRegular1468"
                                >
                                  Wednesday,3 October
                                </Text>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-auto flex flex-col justify-between items-end h-full absolute right-0 bottom-0 sm:bottom-[-8px]">
                          <Text
                              className="text-[15.7px] text-blue_gray-700"
                              size="txtPoppinsMedium157"
                            >
                            3m
                          </Text>
                          <Text
                            className=" text-[15.7px] text-purple-700 underline w-max"
                            size="txtPoppinsMedium157Purple700"
                          >
                            View Details
                          </Text>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-auto border border-solid border-[#545454] sm:hidden"></div>
              <div className="flex flex-col gap-3 w-full">
                <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start
                  rounded-md w-full mt-4">
                  <div className="flex flex-row gap-3 items-center justify-start w-[58%] md:w-full">
                    <Img
                      className="h-[122px]"
                      src="images/img_line3.svg"
                      alt="lineThree"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[19.41px] text-purple-700"
                        size="txtPoppinsMedium1941"
                      >
                        Session for today
                      </Text>
                      <Text
                        className="text-[16.64px] text-black-900"
                        size="txtPoppinsRegular1664"
                      >
                        Session with Michael Scott
                      </Text>
                      <Text
                        className="text-[16.64px] text-black-900"
                        size="txtPoppinsRegular1664"
                      >
                        10:00 - 10:30am
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start mb-[3px] 
                  md:mt-0 mt-[7px] rounded-md w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-[62%] md:w-full">
                    <Img
                      className="h-[122px]"
                      src="images/img_line3.svg"
                      alt="lineThree_One"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[19.41px] text-purple-700"
                        size="txtPoppinsMedium1941"
                      >
                        Session for tomorrow
                      </Text>
                      <Text
                        className="mt-0.5 text-[16.64px] text-black-900"
                        size="txtPoppinsRegular1664"
                      >
                        Session with Michael Scott
                      </Text>
                      <Text
                        className="text-[16.64px] text-black-900"
                        size="txtPoppinsRegular1664"
                      >
                        10:00 - 10:30am
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Sidebar1 className="!fixed !w-[316px] bg-white-A700 flex font-poppins md:hidden inset-y-[0]
         justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
        {/* <Line className="absolute bg-blue_gray-700 bottom-[0] h-[768px] right-[33%] w-px" /> */}
        {toggleNotification && <DesktopNineteenPage handler={toggleHandler}/>}
        {toggleCalender && <DesktopThreePage toggle={toggleCalenderHandler}/>}
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
