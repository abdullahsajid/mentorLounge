import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'
import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const FinancePage = () => {
  const [revenue, setRevenue] = useState({
    series: [{
      name: "Revenue",
      data: [100, 150, 250, 200, 210, 320, 210, 330, 400, 350, 290, 380]
    }],
    labels: ["Revenue"],
    options: {
      chart: {
        width: "100%",
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: '30%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      colors: ['#743C95'],
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        labels: {
          rotate: -45
        },
        tickPlacement: 'on'
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    },
  });
  // useEffect(()=>{
  //   setSales()
  // },[])  
  const [earned, setEarned] = useState({
    series: [44, 55],
    options: {
      chart: {
        width: "100%",
        type: 'donut',
        toolbar: {
          show: false,
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false
        },
      },
    }
  })
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] w-[27px]"
          src="images/img_outlinemoney_purple_700.svg"
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

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
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
                  padding: "13px 13px 13px 46px",
                  gap: "11px",
                  marginTop: "20px",
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
              className="flex flex-col items-center justify-start mb-[639px] mt-[37px] pt-0.5 w-full"
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
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 sm:px-0 w-full">
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
            <div className="flex sm:flex-col flex-row font-poppins md:gap-10 sm:gap-[17px] items-center justify-between mt-[31px] w-[96%]
             md:w-full sm:px-2">
              <Input
                name="group152"
                placeholder="Search"
                className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                wrapClassName="border border-gray-900_1e border-solid flex sm:mt-0 mt-0.5 rounded-[21px] sm:w-full"
                prefix={
                  <Img
                    className="mx-2 w-[18px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[125px] rounded-[20px]"
                leftIcon={
                  <div className="h-[19px] mt-[5px] mb-1 mr-2 w-[19px] rounded-[5px]">
                    <Img
                      className="h-[19px] rounded-[5px]"
                      src="images/img_outline_settings_fine_tuning_tuning.svg"
                      alt="Outline / Settings, Fine Tuning / Tuning "
                    />
                  </div>
                }
                size="sm"
              >
                <div className="font-medium text-[19.13px] text-left">
                  Filter
                </div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row font-poppins gap-3 justify-around mt-3 w-full px-2">
              <div className="sm:w-full overflow-auto sm:px-2 h-full">
                <table className="table-auto bg-white-A700 font-poppins 
                  rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden h-full">
                  <thead>
                    <tr
                      style={{ borderBottom: "2px solid #BA35351A" }}>
                      <th className="p-3 px-7">Sender</th>
                      <th className="p-3 px-7">Reciever</th>
                      <th className="p-3 px-7">Amount</th>
                      <th className="p-3 px-7">Date</th>
                      <th className="p-3 px-7">Commission</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    <tr className="overflow-hidden">
                      <td className="text-center">Bisa</td>
                      <td className="text-center">Denzel</td>
                      <td className="text-center">$100</td>
                      <td className="text-center">10/07/23</td>
                      <td className="text-center">$15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col font-inter gap-6 items-center justify-start w-2/5 sm:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[21px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[22px] mt-1.5 w-full">
                    <div className="flex flex-col items-start justify-start w-full sm:w-full">
                      <div className="flex flex-col font-poppins h-[21px] md:h-auto items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Total Commission Earned
                        </Text>
                      </div>
                      <Text
                        className="mt-3 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        $100
                      </Text>
                      <Button
                        className="border border-lime-700 border-solid cursor-pointer flex items-center justify-center min-w-[61px] mt-[9px] rounded-md"
                        leftIcon={
                          <div className="mt-0.5 mb-[3px] mr-1.5 bg-light_green-700">
                            <Img src="images/img_line_31.svg" alt="Line 31" />
                          </div>
                        }
                        color="light_green_700_4c"
                        size="sm"
                      >
                        <div className="font-inter font-medium leading-[normal] text-left text-xs">
                          18%
                        </div>
                      </Button>
                      <Text
                        className="mt-[11px] text-[10px] text-gray-500_02 tracking-[-0.17px]"
                        size="txtPoppinsMedium10Gray50002"
                      >
                        Compared to $80 last month
                      </Text>
                      <List
                        className="flex flex-col font-dmsans gap-3 ml-1 md:ml-[0] mt-[30px] w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-[3.64px] items-center justify-between w-[161px]">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-2 w-2"
                              src="images/img_user_purple_700_10x99.svg"
                              alt="user"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-300_01 w-auto"
                              size="txtDMSansRegular10"
                            >
                              Mentor
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtDMSansBold12"
                          >
                            <span className="text-blue_gray-900 font-dmsans text-left font-bold">
                              $70.
                            </span>
                            <span className="text-blue_gray-300_01 font-dmsans text-left text-[10px] font-normal">
                              00
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[3.64px] items-center justify-between w-[161px]">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-2 w-2"
                              src="images/img_user_lime_700.svg"
                              alt="user"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-300_01 w-auto"
                              size="txtDMSansRegular10"
                            >
                              Mentees
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtDMSansBold12"
                          >
                            <span className="text-blue_gray-900 font-dmsans text-left font-bold">
                              $30.
                            </span>
                            <span className="text-blue_gray-300_01 font-dmsans text-left text-[10px] font-normal">
                              00
                            </span>
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="h-full w-full">
                      <div className="!w-full h-full" style={{ minHeight: "100%" }}>
                        <CircularProgressbar
                          className="!w-[212px] border-solid m-auto overflow-visible"
                          value={24}
                          strokeWidth={8}
                          styles={{
                            trail: { strokeWidth: 2, stroke: "" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                            },
                          }}
                        ></CircularProgressbar>
                        <div className="flex flex-col items-center justify-start">
                          {/* <Text
                          className="sm:text-[17.2px] md:text-[19.2px] text-[21.2px] text-center text-gray-900_01 w-auto"
                          size="txtInterBold212"
                        >
                          $100
                        </Text> */}
                        </div>
                        {/* <ReactApexChart options={earned.options} series={earned.series} type="donut" height="100%"/> */}
                      </div>

                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col font-proximasoft gap-[25px] items-start justify-start p-4 rounded-[18px] shadow-bs21 w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-black-900_01 text-xl"
                    size="txtProximaSoftSemiBold20Black90001"
                  >
                    Commission Earned
                  </Text>
                  <div className="!w-full">
                    {revenue && <ReactApexChart options={revenue.options} series={revenue.series} type="bar" />}
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

export default FinancePage;
