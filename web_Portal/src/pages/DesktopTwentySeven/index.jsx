import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, List, Text } from "components";

const DesktopTwentySevenPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_vector.svg"
          alt="vector"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_rewind.svg"
          alt="rewind"
        />
      ),
      label: "Search",
    },
    {
      icon: <Img className="h-5 w-5" src="images/img_bag.svg" alt="bag" />,
      label: "Sessions",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_purple_700.svg"
          alt="search_One"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <div className="bg-purple-700_63 flex flex-col font-poppins items-center justify-end mx-auto sm:pr-5 pr-[34px] w-full">
        <div className="flex flex-col items-center justify-end mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]"
            >
              <Img
                className="h-[173px] md:h-auto md:ml-[0] ml-[70px] mr-[79px] mt-[25px] object-cover w-[53%]"
                src="images/img_whatsappimage20231114.png"
                alt="whatsappimageTwenty"
              />
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "23px 23px 23px 42px",
                    gap: "23px",
                    marginTop: "11px",
                    color: "#535353",
                    fontSize: "20px",
                    [`&:hover, &.ps-active`]: {
                      color: "#743c95",
                      fontWeight: "500 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[504px] mt-[31px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col font-proximasoft gap-10 items-start justify-start md:mt-0 mt-[45px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftSemiBold48Black90001"
              >
                My Wallet
              </Text>
              <List
                className="bg-white-A700 flex flex-col font-poppins gap-[35px] items-center p-[53px] md:px-10 sm:px-5 rounded-[20px] shadow-bs3 w-full"
                orientation="vertical"
              >
                <div className="border-b-2 border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end pl-0.5 py-0.5 shadow-bs17 w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-[99%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                      src="images/img_man1_90x90.png"
                      alt="manOne"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col gap-[4.75px] items-start justify-start mb-0.5 w-[350px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-black-900 text-center w-auto"
                            size="txtPoppinsRegular3325"
                          >
                            Amari
                          </Text>
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center w-auto"
                              size="txtPoppinsRegular2375"
                            >
                              Session on career discussion
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:mt-0 mt-[5px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-center text-purple-700"
                            size="txtPoppinsMedium3325"
                          >
                            $568.00
                          </Text>
                          <Text
                            className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center"
                            size="txtPoppinsRegular2375"
                          >
                            Sat, 15 July{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end pl-0.5 py-0.5 shadow-bs17 w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-[99%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                      src="images/img_man1_3.png"
                      alt="manOne"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col gap-[4.75px] items-start justify-start mb-0.5 w-auto">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-black-900 text-center w-auto"
                            size="txtPoppinsRegular3325"
                          >
                            Juma
                          </Text>
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center w-auto"
                              size="txtPoppinsRegular2375"
                            >
                              Session on career discussion
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:mt-0 mt-[5px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-center text-purple-700"
                            size="txtPoppinsMedium3325"
                          >
                            $568.00
                          </Text>
                          <Text
                            className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center"
                            size="txtPoppinsRegular2375"
                          >
                            Sat, 15 July{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end pl-0.5 py-0.5 shadow-bs17 w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-[99%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                      src="images/img_man1_4.png"
                      alt="manOne"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col gap-[4.75px] items-start justify-start mb-0.5 w-[350px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-black-900 text-center w-auto"
                            size="txtPoppinsRegular3325"
                          >
                            Denzel
                          </Text>
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center w-auto"
                              size="txtPoppinsRegular2375"
                            >
                              Session on career discussion
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:mt-0 mt-[5px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-center text-purple-700"
                            size="txtPoppinsMedium3325"
                          >
                            $568.00
                          </Text>
                          <Text
                            className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center"
                            size="txtPoppinsRegular2375"
                          >
                            Sat, 15 July{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-gray-900_1e border-solid flex md:flex-1 flex-col items-center justify-end pl-0.5 py-0.5 shadow-bs17 w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-[99%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                      src="images/img_man1_5.png"
                      alt="manOne"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col gap-[4.75px] items-start justify-start mb-0.5 w-[350px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-black-900 text-center w-auto"
                            size="txtPoppinsRegular3325"
                          >
                            Bisa
                          </Text>
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center w-auto"
                              size="txtPoppinsRegular2375"
                            >
                              Session on career discussion
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:mt-0 mt-[5px]">
                          <Text
                            className="capitalize sm:text-[29.25px] md:text-[31.25px] text-[33.25px] text-center text-purple-700"
                            size="txtPoppinsMedium3325"
                          >
                            $568.00
                          </Text>
                          <Text
                            className="capitalize sm:text-[19.75px] md:text-[21.75px] text-[23.75px] text-blue_gray-700 text-center"
                            size="txtPoppinsRegular2375"
                          >
                            Sat, 15 July{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwentySevenPage;
