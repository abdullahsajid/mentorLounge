import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const DesktopTwelvePage = () => {
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
      <div className="bg-[#f8f5f9] flex flex-col font-poppins items-center justify-end w-full">
        <div className="flex flex-col items-center justify-end mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full gap-[25px]">
            <Sidebar2 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]" />
            <div className="flex flex-1 flex-col font-proximasoft gap-[21px] justify-start w-full p-[30px]">
              <Text
                className="text-4xl sm:text-[38px] md:text-[44px] text-black-900_01 font-bold"
                size="txtProximaSoftMedium48Black90001"
              >
                Refer
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[45px] md:px-10 sm:px-5 rounded-[20px] shadow-bs3 w-full">
                <Text
                  className="sm:text-[32.47px] md:text-[34.47px] text-[36.47px] text-black-900_01"
                  size="txtProximaSoftMedium3847"
                >
                  Refer to your friends to get{" "}
                </Text>
                <Text
                  className="sm:text-[36.09px] md:text-[38.09px] text-[40.09px] text-black-900_01 font-bold"
                  size="txtProximaSoftMedium4809"
                >
                  5% commission
                </Text>
                <Button className="border-gray-300 border-solid border-t-2 border-b-2 border-x-2 flex flex-row font-poppins
                 gap-[26px] items-center justify-start md:ml-[0] ml-[5px] mt-[59px] p-7 sm:px-5
                  rounded-tl-[36px] rounded-tr-[36px] w-[90%] md:w-full bg-[#fff]">
                  <Img
                    className="h-12 ml-0.5"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Invite via email
                  </Text>
                </Button>
                <Button className="border-b-2 border-gray-300 border-solid border-x-2 flex flex-row
                 font-poppins gap-7 items-center justify-start md:ml-[0] ml-[5px] p-7 sm:px-5 w-[90%]
                  md:w-full bg-[#fff]">
                    <svg width="57" height="52" viewBox="0 0 57 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28.5091" cy="30.7205" r="19.8385" stroke="black" stroke-width="2.40466"/>
                      <circle cx="27.458" cy="10.7315" r="8.56662" fill="white" stroke="black" stroke-width="2.40466"/>
                      <circle cx="10.625" cy="38.085" r="8.56662" fill="white" stroke="black" stroke-width="2.40466"/>
                      <circle cx="46.3941" cy="38.085" r="8.56662" fill="white" stroke="black" stroke-width="2.40466"/>
                    </svg>
                    <Text
                      className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                      size="txtPoppinsRegular2886"
                    >
                      Copy link to invite
                    </Text>
                </Button>
                <Button className="border-b-2 border-gray-300 border-solid border-x-2 flex flex-row
                 font-poppins gap-7 items-center justify-start md:ml-[0] ml-[5px] p-7 sm:px-5 w-[90%] md:w-full
                 bg-[#fff]">
                  <Img
                    className="h-12 ml-0.5 w-12"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Share on Facebook
                  </Text>
                </Button>
                <Button className="border-b-2 border-gray-300 border-solid border-x-2 flex flex-row font-poppins gap-7
                 items-center justify-start md:ml-[0] ml-[5px] p-[27px] sm:px-5 rounded-bl-[36px] rounded-br-[36px] w-[90%] md:w-full
                 bg-[#fff]">
                  <Img
                    className="h-12 ml-[3px] w-12"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="sm:text-[24.86px] md:text-[26.86px] text-[28.86px] text-black-900_01"
                    size="txtPoppinsRegular2886"
                  >
                    Share on Whatsapp
                  </Text>
                </Button>
                <Text
                  className="ml-[19px] mt-7 sm:text-[20.05px] md:text-[22.05px] text-[24.05px] text-black-900_01"
                  size="txtPoppinsRegular2405"
                >
                  <>
                    Guide your referrals through their few days on thumbtack.
                    You can help
                    <br />
                    them get started by sharing tips on way to be competitive.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwelvePage;
