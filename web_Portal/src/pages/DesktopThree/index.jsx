import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const DesktopThreePage = ({toggle}) => {
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
        <div className="fixed bottom-0 font-proximasoft sm:h-[2147px] md:px-5 right-[0] w-[29%] sm:w-full ">
          <div className="m-auto w-full">
            <div className="bg-white-A700 flex justify-end rounded-[21px] border border-solid border-[#000]"
            >
              <Img
                className="h-4 mb-[712px] w-4 mx-[15px] mt-[19px] cursor-pointer "
                src="images/img_close.svg"
                alt="close" 
                onClick={toggle}
              />
            </div>
            <div className="absolute flex flex-col gap-6 inset-x-[0] justify-start mx-auto top-[3%] w-[93%]">
              <div className="flex flex-col gap-[13px] items-start justify-start ml-2.5 md:ml-[0] w-[37%] md:w-full">
                <div>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtProximaSoftSemiBold30"
                >
                  Calendar
                </Text>
                </div>
                
                <Button
                  className="cursor-pointer font-poppins leading-[normal] min-w-[140px] rounded-[17px] text-center text-xs"
                  size="md"
                  variant="outline"
                >
                  + Add to calender
                </Button>
              </div>
              <Calendar/>
              {/* <div className="flex flex-col gap-[35px] items-start justify-start w-full">
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
                </div> </div> */}
                <div className="flex flex-row font-poppins gap-[9px] items-center justify-start w-[53%] md:w-full">
                  <Text
                    className="bg-purple-700 justify-center pb-0.5 pt-[5px] sm:px-5 px-[23px] rounded-[13px] text-white-A700 text-xs w-auto !py-2"
                    size="txtPoppinsMedium12"
                  >
                    Today
                  </Text>
                  <Text
                    className="border border-lime-700 border-solid pb-0.5 pt-[5px] sm:px-5 px-[23px] rounded-[13px] text-blue_gray-400 text-xs w-auto !py-2"
                    size="txtPoppinsMedium12Bluegray400"
                  >
                    Upcoming
                  </Text>
                </div>
             
            <div className="bg-lime-700 h-[2px] w-full"></div>

              
            <List
              className="flex flex-col font-poppins gap-[31px] w-[59%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-row gap-2 items-start justify-between w-full">
                  <Line className="bg-purple-700 h-[70px] mt-0.5 w-0.5" />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <div className="h-8 md:h-[19px] relative w-full">
                      <Text
                        className="absolute bottom-[0] left-[0] text-[10px] text-blue_gray-700"
                        size="txtPoppinsMedium10"
                      >
                        Session with Michael Scott
                      </Text>
                      <Text
                        className=" text-black-900_01 text-sm w-max"
                        size="txtPoppinsMedium14"
                      >
                        Becoming a better UX researcher
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      10:00 - 10:30am
                    </Text>
                    <Text
                      className="text-[9.84px] text-purple-700 underline"
                      size="txtPoppinsMedium984"
                    >
                      Join Now
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-between w-full">
                  <Line className="bg-purple-700 h-[70px] w-0.5" />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <div className="h-8 md:h-[19px] relative w-full">
                      <Text
                        className="absolute bottom-[0] left-[0] text-[10px] text-blue_gray-700"
                        size="txtPoppinsMedium10"
                      >
                        Session with Michael Scott
                      </Text>
                      <Text
                        className="text-black-900_01 text-sm w-max"
                        size="txtPoppinsMedium14"
                      >
                        Becoming a better Designer{" "}
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      12:00 - 12:30am
                    </Text>
                    <Text
                      className="text-[9.84px] text-purple-700 underline"
                      size="txtPoppinsMedium984"
                    >
                      View details
                    </Text>
                  </div>
                </div>
              </div>
            </List>


            </div>
            {/* <Line className=" bg-lime-700 h-px w-full" /> */}
           
          </div>
        </div>
    </>
  );
};

export default DesktopThreePage;
