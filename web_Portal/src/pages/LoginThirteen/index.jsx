import React, { useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import { useState } from "react";
import validator from "validator";
import { useLoginUserMutation } from "features/apis/user";
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
const cookie = new Cookies()

const LoginThirteenPage = ({ close }) => {
  const navigation = useNavigate()
  const [loginUser] = useLoginUserMutation()
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    platform: "email",
    signintype: "web"
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [validation, setValidation] = useState({
    email: { isValid: true, errMessage: 'enter valid email' },
    password: { isValid: true, errMessage: 'password must be at least 6 character' },
  })
  const formFields = [
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ]

  const handlerChange = (name, value) => {
    setUserData((pre) => {
      const userDetails = {...pre, [name]: value }
      validationCondition(userDetails)
      return userDetails
    })
  }

  const validationCondition = (data) => {
    const updateValidation = {
      email: { isValid: validator.isEmail(data.email), errMessage: 'enter valid email' },
      password: { isValid: (data.password?.length > 5), errMessage: 'password must be at least 6 character' },
    }
    setValidation(updateValidation)
    const formValid = Object.values(updateValidation).every((item) => item.isValid)
    setIsFormValid(formValid)
    return formValid
  }

  const handlerLogin = async (e) => {
    e.preventDefault()
    if (userData) {
      const { data } = await loginUser(userData)
      if (data.status === 'Success') {
        toast.success(`${data.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        if (data.data.role === 'mentor') {
          navigation('/mentor')
        } else if (data.data.role === 'mentee') {
          navigation('/mentee')
        }
        cookie.set('loungeToken', data.token, { path: '/' })
        localStorage.setItem('loungeUser', JSON.stringify(data.data))
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
  }

  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={() => close()}>
        <div className="md:h-[741px] flex justify-center items-center
            md:mx-3 rounded-[26px] shadow-bs3 w-[41%] sm:w-full h-[500px] relative sm:h-[500px]"
          onClick={e => { e.stopPropagation() }}>
          <div className=" bg-white-A700 flex flex-col font-proximasoft 
              h-full justify-center m-auto rounded-[26px] shadow-bs10 w-full items-center sm:p-[12px] p-[30px] gap-5">
            {/* <Img
              className="h-[209px] md:h-auto md:ml-[0] rounded-[50%] w-[209px] sm:w-[120px]"
              src="images/img_ellipse19.png"
              alt="ellipseNineteen"
            /> */}

            <div className="flex flex-1 flex-col items-center justify-center w-full gap-5">
              <Text
                className="md:ml-[0] sm:text-[30px] md:text-[34.91px] text-[36.91px] text-gray-900 mb-5"
                size="txtProximaSoftSemiBold3691"
              >
                {/* Welcome Back, Imani! */}
                Login
              </Text>
              <div className="flex flex-col items-center justify-center w-full gap-3">
                {formFields.map(({ name, type, label }, index) => (
                  <div className="bg-gray-100_03 border border-gray-900_1e border-solid md:px-10 sm:px-5  h-[69px] px-[50px] py-[12px] 
                          relative rounded-[34px] w-full flex items-center"key={index}>
                    <Input
                      type={type}
                      name={name}
                      className='w-full pl-0'
                      wrapClassName='w-full'
                      placeholder={`Enter ${label} ...`}
                      value={userData[name]}
                      onChange={(e) => handlerChange(name, e.target.value)}
                      isValid={validation[name].isValid}
                      errMessage={validation[name].errMessage}
                      // validationCondition={validationCondition}
                    />
                  </div>
                ))}
              </div>
              <Button className={`!text-gray-100 bottom-[0] cursor-pointer font-poppins h-[66px] 
                    leading-[normal] mx-auto rounded-[33px] shadow-bs5 sm:text-[20.61px] md:text-[22.61px]
                    text-[24.61px] text-center w-full sm:w-full mt-3 ${!isFormValid && "opacity-60 cursor-not-allowed"}`}
                onClick={handlerLogin}
                disabled={!isFormValid} >
                Login
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginThirteenPage;
