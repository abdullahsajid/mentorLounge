import React, { useState } from "react";
import { Button, Img, Text } from "components";
import { useLocation } from "react-router-dom";
import { useUpdateSessionRequestMutation } from "features/apis/mentor";
import toast from 'react-hot-toast';

const DesktopTwentyFivePage = () => {
  const[updateSessionRequest] = useUpdateSessionRequestMutation()
  const location = useLocation()

  const handlerRequestStatus = async (val) => {
    let payloadRequest = {
      sessionRequestid: location.state.id,
      
      requestStatus: val,
      active: true
    }
    const {data} = await updateSessionRequest(payloadRequest)
    if (data.status === 'Success') {
      toast.success(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else if (data.status === 'Fail') {
      toast.error(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    } else {
      toast.error(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }
  return (
    <>
      <div className="bg-white-A700 font-poppins ml-auto w-full sm:!w-full" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="bg-[#F2ECF5] flex flex-col h-full p-[29px] sm:px-5 w-full">
          <div className="flex flex-col justify-start mb-[65px] mr-[25px] md:px-5 w-full md:w-full">
            <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-start w-full md:w-full">
              <div className="h-[167px] relative w-[167px]">
                <Img
                  className="h-[167px] m-auto rounded-[50%] w-[167px] object-cover"
                  src={`${location.state.img ? `http://localhost:5873/${location.state.img}` : "images/default.png"}`}
                  alt="ellipseTwentyFive"
                />
                <Img
                  className="absolute bottom-[0] h-10 right-[9%] w-10"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start sm:justify-center sm:items-center">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtProximaSoftMedium48"
                >
                  {location.state.name}
                </Text>
                <Text
                  className="text-[19px] text-black-900"
                  size="txtPoppinsRegular19"
                >
                  Product Designer . Design Mentor
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-proximasoft gap-[18px] items-start justify-start mt-[19px] w-full md:w-full">
              <div className="flex flex-row gap-3.5 items-end justify-start w-[96%] md:w-full">
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="mt-2 sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-gray-700_01"
                  size="txtProximaSoftRegular2377"
                >
                  {location.state.startTimeFormatted} - {location.state.endTimeFormatted}
                </Text>
              </div>
              <div className="flex flex-row gap-[9px] items-end justify-start w-full">
                <Img
                  className="h-[30px] rounded-md w-[30px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="capitalize mb-0.5 mt-2 text-[19.2px] text-blue_gray-700"
                  size="txtProximaSoftRegular192"
                >
                  {location.state.dayOfWeek},{location.state.date} {location.state.month}
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[13px] mt-6 sm:text-[21.36px] md:text-[23.36px] text-[25.36px] text-black-900_01"
              size="txtPoppinsMedium2536"
            >
              Answers
            </Text>
            {location.state.questions.map((item) => (
              <>
                <div className="flex flex-row font-poppins gap-[7px] items-start justify-start ml-3 md:ml-[0] mt-2 w-full md:w-full">
                  <div className="border-[6px] border-purple-700 border-solid h-[19px] sm:mt-0 mt-1 rounded-[9px] w-[19px]"></div>
                  <Text
                    className="sm:text-[18.19px] md:text-[20.19px] text-[22.19px] text-black-900_01"
                    size="txtPoppinsRegular2219"
                  >
                    {item.questionText}
                  </Text>
                </div>
                <Button
                  className="!text-blue_gray-700 cursor-pointer leading-[normal] w-fit md:ml-[0] ml-[38px] mt-3 rounded-[14px] text-[19.02px] text-center"
                  size="md"
                  variant="outline"
                >
                  {item.menteesAnswer}
                </Button>
              </>
            ))}
            {/* <div className="flex flex-row font-poppins gap-[7px] items-start justify-start ml-3 md:ml-[0] mt-10 w-full md:w-full">
              <div className="border-[6px] border-purple-700 border-solid h-[19px] sm:mt-0 mt-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="sm:text-[18.19px] md:text-[20.19px] text-[22.19px] text-black-900_01"
                size="txtPoppinsRegular2219"
              >
                What do you expect to achieve from session?
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[39px] mt-[5px] text-[19.02px] text-gray-700_01 w-[97%] sm:w-full"
              size="txtPoppinsRegular1902"
            >
              <>
                Joining designer career discussions has been a game-changer for
                me. I&#39;ve gained valuable insights, connected with
                experienced designers, and built a supportive network. Getting
                feedback on my work has fueled my growth, and the sessions have
                been an inspiring investment in my design journey.
              </>
            </Text> */}
            <div className="flex md:flex-col flex-row font-poppins gap-8 items-center justify-center mt-[67px] w-full md:w-full">
              <Button
                className="!text-black-900 cursor-pointer h-[90px] leading-[normal] rounded-[45px] shadow-bs16 sm:text-[26.14px] md:text-[28.14px] text-[30.14px] text-center w-[341px]"
                size="3xl"
                variant="outline"
                onClick={() => handlerRequestStatus('declined')}
              >
                Decline
              </Button>
              <Button
                className="border border-purple-700 border-solid cursor-pointer h-[90px] leading-[normal] rounded-[45px] shadow-bs5 sm:text-[26.13px] md:text-[28.13px] text-[30.13px] text-center w-[340px]"
                size="3xl"
                onClick={() => handlerRequestStatus('approved')}
              >
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwentyFivePage;
