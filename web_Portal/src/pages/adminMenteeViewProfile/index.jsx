import React, { useEffect, useState, lazy } from 'react'
import { Img, Line, Text } from "components";
import { useGetMenteeByIdMutation,useUpdateAnyFieldMutation } from 'features/apis/mentee';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ViewMenteeProfile = () => {
  const params = useParams()
  const [toggleBtn,setToggleBtn] = useState(false)
  const [receiveData, setReceiveData] = useState([])
  const [getMenteeById] = useGetMenteeByIdMutation()
  const [updateAnyField] = useUpdateAnyFieldMutation()

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
    userFields: "_id email name profile_picture_url approved is_verified",
    addedby: "_id email name approve is_verified",
    lastModifiedBy: "_id email name profile_picture_url approve is_verified"
  }
  
  const getMentor = async () => {
    const { data } = await getMenteeById(menteepayload)
    setReceiveData(data)
  }

  useEffect(() => {
    getMentor()
  }, [])

  const handlerUpdateApprove = async (decision) => {
    let payload = {
      _id : receiveData?.data?.user?._id,
      approved:decision
    }
    const {data} = await updateAnyField(payload)
    if(data.status === 'Success'){
      getMentor()
      return toast.success(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else{
      toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }

  // console.log('receiveData', receiveData);


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
            <div className="flex sm:flex-col flex-row gap-[29px] mb-3 sm:gap-[10px] sm:justify-start items-center justify-between w-full">
              <div className='flex sm:flex-col flex-row items-center gap-[29px] mb-3 sm:gap-[10px]'>
                <div className="h-[167px] relative w-[167px]">
                  <Img
                    className="h-[167px] m-auto rounded-[50%] w-[167px] sm:w-[148px] sm:h-[148px]"
                    src={`${receiveData?.data?.user?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${receiveData?.data?.user?.profile_picture_url}` : `${process.env.REACT_APP_FRONTEND_URL}/images/default.png`}`}
                    alt="ellipseTwentyFive"
                  />
                  {receiveData?.data?.user?.approved && (<Img
                    className="absolute bottom-[0] h-10 right-[9%] w-10 sm:bottom-[16px]"
                    src="http://localhost:3000/images/img_checkmark.svg"
                    alt="checkmark"
                  />)}
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start sm:justify-center sm:items-center">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 !font-poppins"
                    size="txtProximaSoftMedium48"
                  >
                    {receiveData?.data?.user?.name}
                  </Text>
                  <div className="flex flex-row gap-3">
                    {receiveData?.data?.menteeFeilds?.map((item) => (
                      <Text
                        className="text-[19px] text-black-900 !font-poppins"
                        size="txtPoppinsRegular19"
                      >
                        {item}
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
              <div className='relative' onClick={() => setToggleBtn(!toggleBtn)}>
                  <button className='border border-[#743C95] p-5 px-10 rounded-2xl text-[#743C95] 
                    font-bold flex gap-3 justify-center items-center w-full shadow-md !font-poppins'>
                    {receiveData?.data?.user?.approved ? "Verified" : "Unverified" } <i class="fa-solid fa-angle-down"></i>
                  </button>
                  {toggleBtn && (
                    <div className='absolute border border-[#743C95] p-5 px-10 rounded-2xl text-[#743C95] 
                      font-bold flex gap-3 justify-center items-center w-full mt-1 shadow-md cursor-pointer !font-poppins'
                      onClick={() => handlerUpdateApprove(!receiveData?.data?.user?.approved ? true : false)}
                    >
                      {!receiveData?.data?.user?.approved ? "Verified" : "Unverified" }
                    </div>
                  )}
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-[7px] text-[19px] text-black-900 !font-poppins font-bold"
              
            >
              About
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-0.5 text-base text-blue_gray-700 w-[99%] sm:w-full !font-poppins"
              size="txtPoppinsMedium16"
            >
              <>
                {receiveData?.data?.menteeDescription}
              </>
            </Text>
            <div className="grid grid-cols-2 sm:grid-cols-1 mt-5 gap-7 sm:gap-1 items-center w-full">
              <div className="flex flex-col sm:gap-0 md:ml-[0] ml-[3px] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-[19px] text-black-900 !font-poppins font-bold"
                    // size="txtPoppinsMedium19"
                  >
                    Experience
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-base text-blue_gray-700 !font-poppins"
                    size="txtPoppinsMedium16"
                  >
                    {receiveData?.data?.menteeExperience}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col sm:gap-0 md:ml-[0] ml-[3px] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-[19px] text-black-900 !font-poppins font-bold"
                    
                  >
                    Education
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-base text-blue_gray-700 !font-poppins"
                    size="txtPoppinsMedium16"
                  >
                    {receiveData?.data?.menteeEducation}
                  </Text>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 mt-5 gap-7 sm:gap-1 items-center w-full">
              <div className="flex flex-col sm:gap-0 md:ml-[0] ml-[3px] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-[19px] text-black-900 !font-poppins font-bold"
                    
                  >
                    Payment
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-base text-blue_gray-700 !font-poppins"
                    size="txtPoppinsMedium16"
                  >
                    {receiveData?.data?.paymentVerified ? "Verified" : "Unverified" }
                  </Text>
                </div>
              </div>
              <div className="flex flex-col sm:gap-0 md:ml-[0] ml-[3px] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-[19px] text-black-900 !font-poppins font-bold"
                    
                  >
                    Sessions Attended
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-base text-blue_gray-700 !font-poppins"
                    size="txtPoppinsMedium16"
                  >
                    {receiveData?.data?.sessionAttended}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewMenteeProfile
