import React from "react";

import { Button, Img, Input, Text } from "components";
import DesktopThirteenChangepassword from "components/DesktopThirteenChangepassword";

const DesktopTwentyEightPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-poppins h-[1114px] mx-auto relative w-full">
        <div className="bg-purple-700_63 h-[1024px] mx-auto w-full"></div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[9px] inset-x-[0] items-start justify-between mx-auto w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[147px] p-[25px] md:px-5 shadow-bs1 w-[22%] md:w-full">
            <div className="flex flex-col gap-[54px] justify-start mb-[455px] md:ml-[0] ml-[17px] w-3/4 md:w-full">
              <Img
                className="h-[173px] md:h-auto md:ml-[0] ml-[29px] object-cover w-[86%]"
                src="images/img_whatsappimage20231114.png"
                alt="whatsappimageTwenty"
              />
              <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
                <div className="flex flex-row gap-6 items-center justify-start w-[82%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Text
                    className="text-blue_gray-700 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-[19px] items-center justify-start mt-[50px] w-[86%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                  <Text
                    className="text-blue_gray-700 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Search
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-start mt-[60px] w-[98%] md:w-full">
                  <Img className="h-5 w-5" src="images/img_bag.svg" alt="bag" />
                  <Text
                    className="text-blue_gray-700 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Sessions
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-start justify-start mt-[60px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search_purple_700.svg"
                    alt="search_One"
                  />
                  <Text
                    className="text-[22px] sm:text-lg text-purple-700 md:text-xl"
                    size="txtPoppinsMedium22"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_1e flex md:flex-1 flex-col font-proximasoft items-center justify-start p-[15px] md:px-5 shadow-bs14 w-[78%] md:w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start mb-[90px] mt-8 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[9px] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                  size="txtProximaSoftSemiBold48Black90001"
                >
                  Settings
                </Text>
                <Button
                  className="!text-gray-100 cursor-pointer font-poppins h-[54px] leading-[normal] mb-[3px] rounded-[27px] shadow-bs5 text-center text-xl w-[196px]"
                  shape="round"
                  size="lg"
                >
                  Save
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-0.5 p-[30px] sm:px-5 rounded-[26px] w-[46%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[18px] w-[99%] md:w-full">
                    <Text
                      className="ml-1 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Edit Profile
                    </Text>
                    <div className="h-[110px] md:h-[147px] md:ml-[0] ml-[125px] mt-[37px] relative w-[110px]">
                      <Img
                        className="h-[110px] m-auto rounded-[50%] w-[110px]"
                        src="images/img_ellipse25_110x110.png"
                        alt="ellipseTwentyFive"
                      />
                      <Button
                        className="absolute border-[3px] border-solid border-white-A700 bottom-[4%] flex h-[34px] items-center justify-center right-[0] w-[34px]"
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
                    <div className="flex flex-col font-poppins items-center justify-start mt-9 w-[99%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="inputfield"
                          placeholder="Adiel Omari"
                          className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                          wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                          color="gray_100_03"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[17px] w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-[99%] md:w-full">
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
                              wrapClassName="border border-gray-900_1e border-solid flex md:h-auto rounded-[25px] w-[415px] sm:w-full"
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
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-6 w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Price for each Session
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="bg-gray-100_03 border border-gray-900_1e border-solid h-[50px] justify-center sm:px-5 px-[34px] py-3.5 rounded-[25px] text-[13.44px] text-gray-900_7f w-[415px]"
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
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[53%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-[18px] items-start justify-center p-[26px] sm:px-5 rounded-[23px] w-full">
                    <Text
                      className="md:ml-[0] ml-[15px] mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Login & Security
                    </Text>
                    <div className="flex flex-col gap-[31.76px] items-start justify-start mb-12 ml-3.5 md:ml-[0] w-auto sm:w-full">
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-auto sm:w-full">
                        <a
                          href="javascript:"
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                        >
                          <Text size="txtProximaSoftSemiBold2287">Login</Text>
                        </a>
                        <div className="flex flex-col items-start justify-start px-[6.35px] w-auto sm:w-full">
                          <DesktopThirteenChangepassword className="flex flex-col items-center justify-start w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                          size="txtProximaSoftSemiBold2287"
                        >
                          Account Settings
                        </Text>
                        <div className="flex flex-col gap-[25.41px] items-start justify-start px-[6.35px] w-auto sm:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-[17.79px] text-gray-900"
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
                              className="mt-0.5 text-[17.79px] text-gray-900"
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
                    <div className="flex flex-col items-start justify-start mb-16 w-[97%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                        size="txtProximaSoftSemiBold30Gray900"
                      >
                        Notifications
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[30px] text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        General notifications
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-4 w-[488px] sm:w-full">
                        <Input
                          name="notification"
                          placeholder="App Notifications"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <div className="h-6 mr-2.5 w-6 rounded-[5px] my-px">
                              <Img
                                className="h-6 rounded-[5px] my-auto"
                                src="images/img_user_gray_900.svg"
                                alt="user"
                              />
                            </div>
                          }
                          suffix={
                            <Img
                              className="ml-[35px] my-auto"
                              src="images/img_toggle_iphone.svg"
                              alt="Toggle (iPhone)"
                            />
                          }
                          shape="square"
                          color="gray_900_19"
                          size="xl"
                          variant="outline"
                        ></Input>
                      </div>
                      <Text
                        className="ml-1 md:ml-[0] mt-[35px] text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Promotional Notifications
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-[31px] w-[487px] sm:w-full">
                        <Input
                          name="notification_One"
                          placeholder="Promotional Notifications"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <div className="h-6 mr-2.5 w-6 rounded-[5px] my-px">
                              <Img
                                className="h-6 rounded-[5px] my-auto"
                                src="images/img_user_gray_900.svg"
                                alt="user"
                              />
                            </div>
                          }
                          suffix={
                            <Img
                              className="ml-[35px] my-auto"
                              src="images/img_toggle_iphone.svg"
                              alt="Toggle (iPhone)"
                            />
                          }
                          shape="square"
                          color="gray_900_19"
                          size="xl"
                          variant="outline"
                        ></Input>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-[37px] text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Updates and Feedback
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-3.5 w-[488px] sm:w-full">
                        <div className="border-b border-gray-900_19 border-solid flex sm:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-[483px] sm:w-full">
                          <Img
                            className="h-6 rounded-[5px] w-6"
                            src="images/img_user_gray_900.svg"
                            alt="user"
                          />
                          <div className="flex flex-row items-end justify-between w-[95%] sm:w-full">
                            <Text
                              className="my-1 text-base text-gray-900"
                              size="txtProximaSoftSemiBold16"
                            >
                              Updates Notifications
                            </Text>
                            <Img
                              className="h-[25px]"
                              src="images/img_toggle_iphone.svg"
                              alt="toggleiphone"
                            />
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
      </div>
    </>
  );
};

export default DesktopTwentyEightPage;
