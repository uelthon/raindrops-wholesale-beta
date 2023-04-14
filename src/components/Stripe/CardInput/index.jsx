import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d'
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
}

const CardInput = () => {
  return (
    <div className='p-4 rounded-md shadow-sm border-[1px] border-solid border-[#e6e6e6]'>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </div>
  )
}

export default CardInput
