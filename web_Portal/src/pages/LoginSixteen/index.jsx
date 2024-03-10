import React, { useState } from "react";
import { Button, Text } from "components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const LoginSixteenPage = ({ next,prev, formData, handlerChange, setUserRole }) => {
  const [role, setRole] = useState('')
  const [validateRole, setValidateRole] = useState(false)
  const handlerRole = (data) => {
    setRole(data)
    handlerChange('role', data)
    setValidateRole(true)
    setUserRole(data)
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div
          className="bg-[#fff] flex flex-col items-center justify-start p-[23px] md:px-5 w-[44%] sm:w-full sm:mx-2"
          style={{ borderRadius: "30px" }}
        >
          <div className="flex flex-col items-start justify-start mb-[5px] mt-2.5 w-[98%] md:w-full">
            {/* <div className="mb-3">
              <FontAwesomeIcon icon={faArrowLeft} onClick={prev} />
            </div> */}
            <Text
              className="md:ml-[0] ml-[5px] sm:text-[29.6px] md:text-[31.6px] text-[35.6px] text-black-900"
              size="txtProximaSoftSemiBold456"
            >
              Choose Your Role
            </Text>
            <Text
              className="ml-2.5 md:ml-[0] mt-[37px] sm:text-[20.36px] md:text-[22.36px] text-[24.36px] text-gray-700_02"
              size="txtProximaSoftMedium2736"
            >
              <>
                Choose One!
                <br />
                Don’t Worry you can always change it later on
              </>
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-[9px] items-center mt-[89px] w-full md:w-full">
              <Button
                className={`text-black-900 cursor-pointer h-[60px] leading-[normal] 
                  rounded-[36px] shadow-bs11 sm:text-[22.4px] md:text-[25.4px] text-[27.4px] text-center w-full
                  flex justify-center items-center ${((role == 'mentor') || (formData?.role === 'mentor')) && "bg-[#743C95] !text-[#fff]"}`}
                variant="outline"
                onClick={() => handlerRole('mentor')}
              >
                Mentor
              </Button>
              <Button
                className={`text-black-900 cursor-pointer h-[60px] leading-[normal] 
                  rounded-[36px] shadow-bs11 sm:text-[22.4px] md:text-[25.4px] text-[27.4px] text-center w-full
                  flex justify-center items-center ${((role == 'mentee') ||  (formData?.role === 'mentee')) && "bg-[#743C95] !text-[#fff]"}`}
                variant="outline"
                onClick={() => handlerRole('mentee')}
              >
                Mentee
              </Button>
            </div>
            <Button
              className={`!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0]
                 rounded-[41px] shadow-bs5 sm:text-[22.4px] md:text-[25.4px] text-[27.4px] text-center w-full mt-20
                 flex justify-center items-center 
               ${!validateRole && "opacity-60 cursor-not-allowed items-center"}`}
              onClick={next}
              disabled={!validateRole}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSixteenPage;
