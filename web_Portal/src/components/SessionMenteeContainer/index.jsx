import React, { useEffect, useState } from 'react'
import { Img, Text } from "components";
import { useFindMeetingIdMutation } from 'features/apis/user';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ZoomMtg } from '@zoom/meetingsdk';

const SessionMenteeContainer = ({ name, img, title, startTime, endTime, meeting }) => {
    const navigation = useNavigate()
    const { menteeData } = useSelector((state) => state.menteeData)
    const [meetingDetails,setMeetingDetails] = useState(null)
    let meetingData = {
        critarion: {_id : meeting}
    }
    const [findMeetingId] = useFindMeetingIdMutation()
    const meetingdata = async () => {
        const {data} = await findMeetingId(meetingData)
        console.log(data);
        setMeetingDetails(data)
    }
    useEffect(() => {
        meetingdata()
    },[meeting])


    let reqStartTime = new Date(startTime)
    let reqEndTime = new Date(endTime)
    const currentTime = new Date();
    let con;
    if (currentTime >= reqStartTime && currentTime <= reqEndTime) {
        con = true
        console.log("join now");
    } else {
        con = false
        console.log("Not yet!");
    }
    const date = new Date(startTime)
    const formattedDate = date.toISOString().slice(0,10)


    // console.log("meetingDetails",meetingDetails);
    
    // const getNav = () => {
    //     navigation(`/mtr-meeting/${meeting}`)
    // }

    
    var authEndpoint = 'https://mentorslounge-9da6e4f7046b.herokuapp.com/zoomPublic/createSDKJWT'
    var sdkKey = '7e2XT8n3QSuoJcQFuRVZw'
    var meetingNumber = meetingDetails?.data?.id
    var passWord = meetingDetails?.data?.password
    var role = 0
    var userName = menteeData?.data?.user?.name
    
    var leaveUrl = 'http://localhost:3000'
  
    const getSignature = async (e) => {
      ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
      e.preventDefault();
      console.log('Fetching signature...');
      try {
        const response = await fetch(authEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            meetingNumber: meetingNumber,
            role: role
          })
        });
        const data = await response.json();
        console.log('Signature fetched:', data.signature);
        startMeeting(data.signature);
      } catch (error) {
        console.error('Error fetching signature:', error);
      }
    };
  
    function startMeeting(signature) {
      console.log('Starting meeting...');
      document.getElementById('zmmtg-root').style.display = 'block'
  
      ZoomMtg.init({
        leaveUrl: leaveUrl,
        patchJsMedia: true,
        success: (success) => {
          console.log(success)
  
          ZoomMtg.join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            passWord: passWord,
            userName: userName,
            
            success: (success) => {
              console.log(success)
            },
            error: (error) => {
              console.log(error)
            }
          })
  
        },
        error: (error) => {
          console.log(error)
        }
      })
    }



    return (
        <div className="w-full md:w-full flex items-center gap-5 border-2 border-gray-50 border-solid p-[21px] px-[6px] sm:px-5 rounded-[19px]">
            <div className="flex flex-col h-full items-center justify-start ml-[34px] sm:ml-0 w-[71px]">
                <Img
                    className="md:h-auto rounded-[50%] w-[60px] h-[60px] object-cover"
                    src={`${img ? `https://mentorslounge-9da6e4f7046b.herokuapp.com${img}` : "images/default.png"}`}
                    alt="ellipseTen_One"
                />
            </div>
            <div className="flex sm:justify-between w-full">
                <div className="flex items-center flex-col w-full">
                    <Text
                        className="text-[19.52px] text-black-900 w-full sm:text-[12px] sm:font-bold"
                        size="txtPoppinsMedium1952"
                    >
                        {title}
                    </Text>
                    <Text
                        className="text-[12.83px] text-blue_gray-700 tracking-[0.13px] w-full sm:text-[10px]"
                        size="txtPoppinsMedium1283"
                    >
                        Session with {name}
                    </Text>
                    {true && <div className="flex gap-3 w-full">
                        {/* <a
                            href={`http://localhost:3001/meeting/${meetingDetails?.data?.id}/${meetingDetails?.data?.password}/${menteeData?.data?.user?.name}`}
                            // onClick={() => getNav()}
                            target='_blank'
                            className="font-medium leading-[normal] text-[12.83px] flex justify-center items-center border border-solid border-green-600
                            rounded-[13px] w-[15%] mt-[3px] text-green-600 px-3 py-[2px] sm:w-[80%] sm:text-[10px]"
                            color="green_600_01"
                            size="sm"
                            variant="outline"
                            
                        >Start Meeting</a> */}
                        <a
                            // href={`http://localhost:3001/meeting/${0}/${meetingDetails?.data?.id}/${meetingDetails?.data?.password}/${menteeData?.data?.user?.name}`}
                            onClick={getSignature}
                            target='_blank'
                            className="font-medium leading-[normal] text-[12.83px] flex justify-center items-center border border-solid border-green-600
                            rounded-[13px] w-[15%] mt-[3px] text-green-600 px-3 py-[2px] sm:w-[80%] sm:text-[10px] cursor-pointer"
                            color="green_600_01"
                            size="sm"
                            variant="outline"
                        >Join Now</a>
                    </div>}
                </div>
                <div className="flex sm:justify-end w-32">
                    <Text
                        className="text-base text-blue_gray-700 sm:text-[12px] sm:justify-end"
                        size="txtPoppinsMedium16"
                    >
                        {formattedDate}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default SessionMenteeContainer
