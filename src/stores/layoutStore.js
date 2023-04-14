import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const layoutStore = create(
  devtools(
    (set) => ({
      loadingPay: false,
      successPay: false,
      orderNumber: 0,
      setLayout: (key, value) => set(() => ({ [key]: value }))
    })
  )
)

const useLayoutStore = () => {
  const { loadingPay, successPay, setLayout, orderNumber } = layoutStore()

  return {
    loadingPay,
    successPay,
    setLayout,
    orderNumber
  }
}

export default useLayoutStore
