import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar5 from "components/Sidebar5";

const SettingsOnePage = () => {

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
              <div className="grid grid-cols-9 gap-[27px] sm:gap-3 sm:grid-cols-1 w-full sm:px-2">
                <div className="bg-white-A700 
                 p-7 sm:px-5 rounded-[30px] col-span-2 sm:w-full sm:col-span-9">
                  <div className="flex flex-col items-center justify-center
                   my-[7px]">
                    <div className="flex flex-col gap-[12.74px] sm:flex-row">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] rounded-[10px]
                         shadow-bs23 sm:text-[14px] md:text-[18.38px] text-[20.38px] text-center w-full"
                        size="lg"
                      >
                        My Profile
                      </Button>
                      {/* <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px]
                       rounded-[10px] shadow-bs23 w-full"> */}
                      <Button
                        className="sm:text-[14px] md:text-[18.38px] text-[20.38px] text-gray-900_87
                          bg-[#fff] w-auto font-extrabold pl-[15.28px] pr-[19.11px] py-[12.74px]
                          rounded-[10px] shadow-bs23"
                        size="txtPoppinsSemiBold2038"
                      >
                        Security
                      </Button>
                      {/* </div> */}
                      {/* <div className="flex flex-col items-center justify-center pl-[15.28px] pr-[19.11px] py-[12.74px] 
                      rounded-[10px] shadow-bs23 w-full"> */}
                      <Button
                        className="sm:text-[14px] md:text-[18.38px] text-[20.38px] text-gray-900_87 
                          bg-[#fff] w-auto font-extrabold pl-[15.28px] pr-[19.11px] py-[12.74px]
                          rounded-[10px] shadow-bs23"
                        size="txtPoppinsSemiBold2038"
                      >
                        Notifications
                      </Button>
                      {/* </div> */}
                    </div>
                    {/* <div className="h-[49px] mb-[433px] rounded-[10px] shadow-bs23 w-full"></div> */}
                  </div>
                </div>
                <div className="col-span-7 sm:col-span-9">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_02 mb-[10px]"
                    size="txtProximaSoftSemiBold30Gray90002"
                  >
                    My Profile
                  </Text>
                  <div className="h-full flex flex-col bg-white-A700 rounded-[30px] p-5">
                    <div className="flex flex-col">
                      <div className="text-[18px] font-bold text-[#4C535F]">
                        Your Profile Picture
                      </div>
                      <label htmlFor="avatar" className="p-5 border border-dashed cursor-pointer border-[#000] w-fit flex items-center flex-col mt-3 rounded-2xl">
                        <input type="file"
                          accept="image/*"
                          id="avatar"
                          style={{ display: "none" }}
                        />
                        <div className="w-fit flex items-center">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99994 7.75839C10.74 7.26392 11.61 7 12.5 7C13.0714 7 13.5346 7.46322 13.5346 8.03464C13.5346 8.60606 13.0714 9.06928 12.5 9.06928C12.0193 9.06928 11.5493 9.21184 11.1496 9.47893C10.7498 9.74602 10.4383 10.1256 10.2543 10.5698C10.0703 11.014 10.0222 11.5027 10.116 11.9742C10.2098 12.4457 10.4413 12.8788 10.7812 13.2188C11.1212 13.5587 11.5543 13.7902 12.0258 13.884C12.4973 13.9778 12.986 13.9297 13.4302 13.7457C13.8744 13.5617 14.254 13.2502 14.5211 12.8504C14.7882 12.4507 14.9307 11.9807 14.9307 11.5C14.9307 10.9286 15.3939 10.4654 15.9654 10.4654C16.5368 10.4654 17 10.9286 17 11.5C17 12.39 16.7361 13.26 16.2416 14.0001C15.7471 14.7401 15.0443 15.3169 14.2221 15.6575C13.3998 15.998 12.495 16.0872 11.6221 15.9135C10.7492 15.7399 9.94736 15.3113 9.31802 14.682C8.68868 14.0526 8.2601 13.2508 8.08647 12.3779C7.91283 11.505 8.00195 10.6002 8.34254 9.77792C8.68314 8.95566 9.25991 8.25285 9.99994 7.75839Z" fill="#8D98AA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9802 13C35.5434 13 36 13.4661 36 14.041V22.7574C36 27.2164 35.1375 30.6085 32.9439 32.8604C30.7489 35.1136 27.4407 36 23.094 36H12.906C8.56063 36 5.25258 35.114 3.05723 32.861C0.863226 30.6094 0 27.2173 0 22.7574V19.2528C0 18.6779 0.456559 18.2118 1.01975 18.2118C1.58295 18.2118 2.03951 18.6779 2.03951 19.2528V22.7574C2.03951 27.014 2.87587 29.7227 4.50321 31.3928C6.12922 33.0615 8.76429 33.9181 12.906 33.9181H23.094C27.2371 33.9181 29.8721 33.0611 31.4977 31.3923C33.1248 29.7221 33.9605 27.0134 33.9605 22.7574V14.041C33.9605 13.4661 34.4171 13 34.9802 13Z" fill="#8D98AA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.09967 3.07527C5.32422 0.868234 8.6763 0 13.0827 0H19.9716C20.5396 0 21 0.456808 21 1.02031C21 1.58381 20.5396 2.04062 19.9716 2.04062H13.0827C8.87924 2.04062 6.20419 2.88106 4.55405 4.51821C2.90392 6.15535 2.05681 8.80935 2.05681 12.9797C2.05681 13.5432 1.59638 14 1.0284 14C0.460432 14 0 13.5432 0 12.9797C0 8.60801 0.875122 5.28231 3.09967 3.07527Z" fill="#8D98AA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6C23 5.44772 23.4792 5 24.0704 5H33.9296C34.5208 5 35 5.44772 35 6C35 6.55228 34.5208 7 33.9296 7H24.0704C23.4792 7 23 6.55228 23 6Z" fill="#8D98AA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 0C29.5523 0 30 0.479239 30 1.07041V10.9296C30 11.5208 29.5523 12 29 12C28.4477 12 28 11.5208 28 10.9296V1.07041C28 0.479239 28.4477 0 29 0Z" fill="#8D98AA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0496 19.675L20.9723 25.8014L20.9535 25.8173C20.0931 26.5267 19.0135 26.9145 17.8993 26.9145C16.7851 26.9145 15.7055 26.5267 14.8451 25.8173C14.8358 25.8096 14.8267 25.8018 14.8177 25.7939L14.2713 25.3101C13.8139 24.941 13.2519 24.7253 12.6651 24.694C12.0746 24.6624 11.4894 24.8191 10.9934 25.1414L2.59721 30.8241C2.12855 31.1413 1.49204 31.0177 1.17551 30.5481C0.858988 30.0784 0.982315 29.4405 1.45097 29.1233L9.86814 23.4264C10.7295 22.8634 11.7473 22.5897 12.7741 22.6445C13.801 22.6994 14.7839 23.0802 15.5806 23.7318C15.5909 23.7402 15.6011 23.7489 15.6111 23.7578L16.1591 24.2429C16.6508 24.6434 17.2653 24.8622 17.8993 24.8622C18.5351 24.8622 19.1512 24.6422 19.6436 24.2396L26.7209 18.1131L26.7397 18.0972C27.6002 17.3878 28.6797 17 29.7939 17C30.9081 17 31.9877 17.3878 32.8481 18.0972L32.867 18.1132L35.6454 20.5185C36.0734 20.889 36.1206 21.537 35.7509 21.9659C35.3812 22.3947 34.7345 22.4421 34.3066 22.0716L31.5382 19.6749C31.0458 19.2723 30.4297 19.0523 29.7939 19.0523C29.1582 19.0523 28.5421 19.2723 28.0496 19.675Z" fill="#8D98AA" />
                          </svg>
                        </div>
                        <div className="flex items-center mt-3">
                          upload your photo
                        </div>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mt-7">
                        <div className="flex flex-col">
                          <label htmlFor="fullName" className="text-[#4C535F] font-bold">Full name</label>
                          <input type="name" id="fullName"
                            className="border border-solid p-[0.95rem] mt-3 rounded-[8px]"
                            style={{ backgroundColor: "rgba(19, 19, 26, 0.12)" }}
                            placeholder="Please enter your full name"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="email" className="text-[#4C535F] font-bold">Email</label>
                          <input type="email" id="email"
                            className="border border-solid p-3 mt-3 rounded-[8px]"
                            style={{ backgroundColor: "rgba(19, 19, 26, 0.12)" }}
                            placeholder="Please enter your email"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mt-7">
                        <div className="flex flex-col">
                          <label htmlFor="username" className="text-[#4C535F] font-bold">Username</label>
                          <input type="name" id="username"
                            className="border border-solid p-[0.95rem] mt-3 rounded-[8px]"
                            style={{ backgroundColor: "rgba(19, 19, 26, 0.12)" }}
                            placeholder="Please enter your username"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="no" className="text-[#4C535F] font-bold">Phone Number</label>
                          <input type="number" id="no"
                            className="border border-solid p-3 mt-3 rounded-[8px]"
                            style={{ backgroundColor: "rgba(19, 19, 26, 0.12)" }}
                            placeholder="Please enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mt-7 gap-5">
                        <div className="flex">
                          <button className="bg-[#743C95] text-[#fff] p-3 rounded-lg font-semibold">
                            Update Profile
                          </button>
                        </div>
                        <div className="flex">
                          <button className="border-2 border-solid p-3 px-5 rounded-lg font-semibold">
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
