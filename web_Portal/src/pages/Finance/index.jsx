import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'
import { CircularProgressbar } from "react-circular-progressbar";
import { Button, Img, Input, Line, List, Text } from "components";
import "react-circular-progressbar/dist/styles.css";
import { useGetFinanceDataMutation } from "features/apis/admin";

const FinancePage = () => {
  const [finance,setFinance] = useState([])
  const [getFinanceData] = useGetFinanceDataMutation()
  let payloadLoad = {
    sortproperty: "createdAt",
    sortorder: -1,
    offset: 0,
    limit: 50,
    query: {
        critarion: {active : true},
        
        addedby: "_id email name",
        
        lastModifiedBy: "_id email name"
    }
  }
  const monthlyRevenue = [
    { January: 0 },
    { February: 0 },
    { March: 0 },
    { April: 0 },
    { May: 0 },
    { June: 0 },
    { July: 0 },
    { August: 0 },
    { September: 0 },
    { October: 0 },
    { November: 0 },
    { December: 0 }
  ];
  const [revenue, setRevenue] = useState({
    series: [{
      name: "Revenue",
      data: []
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

  useEffect(() => {
    const getData = async () => {
      const {data} = await getFinanceData(payloadLoad)
      if(data.status === 'Success'){
        setFinance(data?.data)
      }
    }
    getData()
  },[])

  useEffect(() => {
    if(finance?.monthlyCommissions){
      setRevenue((pre) => ({
        ...pre,
        series:[{
          ...pre,
          data:finance?.monthlyCommissions?.map(month => Object.values(month)[0])
        }]
      }))
    }
  },[finance])
  

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins ml-auto sm:!w-full md:!w-full w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 sm:px-0 w-full">
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
                        ${finance?.totalUsersEarned}
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
                          {finance?.comparedToLastMonth?.value}%
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
                              ${finance?.totalMentorCommission}.
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
                              ${finance?.totalReferrerCommission}.
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
