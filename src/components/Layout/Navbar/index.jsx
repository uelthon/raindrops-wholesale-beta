import React, { useState } from 'react'

import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { CgMenuRound } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import logo from '../../../assets/site-logo.png'
import styles from './Navbar.module.css'
import Links from './Links'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleClickLink = () => setShow(false)

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <IoChevronBackCircleOutline
            className={`text-purple-900 cursor-pointer hover:animate-pulse ${styles.back}`}
          />
          <img src={logo} />
          <CgMenuRound
            className={`text-purple-900 cursor-pointer hover:animate-pulse ${styles.menu}`}
            onClick={() => setShow(true)}
          />
        </div>
        <nav className={`${styles.nav} ${show && styles.show}`}>
          <div
            className={styles.close}
            onClick={() => setShow(false)}
          >
            <AiOutlineCloseCircle
              className='text-white cursor-pointer hover:animate-pulse'
            />
          </div>
          <Links handleClickLink={handleClickLink} />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
