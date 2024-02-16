import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const DesktopTwentyFourPage = () => {
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
      <div className="bg-purple-700_63 flex flex-col font-poppins items-center justify-end mx-auto md:pr-10 sm:pr-5 pr-[41px] w-full">
        <div className="flex flex-col items-center justify-end mx-auto w-full">
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
            <Sidebar11 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]" />
            <div className="flex flex-1 flex-col font-proximasoft gap-[23px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftSemiBold48Black90001"
              >
                Sessions
              </Text>
              <div className="bg-gray-400_01 flex flex-col font-poppins gap-[21px] items-center justify-center p-[30px] sm:px-5 rounded-[20px] shadow-bs3 w-full">
                <div className="md:h-[129px] h-[130px] sm:h-[186px] relative w-[99%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start ml-8 mt-[26px] w-[71px]">
                    <Img
                      className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                      src="images/img_ellipse10_71x71.png"
                      alt="ellipseTen"
                    />
                  </div>
                  <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[21px] sm:px-5 rounded-[19px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[448px] items-start justify-end mb-1.5 mr-[3px] w-[89%] md:w-full">
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-1.5 w-[33%] sm:w-full">
                        <Text
                          className="text-[19.52px] text-black-900"
                          size="txtPoppinsMedium1952"
                        >
                          Product Design As A Career
                        </Text>
                        <Text
                          className="text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                          size="txtPoppinsMedium1283"
                        >
                          Session with James Charles
                        </Text>
                        <Input
                          name="group101"
                          placeholder="Join Now"
                          className="font-medium leading-[normal] p-0 placeholder:text-green-600 text-[12.83px] text-left w-full"
                          wrapClassName="mt-[3px] rounded-[13px] w-[32%]"
                          color="green_600_01"
                          size="sm"
                          variant="outline"
                        ></Input>
                      </div>
                      <Text
                        className="text-base text-green-600"
                        size="txtPoppinsMedium16Green600"
                      >
                        Starting in 1m
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[298px] md:h-[727px] mb-[445px] relative w-[99%] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                      <div className="md:h-[110px] h-[130px] relative w-full">
                        <div className="flex flex-col h-full items-center justify-start ml-[34px] my-auto w-[71px]">
                          <Img
                            className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                            src="images/img_ellipse10_71x71.png"
                            alt="ellipseTen_One"
                          />
                        </div>
                        <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] justify-center m-auto p-[18px] rounded-[19px] w-full">
                          <Text
                            className="md:ml-[0] ml-[838px] text-base text-blue_gray-700"
                            size="txtPoppinsMedium16"
                          >
                            16 Out,2023
                          </Text>
                          <div className="h-[46px] md:h-[50px] mb-[22px] md:ml-[0] ml-[101px] mr-[564px] relative w-[29%]">
                            <Text
                              className="absolute bottom-[0] left-[0] text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                              size="txtPoppinsMedium1283"
                            >
                              Session with James Charles
                            </Text>
                            <Text
                              className="absolute inset-x-[0] mx-auto text-[19.52px] text-black-900 top-[0] w-max"
                              size="txtPoppinsMedium1952"
                            >
                              Product Design As A Career
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[129px] h-[130px] relative w-full">
                        <div className="flex flex-col h-full items-center justify-start ml-8 my-auto w-[71px]">
                          <Img
                            className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                            src="images/img_ellipse10_71x71.png"
                            alt="ellipseTen_Two"
                          />
                        </div>
                        <div className="absolute border border-gray-50 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[25px] sm:px-5 rounded-[19px] w-full">
                          <div className="flex flex-col items-start justify-start mb-[19px] mt-1 w-[90%] md:w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Text
                                className="mt-3 text-[19.52px] text-black-900"
                                size="txtPoppinsMedium1952"
                              >
                                Product Design As A Career
                              </Text>
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtPoppinsMedium16"
                              >
                                16 Out,2023
                              </Text>
                            </div>
                            <Text
                              className="text-[12.83px] text-blue_gray-700 tracking-[0.13px]"
                              size="txtPoppinsMedium1283"
                            >
                              Session with James Charles
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[23px] items-center justify-start p-[58px] md:px-10 sm:px-5 right-[16%] rounded-[33px] w-3/5">
                    <Text
                      className="sm:text-[27.34px] md:text-[29.34px] text-[31.34px] text-black-900_01 text-center w-[86%] sm:w-full"
                      size="txtPoppinsMedium3134"
                    >
                      Waiting for Adiel Omari to Join
                    </Text>
                    <div className="bg-gray-100_04 border border-gray-900_1e border-solid flex flex-col items-end justify-end mb-[13px] p-[17px] rounded-bl-[24px] rounded-br-[25px] rounded-tl-[24px] rounded-tr-[25px] w-[35%] md:w-full">
                      <Img
                        className="h-3.5 mr-[35px]"
                        src="images/img_settings_purple_700.svg"
                        alt="settings_One"
                      />
                    </div>
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

export default DesktopTwentyFourPage;
