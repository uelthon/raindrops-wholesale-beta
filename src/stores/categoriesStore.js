import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const categoriesStore = create(
  devtools(
    (set) => ({
      value: null,
      add: (categories) => set((state) => ({ value: categories })),
      remove: () => set((state) => ({ value: null }))
    })
  )
)

const useCategoriesStore = () => {
  const { add, value, remove } = categoriesStore()

  return {
    add,
    value,
    remove
  }
}

export default useCategoriesStore
