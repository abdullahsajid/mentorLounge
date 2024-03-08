import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Img, Input, Text } from "components";

const DesktopTwentyTwoPage = () => {


  return (
    <>
      <div className="bg-[#f8f5f9] flex flex-col font-poppins items-center justify-end ml-auto md:pr-10 pr-[41px] sm:pr-[0]
       w-full sm:!w-full" style={{
          width: "calc(100% - 316px)"
        }}>
        <div className="flex flex-col items-center justify-end mx-auto w-full">
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
            <div className="flex flex-1 flex-col font-proximasoft gap-[23px] justify-start w-full p-[47px] sm:p-[20px]">
              <Text
                className="md:ml-[0] ml-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftSemiBold48Black90001"
              >
                Sessions
              </Text>
              <div className="bg-white-A700 flex flex-col font-poppins gap-[21px] items-center justify-center p-[30px] sm:px-0 sm:pt-0 rounded-[20px] shadow-bs3 w-full">
                <div className="w-full md:w-full flex items-center gap-5 border-2 border-gray-50 border-solid p-[21px] px-[6px] sm:px-5 rounded-[19px]">
                  <div className="flex flex-col h-full items-center justify-start ml-[34px] sm:ml-0 w-[71px]">
                    <Img
                      className="md:h-auto rounded-[50%] w-[71px]"
                      src="images/img_ellipse10_71x71.png"
                      alt="ellipseTen_One"
                    />
                  </div>
                  <div className="flex sm:justify-between w-full">
                    <div className="flex items-center flex-col w-full">
                      <Text
                        className="text-[19.52px] text-black-900 w-full sm:text-[12px] sm:font-bold"
                        size="txtPoppinsMedium1952"
                      >
                        Product Design As A Career
                      </Text>
                      <Text
                        className="text-[12.83px] text-blue_gray-700 tracking-[0.13px] w-full sm:text-[10px]"
                        size="txtPoppinsMedium1283"
                      >
                        Session with James Charles
                      </Text>
                      <div className="w-full">
                        <Text
                          name="group197"
                          placeholder="Join Now"
                          className="font-medium leading-[normal] text-[12.83px] flex justify-center items-center border border-solid border-green-600
                            rounded-[13px] w-[15%] mt-[3px] text-green-600 px-3 py-[2px] sm:w-[80%] sm:text-[10px]"
                          color="green_600_01"
                          size="sm"
                          variant="outline"
                        >Join Now</Text>
                      </div>
                    </div>
                    <div className="flex sm:justify-end w-40">
                      <Text
                        className="text-base text-green-600 sm:text-[12px] sm:justify-end"
                        size="txtPoppinsMedium16Green600"
                      >
                        Starting in 1m
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full flex items-center gap-5 border-2 border-gray-50 border-solid p-[21px] px-[6px] sm:px-5 rounded-[19px]">
                  <div className="flex flex-col h-full items-center justify-start ml-[34px] sm:ml-0 w-[71px]">
                    <Img
                      className="md:h-auto rounded-[50%] w-[71px]"
                      src="images/img_ellipse10_71x71.png"
                      alt="ellipseTen_One"
                    />
                  </div>
                  <div className="flex sm:justify-between w-full">
                    <div className="flex items-center flex-col w-full">
                      <Text
                        className="text-[19.52px] text-black-900 w-full sm:text-[12px] sm:font-bold"
                        size="txtPoppinsMedium1952"
                      >
                        Product Design As A Career
                      </Text>
                      <Text
                        className="text-[12.83px] text-blue_gray-700 tracking-[0.13px] w-full sm:text-[10px]"
                        size="txtPoppinsMedium1283"
                      >
                        Session with James Charles
                      </Text>
                    </div>
                    <div className="flex sm:justify-end w-32">
                      <Text
                        className="text-base text-blue_gray-700 sm:text-[12px] sm:justify-end"
                        size="txtPoppinsMedium16"
                      >
                        16 Out,2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full flex items-center gap-5 border-2 border-gray-50 border-solid p-[21px] px-[6px] sm:px-5 rounded-[19px]">
                  <div className="flex flex-col h-full items-center justify-start ml-[34px] sm:ml-0 w-[71px]">
                    <Img
                      className="md:h-auto rounded-[50%] w-[71px]"
                      src="images/img_ellipse10_71x71.png"
                      alt="ellipseTen_One"
                    />
                  </div>
                  <div className="flex sm:justify-between w-full">
                    <div className="flex items-center flex-col w-full">
                      <Text
                        className="text-[19.52px] text-black-900 w-full sm:text-[12px] sm:font-bold"
                        size="txtPoppinsMedium1952"
                      >
                        Product Design As A Career
                      </Text>
                      <Text
                        className="text-[12.83px] text-blue_gray-700 tracking-[0.13px] w-full sm:text-[10px]"
                        size="txtPoppinsMedium1283"
                      >
                        Session with James Charles
                      </Text>
                    </div>
                    <div className="flex sm:justify-end w-32">
                      <Text
                        className="text-base text-blue_gray-700 sm:text-[12px] sm:justify-end"
                        size="txtPoppinsMedium16"
                      >
                        16 Out,2023
                      </Text>
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

export default DesktopTwentyTwoPage;
