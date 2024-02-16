import React, { useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import DesktopTwoPage from "pages/DesktopTwo";
import DesktopThreePage from "pages/DesktopThree";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DesktopSixteenPage = () => {
  const{user} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [toggleNotification, setNotificationToggle] = useState(false)
  const [toggleCalender, setCalenderToggle] = useState(false)
  const toggleHandler = () => {
    setNotificationToggle(!toggleNotification)
    setCalenderToggle(false)
  }
  const toggleCalenderHandler = () => {
    setCalenderToggle(!toggleCalender)
    setNotificationToggle(false)
  }

  const navigateHandler = () => {
    navigate("/profile")
  }

  return (
    <>
      <div className="bg-white-A700 font-proximasoft ml-auto sm:!w-full"style={{
        width:"calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col h-full justify-center p-[47px] md:px-10 sm:px-5">
          <div className="flex flex-col items-start justify-start mt-[15px] w-full md:w-full sm:h-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, {user?.name || user?.data?.name}
              </Text>
              <div className="flex sm:flex-row sm:gap-3">
                <Button
                  className={`bg-gray-50 border border-purple-700 border-solid flex h-[51px] items-center justify-center w-[51px]
                  ${toggleCalender && "bg-[#743c95]"}`}
                  shape="round"
                  color="gray_50"
                  size="md"
                  onClick={toggleCalenderHandler}
                >
                  <i class={`fa-regular fa-calendar text-[22px] ${toggleCalender && "text-[#fff]"}`}></i>
                </Button>
                <div className={`bg-white-A700 border border-purple-700 border-solid flex flex-col h-[51px] items-center
                 justify-end ml-4 md:ml-[0] p-[9px] rounded-[25px] w-[51px] ${toggleNotification && "bg-[#743c95]"}`} onClick={toggleHandler}>
                  <Button
                    className={`flex h-[31px] items-center justify-center rounded-md w-[31px] ${toggleNotification && "bg-[#743c95]"}`}
                    color="white_A700"
                    size="xs"
                  >
                    <i class={`fa-regular fa-bell text-[22px] ${toggleNotification && "text-[#fff]"}`}></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start mt-5 w-[19%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Button
                  name="inputfield"
                  placeholder="Update Profile"
                  className="leading-[normal] md:h-auto p-3 text-purple-700 sm:h-auto text-base text-left w-full flex items-center rounded-2xl"
                  wrapClassName="flex rounded-[27px] w-full"
                  color="purple_700"
                  size="2xl"
                  variant="outline"
                  onClick={() => navigateHandler()}
                >
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "10px" }}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12 0.0410156C5.75766 0.0410156 3.84261 1.81322 3.84261 3.99935C3.84261 6.18547 5.75766 7.95768 8.12 7.95768C10.4823 7.95768 12.3974 6.18547 12.3974 3.99935C12.3974 1.81322 10.4823 0.0410156 8.12 0.0410156ZM5.19336 3.99935C5.19336 2.50358 6.50366 1.29102 8.12 1.29102C9.73633 1.29102 11.0466 2.50358 11.0466 3.99935C11.0466 5.49512 9.73633 6.70768 8.12 6.70768C6.50366 6.70768 5.19336 5.49512 5.19336 3.99935Z" fill="#743C95" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12 9.20768C6.03664 9.20768 4.11719 9.64592 2.69487 10.3863C1.29372 11.1157 0.240599 12.2211 0.240599 13.5827L0.24054 13.6676C0.239522 14.6358 0.238245 15.851 1.39001 16.719C1.95685 17.1461 2.74983 17.4499 3.82119 17.6506C4.89553 17.8518 6.29578 17.9577 8.12 17.9577C9.94421 17.9577 11.3445 17.8518 12.4188 17.6506C13.4902 17.4499 14.2831 17.1461 14.85 16.719C16.0017 15.851 16.0005 14.6359 15.9994 13.6676L15.9994 13.5827C15.9994 12.2211 14.9463 11.1157 13.5451 10.3863C12.1228 9.64592 10.2034 9.20768 8.12 9.20768ZM1.59135 13.5827C1.59135 12.8732 2.15091 12.1036 3.3571 11.4758C4.54212 10.8589 6.22468 10.4577 8.12 10.4577C10.0153 10.4577 11.6979 10.8589 12.8829 11.4758C14.0891 12.1036 14.6486 12.8732 14.6486 13.5827C14.6486 14.6725 14.6123 15.286 13.997 15.7497C13.6634 16.0011 13.1056 16.2466 12.1508 16.4254C11.199 16.6037 9.89779 16.7077 8.12 16.7077C6.3422 16.7077 5.04094 16.6037 4.08916 16.4254C3.13438 16.2466 2.57661 16.0011 2.24295 15.7497C1.62766 15.286 1.59135 14.6725 1.59135 13.5827Z" fill="#743C95" />
                  </svg>
                  Update Profile
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-poppins gap-7 grid md:grid-cols-1 grid-cols-2 mt-[31px] w-[95%]"
              orientation="horizontal"
            >
              <div className="bg-[#EBDCC1] flex flex-col items-start justify-start rounded-md w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[52%] md:w-full">
                  <Img
                    className="h-[122px]"
                    src="images/img_line3.svg"
                    alt="lineThree"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.41px] text-purple-700"
                      size="txtPoppinsMedium1941"
                    >
                      Session for today
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      Session with Michael Scott
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      10:00 - 10:30am
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-[#EBDCC1] flex flex-col items-start justify-start rounded-md w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-[52%] md:w-full">
                  <Img
                    className="h-[122px]"
                    src="images/img_line3.svg"
                    alt="lineThree"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.41px] text-purple-700"
                      size="txtPoppinsMedium1941"
                    >
                      Session for tomorrow
                    </Text>
                    <Text
                      className="mt-0.5 text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      Session with Michael Scott
                    </Text>
                    <Text
                      className="text-[16.64px] text-black-900"
                      size="txtPoppinsRegular1664"
                    >
                      10:00 - 10:30am
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Text
              className="mt-[33px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtProximaSoftSemiBold40"
            >
              Top Mentors for you
            </Text>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[18px] w-[99%] md:w-full">
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center w-full gap-2">
                    <Text
                      name="frameOne"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal] p-2
                       placeholder:text-black-900_01 text-[10.09px] text-left flex justify-center items-center rounded-lg"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex justify-center items-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24 "
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex justify-center items-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_255x229.png"
                  alt="rectangleSix_One"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[6%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Faraji Mandla{" "}
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center w-full gap-2">
                    <Text
                      name="frameOne_One"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] rounded-lg font-medium leading-[normal] p-2 placeholder:text-black-900_01 text-[10.09px] text-left flex justify-center items-center"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex justify-center items-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01 w-24
                      "
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_1.png"
                  alt="rectangleSix_Two"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Zola Kwame
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center w-full gap-2">
                    <Text
                      name="frameOne_Two"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal]  p-2 placeholder:text-black-900_01  text-[10.09px] text-left flex justify-center items-center
                      rounded-lg"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center p-2 rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Three"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center gap-2 w-full">
                    <Text
                      name="frameOne_Three"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal] p-2 placeholder:text-black-900_01  text-[10.09px] text-left flex justify-center items-center
                      rounded-lg"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center p-2 rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[31px] w-[99%] md:w-full">
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Four"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center gap-2 w-full">
                    <Text
                      name="frameOne_Four"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal] p-2 placeholder:text-black-900_01 text-[10.09px] text-left 
                      rounded-lg flex justify-center items-center"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center p-2 rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_255x229.png"
                  alt="rectangleSix_Five"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[6%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Faraji Mandla{" "}
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center gap-2 w-full">
                    <Text
                      name="frameOne_Five"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal] p-2 placeholder:text-black-900_01 text-[10.09px] text-left
                      flex justify-center items-center rounded-lg"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center p-2 rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <Img
                  className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                  src="images/img_rectangle6_1.png"
                  alt="rectangleSix_Six"
                />
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Zola Kwame
                  </Text>
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Developer
                  </Text>
                  <div className="flex flex-row items-center gap-2 w-full">
                    <Text
                      name="frameOne_Six"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal] p-2 placeholder:text-black-900_01 text-[10.09px] text-left
                      flex justify-center items-center rounded-lg"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center px-[7px] rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01 w-[124px]"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
              <div className="h-[255px] relative w-[23%] md:w-full">
                <div className="h-[255px] m-auto w-full">
                  <Img
                    className="h-[255px] m-auto object-cover rounded-[13px] w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix_Seven"
                  />
                  <Text
                    className="absolute bottom-[40%] left-[5%] text-[10.09px] text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                  >
                    Adiel Omari
                  </Text>
                </div>
                <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%]">
                  <Text
                    className="text-[14.13px] text-white-A700"
                    size="txtPoppinsSemiBold1413"
                  >
                    Product Designer
                  </Text>
                  <div className="flex flex-row items-center gap-2 w-full">
                    <Text
                      name="frameOne_Seven"
                      placeholder="Career Advice"
                      className="bg-blue_gray-100 h-[19px] font-medium leading-[normal]  p-2 placeholder:text-black-900_01 text-[10.09px] text-left rounded-lg
                      flex justify-center items-center"
                      wrapClassName="w-[47%]"
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="fill"
                    >Career Advice</Text>
                    <Text
                      className="bg-blue_gray-100 h-[19px] flex items-center justify-center p-2 rounded-[9px] text-[10.09px] text-black-900_01"
                      size="txtPoppinsMedium1009Black90001"
                    >
                      College Queries
                    </Text>
                  </div>
                  <Text
                    className="bg-blue_gray-100 h-[19px] flex items-center justify-center mt-1 px-2 rounded-[9px] text-[10.09px] text-black-900_01"
                    size="txtPoppinsMedium1009Black90001"
                  >
                    Interview Techniques
                  </Text>
                  <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                  >
                    Book Session
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
       
         {toggleNotification && <DesktopTwoPage toggle={toggleHandler}/>}
         {toggleCalender && <DesktopThreePage toggle={toggleCalenderHandler}/>}
      </div>
    </>
  );
};

export default DesktopSixteenPage;
