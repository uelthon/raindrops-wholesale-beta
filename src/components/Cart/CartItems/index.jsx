import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCartStore from '../../../stores/cartStore'
import CartItem from '../../CartItem'

const CartItems = () => {
  const { cart } = useCartStore()
  return (
    <>
      {(Array.isArray(cart) && cart.length > 0) &&
        <div className='flex flex-col justify-start gap-2 overflow-auto mb-52 pb-4 md:pr-2'>
          {cart.map((item, i) =>
            <div key={item.idVariantProduct} className={`${i < cart.length - 1 && 'border-b-[1px] border-b-[#e8e9ea] border-solid'} pb-2`}>
              <CartItem
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                idProduct={item.idProduct}
                idVariantProduct={item.idVariantProduct}
                type={item.type}
              />
            </div>
          )}
        </div>}
      {(Array.isArray(cart) && cart.length === 0) && (
        <div className='text-center w-full flex flex-col justify-start items-center gap-4'>
          <p className='text-2xl font-medium'>Your cart is empty</p>
          <div className='p-8 rounded-full bg-gray-400'>
            <AiOutlineShoppingCart className='text-2xl text-white' />
          </div>
          <p className='text-base'>The sweets in your cart will be displayed here</p>
        </div>
      )}
    </>
  )
}

export default CartItems
