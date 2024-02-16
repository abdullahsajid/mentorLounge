import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const UserManagementPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] mt-1.5 w-[27px]"
          src="images/img_outlinemoney.svg"
          alt="outlinemoney"
        />
      ),
      label: "Finance",
      href: "/finance",
      active: window.location.pathname === "/finance",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_blue_gray_300.svg"
          alt="checkmark"
        />
      ),
      label: "Analytics",
      href: "/analyticsandreporting",
      active: window.location.pathname === "/analyticsandreporting",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_vector_blue_gray_300.svg"
          alt="vector"
        />
      ),
      label: "Customer Services",
      href: "/customerservice",
      active: window.location.pathname === "/customerservice",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_blue_gray_300.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">User Management</Text>
        </div>
      ),
      href: "/usermanagement",
      active: window.location.pathname === "/usermanagement",
    },
    {
      label: (
        <div className="font-semibold text-purple-700">
          <Text className="font-semibold text-purple-700">
            Mentor Management
          </Text>
        </div>
      ),
      href: "/mentormanagement",
      active: window.location.pathname === "/mentormanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Session Management</Text>
        </div>
      ),
      href: "/sessionmanagement",
      active: window.location.pathname === "/sessionmanagement",
    },
    {
      label: (
        <div className="text-sm">
          <Text className="text-sm">Content Management</Text>
        </div>
      ),
      href: "/contentmanagement",
      active: window.location.pathname === "/contentmanagement",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[316px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <Img
              className="h-[173px] md:h-auto md:ml-[0] ml-[66px] mr-[83px] mt-2.5 object-cover w-[53%]"
              src="images/img_whatsappimage20231114.png"
              alt="whatsappimageTwenty"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "12px 12px 12px 46px",
                  gap: "11px",
                  color: "#4c535f",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: { fontWeight: "400 !important" },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-1.5 mt-[15px] w-2"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[503px] mt-[22px] pt-0.5 w-full"
            >
              <SubMenu
                icon={
                  <Img
                    className="h-6 mt-[3px] w-6"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                }
                label={
                  <Text className="font-semibold mt-1.5 text-purple-700">
                    Management
                  </Text>
                }
              >
                <div className="flex flex-col gap-[1.39px] items-center justify-end w-full">
                  {sideBarMenu1?.map((menu, i) => (
                    <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </SubMenu>
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-proximasoft items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-[13px] items-center justify-center p-[7px] shadow-bs18 w-full">
              <div className="bg-white-A700 border border-gray-900_7f border-solid flex flex-col h-[41px] items-center justify-end mb-[26px] md:ml-[0] ml-[845px] md:mt-0 mt-[17px] p-[7px] rounded-[20px] w-[41px]">
                <div className="bg-white-A700 flex flex-col h-[25px] items-center justify-start rounded-[5px] w-[25px]">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mb-3 mr-10 p-2.5 w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_profilepic2.png"
                  alt="profilepicTwo"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtProximaSoftSemiBold20"
                  >
                    Antonio
                  </Text>
                  <Img
                    className="h-1.5 w-2"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-[10px] 
            items-center justify-end mt-[45px] w-full pr-12">
              <Input
                name="group152"
                placeholder="Search"
                className="font-medium p-0 placeholder:text-blue_gray-700 text-[17.05px] text-left w-full"
                wrapClassName="border border-gray-900_1e border-solid flex rounded-[21px] w-[25%] sm:w-full"
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
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[125px] rounded-[20px]"
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
                <div className="font-medium text-[19.13px] text-left">
                  Filter
                </div>
              </Button>
            </div>
            <Text
              className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-full pl-8 mb-5"
              size="txtProximaSoftSemiBold40Black90001"
            >
              Mentors
            </Text>
            <div className="w-[96%] sm:w-full overflow-auto">
              <table className="table-auto bg-white-A700 font-poppins 
                rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                <thead>
                  <tr
                  style={{borderBottom:"2px solid #BA35351A"}}>
                    <th className="px-5"></th>
                    <th className="p-3 px-9">Name</th>
                    <th className="p-3 px-9">Email</th>
                    <th className="p-3 px-9">Status</th>
                    <th className="p-3 px-9">Expertise</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                  <tr className="overflow-hidden">
                    <td className="p-3 px-5 sm:p-0">
                    <Img
                          className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12 sm:ml-[15px]"
                          src="images/img_unsplashzqv4fcmzkuq.png"
                          alt="unsplashzqv4fcm"
                        />
                    </td>
                    <td className="text-center">Bisa</td>
                    <td className="text-center">bisa@gmail.com</td>
                    <td className="text-center">Verified</td>
                    <td className="text-center">Ui Design</td>
                    <td className="text-base text-purple-700 underline sm:p-[13px] sm:px-[18px]">
                      View Details
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <Text
                className="ml-2 md:ml-[0] mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 w-full
                pl-8 mb-5"
                size="txtProximaSoftSemiBold40Black90001"
              >
                Mentees
              </Text>
              <div className="w-[96%] sm:w-full overflow-auto">
                <table className="table-auto bg-white-A700 font-poppins 
                  rounded-[24px] shadow-bs19 w-full p-5 sm:w-full overflow-hidden">
                  <thead>
                    <tr
                    style={{borderBottom:"1px solid #BA35351A"}}>
                      <th className="px-5"></th>
                      <th className="p-3 px-9">Name</th>
                      <th className="p-3 px-9">Email</th>
                      <th className="p-3 px-9">Status</th>
                      <th className="p-3 px-9">Expertise</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    <tr className="overflow-hidden">
                      <td className="p-3 px-5 sm:p-0 ">
                      <Img
                            className="h-12 md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-12 sm:ml-[15px]"
                            src="images/img_unsplashzqv4fcmzkuq.png"
                            alt="unsplashzqv4fcm"
                          />
                      </td>
                      <td  className="text-center">Bisa</td>
                      <td  className="text-center">bisa@gmail.com</td>
                      <td  className="text-center">Verified</td>
                      <td  className="text-center">Ui Design</td>
                      <td className="text-base text-purple-700 underline sm:p-[13px] sm:px-[18px]">
                        View Details
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default UserManagementPage;
