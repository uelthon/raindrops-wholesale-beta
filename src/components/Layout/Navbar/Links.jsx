import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsGraphUp } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineLock } from 'react-icons/ai'

import styles from './Navbar.module.css'

const links = [
  {
    name: 'WHOLESALE SHOP',
    path: '/dashboard-shop',
    icon: <AiOutlineShoppingCart />,
    default: true
  },
  {
    name: 'ACCOUNT PROFILE',
    path: '/dashboard-profile',
    icon: <HiOutlineUserCircle />,
    default: false
  },
  {
    name: 'CHANGE PASSWORD',
    path: '/dashboard-password',
    icon: <AiOutlineLock />,
    default: false
  },
  {
    name: 'SALES HISTORY',
    path: '/dashboard-orders',
    icon: <BsGraphUp />,
    default: false
  }
]

const Links = ({ handleClickLink }) => {
  const router = useLocation()

  return (
    <>
      {links.map(link =>
        <Link
          key={link.name}
          className={`${styles.link} ${router.pathname === link.path ? styles.active : ''}`}
          to={link.path}
          onClick={handleClickLink}
        >
          {link.icon}
          {link.name}
        </Link>
      )}
    </>
  )
}

export default Links
