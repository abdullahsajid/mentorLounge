import React, { lazy, useEffect, useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import { useSelector } from "react-redux";
import { useGetMentorByIdMutation } from "features/apis/mentor";
import { Oval } from 'react-loader-spinner'
import { Cross as Hamburger } from 'hamburger-react'
const RequestMentee = lazy(() => import("components/RequestMentee"));
const DesktopNineteenPage = lazy(() => import("pages/DesktopNineteen"));
const DesktopThreePage = lazy(() => import("pages/DesktopThree"))


const DesktopSeventeenPage = ({ toggleSideBar, setToggleSidebar }) => {
  const { user } = useSelector((state) => state.user)
  const { mentorData } = useSelector((state) => state.mentorData)
  const [getMentorById] = useGetMentorByIdMutation()
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

  let mentorpayload = {
    critarion: { _id: `${user?.mentorModel?._id || user?.data?.mentorModel?._id}` },
    mentorReviewsFields: "reviewStars reviewDescription reviewBy",
    mentorReviewsSkip: 0,
    mentorReviewsLimit: 10,
    sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
    sessionRequestsSkip: 0,
    sessionRequestsLimit: 10,
    mentorsAvailabilityFields: "availabilityStartTime availabilityEndTime availabilityDuration availabilityBooked availabilityExpired availabilityRequested",
    mentorsAvailabilitySkip: 0,
    mentorsAvailabilityLimit: 10,
    userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
    userCreditCardsSkip: 0,
    userCreditCardsLimit: 10,
    userFields: "_id email name profile_picture_url",
    addedby: "_id email name",
    lastModifiedBy: "_id email name profile_picture_url"
  }

  useEffect(() => {
    getMentorById(mentorpayload)
    setToggleSidebar(false)
  }, [])

  

  return (
    <>
      <div className="bg-white-A700 font-proximasoft ml-auto md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className={`bg-[#f8f5f9] flex flex-col items-end justify-center p-7 sm:px-3 w-full ${toggleNotification && "opacity-[.2]"} ${toggleCalender && "opacity-[.2]"}`}>
          <div className="flex flex-col items-start justify-start mb-[157px] mt-[35px] sm:mt-0 md:px-5 sm:px-0 w-full md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
              <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
                <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
              </div>
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, {mentorData?.data?.user?.name}
              </Text>

              <div className="flex flex-row items-center gap-5">
                <Button
                  className={`bg-[#fff] border border-purple-700 border-solid flex h-[51px] items-center justify-center
                   w-[51px] ${toggleCalender && "bg-[#743c95]"} `}
                  shape="round"
                  color="gray_50"
                  size="md"
                  onClick={toggleCalenderHandler}
                >
                  <i class={`fa-regular fa-calendar text-[22px] ${toggleCalender && "text-[#fff]"}`}></i>
                </Button>
                <Button
                  className={`flex items-center justify-center border border-purple-700 border-solid h-[51px] p-[9px] rounded-[25px]
                  w-[51px] ${toggleNotification && "bg-[#743c95]"}`}
                  color="white_A700"
                  size="xs"
                  onClick={toggleHandler}
                >
                  <i class={`fa-regular fa-bell text-[22px] ${toggleNotification && "text-[#fff]"}`}></i>
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[3px] mt-5 w-[19%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Button
                  name="inputfield"
                  placeholder="Update Profile"
                  className="leading-[normal] text-base flex rounded-2xl w-full"
                  wrapClassName="flex rounded-[27px] w-full"
                  color="purple_700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="mr-3">
                    <Img
                      className="my-auto"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  Update Profile
                </Button>
              </div>
            </div>
            <Text
              className="mt-[23px] sm:text-[25px] md:text-[30px] text-[35px] text-gray-900 sm:mb-3"
              size="txtProximaSoftSemiBold40"
            >
              Requests
            </Text>
            <div className="flex flex-row w-full gap-5 md:flex-col-reverse sm:flex-col-reverse">
              <div className="flex flex-col gap-3 w-full">
                {/* start */}
                {!mentorData ? (
                  <div className="flex justify-center items-center text-[24px] h-full">
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>
                ) : (
                  <React.Suspense fallback={<div>
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>}>
                    {mentorData?.data?.sessionRequests.length === 0 ? (
                      <div className="flex justify-center items-center text-[24px] h-full">No Requests at the Moment</div>
                    ) : (
                      mentorData?.data?.sessionRequests.map((item, index) => (
                        <RequestMentee
                          key={index}
                          id={item?._id}
                          name={item?.requestBy?.name}
                          img={item?.requestBy?.profile_picture_url}
                          title={item?.sessionRequestTitle}
                          duration={item?.requestDuration}
                          startTime={item?.requestStartTime}
                          endTime={item?.requestEndTime}
                          questions={item?.preSessionQuestions}
                        />
                      ))
                    )}
                  </React.Suspense>
                )}
                {/* end */}
              </div>
              <div className="w-[1px] h-auto border border-solid border-[#545454] sm:hidden"></div>
              <div className="flex flex-col gap-3 w-full">
                <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start
                  rounded-md w-full mt-4">
                  <div className="flex flex-row gap-3 items-center justify-start w-[58%] md:w-full">
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
                <div className="bg-lime-700_75 flex md:flex-1 flex-col items-start justify-start mb-[3px] 
                  md:mt-0 mt-[7px] rounded-md w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-[62%] md:w-full">
                    <Img
                      className="h-[122px]"
                      src="images/img_line3.svg"
                      alt="lineThree_One"
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
              </div>
            </div>

          </div>
        </div>
        {/* <Sidebar1 className="!fixed !w-[316px] bg-white-A700 flex font-poppins md:hidden inset-y-[0]
         justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" /> */}
        {/* <Line className="absolute bg-blue_gray-700 bottom-[0] h-[768px] right-[33%] w-px" /> */}
        {toggleNotification && <DesktopNineteenPage handler={toggleHandler} />}
        {toggleCalender && <DesktopThreePage toggle={toggleCalenderHandler} />}
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
