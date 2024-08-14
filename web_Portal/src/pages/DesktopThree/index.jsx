import React,{useState} from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { FilterSessionForNotifierBaseOnDate,FilterSessionForNotifierBaseOnUpcomingDate,FilterSessionForNotifierBaseOnToday} from "utils";
import * as moment from "moment";

const DesktopThreePage = ({ toggle }) => {

  const [getDate, setDate] = useState(null)
  const [isUpcoming,setIsUpcoming] = useState(false)
  const [isTodayView, setIsTodayView] = useState(true);

  const handleData = (val) => {
    setDate(val)
    setIsTodayView(false);
    setIsUpcoming(false);
  }

  const handleTodayClick = () => {
    setIsTodayView(true);
    setIsUpcoming(false);
    setDate(null)
    
  };

  const handleUpcomingClick = () => {
    setIsUpcoming(true);
    setIsTodayView(false);
    setDate(null)
  };

  const baseOnDate = FilterSessionForNotifierBaseOnDate(getDate)
  const upcompingSession = FilterSessionForNotifierBaseOnUpcomingDate()
  const todaySession = FilterSessionForNotifierBaseOnToday()
  // console.log(getDate);
  // console.log("selected Date:",baseOnDate);
  // console.log("upcoming",upcompingSession);
  // console.log("todaySession",todaySession);
  return (
    <>
      <div className="fixed bottom-0 font-proximasoft md:px-5 right-[0] w-[29%] sm:w-full sm:px-0">
        <div className="m-auto w-full bg-white-A700 rounded-[21px] border border-solid border-[#000] px-4 py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[13px] w-full">
              <div className="flex justify-between items-center w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtProximaSoftSemiBold30"
                >
                  Calendar
                </Text>
                <div className="flex items-center"
                >
                  <Img
                    className="h-4 w-4  cursor-pointer "
                    src="images/img_close.svg"
                    alt="close"
                    onClick={toggle}
                  />
                </div>
              </div>
            </div>
            <Calendar
             value={getDate}
             onChange={handleData}
             minDate={new Date()}  
            />
            <div className="flex flex-row font-poppins gap-[9px] items-center justify-start w-[53%] md:w-full transition-all">
              <Text
                className={`flex justify-center items-center pb-0.5 pt-[5px] border border-solid sm:px-5 px-[23px] rounded-[13px] text-xs w-auto !py-2 transition-all cursor-pointer
                  ${isTodayView ? "bg-purple-700 text-white-A700" : "border-lime-700 text-blue_gray-400"}`}
                size="txtPoppinsMedium12"
                onClick={handleTodayClick}
              >
                Today
              </Text>
              <Text
                className={`flex justify-center items-center border border-solid pb-0.5 pt-[5px] sm:px-5 px-[23px] rounded-[13px] text-xs w-auto !py-2 transition-all cursor-pointer
                  ${isUpcoming ? "bg-purple-700 text-white-A700" : "border-lime-700 text-blue_gray-400"}`}
                size="txtPoppinsMedium12Bluegray400"
                onClick={handleUpcomingClick}
              >
                Upcoming
              </Text>
            </div>

            <div className="bg-lime-700 h-[2px] w-full"></div>


            <List
              className="flex flex-col font-poppins gap-[31px] w-full h-[50%] overflow-y-auto"
              orientation="vertical"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-row gap-2 items-start justify-between w-full">
                  
                  <div className="flex flex-col gap-3 w-full">
                    {isTodayView && ((todaySession?.length === 0 && isUpcoming===false) ? (<div>today no session at this moment</div>) : isTodayView &&  todaySession?.map((item) => (
                      <>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                      <Line className="bg-purple-700 h-[70px] mt-0.5 w-0.5" />
                        <div className="flex flex-col gap-1"> 
                          <div className="h-8 md:h-[19px] relative w-full">
                            <Text
                              className="absolute bottom-[0] left-[0] text-[10px] text-blue_gray-700"
                              size="txtPoppinsMedium10"
                            >
                              Session with {item?.mentor?.name}
                            </Text>
                            <Text
                              className=" text-black-900_01 text-sm w-max"
                              size="txtPoppinsMedium14"
                            >
                              {item?.requestDescription}
                            </Text>
                          </div>
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            {moment(item?.requestStartTime)?.format('LT')} - {moment(item?.requestEndTime)?.format('LT')}
                          </Text>
                          {/* <Text
                            className="text-[9.84px] text-purple-700 underline"
                            size="txtPoppinsMedium984"
                          >
                            Join Now
                          </Text> */}
                        </div>
                      </div>
                      </>
                    )))}
                    {isUpcoming && (upcompingSession?.length === 0 && isTodayView===false) ? (<div>upcomingno session at this moment</div>) : isUpcoming && upcompingSession?.map((item) => (
                      <>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                      <Line className="bg-purple-700 h-[70px] mt-0.5 w-0.5" />
                        <div className="flex flex-col gap-1"> 
                          <div className="h-8 md:h-[19px] relative w-full">
                            <Text
                              className="absolute bottom-[0] left-[0] text-[10px] text-blue_gray-700"
                              size="txtPoppinsMedium10"
                            >
                              Session with {item?.mentor?.name}
                            </Text>
                            <Text
                              className=" text-black-900_01 text-sm w-max"
                              size="txtPoppinsMedium14"
                            >
                              {item?.requestDescription}
                            </Text>
                          </div>
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            {moment(item?.requestStartTime)?.format('LT')} - {moment(item?.requestEndTime)?.format('LT')}
                          </Text>
                          {/* <Text
                            className="text-[9.84px] text-purple-700 underline"
                            size="txtPoppinsMedium984"
                          >
                            Join Now
                          </Text> */}
                        </div>
                      </div>
                      </>
                    ))}
                    {baseOnDate && (baseOnDate?.length === 0 && isTodayView===false && isUpcoming===false )  ? (<div>no session at this moment</div>) : baseOnDate?.length>0 && baseOnDate?.map((item) => (
                      <>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                      <Line className="bg-purple-700 h-[70px] mt-0.5 w-0.5" />
                        <div className="flex flex-col gap-1"> 
                          <div className="h-8 md:h-[19px] relative w-full">
                            <Text
                              className="absolute bottom-[0] left-[0] text-[10px] text-blue_gray-700"
                              size="txtPoppinsMedium10"
                            >
                              Session with {item?.mentor?.name}
                            </Text>
                            <Text
                              className=" text-black-900_01 text-sm w-max"
                              size="txtPoppinsMedium14"
                            >
                              {item?.requestDescription}
                            </Text>
                          </div>
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            {moment(item?.requestStartTime)?.format('LT')} - {moment(item?.requestEndTime)?.format('LT')}
                          </Text>
                          {/* <Text
                            className="text-[9.84px] text-purple-700 underline"
                            size="txtPoppinsMedium984"
                          >
                            Join Now
                          </Text> */}
                        </div>
                      </div>
                      </>
                    ))}
                </div>
                </div>
              </div>
            </List>
          </div>
          {/* <Line className=" bg-lime-700 h-px w-full" /> */}

        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
