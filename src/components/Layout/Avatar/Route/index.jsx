import React from 'react'
import { AiOutlineShoppingCart, AiOutlineLock, AiOutlineCreditCard } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsGraphUp } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

const links = {
  '/dashboard-shop': {
    name: 'WHOLESALE SHOP',
    path: '/dashboard-shop',
    icon: <AiOutlineShoppingCart className='text-2xl' />,
    default: true
  },
  '/dashboard-profile': {
    name: 'ACCOUNT PROFILE',
    path: '/dashboard-profile',
    icon: <HiOutlineUserCircle className='text-2xl' />,
    default: false
  },
  '/dashboard-password': {
    name: 'CHANGE PASSWORD',
    path: '/dashboard-password',
    icon: <AiOutlineLock className='text-2xl' />,
    default: false
  },
  '/dashboard-orders': {
    name: 'SALES HISTORY',
    path: '/dashboard-orders',
    icon: <BsGraphUp className='text-2xl' />,
    default: false
  },
  '/payment': {
    name: 'PAYMENT',
    path: '/payment',
    icon: <AiOutlineCreditCard className='text-2xl' />,
    default: false
  }
}

const Route = () => {
  const router = useLocation()
  return (
    <div className='flex items-center gap-4 px-4 bg-white rounded-2xl shadow-sm text-purple-drops h-12'>
      {links[router.pathname]?.icon}
      <p className='text-md font-bold md:block'>
        {links[router.pathname]?.name}
      </p>
    </div>
  )
}

export default Route
