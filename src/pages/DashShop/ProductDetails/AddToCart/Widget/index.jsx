import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { toast } from 'react-toastify'
import ImageViewer from '../../../../../components/ImageViewer'
import useCartStore from '../../../../../stores/cartStore'
import assets from '../../../../../assets/index'

const Widget = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(0)
  const { mutateCart } = useCartStore()

  const handleClick = () => {
    if (product.inStock <= 0) {
      return toast.error('Sold Out', {
        autoClose: 2000
      })
    }
    if (quantity <= 0) return
    const item = {
      idVariantProduct: Number(product?.variantsList[variant]?.id),
      idProduct: product?.id,
      name: product?.name,
      image: product?.variantsList[variant]?.images?.url ? product?.variantsList[variant]?.images?.url : product?.images?.url[0],
      price: Number(product?.variantsList[variant]?.wholesalePrice),
      type: product?.variantsList[variant]?.name,
      quantity
    }
    mutateCart(item)
    toast.success('Added to Cart', {
      autoClose: 1000
    })
  }

  const image = product?.variantsList[variant]?.images?.url ? product?.variantsList[variant]?.images?.url : product?.variantsList[variant]?.name === 'CASE' ? assets.defaultCase : product?.images?.url[0]

  return (
    <div className='flex flex-col justify-start gap-2'>
      <div className='flex items-center justify-center flex-wrap gap-4 md:justify-between'>
        <div className='flex flex-col justify-start gap-1'>
          <p className='text-sm text-gray-400 font-bold'>UPC: {product?.upc}</p>
          <div className='flex items-center gap-4'>
            <ImageViewer
              className='w-16 h-16 object-contain'
              src={image}
            />
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
                if (quantity <= 1) return
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
        <p className='text-base text-gray-600 font-bold'>Your Wholesale price $ {product?.variantsList[variant]?.wholesalePrice.toFixed(2)}</p>
        <p className='text-base text-gray-600 font-bold'>Total $ {(Number(product?.variantsList[variant]?.wholesalePrice) * quantity).toFixed(2)}</p>
      </div>
      <button
        className={`btn ${product.inStock <= 0 ? 'btn-disabled' : 'btn-warning'} text-sm font-bold text-purple-drops w-full md:w-[50%]`}
        onClick={handleClick}
      >
        {product.inStock <= 0 ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default Widget
