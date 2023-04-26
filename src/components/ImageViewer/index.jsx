import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const ImageViewer = ({
  src = '',
  className = '',
  alt = '',
  multiple = false,
  prev,
  next
}) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-screen ${show ? 'flex' : 'hidden'} justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-[999]`}>
        <button
          className='btn btn-circle btn-error text-white font-bold text-base absolute top-8 right-8'
          onClick={() => setShow(false)}
        >
          X
        </button>
        {(multiple && prev) &&
          <div
            className='absolute top-1/2 left-6 text-4xl text-purple-950 z-10 hover:text-purple-700 cursor-pointer'
            onClick={prev}
          >
            <AiOutlineLeft />
          </div>}
        {(multiple && next) &&
          <div
            className='absolute top-1/2 right-6 text-4xl text-purple-950 z-10 hover:text-purple-700 cursor-pointer'
            onClick={next}
          >
            <AiOutlineRight />
          </div>}
        <img
          className='drop-shadow-2xl cursor-zoom-out' src={src} alt={alt}
          onClick={() => setShow(false)}
        />
      </div>

      <img
        className={`${show && 'invisible'} cursor-zoom-in ${className}`}
        src={src}
        alt={alt}
        onClick={() => setShow(true)}
      />
    </>
  )
}

export default ImageViewer
