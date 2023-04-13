import React from 'react'

import Navbar from './Navbar'
import styles from './Layout.module.css'
import Avatar from './Avatar'
import Cart from '../Cart'

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
    </div>
  )
}

export default Layout
