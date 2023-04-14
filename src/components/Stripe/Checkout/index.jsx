import React, { useState } from 'react'
import { useStripe, useElements, CardElement, AddressElement } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import CardInput from '../CardInput'
import AddressForm from '../AddressForm'
import useUserStore from '../../../stores/userStore'
import useCartStore from '../../../stores/cartStore'
import { api } from '../../../services/api'
import useCreateOrder from '../../../hooks/useCreateOrder'
import { useNavigate } from 'react-router-dom'
import useLayoutStore from '../../../stores/layoutStore'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const { value } = useUserStore()
  const { total, cart, shipping, subTotal } = useCartStore()
  const { mutate } = useCreateOrder()
  const { setLayout } = useLayoutStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addressElement = elements.getElement(AddressElement)
    const { complete, value: address } = await addressElement.getValue()
    console.log(complete, address)
    if (total === 0 || cart.length === 0) {
      return
    }
    if (elements == null || !stripe || !complete) {
      return
    }
    setLoading(true)
    setLayout('loadingPay', true)
    console.log(address)

    try {
      const clientSecret = await api.payment.paymentIntent({
        amount: total * 100
      })
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${address.firstName} ${address.lastName}`,
            address: {
              city: address.address.city,
              country: address.address.country,
              line1: address.address.line1,
              line2: address.address.line2,
              postal_code: address.address.postal_code,
              state: address.address.state
            },
            email: value.email,
            phone: address.phone
          }
        }
      })
      if (result?.error) {
        setLoading(false)
        setLayout('loadingPay', false)
        toast.error(result.error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        return console.log(result?.error)
      }
      console.log(result)
      mutate({
        address,
        cart,
        payId: result.paymentIntent.id,
        shipping,
        total,
        subTotal,
        type: 2,
        userEmail: value.email,
        userId: value.id
      }, {
        onSuccess: (data) => {
          toast.success('Successful payment', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
          console.log(data.data.orderNumber)
          setLayout('orderNumber', data.data.orderNumber)
          setLayout('loadingPay', false)
          setLayout('successPay', true)
          navigate('/dashboard-shop')
          console.log(data)
        },
        onError: (error) => {
          console.log(error)
          setLayout('loadingPay', false)
        }
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-start gap-4 w-full'>
        <AddressForm />
        <CardInput />
        <button
          className='btn btn-primary'
          disabled={!stripe || !elements || loading || total === 0 || cart.length === 0}
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  )
}

export default Checkout
