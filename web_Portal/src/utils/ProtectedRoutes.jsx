import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookie = new Cookies()

const ProtectedRoutes = ({ userRole }) => {
    let token = cookie.get('loungeToken')
    const { user } = useSelector((state) => state.user)
    let isValidRole = userRole?.find((r) => user?.role?.includes(r))
    let isValidLogin = userRole?.find((r) => user?.data?.role?.includes(r))
    // console.log(isValidRole)
    // console.log(isValidLogin)
    return (
        (token && ((isValidRole === user?.role) || (isValidLogin === user?.data?.role))) ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoutes
