import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text,Button } from 'components'
import MailIcon from 'assets/icons/mailIcon'
import LockIcon from 'assets/icons/lockIcon'
import toast from 'react-hot-toast';
import { useAdminSignInMutation } from 'features/apis/admin'
import { setToggleSignIn,setAdminMail,setVerify } from 'features/admin/adminSlice'
import { useDispatch } from 'react-redux'
import Loaders from 'components/Loaders'

const AdminSignIn = () => {
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [adminSignIn] = useAdminSignInMutation()
    const dispatch = useDispatch()

    const handlerSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        if(email === '' && password === ''){
          setLoading(false)
            return toast.error(`Please fill the all fields`, {
                style: {
                  backgroundColor: '#f6f6f7',
                  border: '3px solid #fff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                },
              })
        }else{
            let userData = {email:email,password:password}
            const {data} = await adminSignIn(userData)
            if(data?.status === 'Success'){
                dispatch(setAdminMail(email))
                dispatch(setToggleSignIn(false))
                dispatch(setVerify(true))
                setLoading(false)
                return toast.success(`${data?.message}`, {
                    style: {
                      backgroundColor: '#f6f6f7',
                      border: '3px solid #fff',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                  })
            }else{
              setLoading(false)
                return toast.error(`${data?.message}`, {
                    style: {
                      backgroundColor: '#f6f6f7',
                      border: '3px solid #fff',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

  return (
    <div className="w-full h-screen flex justify-center items-center fixed z-[110]"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }} >
    <div className="md:h-[741px] flex justify-center items-center
        md:mx-3 rounded-[26px] shadow-bs3 w-[41%] sm:w-full h-[500px] relative sm:h-[500px]"
      onClick={e => { e.stopPropagation() }}>
      <div className=" bg-white-A700 flex flex-col font-proximasoft 
          h-full justify-center m-auto rounded-[26px] shadow-bs10 w-full items-center sm:p-[12px] p-[30px] gap-1">
        <div className="w-full transition-all" onClick={() => dispatch(setToggleSignIn(false))}>
          <FontAwesomeIcon icon={faXmark} className="hover:bg-[#F7F6F6] px-3 py-2 rounded-lg cursor-pointer transition-all"/>
        </div>
        <form onSubmit={(e) => handlerSignIn(e)} className="flex flex-1 flex-col items-center justify-center w-full gap-3">
          <Text
            className="md:ml-[0] sm:text-[30px] md:text-[34.91px] text-[36.91px] text-gray-900 mb-5"
            size="txtProximaSoftSemiBold3691"
          >
            Login
          </Text>
          <div className="flex flex-col items-center justify-center w-full gap-3">
            <div className="bg-gray-100_03 border border-gray-900_1e border-solid md:px-10 sm:px-5  h-[69px] px-[50px] py-[12px] 
                          relative rounded-[34px] w-full flex items-center">
                            <MailIcon/>
                <input 
                    type="email"
                    className='w-full border-none bg-gray-100_03 ml-2' 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="bg-gray-100_03 border border-gray-900_1e border-solid md:px-10 sm:px-5  h-[69px] px-[50px] py-[12px] 
                          relative rounded-[34px] w-full flex items-center">
                            <LockIcon/>
                <input 
                    type="password" 
                    className='w-full border-none bg-gray-100_03 ml-2' 
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
          </div>
          <Button className={`!text-gray-100 flex justify-center items-center gap-3 bottom-[0] cursor-pointer font-poppins h-[66px] 
                leading-[normal] mx-auto rounded-[33px] shadow-bs5 sm:text-[20.61px] md:text-[22.61px]
                text-[24.61px] text-center w-full sm:w-full mt-3 ${loading && "opacity-50 cursor-not-allowed"} `} 
                disabled={loading}
            >
            Login {loading && <Loaders/>}
          </Button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default AdminSignIn
// ${!isFormValid && "opacity-60 cursor-not-allowed"}

// onClick={() => close()}