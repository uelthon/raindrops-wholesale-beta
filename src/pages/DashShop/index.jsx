import React from 'react'
import Categories from './Categories'
import ProductsByCategory from './ProductsByCategory'
import Banners from './Banners'
import ProductDetails from './ProductDetails'

const DashShop = () => {
  return (
    <div className='flex flex-col justify-start gap-4 w-full'>
      <Categories />
      <ProductsByCategory />
      <ProductDetails />
      <Banners />
    </div>
  )
}

export default DashShop
