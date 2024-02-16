import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopTwentyFivePage = () => {
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
      <div className="bg-white-A700 font-poppins h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-purple-700_63 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[31px] sm:px-5 w-full">
          <div className="flex flex-col justify-start mb-[65px] mr-[25px] md:px-5 w-3/4 md:w-full">
            <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-start w-[52%] md:w-full">
              <div className="h-[167px] relative w-[167px]">
                <Img
                  className="h-[167px] m-auto rounded-[50%] w-[167px]"
                  src="images/img_ellipse25.png"
                  alt="ellipseTwentyFive"
                />
                <Img
                  className="absolute bottom-[0] h-10 right-[9%] w-10"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtProximaSoftMedium48"
                >
                  Adiel Omari
                </Text>
                <Text
                  className="text-[19px] text-black-900"
                  size="txtPoppinsRegular19"
                >
                  Product Designer . Design Mentor
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-proximasoft gap-[18px] items-start justify-start mt-[19px] w-[23%] md:w-full">
              <div className="flex flex-row gap-3.5 items-end justify-start w-[96%] md:w-full">
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="mt-2 sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-gray-700_01"
                  size="txtProximaSoftRegular2377"
                >
                  10:00 - 10:30 am
                </Text>
              </div>
              <div className="flex flex-row gap-[9px] items-end justify-start w-full">
                <Img
                  className="h-[30px] rounded-md w-[30px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="capitalize mb-0.5 mt-2 text-[19.2px] text-blue_gray-700"
                  size="txtProximaSoftRegular192"
                >
                  Wednesday,3 October
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[13px] mt-6 sm:text-[21.36px] md:text-[23.36px] text-[25.36px] text-black-900_01"
              size="txtPoppinsMedium2536"
            >
              Answers
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-start ml-3 md:ml-[0] mt-2 w-[44%] md:w-full">
              <div className="border-[6px] border-purple-700 border-solid h-[19px] sm:mt-0 mt-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="sm:text-[18.19px] md:text-[20.19px] text-[22.19px] text-black-900_01"
                size="txtPoppinsRegular2219"
              >
                What do you expect from the session?
              </Text>
            </div>
            <Button
              className="!text-blue_gray-700 cursor-pointer leading-[normal] min-w-[247px] md:ml-[0] ml-[38px] mt-[5px] rounded-[14px] text-[19.02px] text-center"
              size="md"
              variant="outline"
            >
              Interview questions
            </Button>
            <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-start ml-3 md:ml-[0] mt-[35px] w-[37%] md:w-full">
              <div className="border-[6px] border-purple-700 border-solid h-[19px] sm:mt-0 mt-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="sm:text-[18.19px] md:text-[20.19px] text-[22.19px] text-black-900_01"
                size="txtPoppinsRegular2219"
              >
                Ask James anything related to?
              </Text>
            </div>
            <Button
              className="!text-blue_gray-700 cursor-pointer leading-[normal] min-w-[158px] md:ml-[0] ml-[38px] mt-[5px] rounded-[14px] text-[19.02px] text-center"
              size="md"
              variant="outline"
            >
              UX Design
            </Button>
            <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-start justify-start ml-3 md:ml-[0] mt-10 w-[52%] md:w-full">
              <div className="border-[6px] border-purple-700 border-solid h-[19px] sm:mt-0 mt-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="sm:text-[18.19px] md:text-[20.19px] text-[22.19px] text-black-900_01"
                size="txtPoppinsRegular2219"
              >
                What do you expect to achieve from session?
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[39px] mt-[5px] text-[19.02px] text-gray-700_01 w-[97%] sm:w-full"
              size="txtPoppinsRegular1902"
            >
              <>
                Joining designer career discussions has been a game-changer for
                me. I&#39;ve gained valuable insights, connected with
                experienced designers, and built a supportive network. Getting
                feedback on my work has fueled my growth, and the sessions have
                been an inspiring investment in my design journey.
              </>
            </Text>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between md:ml-[0] ml-[99px] mt-[67px] w-[81%] md:w-full">
              <Button
                className="!text-black-900 cursor-pointer h-[90px] leading-[normal] rounded-[45px] shadow-bs16 sm:text-[26.14px] md:text-[28.14px] text-[30.14px] text-center w-[341px]"
                size="3xl"
                variant="outline"
              >
                Decline
              </Button>
              <Button
                className="border border-purple-700 border-solid cursor-pointer h-[90px] leading-[normal] rounded-[45px] shadow-bs5 sm:text-[26.13px] md:text-[28.13px] text-[30.13px] text-center w-[340px]"
                size="3xl"
              >
                Approve
              </Button>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
      </div>
    </>
  );
};

export default DesktopTwentyFivePage;
