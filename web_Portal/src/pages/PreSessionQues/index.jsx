import React, { useEffect, useState } from 'react'
import { Button, Text } from "components";
import { useSignUpUserMutation } from "features/apis/user";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
const cookie = new Cookies()
const PreQues = ({ formData, handlerChange }) => {
    const [addQues, setQues] = useState([{ questionText: '' }])
    const [isFormValid, setIsFormValid] = useState(false)
    const [validation, setValidation] = useState({
        questionText: { isValid: true, errMessage: 'please add Question!' },
    })
    const [signUpUser] = useSignUpUserMutation()
    const navigation = useNavigate()
    const validationCondition = () => {
        const updateValidation = addQues.map((ques, index) => ({
            questionText: {
                isValid: ques.questionText.trim() !== '' && true,
                errMessage: 'please add Question!'
            }
        }))

        setValidation(updateValidation)
        console.log(updateValidation)
        const formValid = updateValidation.every((item) => item.questionText.isValid)
        setIsFormValid(formValid)
        console.log(formValid)
        return formValid
    }

    const handlerAddInput = () => {
        setQues([...addQues, { questionText: '' }])
    }

    const handlerInputChange = (e, index) => {
        let { name, value } = e.target
        let updateValues = [...addQues]
        updateValues[index][name] = value
        setQues(updateValues)
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
                navigation('/home')
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
            // console.log(data)
        }
    }

    useEffect(() => {
        handlerChange('mentorAttributes.preSessionQuestions', addQues)
    }, [addQues])

    return (
        <div className="w-full h-screen flex justify-center items-center fixed z-[110]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="bg-[#fff] flex flex-col items-start justify-start p-[30px] md:px-5 rounded-[26px] w-[41%] sm:w-full
            sm:mx-[12px] z-[1]">
                <div className="flex flex-col gap-5 items-start justify-start mb-[11px] md:ml-[0] w-full md:w-full">
                    <Text
                        className="sm:text-[34.32px] md:text-[36.32px] text-[38.32px] text-gray-900"
                        size="txtProximaSoftSemiBold3832"
                    >
                        Pre-Session Questions
                    </Text>
                    <div className='flex flex-col gap-2 w-full'>
                        {addQues.map((item, index) => (
                            <>
                                <div key={index}>
                                    <Text
                                        className="text-base text-blue_gray-700"
                                        size="txtPoppinsMedium16"
                                    >
                                        Question {index + 1}
                                    </Text>
                                </div>
                                <div>
                                    <input
                                        name="questionText"
                                        type="text"
                                        className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-full border border-gray-900_1e border-solid rounded-[22px]"
                                        color="gray_100_03"
                                        variant="fill"
                                        onChange={(e) => handlerInputChange(e, index)}
                                        onBlur={validationCondition}
                                    />
                                </div>
                                <div>
                                    <p className='text-red-700'>{(!validation[index]?.questionText.isValid) && validation[index]?.questionText.errMessage}</p>
                                </div>
                            </>
                        ))}
                        <div className='flex justify-end w-full'>
                            <Button
                                className="cursor-pointer leading-[normal] min-w-[96px] rounded-[16px] text-[11.98px] text-center"
                                size="md"
                                variant="outline"
                                onClick={handlerAddInput}
                            >
                                + Add More
                            </Button>
                        </div>
                    </div>
                    <Button
                        className={`!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0] mt-[15px]
                        rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[25.4px] text-center w-full flex justify-center items-center
                        ${!isFormValid && "opacity-60 cursor-not-allowed"}`}
                        size="md"
                        onClick={handleSignUp}
                        disabled={!isFormValid}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PreQues
