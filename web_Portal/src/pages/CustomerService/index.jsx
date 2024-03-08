import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

const CustomerServicePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] w-[27px]"
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
          src="images/img_clock_blue_gray_300.svg"
          alt="clock"
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

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[173px] md:h-auto md:ml-[0] ml-[65px] mr-[84px] object-cover w-[53%]"
              src="images/img_whatsappimage20231114.png"
              alt="whatsappimageTwenty"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "14px 14px 14px 46px",
                  gap: "11px",
                  color: "#4c535f",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: {
                    color: "#743c95",
                    fontWeight: "600 !important",
                  },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-1.5 mt-3 w-2"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[639px] mt-9 pt-0.5 w-full"
            >
              <SubMenu
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_grid_blue_gray_300.svg"
                    alt="grid"
                  />
                }
                label={<Text className="mb-[5px] mt-0.5">Management</Text>}
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-proximasoft gap-[18px] items-center justify-start md:px-5 sm:px-0 w-full">
            <div className="bg-white-A700 flex flex-row gap-10 items-center justify-end p-[13px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-3.5 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mr-[27px] p-2.5 w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_profilepic2.png"
                  alt="profilepicTwo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtProximaSoftSemiBold20"
                  >
                    Antonio
                  </Text>
                  <Img
                    className="h-1.5 w-2"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins gap-[19px] items-start justify-between w-[97%] sm:px-2 md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[35px] w-[27%] md:w-full">
                <div className="flex flex-col gap-9 justify-start mt-[7px] w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[30px] text-black-900_03 w-full"
                      size="txtProximaSoftSemiBold35"
                    >
                      Customer Service
                    </Text>
                    <Input
                      name="searchbar"
                      placeholder="Search by Email or name"
                      className="font-opensans leading-[normal] p-0 placeholder:text-gray-500_03 text-xs w-full"
                      wrapClassName="flex rounded-[10px] w-full !p-[10px]"
                      type="email"
                      prefix={
                        <div className="h-4 mb-0.5 mr-[15px] w-4">
                          <Img
                            className="h-4 my-auto"
                            src="images/img_rewind_gray_500_03.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                      shape="round"
                      color="gray_400_02"
                      size="lg"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row font-inter items-center justify-between w-full">
                      <Text
                        className="text-gray-500_01 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Today
                      </Text>
                      <div className="flex flex-col font-opensans items-center justify-start">
                        <Img
                          className="h-[15px] w-[15px]"
                          src="images/img_qrcode.svg"
                          alt="qrcode"
                        />
                        <Text
                          className="text-[10px] text-black-900_03"
                          size="txtOpenSansRomanRegular10"
                        >
                          Refresh
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex flex-col font-inter gap-2.5 items-center mt-[9px] w-full"
                      orientation="vertical"
                    >
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end sm:justify-start sm:pl-2 my-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Denze
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100_06 w-[91%]" />
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end sm:justify-start sm:pl-2 my-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Bisa Martha
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100_06 w-[91%]" />
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end sm:justify-start sm:pl-2 my-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9_54x54.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Musa Khalli
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <Text
                      className="mt-8 text-gray-500_01 text-xl w-full"
                      size="txtProximaSoftSemiBold20Gray50001"
                    >
                      Yesterday
                    </Text>
                    <List
                      className="flex flex-col font-poppins gap-2.5 mt-[15px] w-full"
                      orientation="vertical"
                    >
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end my-2 sm:justify-start sm:pl-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9_1.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Denze Russel
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100_06 w-full" />
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end my-2 sm:justify-start sm:pl-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9_1.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Denze Russel
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100_06 w-full" />
                      <div className="w-full">
                        <div className="bg-gray-100_06 flex flex-col font-opensans h-full items-center justify-center
                         p-[3px] rounded-[15px] w-full">
                          <div className="flex flex-row gap-3.5 items-center justify-end my-2 sm:justify-start sm:pl-2 w-[95%] md:w-full">
                            <Img
                              className="h-[54px] md:h-auto object-cover rounded-lg w-[54px]"
                              src="images/img_rectangle9_1.png"
                              alt="rectangleNine"
                            />
                            <div className="flex flex-col font-poppins items-start justify-start overflow-hidden text-ellipsis
                              whitespace-nowrap">
                              <div className="flex flex-row  justify-between items-center w-full">
                                <Text
                                  className="text-black-900_03 text-xs"
                                  size="txtPoppinsBold12"
                                >
                                  Denze Russel
                                </Text>
                                <Text
                                  className="text-[8px] text-black-900_03"
                                  size="txtInterSemiBold8"
                                >
                                  20 Apr
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] text-[10px] text-black-900_03"
                                size="txtPoppinsSemiBold10"
                              >
                                This is your email subject your Thursday...
                              </Text>
                              <Text
                                className="mt-1 text-[10px] text-black-900_03"
                                size="txtPoppinsRegular10Black90003"
                              >
                                <>
                                  Hello Mark, i don&#39;t have any other
                                  requi...
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              {/* start */}
              <div className="bg-white-A700 flex flex-col items-center justify-start md:mt-0 mt-[5px] p-[26px] 
              sm:px-5 rounded-[26px] w-[73%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                    <Img
                      className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                      src="images/img_rectangle41959.png"
                      alt="rectangle41959"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900_03 text-xl"
                        size="txtProximaSoftSemiBold20Black90003"
                      >
                        Tom Nathan
                      </Text>
                      <Text
                        className="text-gray-500_01 text-xs"
                        size="txtInterRegular12Gray50001"
                      >
                        tom_nathan123@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-100_06 h-0.5 mt-[15px] w-full" />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-center 
                     mt-3 w-[70%] sm:w-full">
                    <Text
                      className="leading-[28.00px] mb-[3px] text-white-A700 text-base p-[10px]
                       rounded-lg sm:w-full bg-[#743C95]"
                      size="txtPoppinsRegular20WhiteA700"
                    >
                      I hope this message finds you well. I am writing to bring
                      to your attention a concerning issue regarding a recent
                      transaction I made on your platform. On 25 of this month,
                      I purchased a power bank and made the payment
                      successfully. However, despite the completion of the
                      payment process, I have yet to receive the power bank. I
                      would like to emphasize the urgency of this matter, as the
                      power bank was intended to be a necessary tool for my
                      upcoming travels. As a paying customer, I have a
                      reasonable expectation of receiving the product within a
                      reasonable timeframe.
                    </Text>
                  </div>
                  <div className="w-full flex flex-col items-end justify-end">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-end
                      mt-10 w-[70%]"
                    >
                      <Text
                        className="leading-[28.00px] mb-[3px] text-white-A700 text-base p-[10px] rounded-lg bg-[#CBA13D] sm:w-full"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        <>
                          OK, let ne check the transactions and once I confirm I
                          will release the batteries but kindly don’t leave the
                          station till the confirmation once I release the
                          batteries and you have left the station then it will be
                          your responsibility.
                          <br />
                          Thank you{" "}
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-opensans gap-[15px] items-center justify-start w-full mt-3">
                    <div className="flex items-center relative w-full md:w-full 
                      border border-gray-500 border-solid rounded-[10px]">
                      <input
                        className=" text-gray-500_03 text-lg px-3 py-4 rounded-[10px] w-full"
                        placeholder="Write your message..."
                      />
                    </div>
                    <div className="bg-purple-700 flex flex-col items-center justify-start p-[11px] rounded-[10px] w-[7%] md:w-full">
                      <button>
                        <Img
                          className=""
                          src="images/img_fluentsend28filled.svg"
                          alt="fluentsend28fil"
                        />
                      </button>
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

export default CustomerServicePage;
