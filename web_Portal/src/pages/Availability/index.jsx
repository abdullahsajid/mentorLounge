import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, Text } from "components";
import moment from 'moment';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Availability = ({ formData, handlerChange, next, prev }) => {
    const [availData, setAvail] = useState([])
    const [selectedDates, setSelectedDates] = useState([]);
    const [alert, setAlert] = useState([])
    const [alertDiffAvail, setAlertDiffAvail] = useState([])


    const handlerAvailData = (name, value, i) => {
        const updatedAvailData = [...availData];
        // availData.map(item => {
        //     const startMoment = moment(item.availabilityStartTime);
        //     const endMoment = moment(item.availabilityEndTime);
        //     const selectedStartMoment = moment(selectedDates[i]).set({
        //         hour: moment(value, 'LTS').hour(),
        //         minute: moment(value, 'LTS').minute(),
        //         second: moment(value, 'LTS').second()
        //     });
        //     // let updateAlertDiffAvail = [...alertDiffAvail]
        //     if (startMoment.isSame(moment(selectedDates[i]), 'day')) {
        //         if (selectedStartMoment.isBetween(startMoment, endMoment)) {
        //             console.log('Choice overlaps with an existing slot. Please select a different time.');
        //             setAlertDiffAvail(true)
        //         } else {
        //             console.log('The selected time slot is available.');
        //             setAlertDiffAvail(false)  
        //         }
        //     } else {
        //         console.log('No existing slots found for the selected date.');
        //     }
        // })
        if (name === 'availabilityStartTime') {
            const endTimeMoment = moment(updatedAvailData[i]?.availabilityEndTime, 'YYYY-MM-DD HH:mm:ss');
            const StartTimeMoment = moment(`${moment(selectedDates?.[i])?.format('YYYY-MM-DD')} ${value}`, 'YYYY-MM-DD LTS');
            updatedAvailData[i] = {
                ...updatedAvailData[i],
                availabilityStartTime: `${moment(selectedDates[i])?.format('YYYY-MM-DD')} ${moment(value, 'LTS')?.format('HH:mm:ss')}`,
                availabilityDuration: (StartTimeMoment && endTimeMoment) ? `${endTimeMoment.diff(StartTimeMoment, 'minutes')} Minutes` : ''
            }
            setAvail(updatedAvailData);

        } else if (name === 'availabilityEndTime') {
            const startTimeMoment = moment(updatedAvailData[i].availabilityStartTime, 'YYYY-MM-DD HH:mm:ss');
            const endTimeMoment = moment(`${moment(selectedDates[i])?.format('YYYY-MM-DD')} ${value}`, 'YYYY-MM-DD LTS');

            let updateAlert = [...alert]
            if (endTimeMoment.isAfter(startTimeMoment)) {
                updatedAvailData[i] = {
                    ...updatedAvailData[i],
                    availabilityEndTime: `${moment(selectedDates[i])?.format('YYYY-MM-DD')} ${moment(value, 'LTS')?.format('HH:mm:ss')}`,
                    availabilityDuration: (startTimeMoment && endTimeMoment) ? `${endTimeMoment.diff(startTimeMoment, 'minutes')} Minutes` : ''
                };
                updateAlert[i] = false
                setAvail(updatedAvailData);
                setAlert(updateAlert)
            } else {
                updateAlert[i] = true
                setAlert(updateAlert)
            }
            // let val = availData.map((item) => { return(
            //     moment(item.availabilityStartTime).format('YYYY-MM-DD') === moment(selectedDates[i]).format('YYYY-MM-DD')
            //     ? ((moment(item.availabilityStartTime).format('HH:mm:ss') >= moment(value, 'LTS')?.format('HH:mm:ss'))) 
            //     ? console.log('choice different slot') : console.log('so far good to go!') :''
            // )})
            // console.log("val=> ", val);
        }
    }



    const handleDateSelect = (date) => {
        if (selectedDates.find(selectedDate => selectedDate.getTime() === date.getTime())) {
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate.getTime() !== date.getTime()));
            setAvail(availData.filter(selectDate => moment(selectDate.availabilityStartTime).format('YYYY-MM-DD') !== moment(date).format('YYYY-MM-DD')));
            // setSelectedDate(date);
        } else {
            setSelectedDates([...selectedDates, date]);
            // setSelectedDate(date);
        }
    };
    // && (moment(item.availabilityEndTime).format('HH:mm:ss') < moment(value, 'LTS')?.format('HH:mm:ss'))
    const handleAddInput = (i) => {
        setSelectedDates(selectedDates.concat(selectedDates[i]));
    }

    const tileClassName = ({ date }) => {
        return selectedDates.find(selectedDate => selectedDate.getTime() === date.getTime()) ? 'react-calendar__tile--active' : null;
    };

    useEffect(() => {
        handlerChange('mentorAttributes.mentorsAvailabilities', availData)
    }, [availData])


    useEffect(() => {
        console.log("availData=> ", availData);
    }, [availData]);


    return (
        <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="bg-[#fff] flex flex-col items-start justify-start p-[30px] md:px-5 rounded-[26px] w-[41%] sm:w-full
            sm:mx-[12px] z-[1] h-full">
                <div className="flex flex-col gap-5 items-start justify-start mb-[11px] md:ml-[0] w-full md:w-full overflow-y-scroll">
                    <Text
                        className="sm:text-[34.32px] md:text-[36.32px] text-[38.32px] text-gray-900 flex gap-2 items-center"
                        size="txtProximaSoftSemiBold3832"
                    >
                        {/* <FontAwesomeIcon icon={faArrowLeft} className='text-[18px]' onClick={prev} /> */}
                        Mark Your Availability
                    </Text>
                    <div>
                        <Calendar
                            value={selectedDates}
                            onChange={(date) => handleDateSelect(date)}
                            tileClassName={tileClassName}
                            selectRange={false}
                        //minDate={new Date()}
                        />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='flex justify-between items-center w-full'>
                            <Text
                                className="text-base text-blue_gray-700"
                                size="txtPoppinsMedium16"
                            >
                                Available Slots
                            </Text>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {selectedDates.length > 0 && Array.from({ length: selectedDates.length }, (_, i) => (
                                <>
                                    <div className='flex justify-between gap-2' key={i}>
                                        <div className='flex gap-2'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="startTime" className='text-xs text-blue_gray-700 mb-1'>start time
                                                    <span className='font-bold ml-2'>
                                                        ({moment(selectedDates[i])?.format('YYYY-MM-DD') ?
                                                            moment(selectedDates[i])?.format('YYYY-MM-DD') : ''})
                                                    </span>
                                                </label>
                                                <input
                                                    id='availabilityStartTime'
                                                    type="time"
                                                    className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px]"
                                                    color="gray_100_03"
                                                    required
                                                    variant="fill"
                                                    value={availData[i]?.availabilityStartTime ? moment(availData[i]?.availabilityStartTime).format('HH:mm') : ''}
                                                    onChange={(e) => handlerAvailData('availabilityStartTime', e.target.value, i)}
                                                />
                                                {/* <span className='text-[red] text-[13px] mt-1'>{alert && "please enter less than endtime"}</span> */}
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="endTime" className='text-xs text-blue_gray-700 mb-1'>end time</label>
                                                <input
                                                    id='availabilityEndTime'
                                                    type="time"
                                                    className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px]"
                                                    color="gray_100_03"
                                                    variant="fill"
                                                    required
                                                    value={availData[i]?.availabilityEndTime ? moment(availData[i]?.availabilityEndTime).format('HH:mm') : ''}
                                                    onChange={(e) => handlerAvailData('availabilityEndTime', e.target.value, i)}
                                                />
                                                <span className='text-[red] text-[13px] mt-1'>{alert[i] && "please enter greater than starttime"}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Button
                                                className="cursor-pointer leading-[normal] min-w-[96px] rounded-[16px] text-[11.98px] text-center"
                                                size="md"
                                                variant="outline"
                                                onClick={() => handleAddInput(i)}
                                            >
                                                + Add More
                                            </Button>
                                        </div>
                                    </div >
                                    <div className='flex flex-col gap-2 w-full'>
                                        <div className='flex flex-col'>
                                            <label htmlFor="endTime" className='text-xs text-blue_gray-700 mb-1'>Session Duration</label>
                                            <input
                                                id='availabilityDuration'
                                                type="text"
                                                className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-[150px] border border-gray-900_1e border-solid rounded-[22px] cursor-not-allowed"
                                                color="gray_100_03"
                                                variant="fill"
                                                placeholder='hh/mm/ss'
                                                required
                                                value={availData[i]?.availabilityDuration ? availData[i]?.availabilityDuration : 'Duration'}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                    <hr className='my-2' />
                                </>
                            ))}
                        </div>
                    </div>

                    <Button
                        className={`!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0] mt-[15px]
                        rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[25.4px] text-center w-full flex justify-center items-center
                        ${availData.length === 0 && "opacity-60 cursor-not-allowed"}`}
                        size="md"
                        onClick={next}
                        disabled={availData.length === 0}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Availability


