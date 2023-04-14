import React from 'react'
import Stripe from '../../components/Stripe'

const Payment = () => {
  return (
    <div className='p-8 rounded-md bg-white shadow-sm'>
      <Stripe />
    </div>
  )
}

export default Payment
