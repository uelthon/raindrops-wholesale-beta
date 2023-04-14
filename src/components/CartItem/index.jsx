import React from 'react'
import useCartStore from '../../stores/cartStore'

const CartItem = ({
  name,
  price,
  quantity,
  image,
  idVariantProduct,
  idProduct,
  type,
  actions = true
}) => {
  const { removeProduct, updateProduct } = useCartStore()

  const handleClick = {
    remove: () => removeProduct(idVariantProduct),
    addOne: () => updateProduct(idVariantProduct, Number(quantity) + 1),
    removeOne: () => {
      if (quantity <= 1) return
      updateProduct(idVariantProduct, Number(quantity) - 1)
    }
  }

  return (
    <div className='flex flex-col justify-start gap-1 w-full'>
      <div className='flex gap-4'>
        <div className='w-24 h-24 border-solid border-[1px] border-gray-400 rounded-md flex-shrink-0'>
          <img src={image} className='w-full h-full object-contain' />
        </div>
        <div className='flex flex-col justify-between w-full'>
          <div className='flex justify-between items-center w-full text-sm font-semibold text-gray-900'>
            <p>{name}</p>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className='text-sm font-normal text-gray-400 capitalize flex justify-between items-center'>
            <p>{type}</p>
            <p className='text-sm font-semibold text-gray-900'>Total: ${(quantity * price).toFixed(2)}</p>
          </div>
          {actions &&
            <div className='flex justify-between items-center gap-4 w-full'>
              <div className='flex gap-4 items-center'>
                <div
                  className='text-lg text-gray-600 font-bold cursor-pointer'
                  onClick={handleClick.removeOne}
                >
                  -
                </div>
                <div className='border-solid border-[1px] border-gray-400 font-light rounded-sm px-2 py-1'>
                  {quantity}
                </div>
                <div
                  className='text-lg text-gray-600 font-bold cursor-pointer'
                  onClick={handleClick.addOne}
                >
                  +
                </div>
              </div>
              <button
                className='text-sm font-semibold text-blue-700 capitalize p-0'
                onClick={handleClick.remove}
              >
                Remove
              </button>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default CartItem
