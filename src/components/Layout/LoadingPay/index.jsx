import React from 'react'
import assets from '../../../assets'
import useLayoutStore from '../../../stores/layoutStore'
import Modal from '../../Modal'

const LoadingPay = () => {
  const { loadingPay } = useLayoutStore()
  return (
    <Modal show={loadingPay} bgColor='#e6e6e6'>
      <div className='flex flex-col justify-center items-center gap-4 p-4 bg-[#e6e6e6]'>
        <img src={assets.loadingPay} alt='loading' />
        <p className='italic text-xl font-semibold text-gray-400'>Processing… Please wait.</p>
      </div>
    </Modal>
  )
}

export default LoadingPay
