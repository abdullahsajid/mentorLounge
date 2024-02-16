import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const DesktopFivePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-center ml-auto w-full sm:!w-full" style={{
        width:"calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col items-center justify-center pb-1 px-1 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-center mb-[19px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-[37px] items-center justify-center w-full p-[47px]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col font-proximasoft items-start justify-between w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                    size="txtProximaSoftSemiBold48Black90001"
                  >
                    Book a session
                  </Text>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_01"
                    size="txtProximaSoftMedium35"
                  >
                    <span className="text-blue_gray-700 font-proximasoft text-left font-normal">
                      with{" "}
                    </span>
                    <span className="text-black-900_01 font-proximasoft text-left font-normal">
                      Adiel Omari
                    </span>
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    className="!text-black-900 cursor-pointer font-poppins h-[61px] leading-[normal] rounded-[30px] shadow-bs6 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px]"
                    variant="outline"
                  >
                    Edit Details
                  </Button>
                  <Button className="border border-purple-700 border-solid cursor-pointer font-poppins h-[61px] leading-[normal] rounded-[30px] shadow-bs5 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px]">
                    Book Session
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[51px] md:px-10 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[71px] mt-[3px] w-[61%] md:w-full">
                  <Text
                    className="capitalize sm:text-[18px] md:text-[22px] text-[27px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose session duration
                  </Text>
                  <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start mt-[15px] w-full">
                    <div className="flex gap-8">
                      <div className="flex items-center gap-5">
                        <input type="radio" id="20min" name="duration" />
                        <label htmlFor="20min">20 minutes</label>
                      </div>
                      <div className="flex items-center gap-5">
                        <input type="radio" id="30min" name="duration" checked />
                        <label htmlFor="30min">30 minutes</label>
                      </div>
                      <div className="flex items-center gap-5">
                        <input type="radio" id="40min" name="duration" />
                        <label htmlFor="40min">40 minutes</label>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize mt-[47px] sm:text-[18px] md:text-[22px] text-[27px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose Date
                  </Text>
                  <div className="my-7">
                    <Calendar/>
                  </div>
                  <Text
                    className="mt-[49px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900_01 text-center"
                    size="txtPoppinsMedium29"
                  >
                    Answer few questions
                  </Text>
                  <Text
                    className="text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    For the mentor to know you better
                  </Text>
                  <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-center justify-start mt-[26px] w-[77%] md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[7px] w-[13px]"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22Black90001"
                    >
                      What do you expect from the session?
                    </Text>
                  </div>
                  <Text
                    className="mt-2 text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start mt-4 w-[79%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-[13.6px] text-center"
                          size="sm"
                          variant="outline"
                        >
                          SOP Review
                        </Button>
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[156px] rounded-[10px] text-[14.03px] text-center"
                          size="sm"
                          variant="outline"
                        >
                          College queries
                        </Button>
                        <Button
                          className="!text-black-900_01 cursor-pointer leading-[normal] min-w-[146px] rounded-[10px] text-center text-sm"
                          size="sm"
                          variant="outline"
                        >
                          Career advice
                        </Button>
                      </div>
                      <Button
                        className="border border-purple-700 border-solid cursor-pointer leading-[normal] min-w-[184px] rounded-[10px] text-[14.15px] text-center"
                        size="sm"
                      >
                        Interview questions
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row font-poppins gap-2 items-center justify-start mt-[43px] w-[65%] md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22Black90001"
                    >
                      Ask James anything related to?
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  <div className="flex flex-row font-poppins gap-[11px] items-center justify-start mt-[5px] w-[65%] md:w-full">
                    <Button
                      className="border border-purple-700 border-solid cursor-pointer leading-[normal] min-w-[106px] rounded-[9px] text-[12.84px] text-center"
                      size="sm"
                    >
                      UX Design
                    </Button>
                    <Button
                      className="!text-black-900_01 cursor-pointer h-8 leading-[normal] min-w-[100px] rounded-[10px] text-center text-sm"
                      size="sm"
                      variant="outline"
                    >
                      College
                    </Button>
                    <Text
                      className="border border-purple-700 border-solid h-8 pb-0.5 pt-[5px] sm:px-5 px-[26px] rounded-[12px] text-base text-black-900_01 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      Leadership
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins gap-2 items-start justify-start mt-[52px] w-[91%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center w-full gap-2">
                      <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                      <Text
                        className="text-[22px] text-black-900_01 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22Black90001"
                      >
                        What do you expect to achieve from session?
                      </Text>
                    </div>
                    <Text
                      className="text-gray-700_01 text-xl"
                      size="txtPoppinsRegular20Gray70001"
                    >
                      This helps the mentor to better prepare
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins items-end justify-end mt-[11px] w-full">
                    {/* <Text
                      className="mr-[5px] mt-[200px] text-blue_gray-700 text-sm"
                      size="txtPoppinsMedium14Bluegray700"
                    >
                      11/100
                    </Text> */}
                    <textarea className="border border-gray-900_1e border-solid p-1.5 rounded-md w-full" cols="30" rows="9"></textarea>
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

export default DesktopFivePage;
