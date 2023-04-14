import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCartStore from '../../../stores/cartStore'

const Sidebar = ({ children, show, setShow }) => {
  const { cart } = useCartStore()
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)

  const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <>
      <div className='indicator'>
        <button
          className='btn btn-circle btn-lg bg-[#55a46c] border-none hover:bg-primary fixed bottom-12 right-12 shadow-xl'
          onClick={handleOpen}
        >
          <span className='indicator-item badge badge-secondary badge-lg shadow-xl'>{totalQuantity}
          </span>
          <AiOutlineShoppingCart className='text-3xl' />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 w-full ${show ? 'flex' : 'hidden'} justify-end z-[500] bg-black bg-opacity-50 h-screen`}
        onClick={handleClose}
      >
        <div
          className='h-full w-full md:w-screen md:max-w-md bg-white p-4 shadow-md'
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Sidebar
