import React from 'react'
import useGetCategories from '../../../hooks/useGetCategories'
import CategoryCard from '../../../components/Cards/CategoryCard'
import styles from './Categories.module.css'

const Categories = () => {
  const { data, loading } = useGetCategories()
  return (
    <div className={styles.container}>
      {loading && [1, 2, 3, 4, 5, 6, 7, 8].map(e => <CategoryCard key={e} />)}
      {data && data.map(d =>
        <CategoryCard
          key={d.name}
          name={d.name}
          image={d.name}
          id={d.id}
        />
      )}
    </div>
  )
}

export default Categories
