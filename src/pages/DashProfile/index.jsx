import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import useGetUser from '../../hooks/useGetUser'
import useUserStore from '../../stores/userStore'
import useUpdateUser from '../../hooks/useUpdateUser'

const DashProfile = () => {
  const { value } = useUserStore()
  const { loading, mutate: updateUser } = useUpdateUser()
  const { reFetching } = useGetUser({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastname, phone, email } = e.target
    const roles = value.roles.map(r => ({ id: r.id }))
    const body = {
      id: value.id,
      firstName: name.value,
      lastName: lastname.value,
      phone: phone.value,
      email: email.value,
      roles
    }

    updateUser({
      id: value.id,
      body,
      token: value.token
    }, {
      onSuccess: () => reFetching(),
      onError: (error) => console.log(error)
    })
  }

  return (
    <div className='p-8 rounded-md bg-white shadow-sm'>
      <form onSubmit={handleSubmit}>
        <div>
          <p className='text-xl text-gray-700 font-bold'>WEB USER PROFILE</p>
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input
            type='text' placeholder='USER FIRST NAME'
            name='name'
            defaultValue={value?.firstName ? value?.firstName : ''}
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input
            type='text' placeholder='USER LAST NAME'
            name='lastname'
            defaultValue={value?.lastName ? value?.lastName : ''}
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='text' placeholder='EMAIL ADDRESS'
            name='email'
            defaultValue={value?.email ? value?.email : ''}
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Phone Number</span>
          </label>
          <input
            type='text' placeholder='PHONE NUMBER'
            name='phone'
            defaultValue={value?.phone ? value?.phone : ''}
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <button
          className='btn btn-secondary mt-4'
          type='submit'
          disabled={loading}
        >
          SAVE CHANGES <AiOutlineCheckCircle />
        </button>
      </form>
    </div>
  )
}

export default DashProfile
