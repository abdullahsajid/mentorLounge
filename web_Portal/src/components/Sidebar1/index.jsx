import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar, Pro } from "react-pro-sidebar";
import { Img, Text } from "components";
import Cookies from "universal-cookie";
import { useLogoutUserMutation } from "features/apis/user";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
const cookie = new Cookies()

const Sidebar1 = (props) => {
  const navigation = useNavigate()
  const {user} = useSelector((state) => state.user)
  const [logoutUser] = useLogoutUserMutation()
  const { collapseSidebar, collapsed } = useProSidebar();
  const [collapse, setCollapse] = useState(false)
  const [width, setWidth] = useState(null)
  const [display, setDisplay] = useState(false)
  const [toggleSideBar, setSideBar] = useState(false)
  const getSize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", getSize)
    if (width < 400) {
      setCollapse(true)
      // collapseSidebar(true)
      setDisplay(true)
      setSideBar(true)
    } else {
      setCollapse(false)
      // collapseSidebar(false)
      setDisplay(false)
      setSideBar(false)
    }
    return () => {
      window.removeEventListener("resize", getSize)
    }
  }, [window.innerWidth])

  const showSideBar = () => {
    setSideBar(!toggleSideBar)
    console.log("test")
  }

  const handlerLogout = async () => {
    const {data} = await logoutUser()
    if (data.status === 'Success'){
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
    }else{
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
        <i class="fa-solid fa-house"></i>
      ),
      label: "Home",
      href: `${((user?.role === 'mentor')||(user?.data?.role === 'mentor')) ? '/mentor' : 'mentee'}`
    },
    {
      icon: (
        <i class="fa-solid fa-magnifying-glass"></i>
      ),
      label: "Search",
      href: '/search'
    },
    {
      icon: (
        <i class="fa-solid fa-folder"></i>
      ),
      label: "Sessions",
      href: "/session"
    },
    {
      icon: (
        <i class="fa-solid fa-gear"></i>
      ),
      label: "Settings",
      href: "/settings",
      // active: window.location.pathname === "/settingsone",
    },
  ];

  return (
    <>
      <Sidebar
        // onClick={() => collapseSidebar(!collapsed)}
        collapsed={collapse}
        className={props.className}
        breakPoint={toggleSideBar ? 'sm' : ''}
      >
        <Img
          className="h-[173px] md:h-auto md:ml-[0] ml-[70px] mr-[79px] mt-[25px] object-cover w-[53%]"
          src="images/img_whatsappimage20231114.png"
          alt="whatsappimageTwenty"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: "21px 21px 21px 41px",
              gap: "22px",
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
          className="flex flex-col items-center justify-end mt-[30px] w-full"
        >
          {/* <MenuItem icon={<i class="fa-solid fa-bars"></i>}
          onClick={()=>{collapseSidebar()}}/> */}
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <div className="p-[21px] pl-[41px] text-[#535353] text-[20px] flex gap-[22px] items-center mt-[10px] cursor-pointer"
          onClick={handlerLogout}>
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </div>
      </Sidebar>
      {/* <div className={`hidden ${display ? "display": ""}`} onClick={showSideBar}>
        <i class="fa-solid fa-bars"></i>
      </div> */}
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
