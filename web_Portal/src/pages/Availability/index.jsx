import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Text } from "components";
const Availability = ({ formData, handlerChange, next }) => {
    const [availData, setAvail] = useState([])
    const [getDate, setDate] = useState(new Date().toLocaleDateString())
    const handleData = (val) => {
        const formattedDate = val.toLocaleDateString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setDate(formattedDate)
    }

    const handlerAvailData = (name,value) => {
        setAvail((pre) => {
            if(name === 'availabilityStartTime'){
                const formattedTime = new Date(`${getDate}T${value}`).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  });
                return {...pre,[name]:`${getDate} ${formattedTime}`}
            }else if (name === 'availabilityEndTime'){
                const formattedTime = new Date(`${getDate}T${value}`).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  });
                return {...pre,[name]:`${getDate} ${formattedTime}`}
            }else{
                return {...pre,[name]:value}
            }
        })
    }

    useEffect(() => {
        handlerChange('mentorAttributes.mentorsAvailabilities',[availData])
    },[availData])

return (
    <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="bg-[#fff] flex flex-col items-start justify-start p-[30px] md:px-5 rounded-[26px] w-[41%] sm:w-full
            sm:mx-[12px] z-[1]">
            <div className="flex flex-col gap-5 items-start justify-start mb-[11px] md:ml-[0] w-full md:w-full">
                <Text
                    className="sm:text-[34.32px] md:text-[36.32px] text-[38.32px] text-gray-900"
                    size="txtProximaSoftSemiBold3832"
                >
                    Mark Your Availability
                </Text>
                <div>
                    <Calendar value={getDate} onChange={handleData} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <Text
                            className="text-base text-blue_gray-700"
                            size="txtPoppinsMedium16"
                        >
                            Available Slots
                        </Text>
                        <div>
                            <Button
                                className="cursor-pointer leading-[normal] min-w-[96px] rounded-[16px] text-[11.98px] text-center"
                                size="md"
                                variant="outline"
                            >
                                + Add More
                            </Button>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="startTime" className='text-xs text-blue_gray-700 mb-1'>Start Time</label>
                            <input
                                id='availabilityStartTime'
                                type="time"
                                className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px]"
                                color="gray_100_03"
                                required
                                variant="fill"
                                onChange={(e) => handlerAvailData('availabilityStartTime',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="endTime" className='text-xs text-blue_gray-700 mb-1'>End Time</label>
                            <input
                                id='availabilityEndTime'
                                type="time"
                                className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px]"
                                color="gray_100_03"
                                variant="fill"
                                required
                                onChange={(e) => handlerAvailData('availabilityEndTime',e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <Text
                            className="text-base text-blue_gray-700"
                            size="txtPoppinsMedium16"
                        >
                            Session lengths
                        </Text>
                        <div>
                            <Button
                                className="cursor-pointer leading-[normal] min-w-[96px] rounded-[16px] text-[11.98px] text-center"
                                size="md"
                                variant="outline"
                            >
                                + Add More
                            </Button>
                        </div>
                    </div>
                    <div>
                        <input
                            id='availabilityDuration'
                            type="text"
                            className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px]"
                            color="gray_100_03"
                            variant="fill"
                            placeholder='hh/mm/ss'
                            required
                            onChange={(e) => handlerAvailData('availabilityDuration',e.target.value)}
                        />
                    </div>
                </div>
                <Button
                    className="!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0] mt-[15px]
                        rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[25.4px] text-center w-full flex justify-center items-center"
                    size="md"
                    onClick={next}
                >
                    Next
                </Button>
            </div>
        </div>
    </div>
)
}

export default Availability
