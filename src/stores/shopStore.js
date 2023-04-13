import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const shopStore = create(
  devtools(
    (set) => ({
      value: {
        category: null,
        product: null
      },
      change: (value) => set((state) => ({ value }))
    })
  )
)

const useShopStore = () => {
  const { value, change } = shopStore()

  return {
    value,
    setShopStore: change
  }
}

export default useShopStore
