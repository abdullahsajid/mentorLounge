import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons'
const LoginEighteenPage = ({ next, prev, formData, handlerChange }) => {
  const [skills, setSkills] = useState('')
  const [skillType, setSkillType] = useState([])
  const [addLink, setLinks] = useState([{ socialPlatformLink: '' }])
  const [isFormValid, setIsFormValid] = useState(false)
  const [validation, setValidation] = useState({
    [`${formData?.role}Feilds`]:{isValid: true, errorMessage: 'Feild is required'},
    [`${formData?.role}Description`]: { isValid: true, errorMessage: 'Description is required' },
    [`${formData?.role}Education`]: { isValid: true, errorMessage: 'Education is required' },
    [`${formData?.role}Experience`]: { isValid: true, errorMessage: 'Experience is required' },
    [`${formData?.role}Price`]: { isValid: true, errorMessage: 'Price must be a number' },
    socialMediaLinks: { isValid: true, errorMessage: 'At least one link is required' },
  })
  const formFields = [
    { name: `${(formData.role === 'mentor') ? 'mentorDescription' : 'menteeDescription'}`, type: 'text', label: 'Short description about yourself' },
    { name: `${(formData.role === 'mentor') ? 'mentorEducation' : 'menteeEducation'}`, type: 'text', label: 'Your Education' },
    { name: `${(formData.role === 'mentor') ? 'mentorExperience' : 'menteeExperience'}`, type: 'text', label: 'Your Experience' },
    {
      name: `${(formData.role === 'mentor') ? 'mentorPrice' : 'reasonOfJoining'}`, type: `${(formData.role === 'mentor') ? 'number' : 'text'}`,
      label: `${(formData.role === 'mentor') ? 'Price for each Session' : 'reason Of Joining'}`
    }
  ]

  const handleSkill = () => {
    if ((skills.trim() !== '') && (skillType.length < 3)) {
      setSkillType((preSkill) => {
        if (!preSkill.includes(skills)) {
          return [...preSkill, skills]
        }
        return preSkill
      })
      setSkills('')
    }
  }

  const handleRemoveSkill = (index) => {
    const updateSkill = skillType.filter((_, i) => i !== index)
    setSkillType(updateSkill)
  }

  const handlerAddInput = () => {
    setLinks([...addLink, { socialPlatformLink: '' }])
  }


  const handlerInputChange = (e, index) => {
    let { name, value } = e.target
    let updateValues = [...addLink]
    updateValues[index][name] = value
    setLinks(updateValues)
  }

  
  const validateForm = () => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const newValidation = {
      [`${formData?.role}Feilds`]:{isValid: skillType.some(skill => skill.trim() != ''), errorMessage: 'Feild is required'},
      [`${formData?.role}Description`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Description`]?.trim() !== '', errorMessage: 'Description is required' },
      [`${formData?.role}Education`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Education`]?.trim() !== '', errorMessage: 'Education is required' },
      [`${formData?.role}Experience`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Experience`]?.trim() !== '', errorMessage: 'Experience is required' },
      [`${formData?.role}Price`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Price`]?.trim() !== '', errorMessage: 'Price must be a number' },
      socialMediaLinks: { isValid: (formData?.[`${formData?.role}Attributes`]?.socialMediaLinks.some(link => urlRegex.test(link.socialPlatformLink)) &&
      formData?.[`${formData?.role}Attributes`]?.socialMediaLinks.some(link => link.socialPlatformLink.trim() !== '')), errorMessage: 'invalid link' },
    };

    setValidation(newValidation);

    const isFormValid = Object.values(newValidation).every(field => field.isValid);
    setIsFormValid(isFormValid);

    return isFormValid;
  };

  useEffect(() => {
    handlerChange(`${(formData.role === 'mentor') ? "mentorAttributes.mentorFeilds" : "menteeAttributes.menteeFeilds"}`, skillType)
  }, [skillType])

  useEffect(() => {
    handlerChange(`${(formData.role === 'mentor') ? "mentorAttributes.socialMediaLinks" : "menteeAttributes.socialMediaLinks"}`, addLink)
  }, [addLink])

  

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", overflowY: 'scroll' }}>
        <div
          className="bg-[#fff] flex flex-col items-center p-6 md:px-5 h-[670px] w-[41%] sm:w-full sm:mx-[12px]"
          style={{ borderRadius: "20px", overflowY: 'scroll' }} id="sc"
        >
          <div className="flex flex-col items-start justify-start mt-1.5 w-full md:w-full">
            {/* <div className="mb-2">
              <FontAwesomeIcon icon={faArrowLeft} onClick={prev} />
            </div> */}
            <Text
              className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtProximaSoftSemiBold32"
            >
              Setup your Profile
            </Text>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-3.5 w-full md:w-full">
              <Text
                className="text-gray-700_02 text-xl"
                size="txtPoppinsMedium20Gray70002"
              >
                Select the options you are best at
              </Text>
              <Text
                className="text-[15px] text-lime-700"
                size="txtProximaSoftMedium15"
              >
                You can add maximum of three
              </Text>
              <div className="flex flex-row gap-2">
                {skillType.map((item, index) => (
                  <div className="text-[#000] border border-[#ddd] p-1 py-0 rounded-md shadow-lg" key={index}>
                    {item}
                    <FontAwesomeIcon icon={faClose}
                      className="ml-1 text-[13px] border rounded-full hover:shadow-lg cursor-pointer"
                      onClick={() => handleRemoveSkill(index)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col font-poppins items-center justify-start mt-1.5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name={`${formData.role}Feilds`}
                    placeholder="Type “Product Design” and Enter"
                    className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] px[30px] px-[16px] pl-[10px] md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                    wrapClassName="border border-gray-900_1e border-solid rounded-[22px] w-full"
                    color="gray_100_03"
                    size="lg"
                    variant="fill"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    isValid={validation[`${formData.role}Feilds`]?.isValid}
                    errMessage={validation[`${formData.role}Feilds`]?.errorMessage}
                    validationCondition={validateForm}
                    errClass={'ml-[14px] mb-[4px]'}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSkill()
                      }
                    }}
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start mt-[7px] w-full gap-3 md:w-full">
              {formFields.map(({ name, type, label }, index) => (
                <div className="flex flex-col gap-1.5 items-start justify-start w-full" key={index}>
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtPoppinsMedium16"
                  >
                    {label}
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Input
                        name={name}
                        placeholder={`Enter ${label} ...`}
                        className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-full"
                        wrapClassName="border border-gray-900_1e border-solid rounded-[22px] w-full"
                        color="gray_100_03"
                        variant="fill"
                        type={type}
                        value={(formData.role === 'mentor') ? formData.mentorAttributes[name] : formData.menteeAttributes[name]}
                        onChange={(e) => handlerChange(`${(formData.role === 'mentor') ? `mentorAttributes.${name}` : `menteeAttributes.${name}`}`, e.target.value)}
                        isValid={validation[name]?.isValid}
                        errMessage={validation[name]?.errorMessage}
                        validationCondition={validateForm}
                        errClass={'ml-[14px] mb-[4px]'}
                      ></Input>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-700 text-base"
                  size="txtPoppinsMedium20Bluegray700"
                >
                  Links of Social Media Plateforms
                </Text>
                <div className="flex flex-col items-center justify-start mt-0.5 gap-2 w-full">
                  {addLink.map((item, index) => (
                    <div className="flex flex-col items-center justify-start w-full" key={index}>
                      <Input
                        name="socialPlatformLink"
                        placeholder="Link here..."
                        className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] pl-[10px] sm:h-auto text-left text-xl w-full"
                        wrapClassName="border border-gray-900_1e border-solid rounded-[22px] w-full"
                        color="gray_100_03"
                        size="md"
                        variant="fill"
                        value={item.socialPlatformLink}
                        onChange={(e) => handlerInputChange(e, index)}
                        isValid={validation["socialMediaLinks"]?.isValid}
                        errMessage={validation["socialMediaLinks"]?.errorMessage}
                        validationCondition={validateForm}
                        errClass={'ml-[14px] mb-[4px]'}
                      ></Input>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[96px]  mt-[15px] rounded-[16px] text-[11.98px] text-center"
                    size="md"
                    variant="outline"
                    onClick={handlerAddInput}
                  >
                    + Add More
                  </Button>
                </div>
              </div>

            </div>
            <Button
              className={`!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0] mt-[29px]
               rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[25.4px] text-center w-full flex justify-center items-center
               ${!isFormValid && "opacity-60 cursor-not-allowed"}`}
              size="1xl" onClick={next} disabled={!isFormValid}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginEighteenPage;
