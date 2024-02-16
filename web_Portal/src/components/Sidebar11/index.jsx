import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar11 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_vector.svg"
          alt="vector"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_rewind.svg"
          alt="rewind"
        />
      ),
      label: "Search",
    },
    {
      icon: (
        <Img
          className="h-[29px] w-[29px]"
          src="images/img_thumbsup_purple_700.svg"
          alt="thumbsup"
        />
      ),
      label: "Sessions",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_search.svg"
          alt="search_One"
        />
      ),
      label: "Settings",
      href: "/settingsone",
      active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-[173px] md:h-auto md:ml-[0] ml-[70px] mr-[79px] mt-[25px] object-cover w-[53%]"
          src="images/img_whatsappimage20231114.png"
          alt="whatsappimageTwenty"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: "23px 23px 23px 42px",
              gap: "25px",
              marginTop: "10px",
              color: "#535353",
              fontSize: "20px",
              fontFamily: "Poppins",
              [`&:hover, &.ps-active`]: {
                color: "#743c95",
                fontWeight: "500 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[505px] mt-[31px] w-full"
        >
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

Sidebar11.defaultProps = {};

export default Sidebar11;
