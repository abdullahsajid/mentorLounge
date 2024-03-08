import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Img, Line, SelectBox, Text } from "components";
import Sidebar3 from "components/Sidebar3";

const adielOmariOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MentorDetailPagePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] mt-1.5 w-[27px]"
          src="images/img_outlinemoney.svg"
          alt="outlinemoney"
        />
      ),
      label: "Finance",
      href: "/finance",
      active: window.location.pathname === "/finance",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_blue_gray_300.svg"
          alt="checkmark"
        />
      ),
      label: "Analytics",
      href: "/analyticsandreporting",
      active: window.location.pathname === "/analyticsandreporting",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_vector_blue_gray_300.svg"
          alt="vector"
        />
      ),
      label: "Customer Services",
      href: "/customerservice",
      active: window.location.pathname === "/customerservice",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_blue_gray_300.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Mentor Management
          </Text>
        </div>
      ),
      href: "/mentormanagement",
      active: window.location.pathname === "/mentormanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Session Management</Text>
        </div>
      ),
      href: "/sessionmanagement",
      active: window.location.pathname === "/sessionmanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Content Management</Text>
        </div>
      ),
      href: "/contentmanagement",
      active: window.location.pathname === "/contentmanagement",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[1024px] sm:h-full mx-auto relative w-full">
        <div className="bg-[#f8f5f9] flex flex-col h-full items-end justify-center p-[30px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[173px] mr-[29px] sm:mr-0 sm:px-0 md:px-5 w-[74%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-row items-center justify-start w-full sm:flex-col sm:gap-3 md:w-full">
                  <div className="flex flex-row gap-[15px] items-center w-full sm:flex-col">
                    <Img
                      className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                      src="images/img_ellipse25.png"
                      alt="ellipseTwentyFive"
                    />
                    <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start sm:items-center sm:justify-center md:w-full">
                      <div className="md:h-12 h-[50px] sm:flex sm:items-center sm:justify-center relative w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                          size="txtProximaSoftMedium48"
                        >
                          Adiel Omari
                        </Text>
                      </div>
                      <Text
                        className="text-[19px] text-black-900"
                        size="txtPoppinsRegular19"
                      >
                        Product Designer . Design Mentor
                      </Text>
                    </div>
                  </div>
                  <div>
                    <button className="border border-solid border-[#743C95] py-3 px-8 rounded-2xl
                    text-[#743C95]">
                      Verified
                    </button>
                  </div>
                </div>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[39px] text-[19px] text-black-900"
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
                className="md:ml-[0] ml-[3px] mt-0.5 text-base text-blue_gray-700 w-full"
                size="txtPoppinsMedium16"
              >
                <>
                  I&#39;m your Product Design Mentor. With a passion for
                  defining aesthetics, functionality, and user experiences,
                  I&#39;m here to guide you through the art and science of
                  product design. Let&#39;s redefine boundaries together!
                </>
              </Text>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:ml-[0] ml-[3px] mt-[19px] w-full">
                <div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Rating
                    </Text>
                  </div>
                  <Img
                    className="mt-1"
                    src="images/img_group10.svg"
                    alt="group289232"
                  />
                </div>
                <div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Education
                    </Text>
                  </div>
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    Masters in Visual Designing
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Experience
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtPoppinsMedium16"
                    >
                      Masters in Visual Designing
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start md:w-full">
                  <Text
                    className="text-[19px] text-black-900"
                    size="txtPoppinsMedium19"
                  >
                    Total Sessions
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    10
                  </Text>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[3px] mt-14 text-[19px] text-black-900"
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
                <div className="md:h-[35px] h-[43px] mt-0.5 w-[56%]">
                  <Text
                    className="sm:text-[17.48px] md:text-[19.48px] text-[21.48px] text-black-900 "
                    size="txtPoppinsMedium2148"
                  >
                    Taraji
                  </Text>
                  <Img
                    className="h-[17px]"
                    src="images/img_group10.svg"
                    alt="groupTen"
                  />
                </div>
              </div>
              <div className="flex md:h-12 h-[38px] justify-end ml-1 md:ml-[0] mt-2.5 mb-2 relative w-[62%] md:w-full">
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
                    className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900"
                    size="txtPoppinsMedium2163"
                  >
                    Eshe
                  </Text>
                  <Img
                    className="h-[17px]"
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
            </div>
          </div>
        </div>
        <Sidebar3 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5" />
      </div>
    </>
  );
};

export default MentorDetailPagePage;