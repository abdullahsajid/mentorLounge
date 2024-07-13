import React, { lazy, useEffect, useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import { useSelector } from "react-redux";
import { useGetMentorByIdMutation } from "features/apis/mentor";
import { Oval } from 'react-loader-spinner'
import { Cross as Hamburger } from 'hamburger-react'
import { FilterSeesionNotifierForMentor } from "utils";
const RequestMentee = lazy(() => import("components/RequestMentee"));
const DesktopNineteenPage = lazy(() => import("pages/DesktopNineteen"));
const DesktopThreePage = lazy(() => import("pages/DesktopThree"))
const SessionNotifier = lazy(() => import("components/SessionNotifier"))
const MentorCal = lazy(() => import('pages/MentorCal'))
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

  const filterItem = FilterSeesionNotifierForMentor()
  
  const now = new Date();

  return (
    <>
      <div className="bg-[#f8f5f9] font-proximasoft !h-full ml-auto md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className={`bg-[#f8f5f9] flex flex-col items-end justify-center p-7 sm:px-3 w-full !h-full ${toggleNotification && "opacity-[.2]"} ${toggleCalender && "opacity-[.2]"}`}>
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
                      mentorData?.data?.sessionRequests?.filter(item => new Date(item?.requestEndTime) >= now)?.slice()?.reverse()?.map((item, index) => (
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
                          status={item?.requestStatus}
                        />
                      ))
                    )}
                  </React.Suspense>
                )}
                {/* end */}
              </div>
              <div className="w-[1px] h-auto border border-solid border-[#545454] sm:hidden"></div>
              <div className="flex flex-col gap-5 w-full h-full">
                {!filterItem ? (
                  <div className="flex justify-center items-center w-full text-[24px] h-full">
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>
                ) : (
                  <React.Suspense fallback={<div className="flex justify-center items-center w-full text-[24px] h-full">
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>}>
                    {filterItem.length === 0 ? (
                      <div className="flex justify-center items-center w-full text-[24px] h-full">No Sessions at the Moment</div>
                    ) : (
                      filterItem?.map((item) => (
                        <SessionNotifier
                          startTime={item.requestStartTime}
                          name={item.requestBy.name}
                          endTime={item.requestEndTime}
                        />
                      ))
                    )}
                  </React.Suspense>
                )}
              </div>
            </div>

          </div>
        </div>
        {toggleNotification && <DesktopNineteenPage handler={toggleHandler} />}
        {toggleCalender && <MentorCal toggle={toggleCalenderHandler} />}
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
