import React from 'react'
import { AddressElement } from '@stripe/react-stripe-js'
import { googleApi } from '../../../services/config'

const AddressForm = () => {
  // const handleChange = async () => {
  //   const addressElement = elements.getElement('address')

  //   const { complete, value } = await addressElement.getValue()
  //   console.log(complete, value)
  // }
  return (
    <AddressElement
      options={{
        mode: 'shipping',
        allowedCountries: ['US'],
        autocomplete: {
          mode: 'google_maps_api',
          apiKey: googleApi
        },
        blockPoBox: false,
        fields: {
          phone: 'always'
        },
        validation: {
          phone: {
            required: 'always'
          }
        },
        display: {
          name: 'split'
        }
      }}
    />
  )
}

export default AddressForm
