import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const DesktopElevenPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_vector.svg"
          alt="vector"
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
        <Img
          className="h-[29px] w-[29px]"
          src="images/img_thumbsup_purple_700.svg"
          alt="thumbsup"
        />
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
      <div className="bg-white-A700 font-poppins w-full h-screen flex justify-center items-center">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full h-full">
          <div className="flex-1 md:px-5 relative w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end p-[35px]
               rounded-[29px] md:w-full border border-solid border-[#000] gap-2">
                <div className="flex flex-col font-proximasoft items-start justify-start
                  h-full ">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                    size="txtProximaSoftSemiBold30"
                  >
                    Review session
                  </Text>
                  <Text
                    className="text-black-900_01 text-xl"
                    size="txtProximaSoftMedium20"
                  >
                    <span className="text-blue_gray-700 font-proximasoft text-left font-normal">
                      with
                    </span>
                    <span className="text-black-900 font-proximasoft text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-black-900_01 font-proximasoft text-left font-normal">
                      Adiel Omari
                    </span>
                  </Text>
                </div>
                <Text
                  className="capitalize text-black-900 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Please Provide your review on Adiel Omari
                </Text>
                <div className="font-poppins h-[49px] relative w-[21%]">
                  <Text
                    className="text-[18.6px] text-black-900"
                    size="txtPoppinsRegular186"
                  >
                    Rate{" "}
                  </Text>
                  <Img
                    className="h-[22px]"
                    src="images/img_group117.svg"
                    alt="group117"
                  />
                </div>
                <Text
                  className="lowercase text-[18.6px] text-black-900"
                  size="txtProximaSoftMedium186"
                >
                  <span className="text-black-900 font-poppins uppercase text-left font-normal">
                    P
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    rovide a review about the Session
                  </span>
                </Text>
                <Text
                  className="text-[13.29px] text-blue_gray-700 uppercase"
                  size="txtPoppinsRegular1329"
                >
                  <span className="text-blue_gray-700 font-poppins text-left font-normal">
                    Y
                  </span>
                  <span className="text-blue_gray-700 font-poppins lowercase text-left font-normal">
                    our answer will be posted on your behalf
                  </span>
                </Text>
                <div className="flex flex-col w-full">
                  <textarea cols="30" rows="8" 
                  className="bg-gray-100_03 border border-gray-900_1e border-solid rounded-lg w-full"></textarea>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-3 mt-3">
                  <Button
                    className="!text-gray-100 cursor-pointer font-poppins h-[54px] leading-[normal]
                      rounded-[27px] shadow-bs5 text-center text-xl w-[366px]"
                    shape="round"
                    size="lg"
                  >
                    Submit
                  </Button>
                  <Button
                    className="text-xl underline bg-[#fff] text-[#743c95]"
                    size="txtPoppinsRegular20Purple700"
                  >
                    Skip
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopElevenPage;
