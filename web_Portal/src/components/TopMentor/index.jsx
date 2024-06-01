import React from 'react'
import { Img, Text } from "components";
import { useNavigate } from 'react-router-dom';
const TopMentor = ({id, name, mentorFields, mentorDescription, mentorEducation, mentorExperience, mentorPrice, links, img,available}) => {
    const navigate = useNavigate()
    const handlerMentorProfile = () => {
        navigate('/profile', { state: {id,available, name, mentorFields, mentorDescription, mentorEducation, mentorExperience, mentorPrice, links, img } })
    }
    return (
        <div className="h-full relative w-full cursor-pointer overflow-hidden" onClick={handlerMentorProfile}>
            <div className="h-full m-auto w-full">
                <Img
                    className=" m-auto object-cover rounded-[13px] w-full h-full"
                    src={`${img ? `http://localhost:5873/${img}` : "images/default.png"}`}
                    alt="rectangleSix"
                />
            </div>
            <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[5%] w-[83%] gap-[7px] overflow-y-auto">
                <Text
                    className="text-[15px] font-bold text-white-A700 tracking-[0.10px]"
                    size="txtPoppinsMedium1009"
                >
                    {name}
                </Text>
                <div className="flex flex-row flex-wrap items-center w-full gap-2">
                    {mentorFields.map((item, index) => (
                        <>
                            <Text
                                name="frameOne"
                                placeholder="Career Advice"
                                className="bg-blue_gray-100 h-[19px] leading-[normal] px-3 py-2 border
                              placeholder:text-black-900_01 text-[15px] text-left flex justify-center items-center rounded-lg font-semibold"
                                wrapClassName="w-[47%]"
                                shape="round"
                                color="blue_gray_100"
                                size="xs"
                                variant="fill"
                                key={index}
                            >{item}</Text>
                        </>
                    ))}
                </div>
                <Text
                    className="mt-[5px] text-[12.8px] text-lime-700 underline"
                    size="txtPoppinsSemiBold128"
                >
                    Book Session
                </Text>
            </div>
        </div>
    )
}

export default TopMentor
