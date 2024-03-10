import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Img } from "components";
import toast from 'react-hot-toast';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, FlagIcon } from '@heroicons/react/24/outline'
import { Button } from 'components';
import { useGetMenteeByIdMutation, useUploadAvatarMutation } from 'features/apis/mentee';
import { useGetMentorByIdMutation } from 'features/apis/mentor';

export default function ImgModel({ setToggleModel, toggleModel }) {
    const [uploadAvatar] = useUploadAvatarMutation()
    const [getMenteeById] = useGetMenteeByIdMutation()
    const [getMentorById] = useGetMentorByIdMutation()
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [avatar, setAvatar] = useState(null)
    const [showAvatar, setShowAvatar] = useState(null)
    const { menteeData } = useSelector((state) => state.menteeData)
    const { mentorData } = useSelector((state) => state.mentorData)
    const { user } = useSelector((state) => state.user)

    let menteePayloadData = {
        critarion: { _id: `${user?.menteeModel?._id || user?.data?.menteeModel?._id}` },
        menteeRefersReferralFields: "invitationLink inviteType inviteeEmail referred dateInvited referralStatus",
        menteeRefersSkip: 0,
        menteeRefersLimit: 10,
        menteeRefersSessionFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
        menteeRefersSessionSkip: 0,
        menteeRefersSessionLimit: 10,
        sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
        sessionRequestsSkip: 0,
        sessionRequestsLimit: 10,
        recentSearchesFields: "searchKeyWords mentors",
        recentSearchesSkip: 0,
        recentSearchesLimit: 10,
        userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
        userCreditCardsSkip: 0,
        userCreditCardsLimit: 10,
        userFields: "_id email name profile_picture_url",
        addedby: "_id email name",
        lastModifiedBy: "_id email name"
    }
    let mentorPayload = {
        critarion: { _id: `${user?.mentorModel?._id || user?.data?.mentorModel?._id}` },
        mentorReviewsFields: "reviewStars reviewDescription reviewBy",
        mentorReviewsSkip: 0,
        mentorReviewsLimit: 10,
        sessionRequestsFields: "sessionRequestTitle requestStartTime requestEndTime requestDuration requestStatus expectedFromSession askRelatedTo requestDescription preSessionQuestions sessionType sessionPrice sessionCommission sessCommPerc",
        sessionRequestsSkip: 0,
        sessionRequestsLimit: 10,
        mentorsAvailabilityFields: "availabilityStartTime availabilityEndTime availabilityDuration availabilityBooked availabilityExpired availabilityRequested",
        mentorsAvailabilitySkip: 0,
        mentorsAvailabilityLimit: 10,
        userCreditCardsFields: "creditCardType nameOnCard creditCardNumber expiryMonth expiryYear isCurrent active",
        userCreditCardsSkip: 0,
        userCreditCardsLimit: 10,
        userFields: "_id email name profile_picture_url",
        addedby: "_id email name",
        lastModifiedBy: "_id email name profile_picture_url"
    }
    const handleAvatarImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () => {
            if (reader.readyState === 2) {
                setShowAvatar(reader.result)
            }
        }
        setAvatar(e.target.files[0])
    }

    const UploadAvatar = async (e) => {
        e.preventDefault()
        if (avatar === null) {
            return toast.error(`please upload avatar!`, {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                },
            })
        }
        const { data } = await uploadAvatar(avatar)
        if (data.status === 'Success') {
            toast.success(`${data.message}`, {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            if (user?.role === 'mentor' || user?.data.role === 'mentor') {
                setOpen(false)
                getMentorById(mentorPayload)
            } else if (user?.role === 'mentee' || user?.data.role === 'mentee') {
                setOpen(false)
                getMenteeById(menteePayloadData)
            }
        } else if (data.status === 'Fail') {
            toast.error(`${data.message}`, {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                },
            })
        } else {
            toast.error(`${data.message}`, {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                },
            })
        }
    }



    return (
        <>
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg !bg-[#fff] w-[30%] text-left shadow-xl transition-all sm:mx-2 sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="relative flex items-center justify-center sm:flex sm:items-start">
                                            <Img
                                                className="h-[110px] rounded-[50%] w-[110px] border object-cover"
                                                src={`${showAvatar ?
                                                    showAvatar :
                                                    menteeData?.data?.user?.profile_picture_url ?
                                                        `http://localhost:5873${menteeData?.data?.user?.profile_picture_url}`
                                                        : mentorData?.data?.user?.profile_picture_url ?
                                                            `http://localhost:5873${mentorData?.data?.user?.profile_picture_url}` : 'images/default.png'}`}
                                                alt="ellipseTwentyFive"
                                            />
                                            <Button
                                                className="absolute border-[3px] border-solid border-white-A700 left-[55%] bottom-[4%] sm:bottom-[0%]
                                                flex h-[30px] items-center justify-center w-[30px] !bg-[#743C95] !rounded-2xl p-[4px]"
                                                shape="circle"
                                                size="sm"
                                            >
                                                <label htmlFor="avatarImg">
                                                    <Img
                                                        className="h-[19px]"
                                                        src="images/img_fluentedit20filled.svg"
                                                        alt="fluentedit20fil"
                                                    />
                                                </label>
                                                <input type="file"
                                                    id='avatarImg'
                                                    className='hidden'
                                                    accept='image/*'
                                                    name="file"
                                                    onChange={handleAvatarImg} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-[#743C95] px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm sm:ml-3 sm:w-auto"
                                            onClick={UploadAvatar}
                                        >
                                            Upload
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

