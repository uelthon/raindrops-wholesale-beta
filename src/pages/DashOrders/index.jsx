import React from 'react'
import useUserStore from '../../stores/userStore'
import useGetOrdersByUserId from '../../hooks/useGetOrdersByUserId'

const DashOrders = () => {
  const { value } = useUserStore()
  const { data, loading } = useGetOrdersByUserId({
    id: value?.id,
    token: value?.token,
    skip: !value?.id || !value?.token
  })
  return (
    <div className='p-8 rounded-md bg-white shadow-sm'>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>ORDER#</th>
              <th>TOTAL AMOUNT</th>
              <th>STATUS</th>
              <th>TRACKING#</th>
              <th>ORDER DATE</th>
              <th>ORDER DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6}>Loading...</td></tr>}
            {data?.length > 0 && data.map(o => {
              const order = o.orderNumber
              const total = o.totalAmount
              const date = o.orderDate
              const status = o.orderStatus.name
              const tracking = o.tracking ? o.tracking : ''
              return (
                <tr key={order}>
                  <td>{order}</td>
                  <td>${total}</td>
                  <td>{status}</td>
                  <td>{tracking}</td>
                  <td>{date}</td>
                  <td>
                    <a>View details</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashOrders
