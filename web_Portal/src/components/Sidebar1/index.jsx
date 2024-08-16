import React,{useState} from "react";
import { Sidebar } from "react-pro-sidebar";
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
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  console.log(isSubMenuOpen)
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
      toast.error(`try again!`, {
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

  const sideBarAdmin = [
    {
      id:0,
      icon: (
        <Img
          className="h-6 mt-[3px] w-6"
          src="images/img_grid.svg"
          alt="grid"
        />
      ),
      label: (
        <div style={{display:'flex',alignItems:'center',gap:"10px"}}>
            Management
            <i class="fa-solid fa-angle-down" style={{fontSize:'15px'}}></i>
        </div>
      ),
      href: "#",
      onClick: () => setIsSubMenuOpen(!isSubMenuOpen),
      subMenu: [
        {
          id:5,
          label: "User Management",
          href: "/usermanagement",
          onClick: () => handleMenuClick(5)
        },
        {
          id:6,
          label: "Mentor Management",
          href: "/mentormanagement",
          onClick: () => handleMenuClick(6)
        },
        {
          id:7,
          label: "Session Management",
          href: "/sessionmanagement",
          onClick: () => handleMenuClick(7)
        },
        {
          id:8,
          label: "Content Management",
          href: "/contentmanagement",
          onClick: () => handleMenuClick(8)
        },
      ],
    },
    {
      id:1,
      icon: (
        <Img
          className="h-[27px] mt-1.5 w-[27px]"
          src="images/img_outlinemoney.svg"
          alt="outlinemoney"
        />
      ),
      label: "Finance",
      href: "/finance",
      onClick: () => handleMenuClick(1)
    },
    {
      id:2,
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_blue_gray_300.svg"
          alt="checkmark"
        />
      ),
      label: "Analytics",
      href: "/analyticsandreporting",
      onClick: () => handleMenuClick(2)
    },
    {
      id:3,
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_vector_blue_gray_300.svg"
          alt="vector"
        />
      ),
      label: "Customer Services",
      href: "/customerservice",
      onClick: () => handleMenuClick(3)
    },
    {
      id:4,
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_search_blue_gray_300.svg"
          alt="search"
        />
      ),
      label: "Settings",
      href: "/adminsettings/adminprofile",
      onClick: () => handleMenuClick(4)
    },
  ];

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };


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
        {(user?.role === 'superadmin' || user?.data?.role === 'superadmin') ? 
          sideBarAdmin?.map((menu, i) => (
            <div key={`sideBarMenuItem${i}`}>
              <Link
                to={menu.href}
                className={`p-[21px] pl-[41px] text-[20px] flex gap-[22px] items-center mt-[10px] cursor-pointer ${activeMenu === i ? 'text-purple-700 font-semibold' : 'text-[#535353]'}`}
                onClick={menu.onClick}
              >
                {menu.icon} {menu.label}
              </Link>
              {isSubMenuOpen  && menu.subMenu && (
                <div className="pl-[41px] ml-4 border-gray-300">
                  {menu.subMenu.map((subMenu, j) => (
                    <Link
                      key={`subMenuItem${j}`}
                      to={subMenu.href}
                      className={`p-[10px] text-[16px] flex gap-[22px] items-center mt-[5px] cursor-pointer ${activeMenu === subMenu.id ? 'text-purple-700 font-semibold' : 'text-[#535353]'}`}
                      onClick={subMenu.onClick}
                    >
                      {subMenu.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))
         : 
          sideBarMenu?.map((menu, i) => (
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
