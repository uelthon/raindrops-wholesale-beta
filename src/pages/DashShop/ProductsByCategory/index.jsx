import React from 'react'
import ProductCard from '../../../components/Cards/ProductCard'
import useShopStore from '../../../stores/shopStore'
import useGetProductsByCategory from '../../../hooks/useGetProductsByCategory'
import styles from './ProductsByCategory.module.css'

const ProductsByCategory = () => {
  const { value } = useShopStore()
  const { data, loading } = useGetProductsByCategory({
    id: value.category,
    skip: !value.category || value.product
  })

  if (loading) return <h1>Loading...</h1>
  if (!value.category || value.product) return null

  return (
    <div className={styles.container}>
      {data && data.map(e =>
        <ProductCard
          key={e.id}
          name={e.name}
          image={e.images.url[0]}
          slug={e.slug}
        />
      )}
    </div>
  )
}

export default ProductsByCategory
