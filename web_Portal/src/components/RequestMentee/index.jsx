import React from 'react'
import { Img, Text } from "components";
import { useNavigate } from 'react-router-dom';

const RequestMentee = ({id, name, img, title, duration, startTime, endTime, questions }) => {
    const navigation = useNavigate()
    let getDates = startTime.slice(0, 10)
    let sTime = new Date(startTime)
    let eTime = new Date(endTime)
    const startTimeFormatted = sTime.toLocaleTimeString('en-US', { hour12: true });
    const endTimeFormatted = eTime.toLocaleTimeString('en-US', { hour12: true });
    const dateObject = new Date(getDates);
    const dayOfWeek = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
    const month = dateObject.toLocaleDateString('en-US', { month: 'long' });
    const date = dateObject.getDate();

    const handlerRequest = () => {
        navigation('/mtr-Request-Session', { state: {id, name, img, dayOfWeek, month, date,startTimeFormatted,endTimeFormatted,questions } })
    }
    return (
        <div className="flex md:flex-col flex-row font-poppins md:gap-[58px] items-center justify-between mt-2.5 w-full">
            <div className="bg-white-A700 border border-gray-900_1e border-solid flex md:flex-1 flex-col items-center
            justify-end p-[19px] rounded-[14px] w-full md:w-full">
                <div className="flex sm:flex-col flex-row gap-[15px] items-start mt-2.5 w-full relative">
                    <Img
                        className="h-[87px] rounded-[50%] w-[87px] object-cover"
                        src={`${img ? `http://localhost:5873/${img}` : "images/default.png"}`}
                        alt="ellipseFortyThree"
                    />
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                            <Text
                                className="mt-1 text-[18.84px] text-black-900 sm:text-[15px]"
                                size="txtPoppinsSemiBold1884"
                            >
                                {title}
                            </Text>
                        </div>
                        <div className="w-full">
                            <Text
                                className="text-[18.84px] text-blue_gray-700 sm:text-[15px]"
                                size="txtPoppinsMedium1884"
                            >
                                Request By {name}
                            </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row items-center w-full">
                            <div className="flex flex-row mb-[15px] gap-3 w-full">
                                <div className="flex flex-row items-center gap-2 mt-[-0.32px]">
                                    <Img
                                        className="h-[19px] w-[19px] sm:h-[14px] sm:w-[14px]"
                                        src="images/img_clock.svg"
                                        alt="clock"
                                    />
                                    <Text
                                        className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                        size="txtPoppinsRegular1468"
                                    >
                                        {duration}
                                    </Text>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <Img
                                        className="h-[17px] rounded-[3px] w-[17px] sm:h-[14px] sm:w-[14px]"
                                        src="images/img_outlinetime.svg"
                                        alt="outlinetime"
                                    />
                                    <Text
                                        className="text-[14.68px] text-blue_gray-700 sm:text-[12px]"
                                        size="txtPoppinsRegular1468"
                                    >
                                        {dayOfWeek},{date} {month}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto flex flex-col justify-between items-end h-full absolute right-0 bottom-0 sm:bottom-[-8px]">
                        <Text
                            className="text-[15.7px] text-blue_gray-700"
                            size="txtPoppinsMedium157"
                        >
                            3m
                        </Text>
                        <Text
                            className="text-[15.7px] text-purple-700 underline w-max cursor-pointer"
                            size="txtPoppinsMedium157Purple700"
                            onClick={() => handlerRequest()}
                        >
                            View Details
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestMentee
