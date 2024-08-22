import React, { useEffect, useState } from 'react'
import { useGetAllListOfUserMutation } from 'features/apis/admin'
import Loader from 'pages/Loader'
import Allmentee from './Allmentee'

const MenteeProfile = ({menteeOffset,setMenteeOffset,menteePayload,setMenteePayload}) => {
    const [allMentee, setAllMentee] = useState([])
    const [getAllListOfUser, { isLoading }] = useGetAllListOfUserMutation()

    const getListUser = async () => {
        const { data } = await getAllListOfUser(menteePayload)
        if (data.status === 'Success') {
            setAllMentee(data?.data?.users)
        }
    }

    useEffect(() => {
        getListUser()
    }, [menteePayload])


    const handlerPageNext = async (e) => {
        e.preventDefault()
        const newOffset = menteeOffset + 5
        setMenteeOffset(newOffset)
        setMenteePayload((prevPayload) => ({
            ...prevPayload,
            offset: newOffset
        }));
    }

    const handlerPagePrevious = async (e) => {
        e.preventDefault()
        const newOffset = Math.max(0, menteeOffset - 5)
        setMenteeOffset(newOffset)
        setMenteePayload((prevPayload) => ({
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
                    <Allmentee allMentee={allMentee} />
                    <tr className="!w-full">
                        <td className="!w-full flex justify-center items-center p-3">
                            <button className={`border border-[#000] px-2 rounded-md w-24 shadow font-bold ${menteeOffset === 0 && 'opacity-70 cursor-not-allowed'}`}
                                onClick={handlerPagePrevious}
                                disabled={menteeOffset === 0}
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
                          ${allMentee.length < 5 && "opacity-70 cursor-not-allowed"}`}
                                onClick={handlerPageNext}
                                disabled={allMentee.length < 5}
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

export default MenteeProfile
