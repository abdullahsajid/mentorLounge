import React, { useState, useEffect } from 'react'
import Loader from 'pages/Loader'
import Items from 'components/AllMentor/Items'
import { useGetAllListOfUserMutation } from "features/apis/admin";

const MentorsProfile = ({payload,setPayload,itemOffset,setItemOffset}) => {
    const [getAllListOfUser,{isLoading}] = useGetAllListOfUserMutation()
    const [allMentors, setAllMentors] = useState([])

    const getMentorData = async () => {
        const { data } = await getAllListOfUser(payload)
        setAllMentors(data)
    }

    useEffect(() => {
        getMentorData()
    }, [payload])

    const handlerPageNext = async (e) => {
        e.preventDefault()
        const newOffset = itemOffset + 5
        setItemOffset(newOffset)
        setPayload((prevPayload) => ({
            ...prevPayload,
            offset: newOffset
        }));
    }

    const handlerPagePrevious = async (e) => {
        e.preventDefault()
        const newOffset = Math.max(0, itemOffset - 5)
        setItemOffset(newOffset)
        setPayload((prevPayload) => ({
            ...prevPayload,
            offset: newOffset
        }));
    }


    return (
        <>
            {isLoading ? (
                <tr>
                    <td></td>
                    <td></td>
                    <td className="py-5">
                        <div className="flex justify-center items-center w-full">
                            <Loader widthAlign={true} customStyle={'!h-full !justify-end'} />
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            ) : (
                <>
                    <Items allMentors={allMentors?.data?.users} />
                    <tr className="!w-full">
                        <td className="!w-full flex justify-center items-center p-3">
                            <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold ${itemOffset === 0 && 'opacity-70 cursor-not-allowed'}`}
                                onClick={handlerPagePrevious}
                                disabled={itemOffset === 0}
                            >
                                Previous
                            </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="!w-full flex justify-center items-center p-3">
                            <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold
                          ${allMentors?.data?.users.length < 5 && "opacity-70 cursor-not-allowed"}`}
                                onClick={handlerPageNext}
                                disabled={allMentors?.data?.users.length < 5}
                            >
                                Next
                            </button>
                        </td>
                    </tr>
                </>
            )}
        </>
    )
}

export default MentorsProfile
