import React from 'react'
import { Img } from 'components'
import { Link } from 'react-router-dom'

const Allmentee = ({allMentee}) => {
    // console.log("allmentee",allMentee)
    return (
        <>
        {allMentee.map((item,index) => (
            <tr className="overflow-hidden" key={index}>
                <td className="p-3 px-5 sm:p-0 ">
                    <Img
                        className="h-12 md:h-auto object-cover rounded-[23px] w-12 sm:ml-[15px]"
                        src={`${item?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${item?.profile_picture_url}` : "images/default.png"}`}
                        alt="unsplashzqv4fcm"
                    />
                </td>
                <td className="text-center">{item?.name}</td>
                <td className="text-center">{item?.email}</td>
                <td className="text-center">{item?.approved ? 'Verified' : 'Unverified'}</td>
                <td className="text-center">{item?.menteeModel?.menteeFeilds[0]}</td>
                <td className="text-base text-purple-700 underline sm:p-[13px] sm:px-[18px]">
                    <Link to={`/profile/mentee/${item?.menteeModel?._id}`}>
                        View Details
                    </Link>
                </td>
            </tr>
        ))}
        </>
    )
}

export default Allmentee
