import React from 'react'
import Stripe from '../../components/Stripe'

const Payment = () => {
  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='p-8 rounded-md bg-white shadow-sm w-full 2xl:w-1/2 lg:w-3/5'>
        <Stripe />
      </div>
    </div>
  )
}

export default Payment
