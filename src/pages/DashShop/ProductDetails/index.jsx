import React from 'react'
import useShopStore from '../../../stores/shopStore'
import useGetProduct from '../../../hooks/useGetProduct'
import Images from './Images'
import AddToCart from './AddToCart'
import Nutrition from './Nutrition'

import styles from './ProductDetails.module.css'

const ProductDetails = () => {
  const { value } = useShopStore()
  const { data, loading } = useGetProduct({
    slug: value.product,
    skip: !value.product
  })

  if (loading) return <h1>Loading...</h1>
  if (!value.product || !data) return null

  return (
    <div className={styles.container}>
      {(!data?.images) ? null : <Images images={data.images.url} />}
      {!data ? null : <AddToCart product={data} />}
      {(!data?.ingredients && !data?.dimensions && !data?.nutritionFacts) ? null : <Nutrition ingredients={data.ingredients} dimensions={data.dimensions} nutritionFacts={data.nutritionFacts} />}
    </div>
  )
}

export default ProductDetails
