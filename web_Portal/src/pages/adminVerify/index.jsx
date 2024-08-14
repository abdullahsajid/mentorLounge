import React, { useState } from 'react'
import LockIcon from 'assets/icons/lockIcon'
import { Text,Button } from 'components'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useAdminVerifyMutation } from 'features/apis/admin'
import { useNavigate } from "react-router-dom";
import { setVerify } from 'features/admin/adminSlice';
import Cookies from 'universal-cookie';
const cookie = new Cookies()

const Verify = () => {
    const dispatch = useDispatch()
    const [code,setCode] = useState('')
    const getMail = useSelector((state) => state.adminSlice)
    const [adminVerify] = useAdminVerifyMutation() 
    const navigation = useNavigate()

    const handlerVerify = async (e) => {
        e.preventDefault()
        if(code === ''){
            return toast.error(`Please fill field`, {
                style: {
                  backgroundColor: '#f6f6f7',
                  border: '3px solid #fff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                },
              })
        }else{
            const userData = {email:getMail.adminEmail,verification_code:code}
            const {data} = await adminVerify(userData)
            if(data.status === 'Success'){
                cookie.set('loungeToken', data?.token, { path: '/' })
                localStorage.setItem('loungeUser', JSON.stringify(data?.data))
                navigation('/usermanagement')
                dispatch(setVerify(false))
                return toast.success(`${data?.message}`, {
                    style: {
                      backgroundColor: '#f6f6f7',
                      border: '3px solid #fff',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }else{
                return toast.error(`Please fill field`, {
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
    <div  className="w-full h-screen flex justify-center items-center fixed z-[110]"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }} >
      <div className="md:h-[741px] flex justify-center items-center
        md:mx-3 rounded-[26px] shadow-bs3 w-[41%] sm:w-full h-[500px] relative sm:h-[500px]">
            <div className=" bg-white-A700 flex flex-col font-proximasoft 
          h-full justify-center m-auto rounded-[26px] shadow-bs10 w-full items-center sm:p-[12px] p-[30px] gap-1">
                <form className="flex flex-1 flex-col items-center justify-center w-full gap-3" onSubmit={(e) => handlerVerify(e)}>
                    <Text
                        className="md:ml-[0] sm:text-[30px] md:text-[34.91px] text-[36.91px] text-gray-900 mb-5"
                        size="txtProximaSoftSemiBold3691"
                    >
                        Verify Code
                    </Text>
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        <div className="bg-gray-100_03 border border-gray-900_1e border-solid md:px-10 sm:px-5  h-[69px] px-[50px] py-[12px] 
                            relative rounded-[34px] w-full flex items-center">
                                <LockIcon/>
                            <input 
                                type="number"
                                className='w-full border-none bg-gray-100_03 ml-2' 
                                placeholder='Enter your email'
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button className={`!text-gray-100 bottom-[0] cursor-pointer font-poppins h-[66px] 
                        leading-[normal] mx-auto rounded-[33px] shadow-bs5 sm:text-[20.61px] md:text-[22.61px]
                        text-[24.61px] text-center w-full sm:w-full mt-3 `}>
                        Verify
                    </Button>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Verify
