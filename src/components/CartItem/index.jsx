import React from 'react'
import useCartStore from '../../stores/cartStore'

const CartItem = ({ name, price, quantity, image, idVariantProduct, idProduct }) => {
  const { removeProduct, updateProduct } = useCartStore()

  const handleClick = {
    remove: () => removeProduct(idVariantProduct),
    addOne: () => updateProduct(idVariantProduct, Number(quantity) + 1),
    removeOne: () => updateProduct(idVariantProduct, Number(quantity) - 1)
  }

  return (
    <div className='flex flex-col justify-start gap-1 w-full'>
      <div className='flex gap-1'>
        <div>
          <img src={image} className='w-16 h-auto object-contain' />
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex justify-between items-center w-full text-base font-medium'>
            <p>{name}</p>
            <p>${price}</p>
          </div>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Quantity: {quantity}</p>
            <p>Total: ${quantity * price}</p>
          </div>
          <div className='flex justify-between gap-4 w-full'>
            <button
              className='btn btn-sm btn-error hover:btn-secondary text-white'
              onClick={handleClick.remove}
            >
              x
            </button>
            <div className='form-control w-full'>
              <label className='input-group'>
                <span
                  className={`btn ${quantity <= 1 ? 'btn-disabled' : 'bg-drops'}  border-none hover:btn-primary btn-sm`}
                  onClick={handleClick.removeOne}
                >
                  -
                </span>
                <input
                  type='text'
                  value={quantity}
                  className='input input-bordered input-sm input-disabled text-center w-full'
                />
                <span
                  className='btn bg-drops border-none hover:btn-primary btn-sm'
                  onClick={handleClick.addOne}
                >
                  +
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
