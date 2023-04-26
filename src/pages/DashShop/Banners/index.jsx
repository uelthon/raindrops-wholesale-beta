import React from 'react'
import assets from '../../../assets'
import useShopStore from '../../../stores/shopStore'

const Banners = () => {
  const { value } = useShopStore()

  if (value.product) return null

  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 mt-8'>
      <div className='flex flex-col justify-start items-start'>
        <p className='text-pink-600 font-extrabold text-center text-2xl'>
          There is much more happiness<br />with <span className='text-purple-drops'>Raindrops Candy!</span>
        </p>
      </div>
      <div className='flex justify-center items-center gap-2 flex-wrap md:gap-8'>
        <img src={assets.free} className='object-contain w-[390px] h-[154px]' />
        <img src={assets.display} className='object-contain w-[390px] h-[154px]' />
      </div>
    </div>
  )
}

export default Banners
