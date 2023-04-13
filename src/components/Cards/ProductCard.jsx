import React from 'react'
import useShopStore from '../../stores/shopStore'

const ProductCard = ({ image, name, slug }) => {
  const { setShopStore, value } = useShopStore()

  const handleClick = () => {
    setShopStore({
      ...value,
      product: slug
    })
  }

  return (
    <div
      className='flex flex-col justify-start items-center p-1 cursor-pointer gap-4 md:gap-0'
      onClick={handleClick}
    >
      <img src={image} alt={name} className='h-[117px] object-contain' />
      <p className='text-xl text-purple-drops font-bold text-center md:text-xs'>{name}</p>
    </div>
  )
}

export default ProductCard
