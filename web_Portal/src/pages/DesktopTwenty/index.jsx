import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopTwentyPage = () => {
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
      <div className="bg-gray-400 font-proximasoft h-[1024px] mx-auto relative w-full">
        <div className="h-[1044px] md:h-[1624px] sm:h-[2417px] m-auto md:px-5 w-full">
          <div className="absolute bg-purple-700_63 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[49px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start mb-[88px] mt-3.5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                  size="txtProximaSoftSemiBold48"
                >
                  Hello, Antonio
                </Text>
                <Button
                  className="bg-gray-50 border border-purple-700 border-solid flex h-[51px] items-center justify-center md:ml-[0] ml-[601px] w-[51px]"
                  shape="round"
                  color="gray_50"
                  size="md"
                >
                  <Img
                    className="h-[31px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                </Button>
                <div className="bg-purple-700 border border-purple-700 border-solid flex flex-col h-[51px] items-center justify-end ml-4 md:ml-[0] p-[9px] rounded-[25px] w-[51px]">
                  <Button
                    className="flex h-[31px] items-center justify-center rounded-md w-[31px]"
                    size="xs"
                  >
                    <Img src="images/img_user_white_a700.svg" alt="user" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start mt-5 w-[19%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="inputfield"
                    placeholder="Update Profile"
                    className="leading-[normal] md:h-auto p-0 placeholder:text-purple-700 sm:h-auto text-base text-left w-full"
                    wrapClassName="flex rounded-[27px] w-full"
                    prefix={
                      <div className="mt-px mb-[5px] mr-[9px] sm:w-full sm:mx-0 w-[8%] bg-purple-700">
                        <Img
                          className="my-auto"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                      </div>
                    }
                    color="purple_700"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-poppins gap-7 grid md:grid-cols-1 grid-cols-2 mt-[31px] w-[95%]"
                orientation="horizontal"
              >
                <div className="bg-lime-700_75 flex flex-col items-start justify-start px-[3px] rounded-md w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-[52%] md:w-full">
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
                <div className="bg-lime-700_75 flex flex-col items-start justify-start px-[5px] rounded-md w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-[52%] md:w-full">
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
              </List>
              <Text
                className="mt-[33px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtProximaSoftSemiBold40"
              >
                Requests
              </Text>
              <List
                className="flex flex-col font-poppins gap-3.5 md:ml-[0] ml-[3px] mt-2.5 w-[61%]"
                orientation="vertical"
              >
                <div className="bg-gray-100_03 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-[13px] rounded-[15px] w-full">
                  <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                    <Img
                      className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                      src="images/img_ellipse43_94x94.png"
                      alt="ellipseFortyThree"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="sm:mt-0 mt-1 sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                          size="txtPoppinsSemiBold2024"
                        >
                          Product Designer Career Discussion
                        </Text>
                        <Text
                          className="text-[16.86px] text-blue_gray-700"
                          size="txtPoppinsMedium1686"
                        >
                          3m
                        </Text>
                      </div>
                      <Text
                        className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700"
                        size="txtPoppinsMedium2024"
                      >
                        Request By Dakarai
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[24%] sm:w-full">
                          <Img
                            className="h-[21px] w-[21px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            30 minutes
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[5px] items-start justify-center sm:ml-[0] ml-[13px] sm:mt-0 mt-0.5 w-[42%] sm:w-full">
                          <Img
                            className="h-[18px] rounded-[3px] w-[18px]"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            Wednesday,3 October
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[52px] sm:mt-0 mt-4 text-[16.86px] text-purple-700 underline"
                          size="txtPoppinsMedium1686Purple700"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100_03 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-[13px] rounded-[15px] w-full">
                  <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                    <Img
                      className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                      src="images/img_ellipse43_94x94.png"
                      alt="ellipseFortyThree"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col sm:mt-0 mt-1 relative w-[77%] sm:w-full">
                          <Text
                            className="mx-auto sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                            size="txtPoppinsSemiBold2024"
                          >
                            Product Designer Career Discussion
                          </Text>
                          <Text
                            className="mt-[-0.01px] sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700 z-[1]"
                            size="txtPoppinsMedium2024"
                          >
                            Request By Dakarai
                          </Text>
                        </div>
                        <Text
                          className="text-[16.86px] text-blue_gray-700"
                          size="txtPoppinsMedium1686"
                        >
                          3m
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[24%] sm:w-full">
                          <Img
                            className="h-[21px] w-[21px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            30 minutes
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[5px] items-start justify-center sm:ml-[0] ml-[13px] sm:mt-0 mt-0.5 w-[42%] sm:w-full">
                          <Img
                            className="h-[18px] rounded-[3px] w-[18px]"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            Wednesday,3 October
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[52px] sm:mt-0 mt-4 text-[16.86px] text-purple-700 underline"
                          size="txtPoppinsMedium1686Purple700"
                        >
                          View Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-[15px] w-[61%] md:w-full">
                <div className="bg-gray-100_03 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-[13px] rounded-[15px] w-full">
                  <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-2.5 w-[99%] md:w-full">
                    <div className="h-[94px] relative w-[94px]">
                      <Img
                        className="h-[94px] m-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse43_94x94.png"
                        alt="ellipseFortyThree"
                      />
                      <Img
                        className="absolute h-[94px] inset-[0] justify-center m-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse43_94x94.png"
                        alt="ellipseFortyThree_One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start sm:mt-0 mt-1">
                          <Text
                            className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                            size="txtPoppinsSemiBold2024"
                          >
                            Product Designer Career Discussion
                          </Text>
                          <Text
                            className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                            size="txtPoppinsSemiBold2024"
                          >
                            Product Designer Career Discussion
                          </Text>
                          <Text
                            className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700"
                            size="txtPoppinsMedium2024"
                          >
                            Request By Dakarai
                          </Text>
                          <Text
                            className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700"
                            size="txtPoppinsMedium2024"
                          >
                            Request By Dakarai
                          </Text>
                        </div>
                        <div className="h-[26px] relative w-[6%] sm:w-full">
                          <Text
                            className="m-auto text-[16.86px] text-blue_gray-700"
                            size="txtPoppinsMedium1686"
                          >
                            3m
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[16.86px] text-blue_gray-700 w-max"
                            size="txtPoppinsMedium1686"
                          >
                            3m
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[24%] sm:w-full">
                          <Img
                            className="h-[21px] w-[21px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            30 minutes
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[5px] items-start justify-center sm:ml-[0] ml-[13px] sm:mt-0 mt-0.5 w-[42%] sm:w-full">
                          <Img
                            className="h-[18px] rounded-[3px] w-[18px]"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-[15.76px] text-blue_gray-700"
                            size="txtPoppinsRegular1576"
                          >
                            Wednesday,3 October
                          </Text>
                        </div>
                        <div className="h-[26px] md:h-[42px] sm:ml-[0] ml-[52px] sm:mt-0 mt-4 relative w-[22%] sm:w-full">
                          <Text
                            className="m-auto text-[16.86px] text-purple-700 underline"
                            size="txtPoppinsMedium1686Purple700"
                          >
                            View Details
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[16.86px] text-purple-700 underline w-max"
                            size="txtPoppinsMedium1686Purple700"
                          >
                            View Details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar1 className="!sticky !w-[316px] bg-white-A700 flex font-poppins h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto shadow-bs1 top-[0]" />
          <div className="absolute bottom-[0] flex flex-col font-poppins items-center justify-start left-1/4 w-[44%]">
            <div className="bg-gray-100_03 border border-gray-900_1e border-solid flex flex-col items-center justify-end p-3.5 rounded-[15px] w-full">
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-[9px] w-[99%] md:w-full">
                <div className="h-[94px] relative w-[94px]">
                  <Img
                    className="h-[94px] m-auto rounded-[50%] w-[94px]"
                    src="images/img_ellipse43_94x94.png"
                    alt="ellipseFortyThree_Two"
                  />
                  <Img
                    className="absolute h-[94px] inset-[0] justify-center m-auto rounded-[50%] w-[94px]"
                    src="images/img_ellipse43_94x94.png"
                    alt="ellipseFortyThree_Three"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start sm:mt-0 mt-1">
                      <Text
                        className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                        size="txtPoppinsSemiBold2024"
                      >
                        Product Designer Career Discussion
                      </Text>
                      <Text
                        className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-black-900"
                        size="txtPoppinsSemiBold2024"
                      >
                        Product Designer Career Discussion
                      </Text>
                      <Text
                        className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700"
                        size="txtPoppinsMedium2024"
                      >
                        Request By Dakarai
                      </Text>
                      <Text
                        className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-blue_gray-700"
                        size="txtPoppinsMedium2024"
                      >
                        Request By Dakarai
                      </Text>
                    </div>
                    <div className="h-[26px] relative w-[6%] sm:w-full">
                      <Text
                        className="m-auto text-[16.86px] text-blue_gray-700"
                        size="txtPoppinsMedium1686"
                      >
                        3m
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[16.86px] text-blue_gray-700 w-max"
                        size="txtPoppinsMedium1686"
                      >
                        3m
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[24%] sm:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_clock.svg"
                        alt="clock_One"
                      />
                      <Text
                        className="text-[15.76px] text-blue_gray-700"
                        size="txtPoppinsRegular1576"
                      >
                        30 minutes
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-row gap-[5px] items-start justify-center sm:ml-[0] ml-[13px] sm:mt-0 mt-0.5 w-[42%] sm:w-full">
                      <Img
                        className="h-[18px] rounded-[3px] w-[18px]"
                        src="images/img_calendar.svg"
                        alt="calendar_One"
                      />
                      <Text
                        className="text-[15.76px] text-blue_gray-700"
                        size="txtPoppinsRegular1576"
                      >
                        Wednesday,3 October
                      </Text>
                    </div>
                    <div className="h-[26px] md:h-[41px] sm:ml-[0] ml-[52px] sm:mt-0 mt-[15px] relative w-[22%] sm:w-full">
                      <Text
                        className="m-auto text-[16.86px] text-purple-700 underline"
                        size="txtPoppinsMedium1686Purple700"
                      >
                        View Details
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[16.86px] text-purple-700 underline w-max"
                        size="txtPoppinsMedium1686Purple700"
                      >
                        View Details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 bottom-[2%] flex flex-col items-center justify-start p-[18px] right-[0] rounded-[21px] shadow-bs2 w-[30%]">
            <div className="flex flex-col items-center justify-start my-[7px] w-full">
              <div className="flex flex-row font-proximasoft items-start justify-between w-[93%] md:w-full">
                <Text
                  className="mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtProximaSoftSemiBold30"
                >
                  Calendar
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
              <Button
                className="cursor-pointer font-poppins leading-[normal] min-w-[140px] mt-1.5 rounded-[17px] text-center text-xs"
                size="md"
                variant="outline"
              >
                + Add to calender
              </Button>
              <div className="flex flex-col font-proximasoft items-start justify-start mt-6 w-full">
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[27px] shadow-bs3 w-full">
                  <div className="flex flex-col items-center justify-start mb-4 mt-3 w-full">
                    <div className="bg-gray-200 flex flex-row items-start justify-center p-[13px] rounded-[12px] w-full">
                      <Img
                        className="h-3 ml-[84px] mt-1"
                        src="images/img_group13.svg"
                        alt="groupThirteen"
                      />
                      <Img
                        className="h-3 mt-1"
                        src="images/img_group13.svg"
                        alt="groupFourteen"
                      />
                      <Text
                        className="ml-9 mt-0.5 text-[15px] text-black-900_01 text-center"
                        size="txtProximaSoftRegular15"
                      >
                        October 2023
                      </Text>
                      <Img
                        className="h-3 ml-9 mt-1"
                        src="images/img_group16.svg"
                        alt="groupSixteen"
                      />
                      <Img
                        className="h-3 mr-[84px] mt-1"
                        src="images/img_group16.svg"
                        alt="groupFifteen"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                        <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-3.5 w-full">
                          <Text
                            className="mb-[3px] text-black-900_01 text-center text-xs"
                            size="txtProximaSoftRegular12"
                          >
                            Mo
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-1 w-full">
                          <Text
                            className="mb-[21px] md:ml-[0] ml-[17px] text-black-900_01 text-center text-xs"
                            size="txtProximaSoftRegular12"
                          >
                            1
                          </Text>
                        </div>
                      </div>
                      <div className="flex relative w-[43%] sm:w-full">
                        <div className="flex flex-col items-center justify-start my-auto w-[34%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                              shape="square"
                              color="blue_gray_100"
                            >
                              Tue
                            </Button>
                            <div className="bg-blue_gray-100 h-[43px] w-full"></div>
                          </div>
                        </div>
                        <Text
                          className="bg-blue_gray-100 h-[43px] justify-center ml-[-0.28px] mr-auto mt-auto pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-black-900_01 text-center text-xs w-[54px] z-[1]"
                          size="txtProximaSoftRegular12"
                        >
                          3
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] ml-[-0.71px] mr-auto text-center text-xs z-[1]"
                          shape="square"
                          color="blue_gray_100"
                        >
                          Wed
                        </Button>
                        <Text
                          className="bg-blue_gray-100 h-[43px] justify-center ml-[undefinedpx] mt-auto pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-black-900_01 text-center text-xs w-[54px] z-[1]"
                          size="txtProximaSoftRegular12"
                        >
                          4
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] ml-[undefinedpx] text-center text-xs z-[1]"
                          shape="square"
                          color="blue_gray_100"
                        >
                          Thu
                        </Button>
                        <Text
                          className="bg-lime-700 flex h-7 items-center justify-center mb-[18px] ml-[undefinedpx] mt-auto rounded-[50%] text-black-900_01 text-center text-xs w-7 z-[1]"
                          size="txtProximaSoftRegular12"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[43%] sm:w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                            shape="square"
                            color="blue_gray_100"
                          >
                            Fri
                          </Button>
                          <div className="flex relative w-[67%]">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[54px] my-auto text-center text-xs"
                              shape="square"
                              color="blue_gray_100"
                            >
                              Sat
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[54px] ml-[-0.71px] my-auto text-center text-xs z-[1]"
                              shape="square"
                              color="blue_gray_100"
                            >
                              Sun
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-black-900_01 text-center text-xs w-[54px]"
                            size="txtProximaSoftRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-black-900_01 text-center text-xs w-[54px]"
                            size="txtProximaSoftRegular12"
                          >
                            6
                          </Text>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                            shape="square"
                            color="blue_gray_100"
                          >
                            7
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-1">
                        <Text
                          className="mb-[21px] ml-4 md:ml-[0] text-black-900_01 text-center text-xs"
                          size="txtProximaSoftRegular12"
                        >
                          8
                        </Text>
                      </div>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        9
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        10
                      </Text>
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[29%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-blue_gray-100 flex flex-col items-start justify-start sm:ml-[0] p-1 w-full">
                          <Text
                            className="ml-4 md:ml-[0] text-black-900_01 text-center text-xs"
                            size="txtProximaSoftRegular12"
                          >
                            11
                          </Text>
                          <div className="bg-lime-700 h-0.5 mb-[18px] ml-5 md:ml-[0] rounded-[50%] w-0.5"></div>
                        </div>
                        <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                          <Text
                            className="text-black-900_01 text-center text-xs"
                            size="txtProximaSoftRegular12"
                          >
                            12
                          </Text>
                          <div className="bg-lime-700 h-0.5 mb-[19px] rounded-[50%] w-0.5"></div>
                        </div>
                      </List>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        13
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        14
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          15
                        </Button>
                        <Text
                          className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                          size="txtProximaSoftRegular12"
                        >
                          16
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          17
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          18
                        </Button>
                        <Text
                          className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                          size="txtProximaSoftRegular12"
                        >
                          19
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          20
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          21
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          22
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          23
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          24
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          25
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          26
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          27
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                          shape="square"
                          color="blue_gray_100"
                        >
                          28
                        </Button>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[54px] text-center text-xs"
                        shape="square"
                        color="blue_gray_100"
                      >
                        29
                      </Button>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[17px] pr-5 pt-1 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        30
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[19px] sm:pr-5 pr-[23px] pt-1 text-black-900_01 text-center text-xs w-[54px]"
                        size="txtProximaSoftRegular12"
                      >
                        31
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[22px] pr-[27px] pt-1 sm:px-5 text-center text-gray-500 text-xs w-[54px]"
                        size="txtProximaSoftRegular12Gray500"
                      >
                        1
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-center text-gray-500 text-xs w-[54px]"
                        size="txtProximaSoftRegular12Gray500"
                      >
                        2
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-center text-gray-500 text-xs w-[54px]"
                        size="txtProximaSoftRegular12Gray500"
                      >
                        3
                      </Text>
                      <Text
                        className="bg-blue_gray-100 h-[43px] justify-center pb-[26px] pl-[21px] pr-[25px] pt-1 sm:px-5 text-center text-gray-500 text-xs w-[54px]"
                        size="txtProximaSoftRegular12Gray500"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-[9px] items-center justify-start mt-[35px] w-[53%] md:w-full">
                  <Text
                    className="bg-purple-700 justify-center pb-0.5 pt-[5px] sm:px-5 px-[23px] rounded-[13px] text-white-A700 text-xs w-auto"
                    size="txtPoppinsMedium12"
                  >
                    Today
                  </Text>
                  <Text
                    className="border border-lime-700 border-solid pb-0.5 pt-[5px] sm:px-5 px-[23px] rounded-[13px] text-blue_gray-400 text-xs w-auto"
                    size="txtPoppinsMedium12Bluegray400"
                  >
                    Upcoming
                  </Text>
                </div>
                <List
                  className="flex flex-col font-poppins gap-[29px] md:ml-[0] ml-[11px] mt-12 w-[64%]"
                  orientation="vertical"
                >
                  <div className="md:h-[72px] h-[74px] relative w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Line className="bg-purple-700 h-[70px] mt-0.5 w-0.5" />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsMedium14"
                          >
                            Becoming a better UX researcher
                          </Text>
                          <Text
                            className="text-[10px] text-blue_gray-700"
                            size="txtPoppinsMedium10"
                          >
                            Requested By Darakai{" "}
                          </Text>
                          <Text
                            className="mt-1 text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            10:00 - 10:30am
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] left-[5%] text-[9.84px] text-purple-700 underline"
                      size="txtPoppinsMedium984"
                    >
                      Join Now
                    </Text>
                  </div>
                  <div className="md:h-[71px] h-[74px] relative w-[85%]">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Line className="bg-purple-700 h-[70px] w-0.5" />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsMedium14"
                          >
                            Becoming a better Designer{" "}
                          </Text>
                          <Text
                            className="text-[10px] text-blue_gray-700"
                            size="txtPoppinsMedium10"
                          >
                            Requested By Darakai{" "}
                          </Text>
                          <Text
                            className="mt-1 text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            12:00 - 12:30am
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] left-[6%] text-[9.84px] text-purple-700 underline"
                      size="txtPoppinsMedium984"
                    >
                      View details
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <Line className="absolute bg-lime-700 bottom-[22%] h-px right-[0] w-[30%]" />
      </div>
    </>
  );
};

export default DesktopTwentyPage;
