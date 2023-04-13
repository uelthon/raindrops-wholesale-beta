import React from 'react'
import Widget from './Widget'

const AddToCart = ({ product }) => {
  return (
    <div className='flex flex-col justify-start gap-4'>
      <div className='flex flex-col justify-start gap-1'>
        <p className='text-lg text-purple-drops font-bold'>{product?.name}</p>
        <p className='text-sm text-gray-600'>{product?.description}</p>
        <p className='text-sm text-gray-400 font-bold'>Retail Price <span className='line-through'>$ {product.retailPrc}</span></p>
      </div>
      <div className='divider my-0' />
      <Widget product={product} />
      <div className='divider my-0' />
    </div>
  )
}

export default AddToCart
