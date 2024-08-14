import React, { useEffect, useState } from 'react'
import { Text,Button,CheckBox,Img,Input} from 'components'
import { useCreateAnnouncementMutation,useGetAnnouncementMutation,useRemoveAnnouncementMutation,useUpdateAnnouncementMutation} from 'features/apis/admin'
import toast from 'react-hot-toast'

const Announcement = () => {
    const [createAnnouncement] = useCreateAnnouncementMutation()
    const [getAnnouncement] = useGetAnnouncementMutation()
    const [updateAnnouncement] = useUpdateAnnouncementMutation()
    const [removeAnnouncement] = useRemoveAnnouncementMutation()
    const [announcement,setAnnouncement] = useState([])
    let payloadAnn = {
        sortproperty: "createdAt",
        sortorder: -1,
        offset: 0,
        limit: 50,
        query: { active: true }
    }
    const addAnnouncement = () => {
        setAnnouncement([...announcement,{
            anncTitle:'',
            anncDesc:''
        }])
    }

    useEffect(() => {
        const gettingData = async () => {
          const {data} = await getAnnouncement(payloadAnn)
          setAnnouncement(data?.data?.announcements)
          console.log("ann",data)
        }
        gettingData()
    },[])

    const handlerTitle = (e,index) => {
        const newAnnouncement = [...announcement]
        newAnnouncement[index] = {
          ...newAnnouncement[index],
          anncTitle:e.target.value
        }
        setAnnouncement(newAnnouncement)
    }
    
    const handlerDescription = (e,index) => {
        const newDescription = [...announcement]
        newDescription[index] = {
          ...newDescription[index],
          anncDesc:e.target.value
        }
        setAnnouncement(newDescription)
    }

    const handlerCreateAnnouncement = async (e,index) => {
        const newAnnouncement = [...announcement]
        if(newAnnouncement[index].anncTitle === '' || newAnnouncement[index].anncDesc === ''){
          return toast.error("Please write Title and Description", {
            style: {
                backgroundColor: '#f6f6f7',
                border: '3px solid #fff',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }
          })
        }
        const {data} = await createAnnouncement(newAnnouncement[index]) 
        if(data?.status === 'Success'){
          return toast.success("Announcement Created", {
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
    
    const handlerUpdateAnn = async (index,id) => {
        const newAnnouncement = [...announcement]
        if(newAnnouncement[index].anncTitle === '' || newAnnouncement[index].anncDesc === '' || id === null){
          return toast.error("Please write Title and Description", {
            style: {
                backgroundColor: '#f6f6f7',
                border: '3px solid #fff',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }
          })
        }
        let updatePayload = {
          announcementid: id,
          anncTitle: newAnnouncement[index].anncTitle,
          anncDesc: newAnnouncement[index].anncDesc,
          active: true
        }
        const {data} = await updateAnnouncement(updatePayload)
        if(data?.status === 'Success'){
          return toast.success("Announcement Updated", {
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

    const handlerRemoveAnn = async (id,lastModify) => {
        if(id === undefined || id === null){
          return 
        }
        let payload = {
          id:id,
          lastModifiedBy:lastModify
        }
        const {data} = await removeAnnouncement(payload)
        if(data?.status === 'Success'){
          return toast.success("Announcement removed", {
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
    <div className="bg-white-A700 flex flex-col items-center justify-start pl-1 py-1 rounded-[26px] shadow-bs5 w-[36%] md:w-full">
        <div className="flex flex-col gap-[22px] items-center justify-start mt-[26px] w-full">
            <div className="flex flex-row items-center px-2 justify-between pb-3 border-b border-solid border-[#000] w-full md:w-full">
                <Text
                    className="text-3xl sm:text-[26px] pl-7 md:text-[28px] text-black-900_01"
                    size="txtProximaSoftSemiBold30"
                >
                    Announcements
                </Text>
                <Button
                    className="flex items-center justify-center rounded-xl"
                    size="sm"
                    onClick={addAnnouncement}
                >
                    <Img
                        src="images/img_fluentadd12regular.svg"
                        alt="fluentadd12regu_One"
                    />
                </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3 w-full">
                {announcement?.map((item,index) => (
                    <div className="flex flex-col gap-y-3 w-full px-2 border-b border-solid border-[#000]">
                        <div className='flex flex-row items-center gap-2 mt-5'>
                            <CheckBox
                                className="font-semibold leading-[normal] md:ml-[0] text-left text-lg
                                flex items-center"
                                inputClassName="h-5 mr-[5px] w-5"
                                name="excitingappupda_One"
                                id="excitingappupda_One"
                                // label="Exciting App Update!"
                            ></CheckBox>
                            <Input 
                                wrapClassName="w-full"
                                className="text-[22px] text-black-900_01 sm:text-lg md:text-xl !border !border-solid !w-full"
                                type="text" 
                                placeholder="Exciting App Update!"
                                value={item?.anncTitle}
                                onChange={(e) => handlerTitle(e,index)} 
                            />
                            <div>
                                <Button
                                    className="flex h-6 items-center justify-center md:ml-[0] rounded-[50%] w-6"
                                    shape="circle"
                                    size="sm"
                                    onClick={() => handlerRemoveAnn(item?._id,item?.lastModifiedBy?._id)}
                                >
                                    <i class="fa-solid fa-xmark"></i>
                                </Button>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <textarea
                                className="m-auto text-black-900_01 text-lg w-full sm:w-full"
                                size="txtProximaSoftRegular18"
                                placeholder="The app uses a smart algorithm to match mentors and mentees based on shared interests, expertise, and goals,
                                    ensuring a compatible and fruitful mentorship."
                                value={item?.anncDesc}
                                onChange={(e) => handlerDescription(e,index)}
                            >
                            </textarea>
                        </div>
                        <div className="flex justify-end items-center w-full mb-2">
                          <Button className="rounded-md !p-3" 
                            onClick={item?._id ? (e) => handlerUpdateAnn(index,item?._id) : (e) => handlerCreateAnnouncement(e,index)}
                          >
                            {item?._id ? "Update Announcement" : "Add Announcement"}
                          </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Announcement
