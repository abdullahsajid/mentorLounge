import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import { useNavigate } from "react-router-dom";

const DesktopFourPage = () => {
  const navigate = useNavigate()
  const navigatehandler = () => {
    navigate('/booksession')
  }
  return (
    <>
      <div className="bg-white-A700 font-poppins ml-auto w-full sm:!w-full" style={{
        width:"calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col h-full p-[29px] sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mr-5 md:px-5 w-full md:w-full">
            <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-start w-[52%] md:w-full">
              <div className="h-[167px] relative w-[167px]">
                <Img
                  className="h-[167px] m-auto rounded-[50%] w-[167px]"
                  src="images/img_ellipse25.png"
                  alt="ellipseTwentyFive"
                />
                <Img
                  className="absolute bottom-[0] h-10 right-[9%] w-10"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtProximaSoftMedium48"
                >
                  Adiel Omari
                </Text>
                <Text
                  className="text-[19px] text-black-900"
                  size="txtPoppinsRegular19"
                >
                  Product Designer . Design Mentor
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between mt-[55px] w-full">
              <div className="bg-[#EBDCC1] flex md:flex-1 flex-col items-start justify-start rounded-[7px] w-[52%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start w-3/4 md:w-full">
                  <Img
                    className="h-[71px]"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.53px] text-blue_gray-700"
                      size="txtPoppinsMedium1953"
                    >
                      Next Available Session on 17th October
                    </Text>
                    <Text
                      className="text-[13.95px] text-purple-700 underline"
                      size="txtPoppinsMedium1395"
                    >
                      View Details
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <Button
                  className="!text-black-900 cursor-pointer h-[47px] leading-[normal] md:ml-[0] ml-[161px] rounded-[23px] shadow-bs4 text-[14.14px] text-center w-40"
                  shape="round"
                  size="lg"
                  variant="outline"
                >
                  Message
                </Button>
                <Button
                  className="border border-purple-700 border-solid cursor-pointer h-[47px] leading-[normal] rounded-[23px] shadow-bs5 text-[14.14px] text-center w-40"
                  shape="round"
                  size="lg"
                  onClick={() =>navigatehandler()}
                >
                  Book a Session
                </Button>
              </div>
            </div>
            <Text
              className="ml-0.5 md:ml-[0] mt-[19px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              Price
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-1 text-base text-blue_gray-700"
              size="txtPoppinsMedium16"
            >
              $50 per Session
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[7px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              About
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-0.5 text-base text-blue_gray-700 w-[99%] sm:w-full"
              size="txtPoppinsMedium16"
            >
              <>
                I&#39;m your Product Design Mentor. With a passion for defining
                aesthetics, functionality, and user experiences, I&#39;m here to
                guide you through the art and science of product design.
                Let&#39;s redefine boundaries together!
              </>
            </Text>
            <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-[9px] w-[57%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-0.5">
                <Text
                  className="text-[19px] text-black-900"
                  size="txtPoppinsMedium19"
                >
                  Rating
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-0.5">
                <Text
                  className="text-[19px] text-black-900"
                  size="txtPoppinsMedium19"
                >
                  Education
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-0.5 w-[69%] md:w-full">
              <Text
                className="text-base text-blue_gray-700"
                size="txtPoppinsMedium16"
              >
                Verified User Based on Reviews and Ratings
              </Text>
              <Text
                className="text-base text-blue_gray-700"
                size="txtPoppinsMedium16"
              >
                Masters in Visual Designing
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[9px]">
              <Text
                className="text-[19px] text-black-900"
                size="txtPoppinsMedium19"
              >
                Experience
              </Text>
            </div>
            <Text
              className="ml-0.5 md:ml-[0] mt-0.5 text-base text-blue_gray-700"
              size="txtPoppinsMedium16"
            >
              Masters in Visual Designing
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[33px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              Reviews
            </Text>
            <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] ml-[3px] mt-2.5 w-[15%] md:w-full">
              <Img
                className="h-[51px] md:h-auto rounded-[50%] w-[51px]"
                src="images/img_ellipse7.png"
                alt="ellipseSeven"
              />
              <div className="md:h-[35px] h-[43px] mt-0.5 relative w-[56%]">
                <Text
                  className="absolute left-[0] sm:text-[17.48px] md:text-[19.48px] text-[21.48px] text-black-900 top-[0]"
                  size="txtPoppinsMedium2148"
                >
                  Taraji
                </Text>
                <Img
                  className="absolute bottom-[0] h-[17px] inset-x-[0] mx-auto"
                  src="images/img_group10.svg"
                  alt="groupTen"
                />
              </div>
            </div>
            <div className="flex md:h-12 h-[38px] justify-end ml-1 md:ml-[0] mt-2.5 relative w-[62%] md:w-full">
              <Line className="bg-gray-900_1e h-px mb-[3px] mt-auto w-[61%]" />
              <Text
                className="absolute h-full inset-[0] justify-center leading-[126.00%] m-auto text-[15px] text-gray-900_7f w-full"
                size="txtPoppinsRegular15"
              >
                I had a great experience. The session was a profound learning
                experience, seamlessly blending theory with practical insights
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-start justify-start ml-1 md:ml-[0] mt-[9px] w-[15%] md:w-full">
              <Img
                className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                src="images/img_ellipse26.png"
                alt="ellipseTwentySix"
              />
              <div className="md:h-[33px] h-[46px] relative w-[56%]">
                <Text
                  className="absolute left-[0] sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 top-[0]"
                  size="txtPoppinsMedium2163"
                >
                  Eshe
                </Text>
                <Img
                  className="absolute bottom-[0] h-[17px] inset-x-[0] mx-auto"
                  src="images/img_group10.svg"
                  alt="groupNinetyFour"
                />
              </div>
            </div>
            <Text
              className="leading-[126.00%] md:ml-[0] ml-[3px] mt-[9px] text-[15px] text-gray-900_7f w-[61%] sm:w-full"
              size="txtPoppinsRegular15"
            >
              I had a great experience. The session was a profound learning
              experience, seamlessly blending theory with practical insights
            </Text>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[396px] mt-[41px] w-[24%] md:w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_evabehancefill.svg"
                alt="evabehancefill"
              />
              <Img
                className="h-[46px] ml-[18px] w-[46px]"
                src="images/img_icroundfacebook.svg"
                alt="icroundfacebook"
              />
              <Img
                className="h-[46px] ml-[18px] w-[46px]"
                src="images/img_fegithub.svg"
                alt="fegithub"
              />
              <Img
                className="h-[46px] ml-[18px] w-[46px]"
                src="images/img_entyposociall.svg"
                alt="entyposociall"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
