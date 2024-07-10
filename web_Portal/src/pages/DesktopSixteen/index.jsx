import React, { lazy, useEffect, useState } from "react";
import { Button, Img, Input, List, Text } from "components";
import DesktopTwoPage from "pages/DesktopTwo";
import DesktopThreePage from "pages/DesktopThree";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllMentorMutation, useGetMenteeByIdMutation } from "features/apis/mentee";
import { Cross as Hamburger } from 'hamburger-react'
import { FilterSessionForNotifier } from "utils";
import { Oval } from 'react-loader-spinner'
const AllMentor = lazy(() => import("components/AllMentor"))
const SessionNotifier = lazy(() => import("components/SessionNotifier"))

const DesktopSixteenPage = ({ toggleSideBar, setToggleSidebar }) => {
  const [getMenteeById] = useGetMenteeByIdMutation()
  const [getAllMentor, { isLoading }] = useGetAllMentorMutation()
  const { user } = useSelector((state) => state.user)
  const { menteeData } = useSelector((state) => state.menteeData)
  const get_all_mentor = useSelector((state) => state.menteeData)
  const navigate = useNavigate()
  const [toggleNotification, setNotificationToggle] = useState(false)
  const [toggleCalender, setCalenderToggle] = useState(false)

  let allMentors = {
    sortproperty: "createdAt",
    sortorder: -1,
    offset: 0,
    limit: 50,
    query: {
      critarion: { active: true },
      mentorReviewsFields: "reviewStars reviewDescription reviewBy",
      mentorReviewsSkip: 0,
      mentorReviewsLimit: 10,
      sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc zoomMeeting",
      sessionRequestsSkip: 0,
      sessionRequestsLimit: 10,
      mentorsAvailabilityFields: "availabilityStartTime availabilityEndTime availabilityDuration availabilityBooked availabilityExpired availabilityRequested",
      mentorsAvailabilitySkip: 0,
      mentorsAvailabilityLimit: 10,
      userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
      userCreditCardsSkip: 0,
      userCreditCardsLimit: 10,
      mentorsQuestionsFields: "questionText",
      mentorsQuestionsSkip: 0,
      mentorsQuestionsLimit: 10,
      userFields: "_id email name profile_picture_url",
      addedby: "_id email name",
      lastModifiedBy: "_id email name"
    }
  }

  let data = {
    critarion: { _id: `${user?.menteeModel?._id || user?.data?.menteeModel?._id }` },
    menteeRefersReferralFields: "invitationLink inviteType inviteeEmail referred dateInvited referralStatus",
    menteeRefersSkip: 0,
    menteeRefersLimit: 10,
    menteeRefersSessionFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
    menteeRefersSessionSkip: 0,
    menteeRefersSessionLimit: 10,
    sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
    sessionRequestsSkip: 0,
    sessionRequestsLimit: 10,
    recentSearchesFields: "searchKeyWords mentors",
    recentSearchesSkip: 0,
    recentSearchesLimit: 10,
    userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
    userCreditCardsSkip: 0,
    userCreditCardsLimit: 10,
    userFields: "_id email name",
    addedby: "_id email name",
    lastModifiedBy: "_id email name"
  }

  const toggleHandler = () => {
    setNotificationToggle(!toggleNotification)
    setCalenderToggle(false)
  }
  const toggleCalenderHandler = () => {
    setCalenderToggle(!toggleCalender)
    setNotificationToggle(false)
  }

  const navigateHandler = () => {
    navigate("/settings")
  }

  useEffect(() => {
    getMenteeById(data)
    getAllMentor(allMentors)
    setToggleSidebar(false)
  }, [])

  // console.log(new Date(menteeData?.data?.sessionRequests[0].requestStartTime).toDateString())
  // console.log("Filter: ",menteeData?.data?.sessionRequests.filter(item => item.requestStatus === 'approved'))
  let filterNotifier = FilterSessionForNotifier()


  return (
    <>
      <div className="bg-white-A700 font-proximasoft ml-auto sm:!w-full md:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col h-full justify-center p-[47px] sm:p-[26px] md:px-10 sm:px-5">
          <div className="flex flex-col items-start justify-start mt-[15px] w-full md:w-full sm:h-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
              {/* <div className="sm:w-full sm:flex sm:items-center"> */}
              {/* <div className="hidden sm:flex" onClick={toggleSideBar}>
                  <i class="fa-solid fa-bars"></i>
                </div> */}
              <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
                <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
              </div>
              <Text
                className="md:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtProximaSoftSemiBold48"
              >
                Hello, {menteeData?.data?.user?.name || user?.name || user?.data?.name}
              </Text>
              {/* </div> */}
              <div className="flex sm:flex-row sm:gap-3">
                <Button
                  className={`bg-gray-50 border border-purple-700 border-solid flex h-[51px] items-center justify-center w-[51px]
                  ${toggleCalender && "!bg-[#743c95]"}`}
                  shape="round"
                  color="gray_50"
                  size="md"
                  onClick={toggleCalenderHandler}
                >
                  <i className={`fa-regular fa-calendar text-[22px] ${toggleCalender && "!text-[#fff]"}`}></i>
                </Button>
                <div className={`bg-white-A700 border border-purple-700 border-solid flex flex-col h-[51px] items-center
                 justify-end ml-4 md:ml-[0] p-[9px] rounded-[25px] w-[51px] ${toggleNotification && "bg-[#743c95]"}`} onClick={toggleHandler}>
                  <Button
                    className={`flex h-[31px] items-center justify-center rounded-md w-[31px] ${toggleNotification && "bg-[#743c95]"}`}
                    color="white_A700"
                    size="xs"
                  >
                    <i className={`fa-regular fa-bell text-[22px] ${toggleNotification && "text-[#fff]"}`}></i>
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.12 0.0410156C5.75766 0.0410156 3.84261 1.81322 3.84261 3.99935C3.84261 6.18547 5.75766 7.95768 8.12 7.95768C10.4823 7.95768 12.3974 6.18547 12.3974 3.99935C12.3974 1.81322 10.4823 0.0410156 8.12 0.0410156ZM5.19336 3.99935C5.19336 2.50358 6.50366 1.29102 8.12 1.29102C9.73633 1.29102 11.0466 2.50358 11.0466 3.99935C11.0466 5.49512 9.73633 6.70768 8.12 6.70768C6.50366 6.70768 5.19336 5.49512 5.19336 3.99935Z" fill="#743C95" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.12 9.20768C6.03664 9.20768 4.11719 9.64592 2.69487 10.3863C1.29372 11.1157 0.240599 12.2211 0.240599 13.5827L0.24054 13.6676C0.239522 14.6358 0.238245 15.851 1.39001 16.719C1.95685 17.1461 2.74983 17.4499 3.82119 17.6506C4.89553 17.8518 6.29578 17.9577 8.12 17.9577C9.94421 17.9577 11.3445 17.8518 12.4188 17.6506C13.4902 17.4499 14.2831 17.1461 14.85 16.719C16.0017 15.851 16.0005 14.6359 15.9994 13.6676L15.9994 13.5827C15.9994 12.2211 14.9463 11.1157 13.5451 10.3863C12.1228 9.64592 10.2034 9.20768 8.12 9.20768ZM1.59135 13.5827C1.59135 12.8732 2.15091 12.1036 3.3571 11.4758C4.54212 10.8589 6.22468 10.4577 8.12 10.4577C10.0153 10.4577 11.6979 10.8589 12.8829 11.4758C14.0891 12.1036 14.6486 12.8732 14.6486 13.5827C14.6486 14.6725 14.6123 15.286 13.997 15.7497C13.6634 16.0011 13.1056 16.2466 12.1508 16.4254C11.199 16.6037 9.89779 16.7077 8.12 16.7077C6.3422 16.7077 5.04094 16.6037 4.08916 16.4254C3.13438 16.2466 2.57661 16.0011 2.24295 15.7497C1.62766 15.286 1.59135 14.6725 1.59135 13.5827Z" fill="#743C95" />
                  </svg>
                  Update Profile
                </Button>
              </div>
            </div>

            {!filterNotifier ? (
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
                {filterNotifier.length === 0 ? (
                  <div className="flex justify-center items-center w-full text-[24px] h-full border-b-2 py-3">No Sessions at the Moment</div>
                ) : (
                  <List
                    className="sm:flex-col flex-row font-poppins gap-7 grid md:grid-cols-1 grid-cols-2 mt-[31px] w-[95%] sm:w-full"
                    orientation="horizontal"
                  >
                    {filterNotifier?.map((item,index) => (
                      <SessionNotifier
                        startTime={item.requestStartTime}
                        name={item.mentor.name}
                        endTime={item.requestEndTime}
                        key={index}
                      />
                    ))}
                  </List>
                )}
              </React.Suspense>
            )}
            <Text
              className="mt-[33px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
              size="txtProximaSoftSemiBold40"
            >
              Top Mentors for you
            </Text>
            <AllMentor get_all_mentor={get_all_mentor} isLoading={isLoading} />
          </div>
        </div>

        {toggleNotification && <DesktopTwoPage toggle={toggleHandler} />}
        {toggleCalender && <DesktopThreePage toggle={toggleCalenderHandler} />}
      </div>
    </>
  );
};

export default DesktopSixteenPage;

