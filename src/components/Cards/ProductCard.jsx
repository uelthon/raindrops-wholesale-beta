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
      className='flex flex-col justify-start items-center p-1 cursor-pointer gap-4'
      onClick={handleClick}
    >
      <img src={image} alt={name} className='h-[117px] object-contain md:max-h-[297px]' />
      <p className='text-xl text-purple-drops font-bold text-center'>{name}</p>
    </div>
  )
}

export default ProductCard
