import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "components";
import { useGetAdminProfileQuery,useUpdateAnyFieldMutation,useForgetPasswordMutation,useChangePasswordMutation} from "features/apis/admin";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setVerifyForPassword,setAdminMail,setForgetFields} from "features/admin/adminSlice";
import Loaders from "components/Loaders";

const SettingsPage = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [changeLoading,setChangeLoading] = useState(false)
  const [updateLoading,setUpdateLoading] = useState(false)
  const { data,refetch } = useGetAdminProfileQuery(user?._id || user?.data?.id)
  const [updateAnyField] = useUpdateAnyFieldMutation()
  const [forgetPassword] = useForgetPasswordMutation()
  const [changePassword] = useChangePasswordMutation()
  const forgetFields = useSelector((state) => state.adminSlice.forgetFields)

  useEffect(() => {
    if(!user?._id || !user?.data?.id){
      refetch()
    }
  },[user])

  useEffect(() => {
    if (data || data?.data) {
      setEmail(data?.data?.email)
    }
  }, [])

  const handlerUpdateAuth = async (decision) => {
    let payload = {
      _id:data?.data?._id,
      twoFactorAuth:decision
    }
    const res = await updateAnyField(payload)
    if (res?.data?.status === 'Success') {
      refetch()
      return toast.success(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else if (res?.data?.status === 'Fail') {
      return toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    } else {
      return toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }

  const handleForgetPassword = async () => {
    setChangeLoading(true)
    let payload = {
      email:data?.data?.email
    }
    const res = await forgetPassword(payload)
    if (res?.data?.status === 'Success') {
      dispatch(setVerifyForPassword(true))
      dispatch(setAdminMail(data?.data?.email))
      setChangeLoading(false)
      return toast.success(`Please take a look at your mail account you will get a pin code`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else if (res?.data?.status === 'Fail') {
      setChangeLoading(false)
      return toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    } else {
      setChangeLoading(false)
      return toast.error(`try again!`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }

  const handlerChangePassword = async () => {
    setUpdateLoading(true)
    if(newPassword === '' || confirmPassword === ''){
      setUpdateLoading(false)
      return toast.error(`Please fill fields`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else if(newPassword !== confirmPassword){
      setUpdateLoading(false)
      return toast.error(`Password is not Confirm`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else if(newPassword === confirmPassword){
      let payload = {
        password: newPassword
      }
      const res = await changePassword(payload)
      if (res?.data?.status === 'Success') {
        dispatch(setForgetFields(false))
        setUpdateLoading(false)
        return toast.success(`Password Successfully Change`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
      } else if (res?.data?.status === 'Fail') {
        setUpdateLoading(false)
        return toast.error(`try again!`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
      } else {
        setUpdateLoading(false)
        return toast.error(`try again!`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
        })
      }
    }
  }
  

  return (
    <>
      <Text
        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02 !font-poppins"
        size="txtProximaSoftSemiBold30Gray90002"
      >
        Security
      </Text>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mt-[17px] p-[17px] rounded-[15px] w-full">
        <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-[22px] text-gray-900_02 sm:text-lg md:text-xl !font-poppins"
              size="txtPoppinsSemiBold22"
            >
              Local Password Authentication
            </Text>
            {forgetFields && (
              <Button
                className={`!text-gray-100_07 cursor-pointer flex items-center gap-2 !font-poppins font-semibold leading-[normal] min-w-[164px] sm:mt-0 mt-[5px] rounded-[10px] shadow-bs24 text-[15px] text-center
                  ${updateLoading && "opacity-50 cursor-not-allowed"}`}
                size="lg"
                onClick={handlerChangePassword}
                disabled={updateLoading}
              >
                Update Password {updateLoading && <Loaders/>}
              </Button>
            )}
          </div>
          <div className="flex flex-col items-start justify-start w-full sm:mt-3">
            <Text
              className="md:ml-[0] ml-[5px] mb-2 text-gray-600_02 !font-bold text-sm !font-poppins"
              size="txtPoppinsRegular14Gray60002"
            >
              Email:
            </Text>
            <input
              className="font-semibold leading-[normal] 
                          border-2 border-solid rounded-lg text-base px-5 py-2 w-max sm:w-full !font-poppins"
              placeholder="arnold_negger21@gmail.com"
              value={data?.data?.email}
              disabled={true}
            />
          </div>
          {forgetFields && (<div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[15px] w-full md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-3 gap-5 items-center justify-between w-full md:w-full">
              {/* <div className="flex flex-row items-center justify-evenly sm:flex-col sm:w-full">
                <Text
                  className="text-gray-600_02 text-sm mr-2 sm:w-full sm:mb-2"
                  size="txtPoppinsRegular14Gray60002"
                >
                  Old Password:
                </Text>
                <input
                  className="font-museosansrounded font-semibold leading-[normal]
                                rounded-lg text-base px-5 py-2 border-2 border-solid w-[100px] sm:w-full"
                  color="gray_900_19"
                  size="md"
                  placeholder="********"
                />

              </div> */}
              <div className="flex flex-row gap-[5px] items-center justify-between w-full sm:flex-col sm:w-full">
                <Text
                  className="text-gray-600_02 text-sm mr-2 sm:w-full !font-poppins"
                  size="txtPoppinsRegular14Gray60002"
                >
                  New Password:
                </Text>
                <input
                  className="!font-poppins font-semibold leading-[normal] 
                               rounded-lg text-base px-5 py-2 border-2 border-solid w-full  sm:w-full"
                  color="gray_900_19"
                  size="md"
                  placeholder="********"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

              </div>
              <div className="flex flex-row items-center justify-evenly w-full sm:flex-col md:w-full">
                <Text
                  className="text-gray-600_02 text-sm mr-2 sm:w-full !font-poppins"
                  size="txtPoppinsRegular14Gray60002"
                >
                  Confirm Password:
                </Text>
                <input
                  className="!font-poppins font-semibold leading-[normal]
                            w-full rounded-lg text-base px-5 py-2 border-2 border-solid sm:w-full"
                  color="gray_900_19"
                  size="md"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

              </div>
            </div>

          </div>)}
          <Button
            className={`flex mt-[11px] text-white text-xs underline rounded-md ${changeLoading && "opacity-60 cursor-not-allowed"}`}
            onClick={handleForgetPassword}
            disabled={changeLoading}
          >
            <Text className="flex items-center gap-2 font-bold !font-poppins" size="txtPoppinsRegular12Cyan400">
              Change Password? {changeLoading && <Loaders/>}
            </Text>
          </Button>
        </div>
      </div>
      <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[15px] p-[25px] sm:px-5 rounded-[15px] w-full">
        <Text
          className="ml-0.5 sm:ml-[0] text-[22px] !font-poppins text-gray-900_02 sm:text-lg md:text-xl"
          size="txtPoppinsSemiBold22"
        >
          Two Factor Authentication
        </Text>
        <Button
          className="cursor-pointer !font-poppins font-semibold leading-[normal] mb-2.5 min-w-[97px] mr-[3px] rounded-[10px] shadow-bs24 text-[15px] text-center"
          size="md"
          onClick={() => handlerUpdateAuth(data?.data?.twoFactorAuth ? false : true)}
        >
          {data?.data?.twoFactorAuth ? 'Enable' : 'Disable'}
        </Button>
      </div>

    </>
  );
};

export default SettingsPage;
