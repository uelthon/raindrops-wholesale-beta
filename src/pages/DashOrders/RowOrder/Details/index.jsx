import React from 'react'

const Detailts = ({ orderDetails, shipping, total }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails && orderDetails.map(o =>
          <tr key={o.id}>
            <td>{o.name}</td>
            <td>{o.nameVariant}</td>
            <td>{o.price}</td>
            <td>{o.quantity}</td>
            <td>{o.totalItem}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Detailts
