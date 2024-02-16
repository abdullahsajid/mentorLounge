import React, { useEffect, useState } from "react";

import { Button, Img, Input, Text } from "components";
// ${(formData.role === 'mentee') && 'menteeDescription'}
// ${(formData.role === 'mentee') && 'menteeEducation'}
// ${(formData.role === 'mentee') && 'menteeExperience'}
const LoginEighteenPage = ({ next, formData, handlerChange }) => {
  const [skills, setSkills] = useState('')
  const [skillType, setSkillType] = useState([])
  const [addLink, setLinks] = useState([{ socialPlatformLink: '' }])
  const formFields = [
    { name: `${(formData.role === 'mentor') ? 'mentorDescription' : 'menteeDescription'}`, type: 'text', label: 'Short description about yourself' },
    { name: `${(formData.role === 'mentor') ? 'mentorEducation' : 'menteeEducation'}`, type: 'text', label: 'Your Education' },
    { name: `${(formData.role === 'mentor') ? 'mentorExperience' : 'menteeExperience'}`, type: 'text', label: 'Your Experience' },
    { name: `${(formData.role === 'mentor') ? 'mentorPrice':'reasonOfJoining'}`, type: `${(formData.role === 'mentor')?'number':'text'}`, 
    label: `${(formData.role === 'mentor')?'Price for each Session':'reason Of Joining'}`}
  ]
  console.log(formFields)
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

  const handlerAddInput = () => {
    setLinks([...addLink, { socialPlatformLink: '' }])
  }

  const handlerInputChange = (e, index) => {
    let { name, value } = e.target
    let updateValues = [...addLink]
    updateValues[index][name] = value
    setLinks(updateValues)
  }

  // ${(formData.role === 'mentor') && 'menteeAttributes.menteeFeilds'}
  // ${(formData.role === 'mentee') && 'menteeAttributes.socialMediaLinks'}
  // ${(formData.role === 'mentee') && `menteeAttributes.${name}`}
  useEffect(() => {
    handlerChange(`${(formData.role === 'mentor') ? "mentorAttributes.mentorFeilds":"menteeAttributes.menteeFeilds"}`, skillType)
  }, [skillType])

  useEffect(() => {
    handlerChange(`${(formData.role === 'mentor') ? "mentorAttributes.socialMediaLinks":"menteeAttributes.socialMediaLinks"}`, addLink)
  }, [addLink])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center fixed z-[110]"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", overflowY: 'scroll' }}>
        <div
          className="bg-[#fff] flex flex-col items-center p-6 md:px-5 h-[670px] w-[41%]"
          style={{ borderRadius: "20px", overflowY: 'scroll' }} id="sc"
        >
          <div className="flex flex-col items-start justify-start mt-1.5 w-full md:w-full">
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
                  <div className="text-[#000] border border-[#000] p-1 py-0 rounded-md" key={index}>{item}</div>
                ))}
              </div>
              <div className="flex flex-col font-poppins items-center justify-start mt-1.5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="inputfield"
                    placeholder="Type “Product Design” and Enter"
                    className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] px[30px] px-[16px] pl-[10px] md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                    wrapClassName="border border-gray-900_1e border-solid rounded-[22px] w-full"
                    color="gray_100_03"
                    size="lg"
                    variant="fill"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
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
                        name="inputfield_One"
                        placeholder="Type Here.."
                        className="!placeholder:text-gray-900_7f !text-gray-900_7f leading-[normal] md:h-auto px[30px] px-[16px] sm:h-auto text-left text-xl w-full"
                        wrapClassName="border border-gray-900_1e border-solid rounded-[22px] w-full"
                        color="gray_100_03"
                        variant="fill"
                        type={type}
                        value={(formData.role === 'mentor') ? formData.mentorAttributes[name] : formData.menteeAttributes[name]}
                        onChange={(e) => handlerChange(`${(formData.role === 'mentor') ? `mentorAttributes.${name}`:`menteeAttributes.${name}`}`, e.target.value)}
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
              className="!text-gray-100 cursor-pointer font-poppins h-[60px] leading-[normal] md:ml-[0] mt-[29px]
               rounded-[41px] shadow-bs5 sm:text-[26.4px] md:text-[28.4px] text-[25.4px] text-center w-full flex justify-center items-center"
              size="1xl" onClick={next}
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
