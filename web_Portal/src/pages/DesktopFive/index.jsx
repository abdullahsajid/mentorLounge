import React, { useEffect, useMemo, useState } from "react";
import { Button, Text } from "components";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useLocation, useNavigate } from "react-router-dom";
import { useBookSessionMutation } from "features/apis/mentee";
import toast from 'react-hot-toast';
import { Cross as Hamburger } from 'hamburger-react'
// import * as moment from 'moment';
import moment from 'moment-timezone';

const DesktopFivePage = ({ toggleSideBar, setToggleSidebar }) => {
  const [bookSession] = useBookSessionMutation()
  const [selectDuration, setSelectDuration] = useState('20 minutes')
  const location = useLocation()
  const navigation = useNavigate()
  const [filterData, setFilterData] = useState([])
  const [filterAvailability, setFilterAvailability] = useState([])
  const [selectQOne, setSelectQOne] = useState('Interview questions')
  const [selectQTwo, setSelectQTwo] = useState('UX Design')
  const [getQuesThree, setQuesThree] = useState('')
  const [getDate, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [selectedDates, setSelectedDates] = useState([]);
  const [startTime,setStartTime] = useState('')
  const [endTime,setEndTime] = useState('')
  const [selectItem,setSelectedItem] = useState(null)

  const handlerFilter = (val) => {
    let splitVal = val?.split(' ')
    let filterRes = location?.state?.available?.filter(item => item?.availabilityDuration?.slice(0, 2) === splitVal[0])
    // console.log("Filter Res=> ", filterRes)
    setFilterData(filterRes)
  }

  // console.log("availability:",location.state.available);

  // const getSessionTimeInMinutes = (
  //   availabilityStartTime,
  //   availabilityEndTime
  // ) => {
  //   const startTime = new Date(availabilityStartTime);
  //   const endTime = new Date(availabilityEndTime);
  
  //   // Calculate the difference in milliseconds
  //   const timeDifference = endTime - startTime;
  
  //   // Convert milliseconds to minutes
  //   const minutes = Math.floor(timeDifference / (1000 * 60));
  
  //   return minutes;
  // };

  // let resmin = getSessionTimeInMinutes(location?.state?.available[1]?.availabilityStartTime,location?.state?.available[1]?.availabilityEndTime)
  // console.log("minutes: ",resmin);
  // const gettimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log("gettimezone",gettimezone);


  const handlerDurationChange = (e) => {
    setSelectDuration(e.target.id)
    handlerFilter(e.target.id)
  }

  const handleFilterDate = (date) => {
    const formattedDate = moment(date)?.format('YYYY-MM-DD')
    // console.log("filterDate:",formattedDate);
    const filterDate = filterData?.filter(item => (new Date(item?.availabilityStartTime)?.toISOString()?.slice(0, 10) === formattedDate))
    // console.log("filterDate",filterDate);
    setFilterAvailability(filterDate)
  }

  const handleData = (val) => {
    // const formattedDate = val?.toLocaleDateString(undefined, {
    //   year: 'numeric',
    //   month: '2-digit',
    //   day: '2-digit',
    // });
    // console.log("date",val);
    setDate(val)
    handleFilterDate(val)
  }
  // console.log("Get Date: ",getDate);

  const handlerQusOne = (val) => {
    setSelectQOne(val)
  }
  const handlerQusTwo = (val) => {
    setSelectQTwo(val)
  }

  useEffect(() => {
    setToggleSidebar(false)
  }, [])

  // useEffect(() => {
  //   if ((filterData !== null) && (filterData !== undefined) && (filterData.length > 0)) {
  //     handleFilterDate()
  //   }
  // }, [getDate])

  const quesOne = useMemo(() => (
    <div className="flex flex-row gap-[11px] items-center sm:flex-wrap w-full">
      <Button
        className={` cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-[13.6px] text-center
        ${(selectQOne === 'SOP Review') ? 'border-purple-700 bg-purple-700 text-white-A700' : 'text-black-900_01'}`}
        size="sm"
        variant="outline"
        onClick={() => handlerQusOne('SOP Review')}
      >
        SOP Review
      </Button>
      <Button
        className={` cursor-pointer leading-[normal] min-w-[156px] rounded-[10px] text-[14.03px] text-center
        ${(selectQOne === 'College queries') ? 'border-purple-700 bg-purple-700 text-white-A700' : 'text-black-900_01'}`}
        size="sm"
        variant="outline"
        onClick={() => handlerQusOne('College queries')}
      >
        College queries
      </Button>
      <Button
        className={` cursor-pointer leading-[normal] min-w-[146px] rounded-[10px] text-center text-sm
        ${(selectQOne === 'Career advice') ? 'border-purple-700 bg-purple-700 text-white-A700' : 'text-black-900_01'}`}
        size="sm"
        variant="outline"
        onClick={() => handlerQusOne('Career advice')}
      >
        Career advice
      </Button>
      <Button
        className={`border border-solid cursor-pointer leading-[normal] min-w-[184px] border-purple-700
           rounded-[10px] text-[14.15px] text-center ${(selectQOne === 'Interview questions') ? ' !bg-purple-700 !text-white-A700' : '!text-black-900_01 !bg-[#fff]'}`}
        size="sm"
        onClick={() => handlerQusOne('Interview questions')}
      >
        Interview questions
      </Button>
    </div>
  ), [selectQOne])

  const quesTwo = useMemo(() => (
    <div className="flex flex-row font-poppins gap-[11px] mt-3 items-center sm:flex-wrap sm:mt-4 md:w-full">
      <Button
        className={`border border-purple-700 border-solid cursor-pointer leading-[normal] min-w-[106px] rounded-[9px] text-[12.84px] text-center
        ${(selectQTwo === 'UX Design') ? ' !bg-purple-700 !text-white-A700' : '!text-black-900_01 !bg-[#fff]'}`}
        size="sm"
        onClick={() => handlerQusTwo('UX Design')}
      >
        UX Design
      </Button>
      <Button
        className={`cursor-pointer h-8 leading-[normal] min-w-[100px] rounded-[10px] text-center text-sm
        ${(selectQTwo === 'College') ? ' !bg-purple-700 !text-white-A700' : '!text-black-900_01 !bg-[#fff]'}`}
        size="sm"
        variant="outline"
        onClick={() => handlerQusTwo('College')}
      >
        College
      </Button>
      <Button
        className={`cursor-pointer h-8 leading-[normal] min-w-[100px] rounded-[10px] text-center text-sm
        ${(selectQTwo === 'Leadership') ? ' !bg-purple-700 !text-white-A700' : '!text-black-900_01 !bg-[#fff]'}`}
        size="sm"
        variant="outline"
        onClick={() => handlerQusTwo('Leadership')}
      >
        Leadership
      </Button>
    </div>
  ), [selectQTwo])


  // const formattedDate = moment(getDate)?.format('YYYY-MM-DD');
  // const startTime = moment(`${formattedDate}T${filterAvailability[0]?.availabilityStartTime?.slice(-13)}`)?.toISOString();
  // const endTime = moment(`${formattedDate}T${filterAvailability[0]?.availabilityEndTime?.slice(-13)}`)?.toISOString();

  const handlerTime = (start,end,index) => {
    setStartTime(start)
    setEndTime(end)
    setSelectedItem(index)
  }

  // useEffect(() => {
  //   console.log("filterAvailability",filterAvailability);
  //   console.log("formattedDate",formattedDate,"startTime",startTime,"endTime",endTime);
  //   console.log(filterAvailability[0]?.availabilityStartTime?.slice(-13));
  // },[filterAvailability])

  let bookSessionPayload = {
    sessionRequestTitle: "Product Developer as a Career",
    requestDuration: selectDuration,
    requestStartTime: startTime,
    requestEndTime: endTime,
    sessionTimeZone: "Asia/karachi",
    requestStatus: "pending",
    mentor: location.state.id,
    mentorsAvailability: filterAvailability[0]?._id,
    requestDescription: "description test007",
    preSessionQuestions: [{
      questionText: "What Do you expect from the session",
      menteesAnswer: selectQOne
    },
    {
      questionText: `Ask ${location.state.name} anything related to updated`,
      menteesAnswer: selectQTwo
    },
    {
      questionText: "What do you expect to achieve from session?",
      menteesAnswer: getQuesThree
    }],
    sessionType: "marketPlaceBooking",
    sessionPrice: location.state.price,
    sessionPriceCurrency: "USD",
    isReferred: true
  }

  // console.log("bookSessionPayload",bookSessionPayload);

  const handlerBookSession = async () => {
    if (filterAvailability.length <= 0) {
      return toast.error(`Try Choose different availability!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else if (getQuesThree === '') {
      return toast.error(`please fill field!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else if (filterAvailability.length > 0) {
      const { data } = await bookSession(bookSessionPayload)
      if (data?.status === 'Success') {
        toast.success(`${data?.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        setQuesThree('')
        navigation('/mentee')
      } else if (data?.status === 'Fail') {
        toast.error(`${data?.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
      } else {
        toast.error(`${data?.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
      }
    }
  }
  
  // console.log(filterAvailability);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-center ml-auto w-full md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col items-center justify-center pb-1 px-1 w-full">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mb-[19px] mx-auto md:px-5 sm:py-3 w-full">
            <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
              <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
            </div>
            <div className="flex flex-1 flex-col gap-[37px] items-center justify-center w-full p-[47px] sm:p-0">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col font-proximasoft items-start justify-between w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                    size="txtProximaSoftSemiBold48Black90001"
                  >
                    Book a session
                  </Text>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_01"
                    size="txtProximaSoftMedium35"
                  >
                    <span className="text-blue_gray-700 font-proximasoft text-left font-normal">
                      with{" "}
                    </span>
                    <span className="text-black-900_01 font-proximasoft text-left font-normal">
                      {location.state.name}
                    </span>
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    className="!text-black-900 cursor-pointer font-poppins h-[61px] sm:h-[50px] leading-[normal] rounded-[30px]
                     shadow-bs6 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px] sm:w-[150px] flex justify-center items-center"
                    variant="outline"
                  >
                    Edit Details
                  </Button>
                  <Button className="border border-purple-700 border-solid cursor-pointer sm:h-[50px] font-poppins h-[61px] leading-[normal]
                   rounded-[30px] shadow-bs5 sm:text-[16.77px] md:text-[18.77px] text-[20.77px] text-center w-[207px] sm:w-[150px] flex justify-center items-center"
                    onClick={() => handlerBookSession()}>
                    Book Session
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[51px] md:px-10 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[71px] mt-[3px] w-[61%] md:w-full">
                  <Text
                    className="capitalize sm:text-[18px] md:text-[22px] text-[27px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose session duration
                  </Text>
                  <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start mt-[15px] w-full">
                    <div className="flex gap-8 sm:gap-2">
                      <div className="flex items-center gap-5">
                        <input
                          type="radio"
                          id="20 minutes"
                          name="duration"
                          checked={selectDuration === '20 minutes'}
                          onChange={handlerDurationChange}
                        />
                        <label htmlFor="20 minutes" className="sm:text-[11px]">20 minutes</label>
                      </div>
                      <div className="flex items-center gap-5">
                        <input
                          type="radio"
                          id="30 minutes"
                          name="duration"
                          checked={selectDuration === '30 minutes'}
                          onChange={handlerDurationChange}
                        />
                        <label htmlFor="30 minutes" className="sm:text-[11px]">30 minutes</label>
                      </div>
                      <div className="flex items-center gap-5">
                        <input
                          type="radio"
                          id="40 minutes"
                          name="duration"
                          checked={selectDuration === '40 minutes'}
                          onChange={handlerDurationChange}
                        />
                        <label htmlFor="40 minutes" className="sm:text-[11px]">40 minutes</label>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize mt-[47px] sm:text-[18px] md:text-[22px] text-[27px] text-black-900_01"
                    size="txtProximaSoftMedium29"
                  >
                    Choose Date
                  </Text>
                  <div className="my-7">
                    <Calendar 
                      value={getDate} 
                      onChange={handleData}
                      minDate={new Date()} 
                    />
                  </div>
                  {filterAvailability.length > 0 && (<div className="flex flex-col">
                    <div className="flex items-center gap-2 font-bold">Availability: <span className="text-[10px]">*please select the below option</span> </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filterAvailability?.map((val,index) => {
                        // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const formattedDate = val?.availabilityStartTime.slice(0,10)
                        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const startTimeFormatted = moment(val?.availabilityStartTime).tz(timezone).format('HH:mm');
                        const endTimeFormatted = moment(val?.availabilityEndTime).tz(timezone).format('HH:mm');
                         //console.log('Start Time:', startTimeFormatted);
                          // console.log('End Time:', endTimeFormatted);
                      return (
                        <>
                          <div className={`flex flex-col items-center justify-center border-2 px-2 rounded-md shadow hover:border-[#333] transition-all 
                            ${selectItem === index ? "bg-[#00A884] text-[#fff]":""}`}
                            onClick={() => handlerTime(val?.availabilityStartTime,val?.availabilityEndTime,index)}>
                            <div>{formattedDate}</div>
                            <hr className={`border border-[#333] w-full ${selectItem === index ? 'border-[#fff]' : ''}`}/>
                            <div className="flex gap-1">
                              {startTimeFormatted} - {endTimeFormatted}
                            </div>
                          </div>
                        </>
                      )})}
                    </div>
                  </div>)}
                  <Text
                    className="mt-[49px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900_01 text-center"
                    size="txtPoppinsMedium29"
                  >
                    Answer few questions
                  </Text>
                  <Text
                    className="text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    For the mentor to know you better
                  </Text>
                  <div className="flex flex-row font-poppins gap-[7px] items-center justify-start mt-[26px] w-full md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[7px] w-[13px]"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl sm:text-[15px]"
                      size="txtPoppinsRegular22Black90001"
                    >
                      What do you expect from the session?
                    </Text>
                  </div>
                  <Text
                    className="mt-2 text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start mt-4 w-full md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      {quesOne}
                    </div>
                  </div>
                  <div className="flex flex-row font-poppins gap-2 items-center justify-start mt-[43px] w-full md:w-full">
                    <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                    <Text
                      className="text-[22px] text-black-900_01 sm:text-lg md:text-xl sm:text-[15px]"
                      size="txtPoppinsRegular22Black90001"
                    >
                      Ask {location.state.name} anything related to?
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-gray-700_01 text-xl"
                    size="txtPoppinsRegular20Gray70001"
                  >
                    Choose all that apply
                  </Text>
                  {quesTwo}
                  <div className="flex flex-col font-poppins gap-2 items-start justify-start mt-[52px] w-full md:w-full">
                    <div className="flex flex-row sm:gap-2 items-center justify-start w-full gap-2">
                      <div className="border border-purple-700 border-solid h-3.5 rounded-[50%] w-3.5"></div>
                      <Text
                        className="text-[22px] text-black-900_01 sm:text-lg md:text-xl sm:text-[15px]"
                        size="txtPoppinsRegular22Black90001"
                      >
                        What do you expect to achieve from session?
                      </Text>
                    </div>
                    <Text
                      className="text-gray-700_01 text-xl sm:text-[17px]"
                      size="txtPoppinsRegular20Gray70001"
                    >
                      This helps the mentor to better prepare
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins items-end justify-end mt-[11px] w-full">
                    {/* <Text
                      className="mr-[5px] mt-[200px] text-blue_gray-700 text-sm"
                      size="txtPoppinsMedium14Bluegray700"
                    >
                      11/100
                    </Text> */}
                    <textarea
                      className="border border-gray-900_1e border-solid p-1.5 rounded-md w-full" cols="30" rows="9"
                      value={getQuesThree}
                      onChange={(e) => setQuesThree(e.target.value)}
                    >
                    </textarea>
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

export default DesktopFivePage;
