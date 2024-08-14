import React, { lazy, useEffect } from "react";
import { Img, Input, Text } from "components";
import { Cross as Hamburger } from 'hamburger-react'
import { FilterSessionsForMentee } from "utils";
import { Oval } from 'react-loader-spinner'
const SessionContainer = lazy(() => import('components/SessionContainer'))
const SessionMenteeContainer = React.lazy(() => import('components/SessionMenteeContainer'))
const DesktopSevenPage = ({ toggleSideBar, setToggleSidebar }) => {
  const filterItem = FilterSessionsForMentee()
  // console.log(filterItem);  

  useEffect(() => {
    setToggleSidebar(false)
  }, [])

  return (
    <>
      <div className="bg-[#f8f5f9] flex flex-col font-poppins items-center justify-end ml-auto md:pr-10 pr-[41px] sm:pr-[0]
       w-full md:!w-full sm:!w-full" style={{
          width: "calc(100% - 316px)"
        }}>
        <div className="flex flex-col items-center justify-end mx-auto w-full">
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
            <div className="flex flex-1 flex-col font-proximasoft gap-[23px] justify-start w-full p-[47px] sm:p-[20px]">
              <div className="flex w-full items-center justify-end hidden md:flex sm:flex">
                <Hamburger toggled={toggleSideBar} size={20} toggle={setToggleSidebar} />
              </div>
              <Text
                className="md:ml-[0] ml-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                size="txtProximaSoftSemiBold48Black90001"
              >
                Sessions
              </Text>
              <div className="bg-white-A700 flex flex-col font-poppins gap-[21px] items-center justify-center p-[30px] sm:px-0 sm:pt-0 rounded-[20px] shadow-bs3 w-full">
                {!filterItem ? (
                  <div className="flex justify-center items-center w-full text-[24px] h-full">
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>
                ) : (
                  <React.Suspense fallback={<div className="flex justify-center items-center w-full text-[24px] h-full">
                    <Oval
                      height={30}
                      width='100%'
                      color="#743C95"
                      secondaryColor="rgb(120, 86, 255)"
                      strokeWidth={3}
                    />
                  </div>}>
                    {filterItem.length === 0 ? (
                      <div className="flex justify-center items-center w-full text-[24px] h-full">No Sessions at the Moment</div>
                    ) : (
                      filterItem?.map((item,index) => (
                        <SessionMenteeContainer
                          key={index}
                          startTime={item?.requestStartTime}
                          name={item?.mentor?.name}
                          title={item?.sessionRequestTitle}
                          img={item?.mentor?.profile_picture_url}
                          endTime={item?.requestEndTime}
                          meeting={item?.zoomMeeting}
                        />
                      ))
                    )}
                  </React.Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
