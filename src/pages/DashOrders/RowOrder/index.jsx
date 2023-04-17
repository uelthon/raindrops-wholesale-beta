import React from 'react'

const RowOrder = ({ order, total, status, tracking, date, orderDetails, shipping }) => {
  return (
    <tr>
      <td>{order}</td>
      <td>${total.toFixed(2)}</td>
      <td>{status}</td>
      <td>{tracking}</td>
      <td>{date}</td>
      <td>
        <a>View details</a>
      </td>
    </tr>
  )
}

export default RowOrder
