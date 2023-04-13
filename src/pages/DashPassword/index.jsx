import React, { useState } from 'react'
import useUserStore from '../../stores/userStore'
import useChangePassword from '../../hooks/useChangePassword'

const DashPassword = () => {
  const [type, setType] = useState('password')
  const { value } = useUserStore()
  const { loading, mutate: changePassword } = useChangePassword()

  const handleChange = (e) => {
    if (type === 'password') {
      return setType('text')
    }
    setType('password')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { newPassword, repeatPassword } = e.target
    if (!newPassword?.value || !repeatPassword?.value) return
    if (newPassword.value !== repeatPassword.value) return
    changePassword({
      id: value.id,
      newPass: newPassword.value,
      token: value.token
    }, {
      onSuccess: () => {
        newPassword.value = ''
        repeatPassword.value = ''
      },
      onError: (error) => console.log(error)
    })
  }

  return (
    <div className='p-8 rounded-md bg-white shadow-sm'>
      <div>
        <p className='text-xl text-gray-700 font-bold'>CHANGE PASSWORD</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-4'>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>New Password</span>
            </label>
            <input
              type={type} placeholder='New Password'
              name='newPassword'
              className='input input-bordered w-full max-w-xs'
              required
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Repeat Password</span>
            </label>
            <input
              type={type} placeholder='Repeat Password'
              name='repeatPassword'
              className='input input-bordered w-full max-w-xs'
              required
            />
          </div>
        </div>
        <div className='form-control w-44'>
          <label className='cursor-pointer label'>
            <input type='checkbox' className='toggle toggle-primary' onChange={handleChange} />
            <span className='label-text'>Show Password</span>
          </label>
        </div>
        <button
          className='btn btn-secondary mt-4'
          type='submit'
          disabled={loading}
        >
          CHANGE PASSWORD
        </button>
      </form>
    </div>
  )
}

export default DashPassword
