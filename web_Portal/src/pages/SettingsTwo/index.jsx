import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, Switch, Text } from "components";
import Sidebar5 from "components/Sidebar5";

const SettingsTwoPage = () => {
  return (
    <>
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02"
                      size="txtProximaSoftSemiBold30Gray90002"
                    >
                      Notification{" "}
                    </Text>
                    <Img
                      className="h-[33px]"
                      src="images/img_user_purple_700_33x54.svg"
                      alt="user_One"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col font-poppins gap-[22px] items-center justify-center p-[17px] rounded-[15px] w-full">
                    <List
                      className="flex flex-col gap-7 items-center mt-1.5 w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Commission Notifications{" "}
                              </Text>
                              <Text
                                className="mt-[3px] text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about commission earned
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>

                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Mentor Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about updates of Mentor
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>

                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Mentee Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                Notifications about updates of Mentee
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className="mt-0.5"
                            />
                          </div>

                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div>
                              <Text
                                className="text-gray-900_02 text-lg font-semibold"
                                size="txtPoppinsRegular18Gray90002"
                              >
                                Session Notifications
                              </Text>
                              <Text
                                className="text-gray-600_02 text-sm"
                                size="txtPoppinsRegular14Gray60002"
                              >
                                New sessions and updates
                              </Text>
                            </div>
                            <Switch
                              onColor=""
                              offColor=""
                              onHandleColor="#743c95"
                              offHandleColor="#743c95"
                              value={true}
                              className=""
                            />
                          </div>

                        </div>
                      </div>
                    </List>

                  </div>
    </>
  );
};

export default SettingsTwoPage;
