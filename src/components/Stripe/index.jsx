import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Checkout from './Checkout'
import { stripeKey } from '../../services/config'

const stripePromise = loadStripe(stripeKey)

const Stripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}

export default Stripe
