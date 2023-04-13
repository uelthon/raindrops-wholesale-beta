import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Sidebar from './Sidebar'
import useCartStore from '../../stores/cartStore'
import CartItems from './CartItems'

const Cart = () => {
  const { subTotal, shipping, total } = useCartStore()
  const [show, setShow] = useState(false)
  return (
    <Sidebar show={show} setShow={setShow}>
      <div className='relative h-full flex flex-col justify-start gap-2'>
        <div className='flex items-center gap-1 text-sm font-bold cursor-pointer text-error' onClick={() => setShow(false)}>
          <AiOutlineClose className='text-xl' /> <span>Close</span>
        </div>
        <p className='text-2xl font-bold text-center text-[#707070]'>Cart</p>
        <CartItems />
        <div className='flex flex-col justify-start w-full gap-2 absolute bottom-0 left-0'>
          <div className='divider' />
          <div className='flex items-center justify-between'>
            <p className='text-xl font-bold'>Sub Total</p>
            <p className='text-xl font-bold'>${subTotal}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-bold'>Shipping rates</p>
            <p className='text-xl font-bold'>${shipping}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-bold'>Total</p>
            <p className='text-xl font-bold'>${total}</p>
          </div>
          <p className='text-center font-bold'>FREE Delivery on Orders Over $1.000</p>
          <button className='btn btn-secondary'>GO TO CHECKOUT</button>
        </div>
      </div>
    </Sidebar>
  )
}

export default Cart
