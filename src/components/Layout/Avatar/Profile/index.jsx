import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import useGetUser from '../../../../hooks/useGetUser'

const Profile = () => {
  const { data, loading } = useGetUser()

  const handleClick = () => {
    window.localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className='flex items-center gap-4 text-purple-drops'>
      <div className='rounded-full p-2 shadow-sm bg-white'>
        <IoMdNotificationsOutline className='text-2xl' />
      </div>
      <div className='dropdown dropdown-end cursor-pointer'>
        <div tabIndex={0} className='flex items-center gap-4 px-6 h-12 bg-white rounded-2xl shadow-sm'>
          <div className='avatar'>
            {
              data && !loading
                ? <FaUserCircle className='text-3xl' />
                : null
            }
            {/* {data &&
              <div className='w-8 rounded-full'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>} */}
            {
                loading &&
                  <div className='w-8 h-8 rounded-full animate-pulse bg-gray-400' />
              }
          </div>
          {(data && !loading) && <p className='hidden text-sm font-bold md:block'>{data.firstName} {data.lastName}</p>}
          {loading && <p className='hidden w-24 h-5 text-sm font-bold animate-pulse bg-gray-400 rounded-full md:block' />}
        </div>
        <ul tabIndex={0} className='menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-40'>
          <li
            className='cursor-pointer'
            onClick={handleClick}
          >
            <a className='text-red-700'>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
