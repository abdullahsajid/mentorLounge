import React from "react";

import { Button, Img, List, Text } from "components";

const LoginSeventeenPage = () => {
  return (
    <>
      <div className="bg-white-A700_b2 font-proximasoft h-[900px] mx-auto pb-9 relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col gap-14 justify-start w-full">
            <div className="bg-purple-700 flex md:flex-col flex-row md:gap-10 items-start justify-between p-[38px] sm:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-7 items-center justify-start md:ml-[0] ml-[18px] md:mt-0 mt-[188px] md:px-5 w-[21%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="sm:text-[30.159999999999997px] md:text-[36.16px] text-[40.16px] text-gray-900_7f"
                    size="txtProximaSoftSemiBold4016Gray9007f"
                  >
                    Sign in to{" "}
                  </Text>
                  <Text
                    className="sm:text-[24.35px] md:text-[26.35px] text-[28.35px] text-gray-900_7f w-full"
                    size="txtProximaSoftMedium2835Gray9007f"
                  >
                    MENTOR’S LOUNGE UNIVERSITY
                  </Text>
                </div>
                <Text
                  className="text-[18.9px] text-gray-900_7f"
                  size="txtProximaSoftLight189Gray9007f"
                >
                  Connecting mentors and learners{" "}
                </Text>
              </div>
              <div className="md:h-[223px] h-[312px] md:mt-0 my-[34px] md:px-5 relative w-[28%] md:w-full">
                <div className="absolute bottom-[1%] flex flex-col justify-start left-[0] w-[47%]">
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <div className="bg-lime-700_7e h-[15px] mb-7 mt-[97px] rounded-[7px] w-[7%]"></div>
                    <div className="bg-lime-700_7e h-3 mb-[126px] mt-0.5 rounded-[50%] w-3"></div>
                    <div className="flex flex-col relative w-[72%]">
                      <Img
                        className="h-[123px] mx-auto rounded-[50%] w-full"
                        src="images/img_ellipse1_123x126.png"
                        alt="ellipseOne"
                      />
                      <div className="bg-lime-700 h-5 ml-0.5 mt-[-2.58px] rounded-[10px] w-[15%] z-[1]"></div>
                    </div>
                    <div className="bg-lime-700 h-[15px] mb-7 mt-[97px] rounded-[7px] w-[7%]"></div>
                  </div>
                  <div className="flex flex-row gap-7 items-start justify-end md:ml-[0] ml-[77px] mt-[3px] w-1/2 md:w-full">
                    <div className="bg-lime-700 h-[33px] mt-[11px] rounded-[16px] w-[33px]"></div>
                    <div className="bg-lime-700_a2 h-7 mb-4 rounded-[14px] w-[29%]"></div>
                  </div>
                </div>
                <div className="absolute flex flex-row items-end justify-center left-[11%] top-[0] w-[57%]">
                  <div className="flex flex-col gap-5 justify-start mt-[7px] w-[27%]">
                    <div className="bg-lime-700_a2 h-[41px] md:ml-[0] ml-[15px] rounded-[20px] w-[41px]"></div>
                    <div className="bg-lime-700_90 h-9 mr-[18px] rounded-[19px] w-[68%]"></div>
                  </div>
                  <div className="bg-lime-700 h-7 mb-[74px] ml-[23px] mt-0.5 rounded-[14px] w-[12%]"></div>
                  <Img
                    className="h-[105px] md:h-auto ml-[5px] object-cover rounded-[52px] w-[49%]"
                    src="images/img_ellipse3_105x103.png"
                    alt="ellipseThree"
                  />
                </div>
                <div className="absolute bottom-[0] flex flex-row items-start justify-start right-[0] w-[51%]">
                  <Img
                    className="h-[131px] md:h-auto object-cover rounded-[65px] w-[66%]"
                    src="images/img_ellipse2_131x126.png"
                    alt="ellipseTwo"
                  />
                  <div className="bg-lime-700 h-7 mb-[95px] mt-[7px] rounded-[50%] w-7"></div>
                  <div className="bg-lime-700 h-[18px] mb-16 ml-[23px] mt-12 rounded-[9px] w-[8%]"></div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[1%] top-[10%] w-[29%]">
                  <div className="bg-lime-700_87 h-[15px] rounded-[7px] w-[15px]"></div>
                  <div className="bg-lime-700 h-6 mt-[31px] rounded-[12px] w-[25px]"></div>
                  <div className="flex flex-row gap-7 items-end justify-between mt-0.5 w-full">
                    <div className="bg-lime-700 h-[15px] mt-[49px] rounded-[7px] w-[15px]"></div>
                    <div className="bg-gradient  h-16 rounded-[50%] w-16"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[73px] md:px-5 w-[23%] md:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900_7f"
                  size="txtPoppinsRegular16Gray9007f"
                >
                  Login as
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-gray-500_02 flex flex-col justify-center p-2.5 rounded-[9px] w-full">
                      <Img
                        className="h-[13px] ml-28 md:ml-[0] w-[13px]"
                        src="images/img_cancel1.svg"
                        alt="cancelOne"
                      />
                      <Img
                        className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                        src="images/img_ellipse26_76x76.png"
                        alt="ellipseTwentySix"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-1.5">
                        <Text
                          className="text-[15px] text-gray-900_7f"
                          size="txtPoppinsMedium15Gray9007f"
                        >
                          Bisa
                        </Text>
                        <Text
                          className="text-[13px] text-gray-900_7f"
                          size="txtPoppinsLight13Gray9007f"
                        >
                          Active 1 days ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-gray-500_02 flex flex-col items-end justify-start p-[11px] rounded-[9px] w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start p-1 w-[13px]"
                        style={{
                          backgroundImage: "url('images/img_group188.svg')",
                        }}
                      >
                        <Img
                          className="h-1 w-1"
                          src="images/img_vector_gray_700_02.svg"
                          alt="vector"
                        />
                      </div>
                      <Img
                        className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                        src="images/img_ellipse28.png"
                        alt="ellipseTwentyEight"
                      />
                      <div className="flex flex-col gap-1.5 items-center justify-start mb-0.5 mr-1 mt-1.5">
                        <Text
                          className="text-gray-900_7f text-xs"
                          size="txtPoppinsMedium12Gray9007f"
                        >
                          Zuri
                        </Text>
                        <Text
                          className="text-[13px] text-gray-900_7f"
                          size="txtPoppinsLight13Gray9007f"
                        >
                          Active 4 days ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[780px] inset-x-[0] items-center justify-start mx-auto p-[31px] md:px-5 w-[45%]"
          style={{ backgroundImage: "url('images/img_group85.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mb-[3px] mt-[23px] w-[98%] md:w-full">
            <Text
              className="sm:text-[35.6px] md:text-[41.6px] text-[45.6px] text-black-900"
              size="txtProximaSoftSemiBold456"
            >
              Choose Your Role
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[54px] sm:text-[23.36px] md:text-[25.36px] text-[27.36px] text-gray-700_02"
              size="txtProximaSoftMedium2736"
            >
              <>
                Choose One!
                <br />
                Don’t Worry you can always change it later on
              </>
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-[9px] items-center justify-between md:ml-[0] ml-[5px] mt-[51px] w-full">
              <Button
                className="!text-black-900 cursor-pointer h-[72px] leading-[normal] rounded-[36px] shadow-bs11 sm:text-[26.4px] md:text-[28.4px] text-[30.4px] text-center w-[275px]"
                variant="outline"
              >
                Mentor
              </Button>
              <Button
                className="!text-black-900 cursor-pointer h-[72px] leading-[normal] rounded-[36px] shadow-bs11 sm:text-[26.4px] md:text-[28.4px] text-[30.4px] text-center w-[275px]"
                variant="outline"
              >
                Mentee
              </Button>
            </div>
            <Button
              className="!text-gray-100 cursor-pointer font-poppins h-[82px] leading-[normal] ml-1.5 md:ml-[0] mt-[319px] rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[30.4px] text-center w-[556px]"
              size="2xl"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSeventeenPage;
