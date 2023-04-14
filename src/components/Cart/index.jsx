import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Sidebar from './Sidebar'
import useCartStore from '../../stores/cartStore'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { subTotal, shipping, total } = useCartStore()
  const [show, setShow] = useState(false)
  return (
    <Sidebar show={show} setShow={setShow}>
      <div className='relative h-full flex flex-col justify-start gap-6'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-medium'>
            Shopping cart
          </p>
          <div className='cursor-pointer' onClick={() => setShow(false)}>
            <AiOutlineClose className='text-2xl text-error' />
          </div>
        </div>
        <CartItems />
        <div className='flex flex-col justify-start w-full gap-2 absolute bottom-0 left-0 font-medium'>
          <div className='divider m-0' />
          <div className='flex items-center justify-between'>
            <p>Sub Total</p>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Shipping rates</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className='text-center'>FREE Delivery on Orders Over $1.000</p>
          <Link
            className='btn btn-primary'
            to='/payment'
            onClick={() => setShow(false)}
          >
            GO TO CHECKOUT
          </Link>
        </div>
      </div>
    </Sidebar>
  )
}

export default Cart
