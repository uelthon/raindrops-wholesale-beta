import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import ImageViewer from '../../../../components/ImageViewer'

const Images = ({ images }) => {
  const [num, setNum] = useState(0) //eslint-disable-line

  const handleClick = {
    prev: () => {
      if (num === 0) {
        return setNum(images.length - 1)
      }
      setNum(num - 1)
    },
    next: () => {
      if (num === images.length - 1) {
        return setNum(0)
      }
      setNum(num + 1)
    }
  }

  return (
    <div className='px-4 md:px-0'>
      <div className='flex flex-col w-full justify-start gap-2'>
        <ImageViewer
          className='w-full object-contain md:h-[61px]' src={images[num]}
          prev={handleClick.prev} //eslint-disable-line
          next={handleClick.next} //eslint-disable-line
          multiple
        />
        <div className='w-full flex items-center justify-center gap-4 text-base'>
          <div
            className='cursor-pointer hover:text-purple-drops'
            onClick={handleClick.prev}
          >
            <AiOutlineLeft />
          </div>
          <div
            className='cursor-pointer hover:text-purple-drops'
            onClick={handleClick.next}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images
