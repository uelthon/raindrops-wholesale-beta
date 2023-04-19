import React from 'react'
import assets from '../../../assets'
import useShopStore from '../../../stores/shopStore'

const Banners = () => {
  const { value } = useShopStore()

  if (value.product) return null

  return (
    <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 md:gap-0'>
      <div className='flex flex-col justify-items-start items-center'>
        <img src={assets.free} className='object-contain w-[390px] h-[154px]' />
        <img src={assets.display} className='object-contain w-[390px] h-[154px]' />
      </div>
      <div className='flex flex-col justify-start items-center'>
        <p className='text-pink-600 font-extrabold text-center text-2xl'>
          There is much more happiness<br />with <span className='text-purple-drops'>Raindrops Candy!</span>
        </p>
      </div>
    </div>
  )
}

export default Banners
