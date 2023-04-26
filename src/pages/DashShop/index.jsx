import React from 'react'
import Categories from './Categories'
import ProductsByCategory from './ProductsByCategory'
import Banners from './Banners'
import ProductDetails from './ProductDetails'

const DashShop = () => {
  return (
    <div className='flex flex-col justify-start w-full items-center'>
      <div className='w-full flex flex-col justify-start gap-8 2xl:w-[90%]'>
        <Categories />
        <ProductsByCategory />
        <ProductDetails />
        <Banners />
      </div>
    </div>
  )
}

export default DashShop
