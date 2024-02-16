import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar3 = (props) => {
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
      <Sidebar className={props.className}>
        <Img
          className="h-[173px] md:h-auto md:ml-[0] ml-[66px] mr-[83px] mt-[5px] object-cover w-[53%]"
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
              fontFamily: "Poppins",
              [`&:hover, &.ps-active`]: { fontWeight: "400 !important" },
            },
          }}
          renderExpandIcon={() => (
            <Img
              className="h-1.5 mt-[15px] w-2"
              src="images/img_arrowdown.svg"
              alt="arrowdown_One"
            />
          )}
          className="flex flex-col items-center justify-start mb-[503px] pt-0.5 w-full"
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
    </>
  );
};

Sidebar3.defaultProps = {};

export default Sidebar3;
