import React from "react";
import { Button, Img, Text } from "components";

const SettingsPage = () => {

  return (
    <>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02"
                    size="txtProximaSoftSemiBold30Gray90002"
                  >
                    Security
                  </Text>
                  <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-[17px] p-[17px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                          size="txtPoppinsSemiBold22"
                        >
                          Local Password Authentication
                        </Text>
                        <Button
                          className="!text-gray-100_07 cursor-pointer font-museosansrounded font-semibold leading-[normal] min-w-[164px] sm:mt-0 mt-[5px] rounded-[10px] shadow-bs24 text-[15px] text-center"
                          size="lg"
                        >
                          Update Password
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full sm:mt-3">
                        <Text
                          className="md:ml-[0] ml-[5px] mb-2 text-gray-600_02 text-sm"
                          size="txtPoppinsRegular14Gray60002"
                        >
                          Email
                        </Text>
                        <input
                          className="font-semibold leading-[normal] 
                          border-2 border-solid rounded-lg text-base px-5 py-2 sm:w-full"
                          placeholder="arnold_negger21@gmail.com"
                          value={"arnold_negger21@gmail.com"}
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[15px]  md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-3 gap-5 items-center justify-between md:w-full">
                          <div className="flex flex-row items-center justify-evenly sm:flex-col sm:w-full">
                            <Text
                              className="text-gray-600_02 text-sm mr-2 sm:w-full sm:mb-2"
                              size="txtPoppinsRegular14Gray60002"
                            >
                              Old Password:
                            </Text>
                            <input
                              className="font-museosansrounded font-semibold leading-[normal]
                                rounded-lg text-base px-5 py-2 border-2 border-solid w-[100px] sm:w-full"
                              color="gray_900_19"
                              size="md"
                              placeholder="********"
                            />

                          </div>
                          <div className="flex flex-row gap-[9px] items-center justify-between sm:flex-col sm:w-full">
                            <Text
                              className="text-gray-600_02 text-sm mr-2 sm:w-full"
                              size="txtPoppinsRegular14Gray60002"
                            >
                              New Password:
                            </Text>
                            <input
                              className="cursor-pointer font-museosansrounded font-semibold leading-[normal] 
                               rounded-lg text-base px-5 py-2 border-2 border-solid w-[100px] sm:w-full"
                              color="gray_900_19"
                              size="md"
                              placeholder="********"
                              value={"********"}
                            />

                          </div>
                          <div className="flex flex-row items-center justify-evenly sm:flex-col md:w-full">
                            <Text
                              className="text-gray-600_02 text-sm mr-2 sm:w-full"
                              size="txtPoppinsRegular14Gray60002"
                            >
                              Confirm Password:
                            </Text>
                            <input
                              className="cursor-pointer font-museosansrounded font-semibold leading-[normal]
                            w-[100px] rounded-lg text-base px-5 py-2 border-2 border-solid sm:w-full"
                              color="gray_900_19"
                              size="md"
                              placeholder="********"
                              value={"********"}
                            />

                          </div>
                        </div>

                      </div>
                      <a
                        href="javascript:"
                        className="mt-[11px] text-cyan-400 text-xs underline"
                      >
                        <Text size="txtPoppinsRegular12Cyan400">
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[15px] p-[25px] sm:px-5 rounded-[15px] w-full">
                    <Text
                      className="ml-0.5 sm:ml-[0] text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      Two Factor Authentication
                    </Text>
                    <Button
                      className="cursor-pointer font-museosansrounded font-semibold leading-[normal] mb-2.5 min-w-[97px] mr-[3px] rounded-[10px] shadow-bs24 text-[15px] text-center"
                      size="md"
                    >
                      Enable
                    </Button>
                  </div>

    </>
  );
};

export default SettingsPage;
