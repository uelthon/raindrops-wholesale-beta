import { useEffect } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const cartStore = create(
  devtools(
    (set) => ({
      value: [],
      subTotal: 0.00,
      shipping: 0.00,
      total: 0.00,
      addProduct: (product) => set((state) => ({
        value: [
          ...state.value,
          product
        ]
      })),
      removeProduct: (idVariant) => set((state) => ({
        value: state.value.filter(p => p.idVariantProduct !== idVariant)
      })),
      updateProduct: (idVariant, quantity) => set((state) => ({
        value: state.value.map(p => idVariant !== p.idVariantProduct
          ? p
          : {
              ...p,
              quantity
            })
      })),
      setSubTotal: (subTotal) => set(() => ({ subTotal })),
      setShipping: (shipping) => set(() => ({ shipping })),
      setTotal: (total) => set(() => ({ total })),
      reset: () => set(() => ({
        value: [],
        subTotal: 0.00,
        shipping: 0.00,
        total: 0.00
      }))
    })
  )
)

// {
//   "idVariantProduct":131,
//           "idProduct": 85,
//           "price": 50.5,
//           "quantity": 4
//       }

const useCartStore = () => {
  const {
    value,
    subTotal,
    shipping,
    total,
    addProduct,
    removeProduct,
    updateProduct,
    setSubTotal,
    setShipping,
    setTotal,
    reset
  } = cartStore()

  useEffect(() => {
    const subTotal = value.reduce((prev, curr) => Number(prev) + Number(curr.price * curr.quantity), 0)
    setSubTotal(subTotal)
    const shipping = Number(subTotal * 0.1)
    if (subTotal >= 1000) {
      setShipping(0.00)
      return setTotal(subTotal)
    }
    setShipping(shipping)
    setTotal(shipping + subTotal)
  }, [value])

  const mutateCart = (product) => {
    const findProduct = value.find(p => p.idVariantProduct === product.idVariantProduct && p.idProduct === product.idProduct)
    if (findProduct) {
      return updateProduct(product.idVariantProduct, Number(product.quantity) + Number(findProduct.quantity))
    }
    addProduct(product)
  }

  return {
    cart: value,
    subTotal,
    shipping,
    total,
    mutateCart,
    removeProduct,
    updateProduct,
    reset
  }
}

export default useCartStore
