import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, List, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const DesktopFourteenPage = () => {
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
      <div className="bg-[#f8f5f9] flex flex-col font-poppins items-center justify-end mx-auto
       w-full">
        <div className="flex flex-col items-center justify-end mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
            <Sidebar2 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]" />
            <div className="flex flex-1 flex-col font-proximasoft gap-[22px] items-start justify-start 
            w-full p-[47px]">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftSemiBold48Black90001"
              >
                My Commission
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-poppins h-full items-start
                 justify-start p-[47px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group294.svg')" }}
              >
                <List
                  className="flex flex-col gap-[33px] mb-[32px] w-full"
                  orientation="vertical"
                >
                  <div className="border-b-2 border-gray-900_1e border-solid flex flex-col items-center
                   justify-end p-[20px] shadow-bs13 w-full">
                    <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between
                     mt-1 w-full">
                      <div className="flex gap-5">
                        <div className="flex items-center">
                          <Img
                            className="h-[62px] rounded-[50%] w-[72px] object-cover"
                            src="images/img_man1.png"
                            alt="manOne"
                          />
                        </div>
                        <div className="w-full">
                            <Text
                              className="capitalize sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-black-900
                               "
                              size="txtPoppinsRegular3113"
                            >
                              Zola
                            </Text>
                            <div className="flex">
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                   text-purple-700 w-full"
                                  size="txtPoppinsMedium2224"
                                >
                                  5%
                                </Text>
                              </div>
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                  text-blue_gray-700 w-full"
                                  size="txtPoppinsMedium2224Bluegray700"
                                >
                                  Commission on Session with Adiel
                                </Text>
                              </div>
                            </div>
                          </div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full md:w-full">
                          <div className="flex flex-col justify-start">
                            <Text
                              className="capitalize ml-2 md:ml-[0] sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-center text-purple-700"
                              size="txtPoppinsMedium3113"
                            >
                              $5.00
                            </Text>
                            <Text
                              className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px] text-blue_gray-700 text-center"
                              size="txtPoppinsRegular2224"
                            >
                              Sat, 15 July{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-900_1e border-solid p-[20px] flex flex-col
                   items-center justify-end shadow-bs13 w-full">
                    <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between 
                    mt-1.5 w-full">
                      <div className="flex gap-5">
                        <div className="flex items-center">
                          <Img
                            className="h-[62px] rounded-[50%] w-[72px] object-cover"
                            src="images/img_man1_84x84.png"
                            alt="manOne"
                          />
                        </div>
                        <div className="w-full">
                            <Text
                              className="capitalize sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-black-900
                               "
                              size="txtPoppinsRegular3113"
                            >
                              Kwame
                            </Text>
                            <div className="flex">
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                   text-purple-700 w-full"
                                  size="txtPoppinsMedium2224"
                                >
                                  5%
                                </Text>
                              </div>
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                  text-blue_gray-700 w-full"
                                  size="txtPoppinsMedium2224Bluegray700"
                                >
                                  Commission on Session with Adiel
                                </Text>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between 
                        w-full md:w-full">
                          <div className="flex flex-col justify-start">
                            <Text
                              className="capitalize ml-2 md:ml-[0] sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-center text-purple-700"
                              size="txtPoppinsMedium3113"
                            >
                              $5.00
                            </Text>
                            <Text
                              className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px] text-blue_gray-700 text-center"
                              size="txtPoppinsRegular2224"
                            >
                              Sat, 15 July{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-900_1e border-solid p-[20px] flex flex-col
                   items-center justify-end shadow-bs13 w-full">
                    <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between 
                    mt-1.5 w-full">
                      <div className="flex gap-5">
                        <div className="flex items-center">
                          <Img
                            className="h-[62px] rounded-[50%] w-[72px] object-cover"
                            src="images/img_man1_1.png"
                            alt="manOne"
                          />
                        </div>
                        <div className="w-full">
                            <Text
                              className="capitalize sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-black-900
                               "
                              size="txtPoppinsRegular3113"
                            >
                              Abidemi
                            </Text>
                            <div className="flex">
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                   text-purple-700 w-full"
                                  size="txtPoppinsMedium2224"
                                >
                                  5%
                                </Text>
                              </div>
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                  text-blue_gray-700 w-full"
                                  size="txtPoppinsMedium2224Bluegray700"
                                >
                                  Commission on Session with Adiel
                                </Text>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between 
                        w-full md:w-full">
                          <div className="flex flex-col justify-start">
                            <Text
                              className="capitalize ml-2 md:ml-[0] sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-center text-purple-700"
                              size="txtPoppinsMedium3113"
                            >
                              $5.00
                            </Text>
                            <Text
                              className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px] text-blue_gray-700 text-center"
                              size="txtPoppinsRegular2224"
                            >
                              Sat, 15 July{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-900_1e border-solid p-[20px] flex flex-col
                   items-center justify-end shadow-bs13 w-full">
                    <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between 
                    mt-1.5 w-full">
                      <div className="flex gap-5">
                        <div className="flex items-center">
                          <Img
                            className="h-[62px] rounded-[50%] w-[72px] object-cover"
                            src="images/img_man1_2.png"
                            alt="manOne"
                          />
                        </div>
                        <div className="w-full">
                            <Text
                              className="capitalize sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-black-900
                               "
                              size="txtPoppinsRegular3113"
                            >
                              Mpho
                            </Text>
                            <div className="flex">
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                   text-purple-700 w-full"
                                  size="txtPoppinsMedium2224"
                                >
                                  5%
                                </Text>
                              </div>
                              <div className="flex flex-col items-center">
                                <Text
                                  className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px]
                                  text-blue_gray-700 w-full"
                                  size="txtPoppinsMedium2224Bluegray700"
                                >
                                  Commission on Session with Adiel
                                </Text>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between 
                        w-full md:w-full">
                          <div className="flex flex-col justify-start">
                            <Text
                              className="capitalize ml-2 md:ml-[0] sm:text-[27.13px] md:text-[29.13px] text-[31.13px] text-center text-purple-700"
                              size="txtPoppinsMedium3113"
                            >
                              $5.00
                            </Text>
                            <Text
                              className="capitalize sm:text-[18.24px] md:text-[20.24px] text-[22.24px] text-blue_gray-700 text-center"
                              size="txtPoppinsRegular2224"
                            >
                              Sat, 15 July{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourteenPage;
