import React, { memo } from 'react'
import assets from '../../assets'
import useShopStore from '../../stores/shopStore'

const CategoryCard = ({ image, name, id }) => {
  const { value, setShopStore } = useShopStore()

  const handleClick = () => {
    setShopStore({
      ...value,
      category: id,
      product: null
    })
  }

  return (
    <div
      className={`max-w-[217px] h-[103px] p-1 flex flex-col justify-center items-center bg-white rounded-md gap-1 cursor-pointer shadow-sm hover:animate-pulse hover:bg-gray-300 ${value.category === id ? 'border-2 border-solid border-sky-600' : ''}`}
      onClick={handleClick}
    >
      {image && <img src={assets[image]} className='w-[68px] h-[61px] object-contain' />}
      {!image && <div className='w-[68px] h-[61px] animate-pulse bg-gray-300 rounded-md' />}
      {name && <p className='text-[10px] font-bold text-purple-drops uppercase text-center'>{name}</p>}
      {!name && <p className='text-[10px] font-bold text-purple-drops text-center animate-pulse uppercase'>Loading...</p>}
    </div>
  )
}

export default memo(CategoryCard)
