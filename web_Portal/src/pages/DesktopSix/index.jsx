import React, { useEffect } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import { Button, Img, Input, Line, List, Text } from "components";

const DesktopSixPage = ({ toggleSideBar, setToggleSidebar }) => {

  useEffect(() => {
    setToggleSidebar(false)
  }, [])

  return (
    <>
      <div className="bg-white-A700 font-proximasoft ml-auto w-full md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between md:px-5 w-full
        gap-5 p-[52px] sm:gap-2">
          <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
            <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-[27px] py-[39px] rounded-[31px] shadow-bs3 w-full">
            <div className="flex flex-col gap-[26px] justify-start mb-[741px] sm:mb-0 w-full">
              <div className="flex flex-col gap-[22px] items-center justify-center md:items-center w-full md:w-full sm:items-center">
                <Input
                  name="groupNinetyFour"
                  placeholder="Product designer"
                  className="leading-[normal] p-0 placeholder:text-gray-900_7f text-[14.12px] text-left w-full"
                  wrapClassName="border border-gray-900_1e border-solid flex items-center justify-center rounded-[18px] w-[90%]"
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
                <div className="flex sm:flex-col flex-row sm:flex-wrap items-center md:justify-center w-full gap-3 px-4">
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
              <Line className="bg-lime-700 h-px w-full sm:hidden" />
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
