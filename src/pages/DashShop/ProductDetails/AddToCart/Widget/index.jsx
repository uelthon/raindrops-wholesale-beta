import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import useCartStore from '../../../../../stores/cartStore'

const Widget = ({ product }) => {
  const [quantity, setQuantity] = useState(0)
  const [variant, setVariant] = useState(0)
  const { mutateCart } = useCartStore()

  const handleClick = () => {
    if (quantity <= 0) return
    const item = {
      idVariantProduct: Number(product?.variantsList[variant]?.id),
      idProduct: product?.id,
      name: product?.name,
      image: product?.images?.url[0],
      price: Number(product?.variantsList[variant]?.wholesalePrice),
      quantity
    }
    mutateCart(item)
  }

  return (
    <div className='flex flex-col justify-start gap-2'>
      <div className='flex items-center justify-center flex-wrap gap-4 md:justify-between'>
        <div className='flex flex-col justify-start gap-1'>
          <p className='text-sm text-gray-400 font-bold'>UPC: {product?.upc}</p>
          <div className='flex items-center gap-4'>
            <img className='w-16 h-16 object-contain' src={product?.images?.url[0]} />
            <select
              defaultValue={variant}
              className='select select-bordered w-auto'
              onChange={(e) => setVariant(e.target.value)}
            >
              {product?.variantsList.map((v, i) =>
                <option key={v.id} value={i}>{v.name}</option>
              )}
            </select>
          </div>
        </div>
        <div className='flex flex-col justify-start items-center gap-1'>
          <p className='text-sm text-[#6c55a4] font-bold'>QUANTITY</p>
          <div className='flex items-center gap-4'>
            <button
              className='btn btn-primary bg-drops text-white text-xl border-none' onClick={() => {
                if (quantity === 0) return
                setQuantity(quantity - 1)
              }}
            >
              <AiOutlineMinus />
            </button>
            <div className='text-lg text-[#6c55a4] font-bold'>{quantity}</div>
            <button className='btn btn-primary bg-[#6c55a4] text-white text-xl border-none' onClick={() => setQuantity(quantity + 1)}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-4 md:justify-between'>
        <p className='text-base text-gray-600 font-bold'>Your Wholesale price $ {product?.variantsList[variant]?.wholesalePrice}</p>
        <p className='text-base text-gray-600 font-bold'>Total $ {Number(product?.variantsList[variant]?.wholesalePrice) * quantity}</p>
      </div>
      <button
        className='btn btn-warning text-sm font-bold text-purple-drops w-full md:w-[50%]'
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Widget
