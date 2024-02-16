import React, { useEffect, useState } from "react";
import { Button, Img, Input, List, Text } from "components";
import validator from "validator";
const LoginFourteenPage = ({ close, next, handlerChange, formData }) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [validation, setValidation] = useState({
    name: { isValid: true, errMessage: 'name is required' },
    email: { isValid: true, errMessage: 'enter valid email' },
    password: { isValid: true, errMessage: 'password must be at least 6 character' },
    phone: { isValid: true, errMessage: 'enter valid phone no' }
  })
  const formFields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'phone', type: 'number', label: 'Phone No' }
  ]

  const validationCondition = () => {
    const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
    const updateValidation = {
      name: { isValid: user_regex.test(formData.name), errMessage: 'name at least 4 to 20 character' },
      email: { isValid: validator.isEmail(formData.email), errMessage: 'enter valid email' },
      password: { isValid: (formData.password?.length > 6), errMessage: 'password must be at least 6 character' },
      phone: { isValid: validator.isMobilePhone(formData.phone), errMessage: 'enter valid phone no' }
    }

    setValidation(updateValidation)
    const formValid = Object.values(updateValidation).every((item) => item.isValid)
    setIsFormValid(formValid)
    return formValid
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => close()}>
        <div
          className="bg-[#fff] flex flex-col items-start justify-start p-[30px] md:px-5 rounded-[26px] w-[41%] sm:w-full
            sm:mx-[12px] z-[1]"
          onClick={e => { e.stopPropagation() }}
        >
          <div className="flex flex-col gap-11 items-start justify-start mb-[11px] md:ml-[0] w-full md:w-full">
            <Text
              className="sm:text-[34.32px] md:text-[36.32px] text-[38.32px] text-gray-900"
              size="txtProximaSoftSemiBold3832"
            >
              Sign Up
            </Text>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
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
                      value={formData[name]}
                      onChange={(e) => handlerChange(name, e.target.value)}
                      isValid={validation[name].isValid}
                      errMessage={validation[name].errMessage}
                      validationCondition={validationCondition}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button className={`!text-gray-100 cursor-pointer font-poppins h-[60px]
             leading-[normal] rounded-[34px] shadow-bs5 sm:text-[21.55px] md:text-[23.55px]
              text-[25.55px] text-center w-full flex justify-center items-center ${!isFormValid && "opacity-60 cursor-not-allowed"}`}
              onClick={next} disabled={!isFormValid}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginFourteenPage;
