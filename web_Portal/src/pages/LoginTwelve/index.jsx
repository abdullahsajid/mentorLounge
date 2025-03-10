import React, { lazy, useEffect, useRef, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import { Button, Img, List, Text } from "components";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import validator from "validator";
import { useCreditCardValidator } from "react-creditcard-validator";
import { useLoginUserMutation } from "features/apis/user";
import toast from 'react-hot-toast';
import AdminSignIn from "pages/adminSignIn";
import Verify from "pages/adminVerify";
import { setToggleSignIn } from "features/admin/adminSlice";
const LoginThirteenPage = lazy(() => import("pages/LoginThirteen"));
const LoginFourteenPage = lazy(() => import("pages/LoginFourteen"));
const LoginSixteenPage = lazy(() => import("pages/LoginSixteen"));
const LoginFifteenPage = lazy(() => import("pages/LoginFifteen"))
const LoginEighteenPage = lazy(() => import("pages/LoginEighteen"))
const Availability = lazy(() => import("pages/Availability"))
const PreQues = lazy(() => import("pages/PreSessionQues"))
const cookie = new Cookies()

const LoginTwelvePage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const [loginUser] = useLoginUserMutation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [skillType, setSkillType] = useState([])
  const [selectPayment, setPayment] = useState('')
  const [isPaymentFormValid, setIsPaymentFormValid] = useState(false)
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleSignUp, setToggleSignUp] = useState(false)
  const [multiStep, setMultiStep] = useState(1)
  const [userRole, setUserRole] = useState('')
  const [isProfileFormValid, setIsProfileFormValid] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [selectedDates, setSelectedDates] = useState([]);
  const {toggleSignIn} = useSelector((state) => state.adminSlice)
  const {verify} = useSelector((state) => state.adminSlice)
  const [validation, setValidation] = useState({
    name: { isValid: true, errMessage: 'name is required' },
    email: { isValid: true, errMessage: 'enter valid email' },
    password: { isValid: true, errMessage: 'password must be at least 6 character' },
    phone: { isValid: true, errMessage: 'enter valid phone no' }
  })
  const [validationPayment, setPaymentValidation] = useState({
    payType: { isValid: true, errMessage: "Enter your choice" },
    // name: { isValid: true, errMessage: 'name is required' },
    cardNum: { isValid: false },
    month: { isValid: true, errMessage: 'field is required' },
    year: { isValid: true, errMessage: 'field is required' },
    cvv: {isValid:true, errMessage:'field is required' }
  })
// "googleId": "108874833979133028660",
  const { getCardNumberProps, meta: { erroredInputs } } = useCreditCardValidator();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    active: true,
    is_verified: false,
    approved: false,
    signuptype: "web",
    platform: "email",
  })
  const [validationProfile, setProfileValidation] = useState({
    [`${formData?.role}Feilds`]:{isValid: true, errorMessage: 'Feild is required'},
    [`${formData?.role}Description`]: { isValid: true, errorMessage: 'Description is required' },
    [`${formData?.role}Education`]: { isValid: true, errorMessage: 'Education is required' },
    [`${formData?.role}Experience`]: { isValid: true, errorMessage: 'Experience is required' },
    [`${formData?.role}Price`]: { isValid: true, errorMessage: 'Price must be a number' },
    socialMediaLinks: { isValid: true, errorMessage: 'At least one link is required' },
  })

  const validationCondition = (data) => {
    const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
    const updateValidation = {
      name: { isValid: user_regex.test(formData.name), errMessage: 'name at least 4 to 20 character' },
      email: { isValid: validator.isEmail(formData.email), errMessage: 'enter valid email' },
      password: { isValid: (formData.password?.length >= 6), errMessage: 'password must be at least 6 character' },
      phone: { isValid: validator.isMobilePhone(formData.phone), errMessage: 'enter valid phone no' }
    }

    setValidation(updateValidation)
    const formValid = Object.values(updateValidation).every((item) => item.isValid)
    setIsFormValid(formValid)
    return formValid
  }

  const validateProfileForm = () => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const newValidation = {
      [`${formData?.role}Feilds`]:{isValid: skillType.some(skill => skill.trim() != ''), errorMessage: 'Feild is required'},
      [`${formData?.role}Description`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Description`]?.trim() !== '', errorMessage: 'Description is required' },
      [`${formData?.role}Education`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Education`]?.trim() !== '', errorMessage: 'Education is required' },
      [`${formData?.role}Experience`]: { isValid: formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Experience`]?.trim() !== '', errorMessage: 'Experience is required' },
      [`${(formData?.role === 'mentor') ? `${formData?.role}Price` : 'reasonOfJoining'}`]: { isValid: (formData.role === 'mentor')? formData?.[`${formData?.role}Attributes`]?.[`${formData?.role}Price`]?.trim() !== '':formData?.[`${formData?.role}Attributes`]?.[`reasonOfJoining`]?.trim() !== '', errorMessage: `${formData.role === 'mentor'?'Price must be a number':'please fill field!'}` },
      socialMediaLinks: { isValid: (formData?.[`${formData?.role}Attributes`]?.socialMediaLinks.some(link => urlRegex.test(link.socialPlatformLink)) &&
      formData?.[`${formData?.role}Attributes`]?.socialMediaLinks.some(link => link.socialPlatformLink.trim() !== '')), errorMessage: 'invalid link' },
    };

    setProfileValidation(newValidation);

    const isFormValid = Object.values(newValidation).every(field => field.isValid);
    setIsProfileFormValid(isFormValid);

    return isFormValid;
  };

  const validationPaymentCondition = () => {
    const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
    const updateValidation = {
      payType: { isValid: (selectPayment != '') && true, errMessage: "required to select" },
      // name: { isValid: user_regex.test((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard.nameOnCard : formData.menteeAttributes.userCreditCard.nameOnCard), errMessage: 'name is required' },
      cardNum: { isValid: (erroredInputs.cardNumber) ? false : true },
      month: { isValid: ((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryMonth'] : formData.menteeAttributes.userCreditCard['expiryMonth'] !== '') && true, errMessage: 'field is required' },
      year: { isValid: ((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['expiryYear'] : formData.menteeAttributes.userCreditCard['expiryYear'] !== '') && true, errMessage: 'field is required' },
      cvv: { isValid: ((formData.role === 'mentor') ? formData.mentorAttributes.userCreditCard['cvv'] : formData.menteeAttributes.userCreditCard['cvv'] !== '') && true, errMessage: 'field is required' }
    }
    setPaymentValidation(updateValidation)
    const formValid = Object.values(updateValidation).every((item) => item.isValid)
    setIsPaymentFormValid(formValid)

    return formValid
  }

  const handlerChange = (name, value) => {
    setFormData((formData) => {
      if (name.startsWith('mentorAttributes.')) {
        const attributeName = name.split('.')[1];
        if (attributeName == 'userCreditCard') {
          const cardData = name.split('.')[2]
          const userDetails = {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              userCreditCard: {
                ...formData.mentorAttributes.userCreditCard,
                [cardData]: value,
              }
            }
          }
          validationPaymentCondition()
          return userDetails
        } else if (attributeName == 'mentorFeilds') {
          const userDetails = {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              mentorFeilds: value
            }
          }
          validateProfileForm(userDetails)
          return userDetails
        } else if (attributeName == 'socialMediaLinks') {
          const userDetails = {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              socialMediaLinks: value
            }
          }
          validateProfileForm(userDetails)
          return userDetails 
        } else if (attributeName == 'mentorsAvailabilities') {
          return {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              mentorsAvailabilities: value
            }
          }
        } else if (attributeName == 'preSessionQuestions') {
          return {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              preSessionQuestions: value
            }
          }
        }
        else {
          return {
            ...formData,
            mentorAttributes: {
              ...formData.mentorAttributes,
              [attributeName]: value,
            },
          }
        }
      } else if (name.startsWith('menteeAttributes.')) {
        const attributeName = name.split('.')[1];
        if (attributeName == 'userCreditCard') {
          const cardData = name.split('.')[2]
          const userDetails = {
            ...formData,
            menteeAttributes: {
              ...formData.menteeAttributes,
              userCreditCard: {
                ...formData.menteeAttributes.userCreditCard,
                [cardData]: value,
              }
            }
          }
          validationPaymentCondition()
          return userDetails
        } else if (attributeName == 'menteeFeilds') {
          const userDetails = {
            ...formData,
            menteeAttributes: {
              ...formData.menteeAttributes,
              menteeFeilds: value
            }
          }
          validateProfileForm(userDetails)
          return userDetails 
        } else if (attributeName == 'socialMediaLinks') {
          const userDetails = {
            ...formData,
            menteeAttributes: {
              ...formData.menteeAttributes,
              socialMediaLinks: value
            }
          }
          validateProfileForm(userDetails)
          return userDetails 
        }
        else {
          return {
            ...formData,
            menteeAttributes: {
              ...formData.menteeAttributes,
              [attributeName]: value,
            },
          }
        }
      }
      else {
        const userDetails = {
          ...formData,
          [name]: value,
        }
        validationCondition(userDetails)
        return userDetails
      }
    })

  }

  useEffect(() => {
    if (userRole === 'mentor') {
      setFormData((pre) => {
        const { menteeAttributes, ...rest } = pre
        return {
          ...rest,
          mentorAttributes: {
            mentorFeilds: [],
            mentorDescription: '',
            mentorEducation: '',
            mentorExperience: '',
            socialMediaLinks: [{ socialPlatformLink: "" }],
            mentorPrice: '',
            currency: 'USD',
            mentorsAvailabilities: [],
            preSessionQuestions: [{ questionText: '' }],
            userCreditCard: {
              creditCardType: '',
              nameOnCard: '',
              creditCardNumber: '',
              expiryMonth: '',
              expiryYear: '',
              cvv:''
            }
          },
        }
      })
    } else if (userRole === 'mentee') {
      setFormData((pre) => {
        const { mentorAttributes, ...rest } = pre
        return {
          ...rest,
          menteeAttributes: {
            // isReferredSignup: true,
            // referalToken: "32892afb-674c-4ec7-aa6f-9a6a8e7c4a2f",
            // referralSignupId: "65ce9634880479056149c20b",
            menteeFeilds: [],
            menteeDescription: "",
            menteeEducation: "",
            menteeExperience: "",
            socialMediaLinks: [{ socialPlatformLink: "" }],
            // menteeRefers: [],
            // sessionRequests: [],
            // recentSearches: [],
            reasonOfJoining: "",
            userCreditCard: {
              creditCardType: "",
              nameOnCard: "",
              creditCardNumber: "",
              expiryMonth: "",
              expiryYear: "",
              cvv:""
            }
          }
        }
      })
    }
  }, [userRole])



  const googleSignIn = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const userDataResponse = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${res.access_token}`, {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        });
  
        if (!userDataResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
  
        const userData = await userDataResponse.json();
        const userDetails = {
          email: userData?.email,
          googleId: userData?.sub,
          platform: "google",
          signintype: "web"
        };
  
        const { data } = await loginUser(userDetails);
        console.log("googleid",userData?.sub);
        if (data?.status === 'Success') {
          toast.success(data.message, {
            style: {
              backgroundColor: '#f6f6f7',
              border: '3px solid #fff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
          });
  
          const redirectPath = data?.data?.role === 'mentor' ? '/mentor' : '/mentee';
          navigation(redirectPath);
  
          cookie.set('loungeToken', data?.token, { path: '/' });
          localStorage.setItem('loungeUser', JSON.stringify(data?.data));
  
        } else if (data?.status === 'Fail') {
          setFormData({
            name: userData.name,
            email: userData.email,
            signuptype: "web",
            platform: "google",
            phone: '012597845465',
            googleId: userData.sub,
            active: true,
            is_verified: true,
            approved: true,
            profilePic: userData.picture,
          });
          setMultiStep(2);
  
        } else {
          toast.error(data?.message, {
            style: {
              backgroundColor: '#f6f6f7',
              border: '3px solid #fff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
          });
        }
      } catch (error) {
        console.error('An error occurred during Google Sign-In:', error);
        toast.error('An error occurred during Google Sign-In. Please try again.', {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
        });
      }
    },
    onError: (err) => {
      console.error("Google Sign-In error:", err);
      toast.error('Login failed. 😔', {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
      });
    }
  });
  


  const handleLogin = () => {
    setToggleLogin(!toggleLogin)
  }

  const handleSignUp = () => {
    setToggleSignUp(!toggleSignUp)
  }

  const next = () => {
    setMultiStep(multiStep + 1)
    setToggleSignUp(false)
  }
  const prev = () => {
    setMultiStep((prevStep) => {
      if (prevStep === 2) {
        setToggleSignUp(true);
      }
      return prevStep - 1;
    });
  }

  useEffect(() => {
    const token = cookie.get("loungeToken");
    if ((user?._id) && token) {
      if (user?.role === 'mentor') {
        return navigation('/mentor')
      } else if (user?.role === 'mentee') {
        return navigation('/mentee')
      }else if (user?.role === 'superadmin') {
        return navigation('/usermanagement')
      }
    }
    // setToggleSidebar(false)
  }, [])

  // console.log(formData)

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-proximasoft mx-auto relative w-full" >
        <div className="bg-purple-700 flex md:flex-col flex-row gap-[39px] items-start justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-7 items-center justify-start ml-1 md:ml-[0] md:mt-0 mt-[174px] w-[21%] md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="sm:text-[30.159999999999997px] md:text-[36.16px] text-[40.16px] text-white-A700"
                size="txtProximaSoftSemiBold4016"
              >
                Sign in to{" "}
              </Text>
              <Text
                className="sm:text-[24.35px] md:text-[26.35px] text-[28.35px] text-white-A700 w-full"
                size="txtProximaSoftMedium2835"
              >
                MENTOR’S LOUNGE UNIVERSITY
              </Text>
            </div>
            <div className="w-full">
              <Text
                className="text-[18.9px] text-white-A700"
                size="txtProximaSoftLight189"
              >
                Connecting mentors and learners{" "}
              </Text>
            </div>
          </div>
          <div className="md:h-[229px] h-[312px] mb-10 relative w-[29%] md:w-full">
            <div className="absolute bottom-[1%] flex flex-col justify-start left-[0] w-[47%]">
              <div className="flex flex-row items-start justify-evenly w-full">
                <div className="bg-lime-700_7e h-[15px] mb-7 mt-[97px] rounded-[7px] w-[7%]"></div>
                <div className="bg-lime-700_7e h-3 mb-[126px] mt-0.5 rounded-[50%] w-3"></div>
                <div className="flex flex-col relative w-[72%]">
                  <Img
                    className="h-[123px] mx-auto rounded-[50%] w-full object-contain"
                    src="images/img_ellipse1.png"
                    alt="ellipseOne"
                  />
                  <div className="bg-lime-700 h-5 ml-0.5 mt-[-2.58px] rounded-[10px] w-[15%] z-[1]"></div>
                </div>
                <div className="bg-lime-700 h-[15px] mb-7 mt-[97px] rounded-[7px] w-[7%]"></div>
              </div>
              <div className="flex flex-row gap-7 items-start justify-end md:ml-[0] ml-[77px] mt-[3px] w-1/2 md:w-full">
                <div className="bg-lime-700 h-[33px] mt-[11px] rounded-[16px] w-[33px]"></div>
                <div className="bg-lime-700_a2 h-7 mb-4 rounded-[14px] w-[29%]"></div>
              </div>
            </div>
            <div className="absolute flex flex-row items-end justify-center left-[11%] top-[0] w-[57%]">
              <div className="flex flex-col gap-5 justify-start mt-[7px] w-[27%]">
                <div className="bg-lime-700_a2 h-[41px] md:ml-[0] ml-[15px] rounded-[20px] w-[41px]"></div>
                <div className="bg-lime-700_90 h-9 mr-[18px] rounded-[19px] w-[68%]"></div>
              </div>
              <div className="bg-lime-700 h-7 mb-[74px] ml-[23px] mt-0.5 rounded-[14px] w-[12%]"></div>
              <Img
                className="h-[105px] md:h-auto ml-[5px] rounded-[52px] w-[49%] object-contain"
                src="images/img_ellipse3.png"
                alt="ellipseThree"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-row items-start justify-start right-[0] w-[51%]">
              <Img
                className="h-[131px] md:h-auto rounded-[65px] w-[66%] object-contain"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
              <div className="bg-lime-700 h-7 mb-[95px] mt-[7px] rounded-[50%] w-7"></div>
              <div className="bg-lime-700 h-[18px] mb-16 ml-[23px] mt-12 rounded-[9px] w-[8%]"></div>
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[1%] top-[10%] w-[29%]">
              <div className="bg-lime-700_87 h-[15px] rounded-[7px] w-[15px]"></div>
              <div className="bg-lime-700 h-6 mt-[31px] rounded-[12px] w-[25px]"></div>
              <div className="flex flex-row gap-7 items-end justify-between mt-0.5 w-full">
                <div className="bg-lime-700 h-[15px] mt-[49px] rounded-[7px] w-[15px]"></div>
                <div className="bg-gradient  h-16 rounded-[50%] w-16"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start ml-auto p-12 md:px-5
         rounded-[54px] shadow-bs8 w-[46%] absolute top-[5rem] right-0 z-[100] sm:top-[32rem] sm:left-0 sm:ml-0 sm:w-full
         sm:border sm:border-solid sm:border-[#000]">
          <Button
            className="!text-gray-100 cursor-pointer h-[97px] sm:h-[60px] leading-[normal] mt-[62px]
            rounded-[48px] shadow-bs5 sm:text-[32.01px] md:text-[34.01px] text-[28.01px] text-center w-[100%]
            sm:w-full flex items-center justify-center"
            size="3xl"
            onClick={() => handleSignUp()}>
            Sign up
          </Button>
          <Button
            className="!text-gray-900_99 border border-gray-900_1e border-solid sm:h-[60px] cursor-pointer h-[97px] leading-[normal] mt-11 
            rounded-[48px] shadow-bs9 sm:text-[32.01px] md:text-[34.01px] text-[28.01px] text-center w-[100%] sm:w-full flex items-center justify-center"
            color="white_A700"
            size="3xl"
            onClick={() => handleLogin()}>
            Login
          </Button>
          <div
            className="common-pointer bg-white-A700 border border-gray-900_1e border-solid flex sm:flex-row 
            flex-row gap-[18px] h-[97px] md:h-auto items-center justify-start  mt-[99px] md:px-10 sm:px-5 px-[15px]
            py-[30.61px] pl-[25px] rounded-[48px] shadow-bs9 w-[100%] sm:w-full sm:h-[60px]"
            onClick={() => googleSignIn()}
          >
            <Img
              className="h-[57px] w-[57px] sm:w-[47px] sm:h-[47px]"
              src="images/img_flatcoloriconsgoogle.svg"
              alt="flatcoloriconsg"
            />
            <Text
              className="sm:text-[18px] md:text-[26.81px] text-[28.01px] text-purple-700_87 w-auto "
              size="txtPoppinsRegular2881"
            >
              Continue with Google
            </Text>
          </div>
          {/* <div className="w-full">
            <Button className="!text-gray-900_99 border border-gray-900_1e border-solid sm:h-[60px] cursor-pointer h-[97px] leading-[normal] mt-11 
            rounded-[48px] shadow-bs9 sm:text-[32.01px] md:text-[34.01px] text-[28.01px] text-center w-[100%] sm:w-full flex items-center justify-center"
              onClick={() => dispatch(setToggleSignIn(true))}
              color="white_A700"
            size="3xl"
            >
              Admin
            </Button>
          </div> */}
        </div>
        <div className="flex flex-col font-poppins items-center justify-start mb-[174px] ml-[73px] mt-[50px] md:px-5 w-[23%] z-[1]
          sm:ml-0 sm:w-full sm:absolute sm:top-[85rem] sm:mb-5 sm:hidden">
          <div className="flex flex-col gap-[23px] items-start justify-start w-full">
            {/* <Text
              className="text-base text-black-900_01 font-bold"
              size="txtPoppinsRegular16"
            >
              Login as
            </Text> */}
            {/* <List
              className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col justify-center p-2.5 rounded-[9px] w-full">
                  <div className="flex justify-end">
                    <Img
                      className="h-[13px]"
                      src="images/img_cancel1.svg"
                      alt="cancelOne"
                    />
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <Img
                      className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                      src="images/img_ellipse26_76x76.png"
                      alt="ellipseTwentySix"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center mb-[3px] mt-1.5 gap-1.5">
                    <Text
                      className="text-[15px] text-black-900_01"
                      size="txtPoppinsMedium15"
                    >
                      Bisa
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500_01"
                      size="txtPoppinsLight13"
                    >
                      Active 1 days ago
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col items-end justify-start p-[11px] rounded-[9px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start p-1 w-[13px]"
                    style={{ backgroundImage: "url('images/img_group88.svg')" }}
                  >
                    <Img
                      className="h-1 w-1"
                      src="images/img_vector_gray_600.svg"
                      alt="vector"
                    />
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <Img
                      className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                      src="images/img_ellipse28.png"
                      alt="ellipseTwentyEight"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-center mb-0.5 mt-1.5 w-full">
                    <Text
                      className="text-black-900_01 text-[15px]"
                      size="txtPoppinsMedium12Black90001"
                    >
                      Zuri
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500_01"
                      size="txtPoppinsLight13"
                    >
                      Active 4 days ago
                    </Text>
                  </div>
                </div>
              </div>
            </List> */}
          </div>
        </div>
        <Outlet/>
        {toggleLogin && <LoginThirteenPage close={() => setToggleLogin(false)} />}
        {toggleSignUp && <LoginFourteenPage close={() => setToggleSignUp(false)} next={next} handlerChange={handlerChange} 
          formData={formData} validation={validation} isFormValid={isFormValid}/>}
        {multiStep == 2 && <LoginSixteenPage next={next} prev={prev} formData={formData} handlerChange={handlerChange} setUserRole={setUserRole} />}
        {multiStep == 3 && <LoginEighteenPage next={next} prev={prev} formData={formData} handlerChange={handlerChange}
           isProfileFormValid={isProfileFormValid} validationProfile={validationProfile} setSkillType={setSkillType} skillType={skillType} />}
        {multiStep == 4 && <LoginFifteenPage formData={formData} handlerChange={handlerChange} next={next} prev={prev}
           setPayment={setPayment} selectPayment={selectPayment} validationPayment={validationPayment} isPaymentFormValid={isPaymentFormValid} />}
        {(multiStep == 5 && userRole === 'mentor') && <Availability formData={formData} handlerChange={handlerChange} next={next} prev={prev} 
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates} />}
        {(multiStep == 6 && userRole === 'mentor') && <PreQues formData={formData} handlerChange={handlerChange} prev={prev} />}
        {/* {toggleSignIn && <AdminSignIn />} */}
        {/* {location.pathname === '/admin-signin' && <AdminSignIn />} */}
        {verify && <Verify/>}
      </div>
    </>
  );
};

export default LoginTwelvePage;
// (multiStep == 5 && userRole === 'mentor')
// multiStep == 2
// toggleSignUp
// multiStep == 3
// multiStep == 4
// (multiStep == 5 && userRole === 'mentor')
// (multiStep == 6 && userRole === 'mentor')