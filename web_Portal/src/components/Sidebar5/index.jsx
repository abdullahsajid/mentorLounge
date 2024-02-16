import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar5 = (props) => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[27px] w-[27px]"
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
          src="images/img_search_purple_700_24x24.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[173px] md:h-auto md:ml-[0] ml-[65px] mr-[84px] object-cover w-[53%]"
          src="images/img_whatsappimage20231114.png"
          alt="whatsappimageTwenty"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px 14px 14px 46px",
              gap: "11px",
              color: "#4c535f",
              fontSize: "18px",
              fontFamily: "Poppins",
              [`&:hover, &.ps-active`]: {
                color: "#743c95",
                fontWeight: "600 !important",
              },
            },
          }}
          renderExpandIcon={() => (
            <Img
              className="h-1.5 mt-3 w-2"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          )}
          className="flex flex-col items-center justify-start mb-[637px] mt-9 pt-0.5 w-full"
        >
          <SubMenu
            icon={
              <Img
                className="h-6 w-6"
                src="images/img_grid_blue_gray_300.svg"
                alt="grid"
              />
            }
            label={<Text className="mb-[5px] mt-0.5">Management</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
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

Sidebar5.defaultProps = {};

export default Sidebar5;
