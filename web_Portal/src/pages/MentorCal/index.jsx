import React,{useEffect, useState} from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { FilterAvailability,isTimeSlotAvailable} from "utils";
import { useCreateAvailabilityMutation } from "features/apis/mentor";
import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { FilterSessionForNotifierBaseOnDateForMentor,FilterSessionForNotifierBaseOnUpcomingDateForMentor,FilterSessionForNotifierBaseOnTodayForMentor} from "utils";
import * as moment from "moment";
import { getSessionTimeInMinutes } from "utils";
import toast from 'react-hot-toast';

const DesktopThreePage = ({ toggle }) => {
  const [startTime,setStartTime] = useState(null)
  const [endTime,setEndTime] = useState(null)
  const [duration,setDuration] = useState('')
  const [getDate, setDate] = useState(null)
  const [isUpcoming,setIsUpcoming] = useState(false)
  const [isTodayView, setIsTodayView] = useState(true);
  const [createAvailability] = useCreateAvailabilityMutation()

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
  
  const baseOnDate = FilterSessionForNotifierBaseOnDateForMentor(getDate)
  const upcompingSession = FilterSessionForNotifierBaseOnUpcomingDateForMentor()
  const todaySession = FilterSessionForNotifierBaseOnTodayForMentor()

  let st = `${moment(getDate)?.format('YYYY-MM-DD')} ${startTime}`
  let et = `${moment(getDate)?.format('YYYY-MM-DD')} ${endTime}`

  const startMoment = moment(st, 'YYYY-MM-DD HH:mm:ss'); 
  const endMoment = moment(et, 'YYYY-MM-DD HH:mm:ss');
  // console.log("startMoment",startMoment);
  // console.log("endMoment",endMoment);
  const dur = moment.duration(endMoment.diff(startMoment));
  const durationInMinutes = dur.asMinutes();
  // console.log("durationInMinutes",durationInMinutes);

  const handlerCreateAvail = async () => {

    const gettimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const exactEndTime = startMoment.clone().add(durationInMinutes-1, 'minutes').seconds(59);
    let availData = {
      availabilityStartTime: startMoment.format('YYYY-MM-DD HH:mm:ss'),
      availabilityEndTime: exactEndTime.format('YYYY-MM-DD HH:mm:ss'),
      mentorTimeZone: gettimezone,
      availabilityDuration: `${duration} Minutes`,
    }

    if(startTime === null || endTime === null || duration === ''){
      toast.error(`please fill fields!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }else{
      const {data} = await createAvailability(availData)
      if(data?.status === 'Success'){
        toast.success(`${data?.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
        setStartTime('')
        setEndTime('')
        setDuration('')
        setDate('')
      }else if(data?.status === 'Fail'){
        toast.error(`${data?.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
      }
      console.log(data);
    } 

  }

  useEffect(() => {
    setDuration(durationInMinutes)
  },[durationInMinutes])


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
            {getDate && (<div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-x-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="starttime">Start:</label>
                    <input 
                      type="time" 
                      className="rounded-md" 
                      id="starttime"
                      value={startTime}
                      onChange={(e) => {
                        setStartTime(e.target.value)
                      }} 
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="endtime">End:</label>
                    <input 
                      type="time" 
                      className="rounded-md" 
                      id="endtime" 
                      value={endTime}
                      onChange={(e) => {
                        setEndTime(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="text"
                    placeholder='hh/mm'
                    className="rounded-md"
                    value={duration ? `${duration} min` : 'hh/mm'}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex items-end justify-end h-full">
                <button className="bg-[#743C95] text-[#fff] rounded-md py-3 px-2" 
                  onClick={() => handlerCreateAvail()}>
                  Add Availability
                </button>
              </div>
            </div>)}
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
