import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const DesktopThreePage = ({ toggle }) => {
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
      <div className="fixed bottom-0 font-proximasoft md:px-5 right-[0] w-[29%] sm:w-full sm:px-0">
        <div className="m-auto w-full bg-white-A700 rounded-[21px] border border-solid border-[#000] px-4 py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[13px] w-full">
              <div className="flex justify-between items-center w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtProximaSoftSemiBold30"
                >
                  Calendar
                </Text>
                <div className="flex items-center"
                >
                  <Img
                    className="h-4 w-4  cursor-pointer "
                    src="images/img_close.svg"
                    alt="close"
                    onClick={toggle}
                  />
                </div>
              </div>
            </div>
            <Calendar />
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
