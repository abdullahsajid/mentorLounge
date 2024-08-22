import React, { lazy, useEffect, useState } from "react";
import { Button, CheckBox, Img, Line, Text,Input } from "components";
import { useGetFaqsMutation,useCreateFaqsMutation,useUpdateFaqsMutation, useRemoveFaqsMutation} from "features/apis/admin";
import toast from "react-hot-toast";
const Announcement = lazy(() => import("components/Announcement")) 

const ContentManagementPage = () => {
  const [faqs,setFaqs] = useState([])
  const [getFaqs] = useGetFaqsMutation()
  const [createFaqs] = useCreateFaqsMutation()
  const [updateFaqs] = useUpdateFaqsMutation()
  const [removeFaqs] = useRemoveFaqsMutation()
  let payloadFaq = {
    sortproperty: "createdAt",
    sortorder: -1,
    offset: 0,
    limit: 50,
    query: { active: true }
  }
  const addFaqs = () => {
    setFaqs([...faqs,{
      faqQuestion:'',
      faqAnswer:''
    }])
  }

  useEffect(() => {
    const gettingData = async () => {
      const {data} = await getFaqs(payloadFaq)
      setFaqs(data?.data?.faqs)
    }
    gettingData()
  },[])

  
  const handlerQuestion = (e,index) => {
    const newFaqs = [...faqs]
    newFaqs[index] = {
      ...newFaqs[index],
      faqQuestion:e.target.value
    }
    setFaqs(newFaqs)
  }

  const handlerAnswer = (e,index) => {
    const newFaqs = [...faqs]
    newFaqs[index] = {
      ...newFaqs[index],
      faqAnswer:e.target.value
    }
    setFaqs(newFaqs)
  }

  const handlerCreateFaq = async (e,index) => {
    const faq = [...faqs]
    if(faq[index].faqQuestion === '' || faq[index].faqAnswer === ''){
      return toast.error("please write Question and Answer", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }
    const {data} = await createFaqs(faq[index]) 
    if(data?.status === 'Success'){
      return toast.success("Faq Created", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else{
      return toast.error("something went wrong try again!", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }
  }

  const handlerUpdateFaq = async (index,id) => {
    const faq = [...faqs]
    if(faq[index].faqQuestion === '' || faq[index].faqAnswer === '' || id === null){
      return toast.error("please write Question and Answer", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }
    let updatePayload = {
      faqid: id,
      faqQuestion: faq[index].faqQuestion,
      faqAnswer: faq[index].faqAnswer,
      active: true
    }
    const {data} = await updateFaqs(updatePayload)
    if(data?.status === 'Success'){
      return toast.success("Faq Updated", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else{
      return toast.error("something went wrong try again!", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }

  }

  const handlerRemovefaq = async (id,lastModify) => {
    if(id === undefined || id === null){
      return 
    }
    let payload = {
      id:id,
      lastModifiedBy:lastModify
    }
    const {data} = await removeFaqs(payload)
    if(data?.status === 'Success'){
      return toast.success("Faq removed", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }else{
      return toast.error("something went wrong try again!", {
        style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    }
  }

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center ml-auto sm:!w-full md:!w-full w-full"
      style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full my-5">
          <div className="flex flex-1 flex-col font-proximasoft gap-[30px] items-center justify-start md:px-5 sm:px-0 w-full">
            <div className="flex md:flex-col flex-row gap-[23px] w-[96%] md:w-full sm:px-2">
              <div className="w-[62%] md:w-full">
                <div className=" bg-white-A700 flex flex-col h-full rounded-[26px] py-7 shadow-bs5 w-full">
                  <div className="flex flex-col gap-[23px] justify-center items-center w-full">
                    <div className="flex justify-between w-full px-3 border-b border-solid border-[#000] pb-3">
                      <Text
                        className="text-3xl sm:text-[26px] pl-7 md:text-[28px] text-black-900_01 !font-poppins"
                        size="txtProximaSoftSemiBold30"
                      >
                        Faq’s
                      </Text>
                      <Button
                        className="flex items-center justify-center rounded-xl w-max h-[29px]"
                        size="sm"
                        onClick={addFaqs}
                      >
                        <Img
                          src="images/img_fluentadd12regular.svg"
                          alt="fluentadd12regu_One"
                        />
                      </Button>
                    </div>
                    {faqs?.map((item,index) => (
                      <div className="flex flex-col items-center justify-center w-full px-7 border-b border-solid border-[#000]">
                        <div className="flex flex-row md:gap-5 items-center justify-between mt-[26px] w-full">
                          <div className="flex justify-center items-center w-full">
                            <CheckBox
                              className="font-semibold leading-[normal] md:ml-[0] ml-[7px] text-left text-lg"
                              inputClassName="h-5 mr-[5px] w-5"
                              name="excitingappupda_One"
                              id="faq1"
                            ></CheckBox>
                            <Input 
                              wrapClassName="w-full"
                              className="ml-4 md:ml-[0] text-[22px] text-black-900_01 sm:text-lg !font-poppins md:text-xl rounded-lg !border !border-solid !w-full"
                              type="text" 
                              placeholder="How does the app match mentors and mentees?"
                              value={item?.faqQuestion}
                              onChange={(e) => handlerQuestion(e,index)} 
                            />
                          </div>
                          <div>
                            <Button
                              className="flex h-6 items-center justify-center md:ml-[0] ml-[40px] rounded-[50%] w-6"
                              shape="circle"
                              size="sm"
                              onClick={() => handlerRemovefaq(item?._id,item?.lastModifiedBy?._id)}
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </Button>
                          </div>
                        </div>
                        <div className="my-5 mb-3 w-full">
                          <textarea
                            className="m-auto text-black-900_01 text-lg w-[98%] rounded-lg !font-poppins sm:w-full"
                            size="txtProximaSoftRegular18"
                            placeholder="The app uses a smart algorithm to match mentors and
                            mentees based on shared interests, expertise, and
                            goals, ensuring a compatible and fruitful mentorship."
                            value={item?.faqAnswer}
                            onChange={(e) => handlerAnswer(e,index)}
                          >
                          </textarea>
                        </div>
                        <div className="flex justify-end items-center w-full mb-2">
                          <Button className="rounded-md !p-3 !font-poppins" 
                            onClick={item?._id ? (e) => handlerUpdateFaq(index,item?._id) : (e) => handlerCreateFaq(e,index)}
                          >
                            {item?._id ? "update faq" : "Add Faq"}
                          </Button>
                        </div>
                    </div>))}
                  </div>
                </div>
              </div>
              <Announcement/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentManagementPage;
