import React, { lazy, useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import toast from 'react-hot-toast';
import { Button, Img, Input, Text } from "components";
import DesktopThirteenChangepassword from "components/DesktopThirteenChangepassword";
import { useSelector } from "react-redux";
import { useGetMenteeByIdMutation, useUpdateMenteeDetailMutation, useUpdateMenteeSettingsMutation } from "features/apis/mentee";
import Loaders from "components/Loaders";
const IconsContainer = lazy(() => import("components/IconsContainer"));
const ImgModel = lazy(() => import("components/ImgModel"));


const DesktopThirteenPage = ({ toggleSideBar, setToggleSidebar }) => {
  const [toggleModel, setToggleModel] = useState(false)
  const [updateMenteeDetail] = useUpdateMenteeDetailMutation()
  const [getMenteeById] = useGetMenteeByIdMutation()
  const [updateMenteeSettings] = useUpdateMenteeSettingsMutation()
  const { user } = useSelector((state) => state.user)
  const { menteeData } = useSelector((state) => state.menteeData)
  const [name, setName] = useState('')
  const [menteeDescription, setMenteeDescription] = useState('')
  const [menteeEducation, setMenteeEducation] = useState('')
  const [menteeExperience, setMenteeExperience] = useState('')
  const [socialLink, setLinks] = useState([])
  const [appNotifications, setAppNotifications] = useState(null);
  const [promotionalNotifications, setPromotionalNotifications] = useState(null);
  const [updatesNotifications, setUpdatesNotifications] = useState(null);
  const [isValid, setIsValid] = useState(true);
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

  const handlerAddInput = () => {
    setLinks([...socialLink, { socialPlatformLink: '' }])
  }

  const isValidLink = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };


  const handleInput = (e, index) => {
    let { name, value } = e.target
    setIsValid(isValidLink(value))
    let updateLink = [...socialLink]
    updateLink[index][name] = value
    setLinks(updateLink)
  }

  useEffect(() => {
    getMenteeById(menteePayloadData)
    setToggleSidebar(false)
  }, [])

  useEffect(() => {
    if (menteeData.data) {
      setName(menteeData?.data?.user?.name)
      setMenteeDescription(menteeData?.data?.menteeDescription)
      setMenteeEducation(menteeData?.data?.menteeEducation)
      setMenteeExperience(menteeData?.data?.menteeExperience)
      setAppNotifications(menteeData?.data?.user?.userSettings?.notificationSettings?.appNotifications?.emailNotifications)
      setPromotionalNotifications(menteeData?.data?.user?.userSettings?.notificationSettings?.promotionalNotifications?.emailNotifications)
      setUpdatesNotifications(menteeData?.data?.user?.userSettings?.notificationSettings?.updateNotifications?.emailNotifications)
    }
  }, [menteeData])

  // useEffect(() => {
  //   if (user?.userSettings) {
  //     setAppNotifications(user?.userSettings?.notificationSettings?.appNotifications?.emailNotifications)
  //     setPromotionalNotifications(user?.userSettings?.notificationSettings?.promotionalNotifications?.emailNotifications)
  //     setUpdatesNotifications(user?.userSettings?.notificationSettings?.updateNotifications?.emailNotifications)
  //   }
  // }, [user])

  let updateData = {
    menteeid: menteeData?.data?._id,
    active: true
  }
  const handlerUpdate = async () => {
    if ((menteeData?.data?.menteeDescription === menteeDescription) && (menteeData?.data?.menteeEducation === menteeEducation) &&
      (menteeData?.data?.menteeExperience === menteeExperience) && ((socialLink?.length === 0) || (socialLink?.some(item => item.socialPlatformLink === ''))) && (menteeData?.data?.user?.name === name)) {
      return toast.error(`nothing change!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
    if (isValid === false) {
      return toast.error(`invalid link`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
    if (menteeData?.data?.user?.name !== name) {
      updateData['name'] = name
    }
    if (menteeData?.data?.menteeDescription !== menteeDescription) {
      updateData['menteeDescription'] = menteeDescription
    }
    if (menteeData?.data?.menteeEducation !== menteeEducation) {
      updateData['menteeEducation'] = menteeEducation
    }
    if (menteeData?.data?.menteeExperience !== menteeExperience) {
      updateData['menteeExperience'] = menteeExperience
    }
    if (socialLink?.length > 0) {
      socialLink.push(...menteeData?.data?.socialMediaLinks.flat());
      updateData['socialMediaLinks'] = socialLink
    }
    const { data } = await updateMenteeDetail(updateData)
    if (data?.status === 'Success') {
      toast.success(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      setLinks([])
      getMenteeById(menteePayloadData)
    } else if (data?.status === 'Fail') {
      toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    } else {
      toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }

  let menteeSetting = {
    userSettingid: menteeData?.data?.user?.userSettings?._id,
    notificationSettings: {
      appNotifications: {
        emailNotifications: menteeData?.data?.user?.userSettings?.notificationSettings?.appNotifications?.emailNotifications,
        mobileNotifications: false,
        smsNotifications: false
      },
      promotionalNotifications: {
        emailNotifications: menteeData?.data?.user?.userSettings?.notificationSettings?.promotionalNotifications?.emailNotifications,
        mobileNotifications: false,
        smsNotifications: false
      },
      updateNotifications: {
        emailNotifications: menteeData?.data?.user?.userSettings?.notificationSettings?.updateNotifications?.emailNotifications,
        mobileNotifications: false,
        smsNotifications: false
      }
    }
  }

  const handlerNotifications = (toggleType) => {
    if (toggleType === 'appNotifications') {
      if (appNotifications === true) {
        menteeSetting.notificationSettings.appNotifications.emailNotifications = false
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      } else if (appNotifications === false) {
        menteeSetting.notificationSettings.appNotifications.emailNotifications = true
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      }
    } else if (toggleType === 'promotionalNotifications') {
      if (promotionalNotifications === true) {
        menteeSetting.notificationSettings.promotionalNotifications.emailNotifications = false
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      } else if (promotionalNotifications === false) {
        menteeSetting.notificationSettings.promotionalNotifications.emailNotifications = true
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      }
    } else if (toggleType === 'updatesNotifications') {
      if (updatesNotifications === true) {
        menteeSetting.notificationSettings.updateNotifications.emailNotifications = false
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      } else if (promotionalNotifications === false) {
        menteeSetting.notificationSettings.updateNotifications.emailNotifications = true
        updateMenteeSettings(menteeSetting)
        getMenteeById(menteePayloadData)
      }
    }
  }

  return (
    <>
      <div className="bg-white-A700 font-poppins sm:!w-full ml-auto" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className=" flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="bg-[#f8f5f9] flex flex-1 flex-col font-proximasoft items-center justify-start p-[35px] md:px-5 shadow-bs14 sm:gap-[12px] w-full">
            <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
              <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
            </div>
            <div className="flex flex-col gap-[33px] items-center justify-start mb-[90px] w-full">
              <div className="flex sm:flex-row flex-row md:gap-10 items-center justify-between w-full md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                  size="txtProximaSoftSemiBold48Black90001"
                >
                  Settings
                </Text>
                <Button
                  className="!text-gray-100 cursor-pointer font-poppins h-[54px] leading-[normal] mb-[3px]
                    rounded-[27px] shadow-bs5 text-center text-xl w-[196px] sm:w-[140px]"
                  shape="round"
                  size="lg"
                  onClick={handlerUpdate}
                >
                  Save
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[22px] justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-0.5 p-[30px] 
                sm:px-5 rounded-[26px] w-full md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[18px] w-full md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] flex items-center justify-start text-gray-900 w-full"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Edit Profile
                    </Text>
                    <div className="md:h-[147px] mt-[37px] relative w-full flex item-center justify-start">
                      <Img
                        className="h-[110px] rounded-[50%] w-[110px] object-cover border"
                        src={menteeData?.data?.user?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${menteeData?.data?.user?.profile_picture_url}` : 'images/default.png'}
                        alt="ellipseTwentyFive"
                      />
                      <Button
                        className="absolute border-[3px] border-solid border-white-A700 bottom-[4%] sm:bottom-[23%]
                         flex h-[34px] items-center justify-center left-[80px] w-[34px]"
                        shape="circle"
                        size="sm"
                        onClick={() => setToggleModel(!toggleModel)}
                      >
                        <Img
                          className="h-[19px]"
                          src="images/img_fluentedit20filled.svg"
                          alt="fluentedit20fil"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-9 w-full md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="inputfield"
                          placeholder="Adiel Omari"
                          className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto 
                          text-[17.92px] text-left w-full "
                          wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full px-[25px]"
                          color="gray_100_03"
                          size="xl"
                          variant="fill"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start w-full md:w-full gap-3">
                        <Text
                          className="md:ml-[0] ml-[3px] text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Description
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="language"
                              placeholder="I&#39;m your Product Design Mentor wit. "
                              className="leading-[normal] p-0 placeholder:text-blue_gray-700 text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid flex md:h-auto rounded-[25px] w-full sm:w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-px h-[26px] ml-[17px]"
                                  src="images/img_humbleiconsmaximize.svg"
                                  alt="humbleicons:maximize"
                                />
                              }
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                              value={menteeDescription}
                              onChange={(e) => setMenteeDescription(e.target.value)}
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-8 w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Education
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="inputfield_One"
                              placeholder="Masters in Visual Designing."
                              className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                              value={menteeEducation}
                              onChange={(e) => setMenteeEducation(e.target.value)}
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mt-[23px] w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Experience
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="duration"
                              placeholder="1 year"
                              className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                              value={menteeExperience}
                              onChange={(e) => setMenteeExperience(e.target.value)}
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-[33px] w-[99%] md:w-full">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Links of Social Media Plateforms
                        </Text>
                        <div className="flex flex-col ml-0.5 md:ml-[0] relative w-full">
                          <div className="flex flex-col items-start justify-end mx-auto pr-[7px] py-[7px] w-full">
                            <div className="flex flex-row items-center justify-start w-full gap-3 md:w-full">
                              {menteeData?.data?.socialMediaLinks ?
                                (<IconsContainer links={menteeData?.data?.socialMediaLinks} />)
                                : (<><Loaders /></>)}
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[108px] ml-auto mt-[-7.84px] rounded-[18px] text-[13.42px] text-center z-[1]"
                            size="md"
                            variant="outline"
                            onClick={handlerAddInput}
                          >
                            + Add More
                          </Button>
                        </div>
                        {socialLink.length > 0 && socialLink.map((item, index) => (
                          <div className="flex flex-col items-center justify-start w-full" key={index}>
                            <Input
                              name="socialPlatformLink"
                              placeholder="google.com"
                              className="leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-700 sm:h-auto text-[17.92px] text-left w-full"
                              wrapClassName="border border-gray-900_1e border-solid rounded-[25px] w-full"
                              color="gray_100_03"
                              size="xl"
                              variant="fill"
                              value={item.socialPlatformLink}
                              onChange={(e) => handleInput(e, index)}
                            ></Input>
                          </div>
                        ))}
                      </div>
                      {/* <div className="flex flex-col items-start justify-start mt-6 w-full md:w-full gap-3">
                        <Text
                          className="text-[17.92px] text-blue_gray-700"
                          size="txtPoppinsMedium1792"
                        >
                          Price for each Session
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="bg-gray-100_03 border border-gray-900_1e border-solid h-[50px] justify-center sm:px-5 px-[34px] py-3.5 
                              rounded-[25px] text-[13.44px] text-gray-900_7f w-full"
                              size="txtPoppinsRegular1344"
                            >
                              $50
                            </Text>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-full md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-[18px] items-start justify-center p-[26px] sm:px-5
                   rounded-[23px] w-full">
                    <Text
                      className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                      size="txtProximaSoftSemiBold30Gray900"
                    >
                      Login & Security
                    </Text>
                    <div className="flex flex-col gap-[31.76px] items-start justify-start mb-12 md:ml-[0] w-full sm:w-full">
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-full sm:w-full">
                        <a
                          href="javascript:"
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                        >
                          <Text size="txtProximaSoftSemiBold2287">Login</Text>
                        </a>
                        <div className="flex flex-col items-start justify-start px-[6.35px] w-full sm:w-full">
                          <DesktopThirteenChangepassword className="flex flex-col items-center justify-start w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[25.41px] items-start justify-start w-full sm:w-full">
                        <Text
                          className="sm:text-[18.87px] md:text-[20.87px] text-[22.87px] text-gray-900 w-auto"
                          size="txtProximaSoftSemiBold2287"
                        >
                          Account Settings
                        </Text>
                        <div className="flex flex-col gap-[25.41px] items-start justify-start px-[6.35px] w-full sm:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-[17.79px] text-gray-900 font-semibold"
                              size="txtProximaSoftSemiBold1779"
                            >
                              Delete your Account
                            </Text>
                            <Text
                              className="text-[17.79px] text-purple-700 text-right underline"
                              size="txtProximaSoftMedium1779"
                            >
                              Delete
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-[17.79px] text-gray-900 font-semibold"
                              size="txtProximaSoftSemiBold1779"
                            >
                              Deactivate your Account
                            </Text>
                            <Text
                              className="text-[17.79px] text-purple-700 text-right underline"
                              size="txtProximaSoftMedium1779"
                            >
                              Deactivate
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[23px] w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-4 w-full md:w-full gap-[13px]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                        size="txtProximaSoftSemiBold30Gray900"
                      >
                        Notifications
                      </Text>
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        General notifications
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                          <div className="rounded-[5px] my-px">
                            <Img
                              className="h-6 rounded-[5px] my-auto"
                              src="images/img_user_gray_900.svg"
                              alt="user"
                            />
                          </div>
                          <Text
                            name="notification"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                            wrapClassName="flex w-full"
                            shape="square"
                            color="gray_900_19"
                            size="xl"
                            variant="outline"
                          >App Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input
                              type="checkbox"
                              checked={appNotifications}
                              onChange={() => handlerNotifications('appNotifications')}
                            />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>

                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Promotional Notifications
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                          <div className="rounded-[5px] my-px">
                            <Img
                              className="h-6 rounded-[5px] my-auto"
                              src="images/img_user_gray_900.svg"
                              alt="user"
                            />
                          </div>
                          <Text
                            name="notification"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                            wrapClassName="flex w-full"
                            shape="square"
                            color="gray_900_19"
                            size="xl"
                            variant="outline"
                          >Promotional Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input
                              type="checkbox"
                              checked={promotionalNotifications}
                              onChange={() => handlerNotifications('promotionalNotifications')}
                            />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtProximaSoftSemiBold18"
                      >
                        Updates and Feedback
                      </Text>
                      <div className="flex flex-row items-center w-full sm:w-full">
                        <div className="w-full flex items-center gap-3">
                          <div className="rounded-[5px] my-px">
                            <Img
                              className="h-6 rounded-[5px] my-auto"
                              src="images/img_user_gray_900.svg"
                              alt="user"
                            />
                          </div>
                          <Text
                            name="notification"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-base text-left w-full"
                            wrapClassName="flex w-full"
                            shape="square"
                            color="gray_900_19"
                            size="xl"
                            variant="outline"
                          >Updates Notifications</Text>
                        </div>
                        <div>
                          <label class="toggle-container">
                            <input
                              type="checkbox"
                              checked={updatesNotifications}
                              onChange={() => handlerNotifications('updatesNotifications')}
                            />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggleModel && <ImgModel setToggleModel={setToggleModel} toggleModel={toggleModel} />}
    </>
  );
};

export default DesktopThirteenPage;
