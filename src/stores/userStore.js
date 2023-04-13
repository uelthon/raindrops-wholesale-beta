import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const userStore = create(
  devtools(
    (set) => ({
      value: null,
      add: (user) => set((state) => ({ value: user })),
      remove: () => set((state) => ({ value: null }))
    })
  )
)

const useUserStore = () => {
  const { value, add, remove } = userStore()

  return {
    value,
    add,
    remove
  }
}

export default useUserStore
