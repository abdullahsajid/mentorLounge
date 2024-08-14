import React,{useState} from 'react'
import Sidebar1 from '../src/components/Sidebar1'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [toggleSideBar, setToggleSidebar] = useState(false)
  return (
    <div>
       <Sidebar1 className={`!fixed !w-[316px] bg-white-A700 flex font-poppins inset-y-[0] justify-start left-[0]
          my-auto overflow-auto md:px-5 shadow-2xl top-[0] !transition-all sm:hidden md:hidden ${toggleSideBar && "!flex z-[999]"}`} />
        <Outlet/>
    </div>
  )
}

export default Layout
