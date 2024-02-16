import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import DesktopThirteenChangepassword from "components/DesktopThirteenChangepassword";

const DesktopThirteenPage = () => {

  return (
    <>
      <div className="bg-white-A700 font-poppins w-full ml-auto"style={{
        width:"calc(100% - 316px)"
      }}>
        <div className=" bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly w-full">
          <div className="bg-[#f8f5f9] flex flex-1 flex-col font-proximasoft items-center justify-start p-[35px] md:px-5 shadow-bs14 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start mb-[90px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                  size="txtProximaSoftSemiBold48Black90001"
                >
                  Settings
                </Text>
                <Button
                  className="!text-gray-100 cursor-pointer font-poppins h-[54px] leading-[normal] mb-[3px]
                    rounded-[27px] shadow-bs5 text-center text-xl w-[196px]"
                  shape="round"
                  size="lg"
                >
                  Save
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[22px] justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-0.5 p-[30px] 
                sm:px-5 rounded-[26px] w-full md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[18px] w-full md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] flex items-center justify-start text-gray-900 w-full"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Edit Profile
                    </Text>
                    <div className="md:h-[147px] mt-[37px] relative w-full flex item-center justify-start">
                      <Img
                        className="h-[110px] rounded-[50%] w-[110px]"
                        src="images/img_ellipse25_110x110.png"
                        alt="ellipseTwentyFive"
                      />
                      <Button
                        className="absolute border-[3px] border-solid border-white-A700 bottom-[4%]
                         flex h-[34px] items-center justify-center left-[80px] w-[34px]"
                        shape="circle"
                        size="sm"
                      >
                        <Img
                          className="h-[19px]"
                          src="images/img_fluentedit20filled.svg"
                          alt="fluentedit20fil"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-9 w-full md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="inputfield"
                          placeholder="Adiel Omari"
                          className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto 
                          text-[17.92px] text-left w-full "
                          wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full px-[25px]"
                          color="gray_100_03"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start w-full md:w-full gap-3">
                        <Text
                          className="md:ml-[0] ml-[3px] text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Description
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="language"
                              placeholder="I&#39;m your Product Design Mentor wit. "
                              className="leading-[normal] p-0 placeholder:text-blue_gray-700 text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid flex md:h-auto rounded-[25px] w-full sm:w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-px h-[26px] ml-[17px]"
                                  src="images/img_humbleiconsmaximize.svg"
                                  alt="humbleicons:maximize"
                                />
                              }
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-8 w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Education
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="inputfield_One"
                              placeholder="Masters in Visual Designing."
                              className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mt-[23px] w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Experience
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="duration"
                              placeholder="1 year"
                              className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-[33px] w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Links of Social Media Plateforms
                        </Text>
                        <div className="flex flex-col ml-0.5 md:ml-[0] relative w-full">
                          <div className="flex flex-col items-start justify-end mx-auto pr-[7px] py-[7px] w-full">
                            <div className="flex flex-row items-center justify-start w-[44%] md:w-full">
                              <Img
                                className="h-[33px] w-[33px]"
                                src="images/img_evabehancefill.svg"
                                alt="evabehancefill"
                              />
                              <Img
                                className="h-[33px] ml-[13px] w-[33px]"
                                src="images/img_icroundfacebook.svg"
                                alt="icroundfacebook"
                              />
                              <Img
                                className="h-[33px] ml-[13px] w-[33px]"
                                src="images/img_fegithub.svg"
                                alt="fegithub"
                              />
                              <Img
                                className="h-[33px] ml-[13px] w-[33px]"
                                src="images/img_entyposociall.svg"
                                alt="entyposociall"
                              />
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[108px] ml-auto mt-[-7.84px] rounded-[18px] text-[13.42px] text-center z-[1]"
                            size="md"
                            variant="outline"
                          >
                            + Add More
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-6 w-full md:w-full gap-3">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Price for each Session
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="bg-gray-100_03 border border-gray-900_1e border-solid h-[50px] justify-center sm:px-5 px-[34px] py-3.5 
                              rounded-[25px] text-[13.44px] text-gray-900_7f w-full"
                              size="txtPoppinsRegular1344"
                            >
                              $50
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-full md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-[18px] items-start justify-center p-[26px] sm:px-5
                   rounded-[23px] w-full">
                    <Text
                      className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Login & Security
                    </Text>
                    <div className="flex flex-col gap-[31.76px] items-start justify-start mb-12 md:ml-[0] w-full sm:w-full">
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-full sm:w-full">
                        <a
                          href="javascript:"
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                        >
                          <Text size="txtProximaSoftSemiBold2287">Login</Text>
                        </a>
                        <div className="flex flex-col items-start justify-start px-[6.35px] w-full sm:w-full">
                          <DesktopThirteenChangepassword className="flex flex-col items-center justify-start w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-full sm:w-full">
                        <Text
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                          size="txtProximaSoftSemiBold2287"
                        >
                          Account Settings
                        </Text>
                        <div className="flex flex-col gap-[25.41px] items-start justify-start px-[6.35px] w-full sm:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-[17.79px] text-gray-900 font-semibold"
                              size="txtProximaSoftSemiBold1779"
                            >
                              Delete your Account
                            </Text>
                            <Text
                              className="text-[17.79px] text-purple-700 text-right underline"
                              size="txtProximaSoftMedium1779"
                            >
                              Delete
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-[17.79px] text-gray-900 font-semibold"
                              size="txtProximaSoftSemiBold1779"
                            >
                              Deactivate your Account
                            </Text>
                            <Text
                              className="text-[17.79px] text-purple-700 text-right underline"
                              size="txtProximaSoftMedium1779"
                            >
                              Deactivate
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[23px] w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-4 w-full md:w-full gap-[13px]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                        size="txtProximaSoftSemiBold30Gray900"
                      >
                        Notifications
                      </Text>
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        General notifications
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                            <div className="rounded-[5px] my-px">
                              <Img
                                className="h-6 rounded-[5px] my-auto"
                                src="images/img_user_gray_900.svg"
                                alt="user"
                              />
                            </div>
                          <Text
                            name="notification"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                            wrapClassName="flex w-full"
                            shape="square"
                            color="gray_900_19"
                            size="xl"
                            variant="outline"
                          >App Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input type="checkbox"/>
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                      
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Promotional Notifications
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                            <div className="rounded-[5px] my-px">
                              <Img
                                className="h-6 rounded-[5px] my-auto"
                                src="images/img_user_gray_900.svg"
                                alt="user"
                              />
                            </div>
                            <Text
                              name="notification"
                              className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                              wrapClassName="flex w-full"
                              shape="square"
                              color="gray_900_19"
                              size="xl"
                              variant="outline"
                            >Promotional Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input type="checkbox" checked/>
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Updates and Feedback
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                            <div className="rounded-[5px] my-px">
                              <Img
                                className="h-6 rounded-[5px] my-auto"
                                src="images/img_user_gray_900.svg"
                                alt="user"
                              />
                            </div>
                            <Text
                              name="notification"
                              className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                              wrapClassName="flex w-full"
                              shape="square"
                              color="gray_900_19"
                              size="xl"
                              variant="outline"
                            >Updates Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input type="checkbox"/>
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
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

export default DesktopThirteenPage;
