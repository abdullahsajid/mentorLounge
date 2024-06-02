import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar, Pro } from "react-pro-sidebar";
import { Img, Text } from "components";
import Cookies from "universal-cookie";
import { useLogoutUserMutation } from "features/apis/user";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const cookie = new Cookies()

const Sidebar1 = (props) => {
  const navigation = useNavigate()
  const { user } = useSelector((state) => state.user)
  const [logoutUser] = useLogoutUserMutation()

  const handlerLogout = async () => {
    const { data } = await logoutUser()
    if (data.status === 'Success') {
      localStorage.removeItem("loungeUser")
      cookie.remove('loungeToken')
      navigation('/')
      toast.success(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
    } else {
      console.log(data)
      toast.error(`${data.message}`, {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
    }
  }

  const sideBarMenu = [
    {
      icon: (
        <i className="fa-solid fa-house"></i>
      ),
      label: "Home",
      href: `${((user?.role === 'mentor') || (user?.data?.role === 'mentor')) ? '/mentor' : 'mentee'}`
    },
    {
      icon: (
        <i className="fa-solid fa-magnifying-glass"></i>
      ),
      label: "Search",
      href: `${((user?.role === 'mentor') || (user?.data?.role === 'mentor')) ? '/mtrsearch' : '/search'}`
    },
    {
      icon: (
        <i className="fa-solid fa-folder"></i>
      ),
      label: "Sessions",
      href: `${(user?.role === 'mentor') || (user?.data?.role === 'mentor') ? '/mtrsession' : 'session'}`
    },
    {
      icon: (
        <i className="fa-solid fa-gear"></i>
      ),
      label: "Settings",
      href: `${(user?.role === 'mentor') || (user?.data?.role === 'mentor') ? 'mtrsettings' : '/settings'}`,
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex items-center justify-center w-full">
          <Img
            className="h-[173px] flex items-center justify-center md:h-auto mt-[25px] object-cover"
            src="images/img_whatsappimage20231114.png"
            alt="whatsappimageTwenty"
          />
        </div>
        {sideBarMenu?.map((menu, i) => (
          <Link to={`${menu.href}`} key={`sideBarMenuItem${i}`} className="p-[21px] pl-[41px] text-[#535353] text-[20px] flex gap-[22px] items-center mt-[10px] cursor-pointer" {...menu}>
            {menu.icon} {menu.label}
          </Link>
        ))}
        <div className="p-[21px] pl-[41px] text-[#535353] text-[20px] flex gap-[22px] items-center mt-[10px] cursor-pointer"
          onClick={handlerLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
