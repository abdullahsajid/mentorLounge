import React from 'react'
import {Text,Img} from "components"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <div className='flex justify-end'>
        <div className="bg-white-A700 flex flex-row gap-[13px] items-center justify-end p-[7px] shadow-bs18 w-full" style={{
             width: "calc(100% - 316px)"
        }}>
            <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end
               p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src={`${user?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${user?.profile_picture_url}` : "images/default.png"}`}
                  alt="profilepicTwo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtProximaSoftSemiBold20"
                  >
                    {user?.name || user?.data?.name}
                  </Text>
                  <Img
                    className="h-1.5 w-2"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
