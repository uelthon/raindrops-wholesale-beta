import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './Navbar'
import styles from './Layout.module.css'
import Avatar from './Avatar'
import Cart from '../Cart'
import LoadingPay from './LoadingPay'
import SuccessPay from './SuccessPay'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Avatar />
          <div>
            {children}
          </div>
        </div>
      </main>
      <Cart />
      <LoadingPay />
      <SuccessPay />
      <ToastContainer />
    </div>
  )
}

export default Layout
