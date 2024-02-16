import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, List, Text } from "components";

const LoginSevenPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-proximasoft mx-auto relative w-full">
        <div className="bg-purple-700 flex md:flex-col flex-row gap-[39px] items-start justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-7 items-center justify-start ml-1 md:ml-[0] md:mt-0 mt-[174px] w-[21%] md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="sm:text-[30.159999999999997px] md:text-[36.16px] text-[40.16px] text-white-A700"
                size="txtProximaSoftSemiBold4016"
              >
                Sign in to{" "}
              </Text>
              <Text
                className="sm:text-[24.35px] md:text-[26.35px] text-[28.35px] text-white-A700 w-full"
                size="txtProximaSoftMedium2835"
              >
                MENTOR’S LOUNGE UNIVERSITY
              </Text>
            </div>
            <Text
              className="text-[18.9px] text-white-A700"
              size="txtProximaSoftLight189"
            >
              Connecting mentors and learners{" "}
            </Text>
          </div>
          <div className="md:h-[229px] h-[312px] mb-10 relative w-[29%] md:w-full">
            <div className="absolute bottom-[1%] flex flex-col justify-start left-[0] w-[47%]">
              <div className="flex flex-row items-start justify-evenly w-full">
                <div className="bg-lime-700_7e h-[15px] mb-7 mt-[97px] rounded-[7px] w-[7%]"></div>
                <div className="bg-lime-700_7e h-3 mb-[126px] mt-0.5 rounded-[50%] w-3"></div>
                <div className="flex flex-col relative w-[72%]">
                  <Img
                    className="h-[123px] mx-auto rounded-[50%] w-full"
                    src="images/img_ellipse1.png"
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
                src="images/img_ellipse3.png"
                alt="ellipseThree"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-row items-start justify-start right-[0] w-[51%]">
              <Img
                className="h-[131px] md:h-auto object-cover rounded-[65px] w-[66%]"
                src="images/img_ellipse2.png"
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
        <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start ml-auto mt-[-379px] p-12 md:px-5 rounded-[54px] shadow-bs8 w-[46%] z-[1]">
          <Button
            className="!text-gray-100 cursor-pointer h-[97px] leading-[normal] mt-[62px] rounded-[48px] shadow-bs5 sm:text-[32.01px] md:text-[34.01px] text-[36.01px] text-center w-[559px]"
            size="3xl"
          >
            Sign up
          </Button>
          <Button
            className="!text-gray-900_99 border border-gray-900_1e border-solid cursor-pointer h-[97px] leading-[normal] mt-11 rounded-[48px] shadow-bs9 sm:text-[32.01px] md:text-[34.01px] text-[36.01px] text-center w-[559px]"
            color="white_A700"
            size="3xl"
          >
            Login
          </Button>
          <div
            className="common-pointer bg-white-A700 border border-gray-900_1e border-solid flex sm:flex-col flex-row gap-[18px] h-[97px] md:h-auto items-center justify-center mt-[99px] md:px-10 sm:px-5 px-[216.05px] py-[30.61px] rounded-[48px] shadow-bs9 w-[559px] sm:w-full"
            onClick={() => googleSignIn()}
          >
            <Img
              className="h-[57px] w-[57px]"
              src="images/img_flatcoloriconsgoogle.svg"
              alt="flatcoloriconsg"
            />
            <Text
              className="sm:text-[24.81px] md:text-[26.81px] text-[28.81px] text-purple-700_87 w-auto"
              size="txtPoppinsRegular2881"
            >
              Continue with Google
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-900_1e border-solid flex sm:flex-col flex-row gap-[18px] h-[97px] md:h-auto items-center justify-center mb-[91px] mt-9 md:px-10 sm:px-5 px-[216.05px] py-[30.61px] rounded-[48px] shadow-bs9 w-[559px] sm:w-full">
            <Img
              className="h-[57px] w-[57px]"
              src="images/img_logosfacebook.svg"
              alt="logosfacebook"
            />
            <Text
              className="sm:text-[24.81px] md:text-[26.81px] text-[28.81px] text-purple-700_87 w-auto"
              size="txtPoppinsRegular2881"
            >
              Continue with Facebook
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center justify-start mb-[174px] ml-[73px] mt-[-NaNpx] md:px-5 w-[23%] z-[1]">
          <div className="flex flex-col gap-[23px] items-start justify-start w-full">
            <Text
              className="text-base text-black-900_01"
              size="txtPoppinsRegular16"
            >
              Login as
            </Text>
            <List
              className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col justify-center p-2.5 rounded-[9px] w-full">
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
                      className="text-[15px] text-black-900_01"
                      size="txtPoppinsMedium15"
                    >
                      Bisa
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500_01"
                      size="txtPoppinsLight13"
                    >
                      Active 1 days ago
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col items-end justify-start p-[11px] rounded-[9px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start p-1 w-[13px]"
                    style={{ backgroundImage: "url('images/img_group88.svg')" }}
                  >
                    <Img
                      className="h-1 w-1"
                      src="images/img_vector_gray_600.svg"
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
                      className="text-black-900_01 text-xs"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Zuri
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500_01"
                      size="txtPoppinsLight13"
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
    </>
  );
};

export default LoginSevenPage;
