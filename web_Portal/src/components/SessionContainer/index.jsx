import React from 'react'
import { Img, Text } from "components";
const SessionContainer = ({ name, img, title, startTime, endTime, meeting }) => {
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
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="w-full md:w-full flex items-center gap-5 border-2 border-gray-50 border-solid p-[21px] px-[6px] sm:px-5 rounded-[19px]">
            <div className="flex flex-col h-full items-center justify-start ml-[34px] sm:ml-0 w-[71px]">
                <Img
                    className="md:h-auto rounded-[50%] w-[60px] h-[60px] object-cover"
                    src={`${img ? `http://localhost:5873${img}` : "images/default.png"}`}
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
                    {con && <div className="flex gap-3 w-full">
                        <a
                            href={`${meeting?.start_url}`}
                            target='_blank'
                            className="font-medium leading-[normal] text-[12.83px] flex justify-center items-center border border-solid border-green-600
                            rounded-[13px] w-[15%] mt-[3px] text-green-600 px-3 py-[2px] sm:w-[80%] sm:text-[10px]"
                            color="green_600_01"
                            size="sm"
                            variant="outline"
                        >Start Meeting</a>
                        <a
                            href={`${meeting?.join_url}`}
                            target='_blank'
                            className="font-medium leading-[normal] text-[12.83px] flex justify-center items-center border border-solid border-green-600
                            rounded-[13px] w-[15%] mt-[3px] text-green-600 px-3 py-[2px] sm:w-[80%] sm:text-[10px]"
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

export default SessionContainer
