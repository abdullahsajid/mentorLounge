import React from 'react'
import { Img, Text } from "components";

const SessionNotifier = ({ startTime, name, endTime }) => {
    //today date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    //tomorrow date
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);
    
    const yearTomorrow = tomorrowDate.getFullYear();
    const monthTomorrow = (tomorrowDate.getMonth() + 1).toString().padStart(2, '0');
    const dayTomorrow = tomorrowDate.getDate().toString().padStart(2, '0');
    
    const formattedTomorrowDate = `${yearTomorrow}-${monthTomorrow}-${dayTomorrow}`;
    // const getSessionDate = () => new Date(startTime);
    
    //getting time
    const sessionDate = startTime.slice(0,10)
    let sTime = new Date(startTime)
    let eTime = new Date(endTime)
    const startTimeFormatted = sTime.toLocaleTimeString('en-US', { hour12: true });
    const endTimeFormatted = eTime.toLocaleTimeString('en-US', { hour12: true });
    const isToday = formattedDate === sessionDate;
    const isTomorrow = formattedTomorrowDate === sessionDate

    return (
        <>
            {isToday &&
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
                                Session with {name}
                            </Text>
                            <Text
                                className="text-[16.64px] text-black-900"
                                size="txtPoppinsRegular1664"
                            >
                                {startTimeFormatted} - {endTimeFormatted}
                            </Text>
                        </div>
                    </div>
                </div>
            }
            {isTomorrow &&
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
                                Session for Tomorrow
                            </Text>
                            <Text
                                className="text-[16.64px] text-black-900"
                                size="txtPoppinsRegular1664"
                            >
                                Session with {name}
                            </Text>
                            <Text
                                className="text-[16.64px] text-black-900"
                                size="txtPoppinsRegular1664"
                            >
                                {startTimeFormatted} - {endTimeFormatted}
                            </Text>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SessionNotifier
