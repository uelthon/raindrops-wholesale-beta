import React from 'react'
import styles from './Loader.module.css'

const Loader = ({ height = '50vh' }) => {
  return (
    <div
      className='w-full flex justify-center items-center'
      style={{ height }}
    >
      <span className={styles.loader} />
    </div>
  )
}

export default Loader
