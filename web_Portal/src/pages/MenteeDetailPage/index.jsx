import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Img, SelectBox, Text } from "components";
import Sidebar3 from "components/Sidebar3";

const adielOmariOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MenteeDetailPagePage = () => {
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
      <div className="bg-white-A700 font-poppins h-[1024px] mx-auto relative w-full">
        <div className="bg-[#f8f5f9] justify-center  p-[54px] md:px-5 w-full h-full">

          <div className="absolute flex flex-col items-center justify-start right-[4%] top-[5%] w-[71%] sm:w-full sm:p-[22px] sm:left-0">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-row items-center justify-start w-full md:w-full">
                  <div className="flex flex-row gap-[15px] items-center w-full sm:flex-col sm:items-start">
                    <Img
                      className="h-[147px] md:h-auto rounded-[50%] w-[147px]"
                      src="images/img_ellipse25.png"
                      alt="ellipseTwentyFive"
                    />
                    <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:w-full">
                      <div className="md:h-12 h-[50px] relative w-full">
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
                  <div className="mt-5">
                    <button className="border border-solid border-[#743C95] py-3 px-8 rounded-2xl
                    text-[#743C95]">
                      Verified
                    </button>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[3px] mt-5 text-[19px] text-black-900"
                size="txtPoppinsMedium19"
              >
                About
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-0.5 text-base text-blue_gray-700 w-full"
                size="txtPoppinsMedium16"
              >
                I am an enthusiastic and ambitious individual actively seeking a
                mentorship opportunity to kickstart my career journey through an
                internship. With a passion for IT, I am eager to apply my
                academic knowledge in a real-world setting and gain hands-on
                experience.
              </Text>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:ml-[0] ml-[3px] mt-[19px] w-full">
                <div>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Status
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="mb-[3px] text-base text-blue_gray-700"
                      size="txtPoppinsMedium16"
                    >
                      Seeking Job
                    </Text>
                  </div>
                </div>
                <div>
                  <Text
                    className="text-[19px] text-black-900"
                    size="txtPoppinsMedium19"
                  >
                    Education
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    Masters in Visual Designing
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Experience
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtPoppinsMedium16"
                    >
                      Masters in Visual Designing
                    </Text>
                  </div>
                </div>
                <div>
                  <Text
                    className="text-[19px] text-black-900"
                    size="txtPoppinsMedium19"
                  >
                    Sessions Attended
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    6
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col items-start justify-start mt-[30px]">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      Payment
                    </Text>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    Verified and In time payment
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar3 className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5" />
      </div>
    </>
  );
};

export default MenteeDetailPagePage;
