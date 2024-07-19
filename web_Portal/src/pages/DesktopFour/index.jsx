import React, { lazy, useEffect,useState } from "react";
import { Button, Img, Line, Text } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetMenteeByIdMutation } from "features/apis/mentee";
import { useSelector } from "react-redux";
import { Cross as Hamburger } from 'hamburger-react'
import Loaders from "components/Loaders";
const IconsContainer = lazy(() => import("components/IconsContainer")) 

const DesktopFourPage = ({ toggleSideBar, setToggleSidebar }) => {
  const location = useLocation()
  const [getMenteeById] = useGetMenteeByIdMutation()
  const { user } = useSelector((state) => state.user)
  // const { menteeData } = useSelector((state) => state.menteeData)
  const navigate = useNavigate()
  const navigatehandler = () => {
    navigate('/booksession', { state: { id: location.state.id, available: location.state.available, name: location.state.name, price: location.state.mentorPrice } })
  }
  // let data = {
  //   critarion: { _id: `${user?.menteeModel?._id || user?.data?.menteeModel?._id}` },
  //   menteeRefersReferralFields: "invitationLink inviteType inviteeEmail referred dateInvited referralStatus",
  //   menteeRefersSkip: 0,
  //   menteeRefersLimit: 10,
  //   menteeRefersSessionFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
  //   menteeRefersSessionSkip: 0,
  //   menteeRefersSessionLimit: 10,
  //   sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
  //   sessionRequestsSkip: 0,
  //   sessionRequestsLimit: 10,
  //   recentSearchesFields: "searchKeyWords mentors",
  //   recentSearchesSkip: 0,
  //   recentSearchesLimit: 10,
  //   userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
  //   userCreditCardsSkip: 0,
  //   userCreditCardsLimit: 10,
  //   userFields: "_id email name",
  //   addedby: "_id email name",
  //   lastModifiedBy: "_id email name"
  // }
  // useEffect(() => {
  //   getMenteeById(data)
  // }, [])

  useEffect(() => {
    setToggleSidebar(false)
  }, [])


  return (
    <>
      <div className="bg-white-A700 font-poppins ml-auto w-full md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col h-full p-[29px] sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mr-5 md:px-5 sm:px-0 w-full md:w-full">
            <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
              <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
            </div>
            <div className="flex sm:flex-col flex-row gap-[29px] sm:gap-[10px] items-center justify-start w-[52%] md:w-full">
              <div className="h-[167px] relative w-[167px]">
                <Img
                  className="h-[167px] m-auto rounded-[50%] w-[167px] sm:w-[148px] sm:h-[148px]"
                  src={`${location?.state?.img ? `${process.env.REACT_APP_LOCAL_URL}${location?.state?.img}` : "images/default.png"}`}
                  alt="ellipseTwentyFive"
                />
                <Img
                  className="absolute bottom-[0] h-10 right-[9%] w-10 sm:bottom-[16px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start sm:justify-center sm:items-center">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtProximaSoftMedium48"
                >
                  {location?.state?.name}
                </Text>
                <div className="flex flex-row gap-3">
                  {location?.state?.mentorFields?.map((item) => (
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsRegular19"
                    >
                      {item}
                    </Text>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between mt-[55px] sm:mt-[25px] w-full">
              <div className="bg-[#EBDCC1] flex md:flex-1 flex-col items-start justify-start rounded-[7px] w-[52%] md:w-full">
                <div className="flex flex-row gap-[13px] sm:gap-[7px] items-center justify-start w-3/4 md:w-full">
                  <Img
                    className="h-[71px]"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[19.53px] text-blue_gray-700 sm:text-[15px]"
                      size="txtPoppinsMedium1953"
                    >
                      Next Available Session on 17th October
                    </Text>
                    <Text
                      className="text-[13.95px] text-purple-700 underline"
                      size="txtPoppinsMedium1395"
                    >
                      View Details
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <Button
                  className="!text-black-900 cursor-pointer h-[47px] leading-[normal] md:ml-[0] ml-[161px] rounded-[23px] shadow-bs4 text-[14.14px] text-center w-40"
                  shape="round"
                  size="lg"
                  variant="outline"
                >
                  Message
                </Button>
                <Button
                  className="border border-purple-700 border-solid cursor-pointer h-[47px] leading-[normal] rounded-[23px] shadow-bs5 text-[14.14px] text-center w-40"
                  shape="round"
                  size="lg"
                  onClick={() => navigatehandler()}
                >
                  Book a Session
                </Button>
              </div>
            </div>
            <Text
              className="ml-0.5 md:ml-[0] mt-[19px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              Price
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-1 text-base text-blue_gray-700"
              size="txtPoppinsMedium16"
            >
              ${location?.state?.mentorPrice} per Session
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[7px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              About
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-0.5 text-base text-blue_gray-700 w-[99%] sm:w-full"
              size="txtPoppinsMedium16"
            >
              <>
                {location?.state?.mentorDescription}
              </>
            </Text>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-7 sm:gap-1 items-center w-full">
              <div className="flex flex-col sm:gap-0 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start mt-0.5">
                  <Text
                    className="text-[19px] text-black-900"
                    size="txtPoppinsMedium19"
                  >
                    Rating
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mb-0.5">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    Verified User Based on Reviews and Ratings
                  </Text>
                </div>
              </div>
              <div className="flex flex-col sm:gap-0 md:ml-[0] ml-[3px] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-[19px] text-black-900"
                    size="txtPoppinsMedium19"
                  >
                    Education
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    {location?.state?.mentorEducation}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[9px]">
              <Text
                className="text-[19px] text-black-900"
                size="txtPoppinsMedium19"
              >
                Experience
              </Text>
            </div>
            <Text
              className="ml-0.5 md:ml-[0] mt-0.5 text-base text-blue_gray-700"
              size="txtPoppinsMedium16"
            >
              {location?.state?.mentorExperience}
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[33px] text-[19px] text-black-900"
              size="txtPoppinsMedium19"
            >
              Reviews
            </Text>
            <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] ml-[3px] mt-2.5 w-[15%] md:w-full">
              <Img
                className="h-[51px] md:h-auto rounded-[50%] w-[51px]"
                src="images/img_ellipse7.png"
                alt="ellipseSeven"
              />
              <div className="md:h-[35px] h-[43px] mt-0.5 w-[56%]">
                <Text
                  className="sm:text-[17.48px] md:text-[19.48px] text-[21.48px] text-black-900"
                  size="txtPoppinsMedium2148"
                >
                  Taraji
                </Text>
                <Img
                  className="h-[17px] sm:mx-0 sm:bottom-[-8px]"
                  src="images/img_group10.svg"
                  alt="groupTen"
                />
              </div>
            </div>
            <div className="flex md:h-12 h-[38px] justify-end ml-1 md:ml-[0] mt-2.5 relative w-[62%] md:w-full">
              <Line className="bg-gray-900_1e h-px mb-[3px] mt-auto w-[61%]" />
              <Text
                className="absolute h-full inset-[0] justify-center leading-[126.00%] m-auto text-[15px] text-gray-900_7f w-full"
                size="txtPoppinsRegular15"
              >
                I had a great experience. The session was a profound learning
                experience, seamlessly blending theory with practical insights
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-start justify-start ml-1 md:ml-[0] mt-[9px] w-[15%] md:w-full">
              <Img
                className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                src="images/img_ellipse26.png"
                alt="ellipseTwentySix"
              />
              <div className="md:h-[33px] h-[46px] w-[56%]">
                <Text
                  className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900"
                  size="txtPoppinsMedium2163"
                >
                  Eshe
                </Text>
                <Img
                  className="-[17px] sm:mx-0"
                  src="images/img_group10.svg"
                  alt="groupNinetyFour"
                />
              </div>
            </div>
            <Text
              className="leading-[126.00%] md:ml-[0] ml-[3px] mt-[9px] text-[15px] text-gray-900_7f w-[61%] sm:w-full"
              size="txtPoppinsRegular15"
            >
              I had a great experience. The session was a profound learning
              experience, seamlessly blending theory with practical insights
            </Text>
            <div className="flex flex-row items-center justify-center gap-2 mt-7 w-full">
              {location?.state?.links ?
                (<IconsContainer links={location?.state?.links}/>)
              :(<><Loaders/></>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
