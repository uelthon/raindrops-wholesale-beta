import React from 'react'
import Route from './Route'
import Profile from './Profile'

const Avatar = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <Route />
        <Profile />
      </div>
    </div>
  )
}

export default Avatar
