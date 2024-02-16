import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopTwoPage = ({toggle}) => {
  return (
    <>
      {/* <div className="bg-white-A700 font-proximasoft h-[1024px] mx-auto relative w-full"> */}
        <div className="fixed bg-white-A700 bottom-[0] flex flex-col font-proximasoft items-center justify-start p-6 md:px-5 right-[0] rounded-[21px] shadow-bs2 w-[30%]">
          <div className="flex flex-col gap-[42px] items-center justify-start  w-[99%] md:w-full">
            <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
              <Text
                className="mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                size="txtProximaSoftSemiBold30"
              >
                Notifications
              </Text>
              <Img className="h-4 w-4 cursor-pointer" src="images/img_close.svg" alt="close" onClick={toggle}/>
            </div>
            <div className="flex flex-col font-poppins gap-[37px] items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900_01 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Session with Afia
                      </Text>
                      <Text
                        className="text-[10px] text-blue_gray-700"
                        size="txtPoppinsRegular10"
                      >
                        Lorem ipsum dolor sit amet, consectetur{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-[10px] text-blue_gray-700"
                  size="txtPoppinsMedium10"
                >
                  3m
                </Text>
              </div>
              <List
                className="flex flex-col gap-[13.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                        src="images/img_ellipse10_38x38.png"
                        alt="ellipseTen"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsMedium14"
                          >
                            Session with Kamau
                          </Text>
                        </div>
                        <Text
                          className="text-[10px] text-blue_gray-700"
                          size="txtPoppinsRegular10"
                        >
                          Lorem ipsum dolor sit amet, consectetur{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-[10px] text-blue_gray-700"
                    size="txtPoppinsMedium10"
                  >
                    Yesterday
                  </Text>
                </div>
                <Line className="self-center h-px bg-black-900_4c w-[86%]" />
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start mt-2.5">
                    <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black-900_01 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          Session with Afia
                        </Text>
                        <Text
                          className="text-[10px] text-blue_gray-700"
                          size="txtPoppinsRegular10"
                        >
                          Lorem ipsum dolor sit amet, consectetur{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-[10px] text-blue_gray-700"
                    size="txtPoppinsMedium10"
                  >
                    3m
                  </Text>
                </div>
                <Line className="self-center h-px bg-black-900_4c w-[86%]" />
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start mt-[9px]">
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                        src="images/img_ellipse10_38x38.png"
                        alt="ellipseTen"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsMedium14"
                          >
                            Session with Kamau
                          </Text>
                        </div>
                        <Text
                          className="text-[10px] text-blue_gray-700"
                          size="txtPoppinsRegular10"
                        >
                          Lorem ipsum dolor sit amet, consectetur{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-[10px] text-blue_gray-700"
                    size="txtPoppinsMedium10"
                  >
                    Yesterday
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default DesktopTwoPage;
