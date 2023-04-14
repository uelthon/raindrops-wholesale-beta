import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import assets from '../../../assets'
import Modal from '../../Modal'
import useLayoutStore from '../../../stores/layoutStore'

const SuccessPay = () => {
  const { successPay, setLayout, orderNumber } = useLayoutStore()
  return (
    <Modal show={successPay}>
      <div className='p-4 w-full flex flex-col justify-start g-4'>
        <div
          className='flex w-full justify-end cursor-pointer'
        >
          <div onClick={() => setLayout('successPay', false)}>
            <AiOutlineCloseCircle className='text-2xl' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
          <img src={assets.success} alt='success' />
          <p className='text-[#56b947] text-2xl font-bold'>Payment complete</p>
          <p className='text-[#B4B3B3] text-sm font-semibold'>We've sent you an email with all the details of your order & remember you can track your order.</p>
          <div className='divider m-0' />
          <p className='text-[#707070] text-sm font-semibold'>Order Number</p>
          <p className='text-[#707070] text-xl font-bold'>{orderNumber}</p>
        </div>
      </div>
    </Modal>
  )
}

export default SuccessPay
