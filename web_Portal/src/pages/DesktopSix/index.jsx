import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopSixPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-proximasoft ml-auto w-full"style={{
        width:"calc(100% - 316px)"
      }}>
        {/* <div className="bg-[#f8f5f9] flex flex-col gap-[54px] h-full items-end justify-center p-[52px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mt-[46px] w-[3%] md:w-full">
            <Text
              className="text-gray-700_03 text-sm"
              size="txtProximaSoftRegular14"
            >
              Clear
            </Text>
            <div className="bg-gray-700 h-px w-[88%]"></div>
          </div>
          <div className="flex flex-col gap-[41px] items-center justify-start mb-[653px] mr-1 w-[1%] md:w-full">
            <Img
              className="h-[7px] w-[7px]"
              src="images/img_close_gray_700.svg"
              alt="close"
            />
            <Img
              className="h-[7px] w-[7px]"
              src="images/img_close_gray_700.svg"
              alt="close_One"
            />
            <Img
              className="h-[7px] w-[7px]"
              src="images/img_close_gray_700.svg"
              alt="close_Two"
            />
            <Img
              className="h-[7px] w-[7px]"
              src="images/img_close_gray_700.svg"
              alt="close_Three"
            />
          </div>
        </div> */}
        <div className="bg-[#f8f5f9] flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between md:px-5 w-full
        gap-5 p-[52px]">
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-[27px]  py-[39px] rounded-[31px] shadow-bs3 w-full">
            <div className="flex flex-col gap-[26px] justify-start mb-[741px] w-full">
              <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[26px] w-3/4 md:w-full">
                <Input
                  name="groupNinetyFour"
                  placeholder="Product designer"
                  className="leading-[normal] p-0 placeholder:text-gray-900_7f text-[14.12px] text-left w-full"
                  wrapClassName="border border-gray-900_1e border-solid flex rounded-[18px] w-[90%]"
                  prefix={
                    <Img
                      className="h-6 mr-4 my-auto"
                      src="images/img_outline_search_rounded_magnifer.svg"
                      alt="Outline / Search / Rounded Magnifer"
                    />
                  }
                  color="gray_200"
                  size="xl"
                  variant="fill"
                ></Input>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full gap-3">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[157px] rounded-[19px] text-[15.17px] text-center"
                    color="lime_700"
                    size="md"
                    variant="outline"
                  >
                    Product Designer
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[138px] rounded-[19px] text-[15.17px] text-center"
                    color="lime_700"
                    size="md"
                    variant="outline"
                  >
                    UX Researcher
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[157px] rounded-[19px] text-[15.17px] text-center"
                    color="lime_700"
                    size="md"
                    variant="outline"
                  >
                    Product Designer
                  </Button>
                </div>
              </div>
              <Line className="bg-lime-700 h-px w-full" />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col font-proximasoft gap-[21px] items-start justify-center mb-[27px] 
           p-[21px] sm:px-5 rounded-[31px] shadow-bs3 w-full">
            <Text
              className="md:ml-[0] ml-[3px] mt-5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl font-bold"
              size="txtProximaSoftMedium24"
            >
              Recents Searches
            </Text>
            <List
              className="flex flex-col font-poppins gap-px items-center mb-[655px] w-[99%]"
              orientation="vertical"
            >
              <div className="border border-gray-50 border-solid flex flex-col items-start justify-start p-1.5 rounded-[12px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[46%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse26_27x27.png"
                    alt="ellipseTwentySix"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-black-900_01 text-xs"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Mona Sainz
                    </Text>
                    <Text
                      className="text-[10px] text-black-900_01"
                      size="txtPoppinsLight10"
                    >
                      Mentor, Product Designer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-gray-50 border-solid flex flex-col items-start justify-start p-[5px] rounded-[12px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start mb-0.5 w-[46%] md:w-full">
                  <Img
                    className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                    src="images/img_ellipse27.png"
                    alt="ellipseTwentySeven"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-black-900_01 text-xs"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Mona Sainz
                    </Text>
                    <Text
                      className="text-[10px] text-black-900_01"
                      size="txtPoppinsLight10"
                    >
                      Mentor, Product Designer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-gray-50 border-solid flex flex-col items-start justify-start p-1 rounded-[12px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start mb-1 w-[46%] md:w-full">
                  <Img
                    className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                    src="images/img_ellipse28_27x27.png"
                    alt="ellipseTwentyEight"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-black-900_01 text-xs"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Mona Sainz
                    </Text>
                    <Text
                      className="text-[10px] text-black-900_01"
                      size="txtPoppinsLight10"
                    >
                      Mentor, Product Designer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-gray-50 border-solid flex flex-col items-start justify-start p-[3px] rounded-[12px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start mb-1.5 w-[45%] md:w-full">
                  <Img
                    className="h-[27px] md:h-auto rounded-[50%] w-[27px]"
                    src="images/img_ellipse29.png"
                    alt="ellipseTwentyNine"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-black-900_01 text-xs"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Mona Sainz
                    </Text>
                    <Text
                      className="text-[10px] text-black-900_01"
                      size="txtPoppinsLight10"
                    >
                      Mentor, Product Designer
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSixPage;
