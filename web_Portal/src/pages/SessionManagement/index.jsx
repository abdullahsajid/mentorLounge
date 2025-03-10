import React, { useEffect, useState } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import { useGetAllSessionMutation } from "features/apis/admin";
import moment from "moment";

const SessionManagementPage = () => {
  const [getAllSession] = useGetAllSessionMutation()
  const [sessions,setSessions] = useState([])
  let payload = {
    sortproperty: "createdAt",
    sortorder: -1,
    offset: 0,
    limit: 6,
    query: {
        critarion: {active : true}, // send this criterion if want to get all sessions e.g. for super admin this critarion shall be used
        // "critarion": {"active" : true, "requestBy": "65a6ff1f10c619ca7edccebc"}, // send this criterion if want to get all sessions only for mentees
        // "critarion": {"active" : true, "mentor": "65aac884b16cac78e7672d62"}, , // send this criterion if want to get all sessions only for mentors
        requestByFields: "_id email name profile_picture_url",
        menteesFields: "menteeFeilds menteeDescription menteeEducation menteeExperience",
        mentorUserFields: "_id email name profile_picture_url",
        mentorFields: "mentorFeilds mentorDescription mentorEducation mentorExperience",
        sessionReviewFields: "",
        mentorsAvailabilityFields: "availabilityStartTime availabilityEndTime availabilityDuration availabilityBooked availabilityExpired availabilityRequested",
        addedby: "_id email name",
        lastModifiedBy: "_id email name"
    }
  }

  const getSession = async () => {
    const {data} = await getAllSession(payload)
    if(data.status === 'Success'){
      setSessions(data?.data?.sessionRequests)
    }
  }

  useEffect(() => {
    getSession()
  },[])



  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center w-full ml-auto"
      style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col font-proximasoft gap-[31px] items-center justify-start md:px-5 sm:px-0 w-full mt-5">
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-between w-[95%] sm:px-2 md:w-full">
              <div className="w-full">
                <Input
                  name="group152"
                  placeholder="Search"
                  className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                  wrapClassName="border border-gray-900_1e border-solid flex md:mt-0 mt-0.5 rounded-[21px] w-full md:w-full
                  flex justify-center items-center"
                  prefix={
                    <Img
                      className="mt-[5px] mb-1 mx-2.5 w-[20px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex items-center sm:gap-2">
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[125px] md:ml-[0] ml-[394px] rounded-[20px]"
                  leftIcon={
                    <div className="h-[19px] mt-[5px] mb-1 mr-2 w-[19px] rounded-[5px]">
                      <Img
                        className="h-[19px] rounded-[5px]"
                        src="images/img_outline_settings_fine_tuning_tuning.svg"
                        alt="Outline / Settings, Fine Tuning / Tuning "
                      />
                    </div>
                  }
                  size="sm"
                >
                  <div className="font-medium text-[19.13px] text-left !font-poppins">
                    Filter
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[198px] md:ml-[0] ml-[11px] rounded-[20px]"
                  leftIcon={
                    <div className="h-[19px] mt-[5px] mb-1 mr-[7px] w-[19px] rounded-[5px]">
                      <Img
                        className="h-[19px] rounded-[5px]"
                        src="images/img_outline_settings_fine_tuning_tuning.svg"
                        alt="Outline / Settings, Fine Tuning / Tuning "
                      />
                    </div>
                  }
                  size="sm"
                >
                  <div className="font-medium text-[19.13px] text-left !font-poppins">
                    Schedule New
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins gap-4 items-start justify-start w-[97%] sm:px-2 md:w-full">
              <div className="flex flex-col items-center justify-start w-[62%] md:w-full">
                <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  {sessions.map((item,index) => (
                  <div className="bg-white-A700 flex flex-1 flex-col items-center py-5 px-5 rounded-[27px]
                   shadow-bs5 w-full" key={index}>
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full h-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-full md:w-full">
                        <div className="flex flex-row gap-7 items-start justify-between w-full">
                          <Text
                            className="text-black-900_01 text-lg !font-poppins"
                            size="txtPoppinsMedium18"
                          >
                            {item?.sessionRequestTitle}
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_notification.svg"
                            alt="notification"
                          />
                        </div>
                        <div className="flex flex-row items-center font-proximasoft items-start justify-start w-[62%] md:w-full">
                          <Img
                            className="h-4 rounded-[3px] w-4"
                            src="images/img_outlinetime.svg"
                            alt="outlinetime"
                          />
                          <Text
                            className="capitalize ml-1 text-[15px] text-blue_gray-700 !font-poppins"
                            size="txtProximaSoftRegular15Bluegray700"
                          >
                            {moment(item?.requestStartTime).format('dddd Do MMM')}
                          </Text>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full">
                          <div className="flex flex-col h-max items-center justify-center">
                            <div className="flex flex-col gap-[34px] justify-start w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start mr-11 w-[85%] md:w-full">
                                <Text
                                  className="border border-lime-700 border-solid h-[21px] px-[9px] rounded-[10px] text-[10px]
                                   text-blue_gray-700 flex items-center !font-poppins"
                                  size="txtPoppinsMedium1118"
                                >
                                  {item?.preSessionQuestions[0]?.menteesAnswer}
                                </Text>
                                <Text
                                  className="border border-lime-700 border-solid h-[21px] px-2 rounded-[10px] text-[10px]
                                   text-blue_gray-700 flex items-center !font-poppins"
                                  size="txtPoppinsMedium1118"
                                >
                                  {item?.preSessionQuestions[1]?.menteesAnswer}
                                </Text>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-6 pt-3" style={{borderTop:"1px solid #BA35351A"}}>
                            <div className="flex ">
                                <Img
                                  className=" bottom-[0] h-[29px] left-[7%] rounded-[50%] w-[29px] border"
                                  src={`${item?.mentor?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${item?.mentor?.profile_picture_url}` : `http://localhost:3000/images/default.png`}`}
                                  alt="ellipseFortyNine"
                                />
                              
                              <Img
                                className=" bottom-[0] h-[29px] left-[12%] rounded-[50%] w-[29px] border"
                                src={`${item?.requestBy?.profile_picture_url ? `${process.env.REACT_APP_LOCAL_URL}${item?.requestBy?.profile_picture_url}` : `http://localhost:3000/images/default.png`}`}
                                // alt="ellipseFifty"
                              />
                            </div>
                            <div>
                                <Text
                                  className="text-[12.8px] text-purple-700 underline !font-poppins"
                                  size="txtPoppinsMedium128"
                                >
                                  Reviews
                                </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>))}
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-proximasoft items-center justify-start p-[25px] sm:px-5 
              rounded-[21px] shadow-bs2 w-[38%] h-screen sm:w-full">
                <div className="flex flex-col gap-[41px] items-center justify-start mt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 !font-poppins font-semibold"
                      // size="txtProximaSoftSemiBold30"
                    >
                      Reviews
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                  <List
                    className="flex flex-col font-poppins gap-[18px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                          <Img
                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                            src="images/img_ellipse10_1.png"
                            alt="ellipseTen"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-black-900_01 text-sm !font-poppins font-bold"
                              // size="txtPoppinsMedium14"
                            >
                              Session with Alexa
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-700 !font-poppins"
                              size="txtPoppinsRegular10"
                            >
                              Lorem ipsum dolor sit amet, consectetur{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-[10px] text-blue_gray-700 !font-poppins"
                        size="txtPoppinsMedium10"
                      >
                        3m
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-black-900_4c w-[86%]" />
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-2 items-start justify-between w-full">
                          <Img
                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                            src="images/img_ellipse10_2.png"
                            alt="ellipseTen"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-black-900_01 text-sm !font-poppins font-bold"
                              // size="txtPoppinsMedium14"
                            >
                              Session with Jacob
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-700 !font-poppins"
                              size="txtPoppinsRegular10"
                            >
                              Lorem ipsum dolor sit amet, consectetur{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-[10px] text-blue_gray-700 !font-poppins"
                        size="txtPoppinsMedium10"
                      >
                        Yesterday
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionManagementPage;
