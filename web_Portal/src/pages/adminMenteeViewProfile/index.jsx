import React,{useEffect, useState,lazy} from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import Loaders from "components/Loaders";
import { Button, Img, Line, Text } from "components";
import { useGetMenteeByIdMutation } from 'features/apis/mentee';
import { useParams } from 'react-router-dom';
const IconsContainer = lazy(() => import("components/IconsContainer")) 

const ViewMenteeProfile = () => {
    const params = useParams()
    const [receiveData,setReceiveData] = useState([])
    const [getMenteeById] = useGetMenteeByIdMutation()

    let menteepayload = {
        critarion: { _id: `${params.id}` },
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
        const getMentor = async () => {
            const {data} = await getMenteeById(menteepayload)
            setReceiveData(data)
        }
        getMentor()
    },[])

  return (
    <>
    <div className="bg-white-A700 font-poppins ml-auto w-full md:!w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#f8f5f9] flex flex-col h-full p-[29px] sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mr-5 md:px-5 sm:px-0 w-full md:w-full">
            <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
              {/* <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} /> */}
            </div>
            <div className="flex sm:flex-col flex-row gap-[29px] mb-3 sm:gap-[10px] items-center justify-start w-[52%] md:w-full">
              <div className="h-[167px] relative w-[167px]">
                <Img
                  className="h-[167px] m-auto rounded-[50%] w-[167px] sm:w-[148px] sm:h-[148px]"
                  src={`${receiveData?.data?.user?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${receiveData?.data?.user?.profile_picture_url}` : `http://localhost:3000/images/default.png`}`}
                  alt="ellipseTwentyFive"
                />
                <Img
                  className="absolute bottom-[0] h-10 right-[9%] w-10 sm:bottom-[16px]"
                  src="http://localhost:3000/images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start sm:justify-center sm:items-center">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtProximaSoftMedium48"
                >
                  {receiveData?.data?.user?.name}
                </Text>
                <div className="flex flex-row gap-3">
                  {receiveData?.data?.mentorFeilds?.map((item) => (
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
              ${receiveData?.data?.mentorPrice} per Session
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
                {receiveData?.data?.mentorDescription}
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
                    {receiveData?.data?.mentorEducation}
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
              {receiveData?.data?.mentorExperience}
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
                src="http://localhost:3000/images/img_ellipse7.png"
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
                  src="http://localhost:3000/images/img_group10.svg"
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
                src="http://localhost:3000/images/img_ellipse26.png"
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
                  src="http://localhost:3000/images/img_group10.svg"
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
              {receiveData?.data?.socialMediaLinks ?
                (<IconsContainer links={receiveData?.data?.socialMediaLinks}/>)
              :(<><Loaders/></>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewMenteeProfile
