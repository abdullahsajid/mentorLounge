import React from "react";
import { Button, Img, Text } from "components";
import SettingsProfile from "components/Admin/SettingsProfile";
import { Outlet,Link, useLocation} from "react-router-dom";

const SettingsOnePage = () => {
  const location = useLocation()

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins ml-auto w-full sm:!w-full h-screen" style={{
        width: "calc(100% - 316px)"
      }}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full mt-[45px]">
          <div className="flex flex-col font-proximasoft gap-[42px] justify-start md:px-5 w-full sm:px-0">
            <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[27px] w-[95%] sm:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900_03"
                size="txtProximaSoftSemiBold35"
              >
                Account Settings
              </Text>
              <div className="flex gap-[27px] sm:gap-3 sm:grid-cols-1 w-full sm:px-2">
                <div className="bg-white-A700 
                 p-7 sm:px-5 rounded-[30px] w-[250px] col-span-2 sm:w-full sm:col-span-9">
                  <div className="flex flex-col items-center justify-center
                   my-[7px]">
                    <div className="flex flex-col gap-[20px] sm:flex-row w-full">
                      <Link
                      to={'/adminsettings/adminprofile'}
                        className={`cursor-pointer font-extrabold leading-[normal] rounded-[10px] py-3 px-2
                         shadow-bs23 sm:text-[14px] md:text-[18.38px] text-[20.38px] text-center w-full text-gray-900_87
                        ${location.pathname === '/adminsettings/adminprofile' && "!bg-[#743C95] !text-[#fff]"}`}
                      >
                        My Profile
                      </Link>
                      {/* <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px]
                       rounded-[10px] shadow-bs23 w-full"> */}
                      <Link
                        to={'/adminsettings/adminsecurity'}
                        className={`sm:text-[14px] md:text-[18.38px] text-[20.38px] text-gray-900_87
                          bg-[#fff] w-auto font-extrabold py-3 px-2 text-center
                          rounded-[10px] shadow-bs23
                          ${location.pathname === '/adminsettings/adminsecurity' && "!bg-[#743C95] !text-[#fff]"}
                        `}
                      >
                        Security
                      </Link>
                      {/* </div> */}
                      {/* <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] 
                      rounded-[10px] shadow-bs23 w-full"> */}
                      <Link
                        to={'/adminsettings/adminnotification'}
                        className={`sm:text-[14px] md:text-[18.38px] text-[20.38px] text-gray-900_87 
                          bg-[#fff] w-auto font-extrabold py-3 px-2 text-center
                          rounded-[10px] shadow-bs23
                          ${location.pathname === '/adminsettings/adminnotification' && "!bg-[#743C95] !text-[#fff]"}
                          `}
                      >
                        Notifications
                      </Link>
                      {/* </div> */}
                    </div>
                    {/* <div className="h-[49px] mb-[433px] rounded-[10px] shadow-bs23 w-full"></div> */}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
