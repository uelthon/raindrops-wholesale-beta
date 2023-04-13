import React, { useState } from 'react'

const Images = ({ images }) => {
  const [num, setNum] = useState(0) //eslint-disable-line
  return (
    <div className='px-4 md:px-0'>
      <img className='w-full object-contain md:h-[61px]' src={images[num]} />
    </div>
  )
}

export default Images
