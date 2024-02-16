import React,{ useEffect, useState } from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import ReactApexChart from 'react-apexcharts'

const AnalyticsandReportingPage = () => {
  const [revenue, setRevenue] = useState({
    series: [{
      name: "Revenue",
      data: [100, 150, 250, 200, 210, 320, 210, 330, 400, 350, 290, 380]
    }],
    labels: ["Revenue"],
    options: {
      chart: {
        width:"100%", 
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
  const[performance,setPerformance] = useState(
    {
      series: [{
        name: "Revenue",
        data: [95]
      }],
      labels: ["Revenue"],
      options: {
        chart: {
          width:"100%", 
          type: 'bar',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
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
          show: false,
          categories: ['95%'],
          labels: {
            rotate: -45
          },
          tickPlacement: 'on',
          axisBorder: {
            show: false
          },
          floating: true,
          axisTicks: {
            show: false
          },
         
        },
        yaxis: {
          labels: {
            show: false,
          }
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
    }
  )
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
          src="images/img_checkmark_purple_700.svg"
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
              className="flex flex-col items-center justify-start mb-[640px] mt-9 pt-0.5 w-full"
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
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 w-full">
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
              <div className="flex flex-row gap-2.5 items-center justify-center mr-2 p-2.5 w-auto">
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
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between mt-11 w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
                <div className="gap-6 grid grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentors
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        100
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentees
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        105
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[15px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[34px] items-start justify-start mb-1 mt-[13px] pb-1.5 px-1.5 w-[99%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Active Users
                        </Text>
                      </div>
                      <Text
                        className="mb-5 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        <span className="text-black-900_01 font-inter text-left font-bold">
                          150
                        </span>
                        <span className="text-black-900_7f font-inter text-left text-[18.44px] font-semibold">
                          /205
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Av. Session Length
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        30m 34s
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-[26px] items-start justify-start p-[17px] rounded-[20px] shadow-bs20 w-[59%] md:w-full">
                <Text
                  className="text-black-900_01 text-xl"
                  size="txtProximaSoftSemiBold20Black90001"
                >
                  Activity
                </Text>
                <div className="!w-full">
                    {revenue && <ReactApexChart options={revenue.options} series={revenue.series} type="bar" />}
                  </div>
              </div>
            </div>
            <div className="w-[96%] sm:w-full overflow-auto">
            <table className="table-auto bg-white-A700  font-poppins 
                 rounded-[24px] shadow-bs19 w-[96%] sm:w-full overflow-hidden my-6">
                  <thead>
                    <tr
                    style={{borderBottom:"2px solid #BA35351A"}}>
                          <th className="px-9"></th>
                          <th className="p-3 px-9">Name</th>
                          <th className="p-3 px-9">Expertise</th>
                          <th className="p-3 px-9">Rates</th>
                          <th className="p-3 px-9">Av.Session len</th>
                          <th className="p-3 px-9">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    <tr className="overflow-hidden">
                      <td className="p-3 px-9 sm:p-0"><Img
                        className="h-[34px] md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-[34px] ml-[31px]"
                        src="images/img_unsplashzqv4fcmzkuq_34x34.png"
                        alt="unsplashzqv4fcm"
                      /></td>
                        <td className="text-center">Bisa</td>
                        <td className="text-center">Ui Design</td>
                        <td className="flex items-center justify-center h-[77px]">
                          <svg width="49" height="17" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08283 5.83444L7.92308 2.12844C7.97665 2.02119 8.05904 1.93098 8.161 1.86793C8.26297 1.80488 8.38049 1.77148 8.50037 1.77148C8.62026 1.77148 8.73777 1.80488 8.83974 1.86793C8.94171 1.93098 9.0241 2.02119 9.07766 2.12844L10.9179 5.83444L15.0319 6.43228C15.1506 6.44873 15.2622 6.49822 15.3541 6.57508C15.446 6.65195 15.5144 6.75311 15.5516 6.867C15.5887 6.98089 15.5931 7.10294 15.5642 7.2192C15.5353 7.33547 15.4743 7.44127 15.3882 7.52453L12.4118 10.4074L13.1145 14.4804C13.2044 15.0031 12.6519 15.4012 12.1795 15.1547L8.50037 13.2309L4.82058 15.1547C4.34883 15.4019 3.79633 15.0031 3.88629 14.4797L4.58896 10.4067L1.61254 7.52382C1.52682 7.4405 1.4662 7.33481 1.43755 7.21875C1.40891 7.10269 1.41341 6.98093 1.45052 6.8673C1.48764 6.75366 1.55588 6.65273 1.64751 6.57595C1.73913 6.49917 1.85046 6.44964 1.96883 6.43299L6.08283 5.83444Z" fill="#CBA13D"/>
                            <path d="M22.0828 5.83444L23.9231 2.12844C23.9766 2.02119 24.059 1.93098 24.161 1.86793C24.263 1.80488 24.3805 1.77148 24.5004 1.77148C24.6203 1.77148 24.7378 1.80488 24.8397 1.86793C24.9417 1.93098 25.0241 2.02119 25.0777 2.12844L26.9179 5.83444L31.0319 6.43228C31.1506 6.44873 31.2622 6.49822 31.3541 6.57508C31.446 6.65195 31.5144 6.75311 31.5516 6.867C31.5887 6.98089 31.5931 7.10294 31.5642 7.2192C31.5353 7.33547 31.4743 7.44127 31.3882 7.52453L28.4118 10.4074L29.1145 14.4804C29.2044 15.0031 28.6519 15.4012 28.1795 15.1547L24.5004 13.2309L20.8206 15.1547C20.3488 15.4019 19.7963 15.0031 19.8863 14.4797L20.589 10.4067L17.6125 7.52382C17.5268 7.4405 17.4662 7.33481 17.4376 7.21875C17.4089 7.10269 17.4134 6.98093 17.4505 6.8673C17.4876 6.75366 17.5559 6.65273 17.6475 6.57595C17.7391 6.49917 17.8505 6.44964 17.9688 6.43299L22.0828 5.83444Z" fill="#CBA13D"/>
                            <path d="M38.0828 5.83444L39.9231 2.12844C39.9766 2.02119 40.059 1.93098 40.161 1.86793C40.263 1.80488 40.3805 1.77148 40.5004 1.77148C40.6203 1.77148 40.7378 1.80488 40.8397 1.86793C40.9417 1.93098 41.0241 2.02119 41.0777 2.12844L42.9179 5.83444L47.0319 6.43228C47.1506 6.44873 47.2622 6.49822 47.3541 6.57508C47.446 6.65195 47.5144 6.75311 47.5516 6.867C47.5887 6.98089 47.5931 7.10294 47.5642 7.2192C47.5353 7.33547 47.4743 7.44127 47.3882 7.52453L44.4118 10.4074L45.1145 14.4804C45.2044 15.0031 44.6519 15.4012 44.1795 15.1547L40.5004 13.2309L36.8206 15.1547C36.3488 15.4019 35.7963 15.0031 35.8863 14.4797L36.589 10.4067L33.6125 7.52382C33.5268 7.4405 33.4662 7.33481 33.4376 7.21875C33.4089 7.10269 33.4134 6.98093 33.4505 6.8673C33.4876 6.75366 33.5559 6.65273 33.6475 6.57595C33.7391 6.49917 33.8505 6.44964 33.9688 6.43299L38.0828 5.83444Z" fill="#CBA13D"/>
                          </svg>
                        </td>
                        <td className="text-center">1 hr 20 mins</td>
                        <td>
                          <ReactApexChart options={performance.options} series={performance.series} type="bar" height={60} />
                        </td>
                        <td className="text-center pr-5 font-bold">95%</td>
                    </tr>
                  </tbody>
                </table>  
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsandReportingPage;
