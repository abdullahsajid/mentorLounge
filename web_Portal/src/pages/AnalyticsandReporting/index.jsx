import React,{ useEffect, useState } from "react";
import { Img, Line, List, Text } from "components";
import ReactApexChart from 'react-apexcharts'
import { useAdminAnalyticsMutation } from "features/apis/admin";
import Items from "components/Admin/Items";
import Loader from "pages/Loader";

const AnalyticsandReportingPage = () => {
  const [adminAnalytics,{isLoading}] = useAdminAnalyticsMutation()
  const [analytics,setAnalytics] = useState([])
  const [itemOffset,setItemOffset] = useState(0)
  const [payload,setPayload] = useState({
    sortproperty: "createdAt",
    sortorder: -1,
    offset: itemOffset,
    limit: 5,
    query: {
        critarion: {active : true, year: "2024"},
        
        addedby: "_id email name",
        
        lastModifiedBy: "_id email name"
    }
  })
  const [revenue, setRevenue] = useState({
    series: [{
      name: "Revenue",
      data: []
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
  
  const getAnalytics = async () => {
    const {data} = await adminAnalytics(payload)
    setAnalytics(data)
  }

  useEffect(() => {
    getAnalytics()
  },[payload])
  
  useEffect(() => {
    if (analytics?.data?.activityMenteeLogin) {
      setRevenue((prevRevenue) => ({
        ...prevRevenue,
        series: [{
          name: "Revenue",
          data: analytics.data.activityMenteeLogin.map((item) => item.menteesCount)
        }]
      }));
    }
  }, [analytics]);

  // const handlerPageNext = async (e) => {
  //   e.preventDefault()
  //   const newOffset = itemOffset + 5
  //   setItemOffset(newOffset)
  //   setPayload((prevPayload) => ({
  //     ...prevPayload,
  //     offset: newOffset
  //   }));
  // }

  // const handlerPagePrevious = async (e) => {
  //   e.preventDefault()
  //   const newOffset = Math.max(0,itemOffset - 5)
  //   setItemOffset(newOffset)
  //   setPayload((prevPayload) => ({
  //     ...prevPayload,
  //     offset: newOffset
  //   }));
  // }

  // console.log("analytics",analytics)

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins w-full ml-auto sm:!w-full md:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start sm:px-0 md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between mt-11 w-[93%] sm:px-2 md:w-full">
              <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
                <div className="gap-6 grid grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto !font-poppins"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentors
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01 !font-poppins"
                        size="txtInterBold2603"
                      >
                        {analytics?.data?.totalMentors}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto !font-poppins"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Registered Mentees
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01 !font-poppins"
                        size="txtInterBold2603"
                      >
                        {analytics?.data?.totalMentees}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[15px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[34px] items-start justify-start mb-1 mt-[13px] pb-1.5 px-1.5 w-[99%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2 text-sm tracking-[-0.17px] w-auto !font-poppins"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Active Users
                        </Text>
                      </div>
                      <Text
                        className="mb-5 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01"
                        size="txtInterBold2603"
                      >
                        <span className="text-black-900_01 text-left font-bold !font-poppins">
                          {analytics?.data?.totalActiveUsers}
                        </span>
                        <span className="text-black-900_7f text-left text-[18.44px] font-semibold !font-poppins">
                          /{analytics?.data?.totalNoOfUsers}
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-end p-[13px] rounded-[21px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-[23px] pb-1.5 px-1.5 w-[97%] md:w-full">
                      <div className="flex flex-col font-poppins items-start justify-start w-auto">
                        <Text
                          className="text-black-900_b2  tracking-[-0.17px] w-auto !font-poppins"
                          size="txtPoppinsMedium14Black900b2"
                        >
                          Av. Session Length
                        </Text>
                      </div>
                      <Text
                        className="mb-7 sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-black-900_01 !font-poppins"
                        size="txtInterBold2603"
                      >
                        {analytics?.data?.avSessionLength}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-[26px] items-start justify-start p-[17px] rounded-[20px] shadow-bs20 w-[59%] md:w-full">
                <Text
                  className="text-black-900_01 text-xl !font-poppins"
                  size="txtProximaSoftSemiBold20Black90001"
                >
                  Activity
                </Text>
                <div className="!w-full">
                    {revenue && <ReactApexChart options={revenue.options} series={revenue.series} type="bar" />}
                </div>
              </div>
            </div>
            <div className="w-[96%] sm:px-2 sm:w-full overflow-auto">
            <table className="table-auto bg-white-A700  !font-poppins
                 rounded-[24px] shadow-bs19 w-full sm:w-full overflow-hidden my-6">
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
                  {isLoading ? (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="py-5">
                        <div className="flex justify-center items-center w-full">
                          <Loader widthAlign={true} customStyle={'!h-full !justify-end'}/>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  ) : (
                    <>
                    <Items adminAnalytics={analytics?.data?.mentorsAvgSessLenAndPerformance}/>
                    {/* <tr className="!w-full">
                      <td className="!w-full flex justify-center items-center p-3">
                        <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold ${itemOffset === 0 && 'opacity-70 cursor-not-allowed'}`}
                        onClick={handlerPagePrevious}
                        disabled={itemOffset === 0}
                        >
                          Previous
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="!w-full flex justify-center items-center p-3">
                        <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold
                          ${analytics?.data?.mentorsAvgSessLenAndPerformance < 5 && "opacity-70 cursor-not-allowed"}`}
                          onClick={handlerPageNext}
                          disabled={analytics?.data?.mentorsAvgSessLenAndPerformance < 5}
                        >
                          Next
                        </button>
                      </td>
                    </tr> */}
                    </>
                  )}
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
