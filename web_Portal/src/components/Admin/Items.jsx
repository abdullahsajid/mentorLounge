import React,{useState} from 'react'
import { Img } from 'components'
import ReactApexChart from 'react-apexcharts'

const Items = ({adminAnalytics}) => {
    const getPerformanceData = (mentorPerformance) => {
        return {
            series: [{
                name: "Revenue",
                data: [mentorPerformance]
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
    }

  return (
    <>
    {adminAnalytics?.map((item) => (
        <tr className="overflow-hidden">
            <td className="p-3 px-9 sm:p-0">
                <Img
                    className="h-12 md:h-auto object-cover rounded-[28px] w-12 ml-[31px]"
                    src={`${item?.user?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${item?.user?.profile_picture_url}` : "images/default.png"}`}
                    alt="unsplashzqv4fcm"
                />
            </td>
            <td className="text-center text-xs font-semibold">{item?.name}</td>
            <td className="text-center">{item?.mentorFields[0]}</td>
            <td className="flex items-center justify-center h-[77px]">
                <svg width="49" height="17" viewBox="0 0 49 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.08283 5.83444L7.92308 2.12844C7.97665 2.02119 8.05904 1.93098 8.161 1.86793C8.26297 1.80488 8.38049 1.77148 8.50037 1.77148C8.62026 1.77148 8.73777 1.80488 8.83974 1.86793C8.94171 1.93098 9.0241 2.02119 9.07766 2.12844L10.9179 5.83444L15.0319 6.43228C15.1506 6.44873 15.2622 6.49822 15.3541 6.57508C15.446 6.65195 15.5144 6.75311 15.5516 6.867C15.5887 6.98089 15.5931 7.10294 15.5642 7.2192C15.5353 7.33547 15.4743 7.44127 15.3882 7.52453L12.4118 10.4074L13.1145 14.4804C13.2044 15.0031 12.6519 15.4012 12.1795 15.1547L8.50037 13.2309L4.82058 15.1547C4.34883 15.4019 3.79633 15.0031 3.88629 14.4797L4.58896 10.4067L1.61254 7.52382C1.52682 7.4405 1.4662 7.33481 1.43755 7.21875C1.40891 7.10269 1.41341 6.98093 1.45052 6.8673C1.48764 6.75366 1.55588 6.65273 1.64751 6.57595C1.73913 6.49917 1.85046 6.44964 1.96883 6.43299L6.08283 5.83444Z" fill="#CBA13D"/>
                    <path d="M22.0828 5.83444L23.9231 2.12844C23.9766 2.02119 24.059 1.93098 24.161 1.86793C24.263 1.80488 24.3805 1.77148 24.5004 1.77148C24.6203 1.77148 24.7378 1.80488 24.8397 1.86793C24.9417 1.93098 25.0241 2.02119 25.0777 2.12844L26.9179 5.83444L31.0319 6.43228C31.1506 6.44873 31.2622 6.49822 31.3541 6.57508C31.446 6.65195 31.5144 6.75311 31.5516 6.867C31.5887 6.98089 31.5931 7.10294 31.5642 7.2192C31.5353 7.33547 31.4743 7.44127 31.3882 7.52453L28.4118 10.4074L29.1145 14.4804C29.2044 15.0031 28.6519 15.4012 28.1795 15.1547L24.5004 13.2309L20.8206 15.1547C20.3488 15.4019 19.7963 15.0031 19.8863 14.4797L20.589 10.4067L17.6125 7.52382C17.5268 7.4405 17.4662 7.33481 17.4376 7.21875C17.4089 7.10269 17.4134 6.98093 17.4505 6.8673C17.4876 6.75366 17.5559 6.65273 17.6475 6.57595C17.7391 6.49917 17.8505 6.44964 17.9688 6.43299L22.0828 5.83444Z" fill="#CBA13D"/>
                    <path d="M38.0828 5.83444L39.9231 2.12844C39.9766 2.02119 40.059 1.93098 40.161 1.86793C40.263 1.80488 40.3805 1.77148 40.5004 1.77148C40.6203 1.77148 40.7378 1.80488 40.8397 1.86793C40.9417 1.93098 41.0241 2.02119 41.0777 2.12844L42.9179 5.83444L47.0319 6.43228C47.1506 6.44873 47.2622 6.49822 47.3541 6.57508C47.446 6.65195 47.5144 6.75311 47.5516 6.867C47.5887 6.98089 47.5931 7.10294 47.5642 7.2192C47.5353 7.33547 47.4743 7.44127 47.3882 7.52453L44.4118 10.4074L45.1145 14.4804C45.2044 15.0031 44.6519 15.4012 44.1795 15.1547L40.5004 13.2309L36.8206 15.1547C36.3488 15.4019 35.7963 15.0031 35.8863 14.4797L36.589 10.4067L33.6125 7.52382C33.5268 7.4405 33.4662 7.33481 33.4376 7.21875C33.4089 7.10269 33.4134 6.98093 33.4505 6.8673C33.4876 6.75366 33.5559 6.65273 33.6475 6.57595C33.7391 6.49917 33.8505 6.44964 33.9688 6.43299L38.0828 5.83444Z" fill="#CBA13D"/>
                </svg>
            </td>
            <td className="text-center">{item?.averageSessionLength}</td>
            <td>
                <ReactApexChart options={getPerformanceData(item?.mentorPerformance).options} series={getPerformanceData(item?.mentorPerformance).series} type="bar" height={60} />
            </td>
            <td className="text-center pr-5 font-bold">{item?.mentorPerformance}%</td>
        </tr>
    ))}
    </>
  )
}

export default Items
