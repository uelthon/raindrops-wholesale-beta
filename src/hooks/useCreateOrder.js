import { useState } from 'react'
import { api } from '../services/api'

const bodyConstructor = (props) => {
  const cart = props.cart.map(p => ({
    idVariantProduct: p.idVariantProduct,
    idProduct: p.idProduct,
    price: p.price,
    quantity: p.quantity
  }))
  return {
    idCustomerWholesale: props.userId,
    customer: {
      firstName: props.address.firstName,
      lastName: props.address.lastName,
      addressShipping: `${props.address.address.line1}, ${props.address.address.line2 !== null ? props.address.address.line2 : ''}`,
      email: props.userEmail,
      phone: props.address.phone,
      country: props.address.address.country,
      state: props.address.address.state,
      city: props.address.address.city,
      zipCode: props.address.address.postal_code
    },
    orderDetails: cart,
    transactionId: props.payId,
    subTotal: props.subTotal,
    shippingPrice: props.shipping,
    totalAmount: props.total,
    type: props.type
  }
}

const useCreateOrder = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const mutate = async ({
    address,
    userId,
    userEmail,
    cart,
    subTotal,
    shipping,
    total,
    payId,
    type
  },
  { onSuccess, onError }) => {
    setLoading(true)
    const body = bodyConstructor({
      address,
      userId,
      userEmail,
      cart,
      subTotal,
      shipping,
      total,
      payId,
      type
    })
    console.log(body)
    try {
      const data = await api.orders.createOrder(body)
      setLoading(false)
      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error) {
      console.log(error)
      setError('Error')
      setLoading(false)
      if (onError) {
        onError(error)
      }
    }
  }

  return {
    loading,
    error,
    mutate
  }
}

export default useCreateOrder
