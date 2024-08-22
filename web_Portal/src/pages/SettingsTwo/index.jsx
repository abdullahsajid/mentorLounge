import React, { useEffect, useState } from "react";
import { Button, Img, List, Switch, Text } from "components";
import { useSelector } from "react-redux";
import { useUpdateMenteeSettingsMutation } from "features/apis/mentee";
import { useGetAllSessionMutation, useGetSettingsMutation } from "features/apis/admin";

const SettingsTwoPage = () => {
  const { user } = useSelector((state) => state.user)
  const [receiveSettings,setReceiveSettings] = useState([])
  const [commissionNotifications, setCommissionNotifications] = useState(null)
  const [mentorNotifications, setMentorNotifications] = useState(null)
  const [menteeNotifications, setMenteeNotifications] = useState(null)
  const [sessionNotifications, setsessionNotifications] = useState(null)
  const [getSettings] = useGetSettingsMutation()
  const [updateMenteeSettings] = useUpdateMenteeSettingsMutation()
  
  // console.log("data", user)

  let settingPayload = {
      "critarion": {"_id" : user?.userSettings?._id},
      
      "addedby": "_id email name",        
      "lastModifiedBy": "_id email name"
  }

  const settings = async () => {
    const {data} = await getSettings(settingPayload)
    setReceiveSettings(data?.data)
  }
// console.log("res",receiveSettings)
  useEffect(() => {
    settings()
  }, [])

  useEffect(() => {
    if (receiveSettings) {
      setCommissionNotifications(receiveSettings?.notificationSettings?.adminNotifications?.commissionNotifications)
      setMentorNotifications(receiveSettings?.notificationSettings?.adminNotifications?.mentorNotifications)
      setMenteeNotifications(receiveSettings?.notificationSettings?.adminNotifications?.menteeNotifications)
      setsessionNotifications(receiveSettings?.notificationSettings?.adminNotifications?.sessionNotifications)
    }
  },[receiveSettings])

  let adminSetting = {
    userSettingid: user?.userSettings?._id,
    notificationSettings: {
      adminNotifications:{
        commissionNotifications:receiveSettings?.notificationSettings?.adminNotifications?.commissionNotifications,
        mentorNotifications:receiveSettings?.notificationSettings?.adminNotifications?.mentorNotifications,
        menteeNotifications:receiveSettings?.notificationSettings?.adminNotifications?.menteeNotifications,
        sessionNotifications:receiveSettings?.notificationSettings?.adminNotifications?.sessionNotifications
      }
    }
  }

  const handlerNotifications = (toggleType) => {
    if (toggleType === 'commissionNotifications') {
      if (commissionNotifications === true) {
        adminSetting.notificationSettings.adminNotifications.commissionNotifications = false
        updateMenteeSettings(adminSetting)
        settings()
      } else if (commissionNotifications === false) {
        adminSetting.notificationSettings.adminNotifications.commissionNotifications = true
        updateMenteeSettings(adminSetting)
        settings()
      }
    } else if (toggleType === 'mentorNotifications') {
      if (mentorNotifications === true) {
        adminSetting.notificationSettings.adminNotifications.mentorNotifications = false
        updateMenteeSettings(adminSetting)
        settings()
      } else if (mentorNotifications === false) {
        adminSetting.notificationSettings.adminNotifications.mentorNotifications = true
        updateMenteeSettings(adminSetting)
        settings()
      }
    } else if (toggleType === 'menteeNotifications') {
      if (menteeNotifications === true) {
        adminSetting.notificationSettings.adminNotifications.menteeNotifications = false
        updateMenteeSettings(adminSetting)
        settings()
      } else if (menteeNotifications === false) {
        adminSetting.notificationSettings.adminNotifications.menteeNotifications = true
        updateMenteeSettings(adminSetting)
        settings()
      }
    }
    else if (toggleType === 'sessionNotifications') {
      if (sessionNotifications === true) {
        adminSetting.notificationSettings.adminNotifications.sessionNotifications = false
        updateMenteeSettings(adminSetting)
        settings()
      } else if (sessionNotifications === false) {
        adminSetting.notificationSettings.adminNotifications.sessionNotifications = true
        updateMenteeSettings(adminSetting)
        settings()
      }
    }
  }

  return (
    <>
      <div className="flex flex-row md:gap-10 items-start justify-between mb-5 w-full">
        <Text
          className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02 !font-poppins"
          size="txtProximaSoftSemiBold30Gray90002"
        >
          Notification{" "}
        </Text>
        {/* <Img
          className="h-[33px]"
          src="images/img_user_purple_700_33x54.svg"
          alt="user_One"
        /> */}
      </div>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[22px] items-center justify-center p-[17px] rounded-[15px] w-full">
        <List
          className="flex flex-col gap-7 items-center mt-1.5 w-[99%]"
          orientation="vertical"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div>
                  <Text
                    className="text-gray-900_02 text-lg font-semibold !font-poppins"
                  >
                    Commission Notifications{" "}
                  </Text>
                  <Text
                    className="mt-[3px] text-gray-600_02 text-sm !font-poppins"
                    size="txtPoppinsRegular14Gray60002"
                  >
                    Notifications about commission earned
                  </Text>
                </div>
                <div>
                  <label class="toggle-container">
                    <input
                      type="checkbox"
                      checked={commissionNotifications}
                      onChange={() => handlerNotifications('commissionNotifications')}
                    />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                {/* <Switch
                  onColor=""
                  offColor=""
                  onHandleColor="#743c95"
                  offHandleColor="#743c95"
                  value={true}
                  className="mt-0.5"
                /> */}
              </div>

            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div>
                  <Text
                    className="text-gray-900_02 text-lg font-semibold !font-poppins"
                  >
                    Mentor Notifications
                  </Text>
                  <Text
                    className="text-gray-600_02 text-sm !font-poppins"
                    size="txtPoppinsRegular14Gray60002"
                  >
                    Notifications about updates of Mentor
                  </Text>
                </div>
                <div>
                  <label class="toggle-container">
                    <input
                      type="checkbox"
                      checked={mentorNotifications}
                      onChange={() => handlerNotifications('mentorNotifications')}
                    />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                {/* <Switch
                  onColor=""
                  offColor=""
                  onHandleColor="#743c95"
                  offHandleColor="#743c95"
                  value={true}
                  className="mt-0.5"
                /> */}
              </div>

            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div>
                  <Text
                    className="text-gray-900_02 text-lg font-semibold !font-poppins"
                   
                  >
                    Mentee Notifications
                  </Text>
                  <Text
                    className="text-gray-600_02 text-sm !font-poppins"
                    size="txtPoppinsRegular14Gray60002"
                  >
                    Notifications about updates of Mentee
                  </Text>
                </div>
                <div>
                  <label class="toggle-container">
                    <input
                      type="checkbox"
                      checked={menteeNotifications}
                      onChange={() => handlerNotifications('menteeNotifications')}
                    />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                {/* <Switch
                  onColor=""
                  offColor=""
                  onHandleColor="#743c95"
                  offHandleColor="#743c95"
                  value={true}
                  className="mt-0.5"
                /> */}
              </div>

            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div>
                  <Text
                    className="text-gray-900_02 text-lg font-semibold !font-poppins"
                    
                  >
                    Session Notifications
                  </Text>
                  <Text
                    className="text-gray-600_02 text-sm !font-poppins"
                    size="txtPoppinsRegular14Gray60002"
                  >
                    New sessions and updates
                  </Text>
                </div>
                <div>
                  <label class="toggle-container">
                    <input
                      type="checkbox"
                      checked={sessionNotifications}
                      onChange={() => handlerNotifications('sessionNotifications')}
                    />
                    <span class="toggle-slider"></span>
                  </label>
                </div>
                {/* <Switch
                  onColor=""
                  offColor=""
                  onHandleColor="#743c95"
                  offHandleColor="#743c95"
                  value={true}
                  className=""
                /> */}
              </div>

            </div>
          </div>
        </List>

      </div>
    </>
  );
};

export default SettingsTwoPage;
