import React from 'react'
import { BsHeadset } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full bg-yellow-400 flex justify-center items-center p-8'>
      <div className='flex items-center gap-1'>
        <BsHeadset />
        <p>SUPPORT</p>
      </div>
    </div>
  )
}

export default Footer
