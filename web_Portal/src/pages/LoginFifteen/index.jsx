import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { useCreditCardValidator } from "react-creditcard-validator";
import { useSignUpUserMutation } from "features/apis/user";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
const cookie = new Cookies()

const LoginFifteenPage = ({ formData, handlerChange, next }) => {
  const [signUpUser] = useSignUpUserMutation()
  const navigation = useNavigate()
  const [selectPayment, setPayment] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [validation, setValidation] = useState({
    payType: { isValid: true, errMessage: "Enter your choice" },
    name: { isValid: true, errMessage: 'name is required' },
    cardNum: { isValid: true },
    month: { isValid: true, errMessage: 'field is required' },
    year: { isValid: true, errMessage: 'field is required' }
  })

  const { getCardNumberProps, meta: { erroredInputs } } = useCreditCardValidator()

  const validationCondition = () => {
    const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
    const updateValidation = {
      payType: { isValid: (selectPayment != '') && true, errMessage: "required to select" },
      name: { isValid: user_regex.test((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard.nameOnCard : formData.menteeAttributes.userCreditCard.nameOnCard), errMessage: 'name is required' },
      cardNum: { isValid: (erroredInputs.cardNumber) ? false : true },
      month: { isValid: ((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryMonth'] : formData.menteeAttributes.userCreditCard['expiryMonth'] !== '') && true, errMessage: 'field is required' },
      year: { isValid: ((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryYear'] : formData.menteeAttributes.userCreditCard['expiryYear'] !== '') && true, errMessage: 'field is required' }
    }
    setValidation(updateValidation)
    const formValid = Object.values(updateValidation).every((item) => item.isValid)
    setIsFormValid(formValid)

    return formValid
  }

  const handleSelectedPayment = (data) => {
    setPayment(data)
    handlerChange(`${(formData.role === 'mentor') ? 'mentorAttributes' : 'menteeAttributes'}.userCreditCard.creditCardType`, data)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (formData) {
      const { data } = await signUpUser(formData)
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
  //   console.log(validation)
  // },[validation])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)", overflowY: 'scroll' }}>
        <div
          className="bg-[#fff] flex flex-col font-poppins gap-[59px] sm:gap-5 h-[720px] 
           justify-start p-[25px] sm:p-[20px] md:px-5 w-[42%] sm:w-full sm:h-[90%] sm:mx-[10px]"
          style={{ borderRadius: '20px', overflowY: 'scroll' }} id="sc"
        >
          <div className="h-[555px] md:h-full md:ml-[0] sm:mt-0 relative w-full sm:w-full">
            <div className=" flex flex-col h-full items-center m-auto">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[33.08px] md:text-[35.08px] text-[37.08px] text-black-900_01"
                  size="txtProximaSoftMedium4408"
                >
                  Payment
                </Text>
                <Text
                  className="capitalize ml-0.5 md:ml-[0] mt-[5px] sm:text-[16.51px] md:text-[18.51px] text-[19.51px] text-black-900"
                  size="txtPoppinsMedium2351"
                >
                  Choose Payment Method
                </Text>
                <div className="flex flex-row items-center justify-start mt-4 w-[53%] md:w-full">
                  <Button
                    className={`flex h-[60px] items-center justify-center rounded-[50%] w-[60px] ${(selectPayment === 'master card') &&
                      "border-4 border-[#000] border-solid"}`}
                    shape="circle"
                    color="gray_100_05"
                    size="md"
                    onClick={() => handleSelectedPayment('master card')}
                    name="payType"
                  >
                    <Img src="images/img_user_yellow_800.svg" alt="user" />
                  </Button>
                  <Button
                    className={`flex h-[60px] items-center justify-center ml-[13px] rounded-[50%] w-[60px] ${(selectPayment === 'visa') &&
                      "border-4 border-[#000] border-solid"}`}
                    shape="circle"
                    color="gray_100_05"
                    size="sm"
                    name="payType"
                    onClick={() => handleSelectedPayment('visa')}
                  >
                    <Img
                      src="images/img_settings_blue_900.svg"
                      alt="settings"
                    />
                  </Button>
                  <Button
                    className={`flex h-[60px] items-center justify-center ml-3.5 rounded-[50%] w-[60px] ${(selectPayment === 'american express') &&
                      "border-4 border-[#000] border-solid"}`}
                    shape="circle"
                    color="light_blue_800"
                    size="sm"
                    name="payType"
                    onClick={() => handleSelectedPayment('american express')}
                  >
                    <Img src="images/img_television.svg" alt="television" />
                  </Button>
                  <Button
                    className={`flex h-[60px] items-center justify-center ml-3.5 rounded-[50%] w-[60px] ${(selectPayment === 'discover') &&
                      "border-4 border-[#000] border-solid"}`}
                    shape="circle"
                    color="light_blue_800"
                    size="sm"
                    name="payType"
                    onClick={() => handleSelectedPayment('discover')}
                  >
                    <Img
                      className="h-[60px] ml-3.5 w-[60px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </Button>
                </div>
                <div className="flex items-center w-full">
                  <p className="w-full flex items-center pl-[10px] pt-[10px] text-red-700">{(!validation['payType'].isValid) && validation['payType'].errMessage}</p>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[30px] sm:mt-[20px] sm:text-[16.51px] md:text-[18.51px] text-[19.51px] text-black-900_01"
                  size="txtPoppinsMedium2351Black90001"
                >
                  Credit Card Details
                </Text>
                <div className="flex flex-col font-poppins gap-[10px] items-center justify-start ml-1 md:ml-[0] mt-7 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <input
                        className="bg-gray-100_03 border border-gray-900_1e border-solid h-[79px]
                         justify-center sm:px-5 px-[35px] py-[21px] rounded-[39px] sm:text-[16.01px] 
                         md:text-[17.01px] text-[18.01px] text-gray-900_7f w-full"
                        size="txtPoppinsRegular2351"
                        placeholder="Name on Card"
                        type="name"
                        name="name"
                        value={(formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['nameOnCard'] : formData.menteeAttributes.userCreditCard['nameOnCard']}
                        onChange={(e) => handlerChange(`${(formData.role === 'mentor') ? 'mentorAttributes.userCreditCard.nameOnCard' : 'menteeAttributes.userCreditCard.nameOnCard'}`, e.target.value)}
                        onBlur={validationCondition}
                      />
                    </div>
                    <p className="w-full flex items-center pl-[10px] pt-[10px] text-red-700">{(!validation['name'].isValid) && validation['name'].errMessage}</p>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <input
                        {...getCardNumberProps({
                          className: "bg-gray-100_03 border border-gray-900_1e border-solid h-[79px] justify-center sm:px-5 px-[35px] py-[21px] rounded-[39px] sm:text-[16.51px] md:text-[17.01px] text-[18.01px] text-gray-900_7f w-full",
                          size: "txtPoppinsRegular2351",
                          placeholder: "Card Number",
                          onChange: (e) => {
                            handlerChange(`${(formData.role === 'mentor') ? 'mentorAttributes.userCreditCard.creditCardNumber' : 'menteeAttributes.userCreditCard.creditCardNumber'}`, e.target.value)
                          },

                        })}
                      // onChange={(e) => handlerChange(`mentorAttributes.userCreditCard.creditCardNumber`, e.target.value)}
                      />
                    </div>
                    <p className="w-full flex items-center pl-[10px] pt-[10px] text-red-700">{erroredInputs.cardNumber && erroredInputs.cardNumber}</p>
                  </div>
                </div>
                <div className="flex flex-row font-poppins items-start justify-start ml-1 md:ml-[0] mt-[22px]
                 md:w-full w-full sm:flex-row gap-2 sm:gap-5">
                  <div className="flex flex-col items-center justify-start w-[100%] sm:w-[50%] md:w-full">
                    <input
                      className="bg-gray-100_03 border border-gray-900_1e border-solid cursor-pointer h-[79px] 
                      leading-[normal] rounded-[39px] sm:text-[16.51px] md:text-[17.01px] text-[18.01px] w-full"
                      color="gray_100_03"
                      size="3xl"
                      type="text"
                      placeholder="march"
                      name="month"
                      value={(formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryMonth'] : formData.menteeAttributes.userCreditCard['expiryMonth']}
                      onChange={(e) => handlerChange(`${(formData.role === 'mentor') ? 'mentorAttributes.userCreditCard.expiryMonth' : 'menteeAttributes.userCreditCard.expiryMonth'}`, e.target.value)}
                      onBlur={validationCondition}
                    />
                    <p className="w-full flex items-center pl-[10px] pt-[10px] text-red-700">{(!validation['month'].isValid) && validation['month'].errMessage}</p>
                  </div>

                  <div className="flex flex-col items-center justify-start w-[100%] sm:w-[50%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <input
                        className="bg-gray-100_03 border border-gray-900_1e border-solid cursor-pointer h-[79px] 
                        leading-[normal] rounded-[39px] sm:text-[16.51px] md:text-[17.01px] text-[18.01px] w-full"
                        color="gray_100_03"
                        size="2xl"
                        type="number"
                        placeholder="2023"
                        name="year"
                        value={(formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryYear'] : formData.menteeAttributes.userCreditCard['expiryYear']}
                        onChange={(e) => handlerChange(`${(formData.role === 'mentor') ? 'mentorAttributes.userCreditCard.expiryYear' : 'menteeAttributes.userCreditCard.expiryYear'}`, e.target.value)}
                        onBlur={validationCondition}
                      />
                      <p className="w-full flex items-center pl-[10px] pt-[10px] text-red-700">{(!validation['year'].isValid) && validation['year'].errMessage}</p>
                    </div>
                  </div>
                </div>
              <Button className={`!text-gray-100 cursor-pointer h-[60px] leading-[normal] mb-[10px]
                md:ml-[0] rounded-[39px] shadow-bs5 sm:text-[25.39px] md:text-[27.39px]
                text-[25.01px] text-center w-full flex justify-center items-center mt-7 ${!isFormValid && "opacity-60 cursor-not-allowed"}`} onClick={(formData.role === 'mentor') ? next : handleSignUp} disabled={!isFormValid}>
                {(formData.role === 'mentor') ? 'Next' : 'Register'}
              </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default LoginFifteenPage;
