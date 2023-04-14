import React from 'react'

const Modal = ({ children, title, btnTitle, setShow, show, bgColor = '#ffffff' }) => {
  const handleClick = () => setShow(true)
  return (
    <>
      {btnTitle && <label onClick={handleClick} className='btn btn-primary normal-case'>{btnTitle}</label>}

      <div className={`modal modal-middle ${show && 'modal-open'} w-full h-screen`}>
        <div className={`modal-box bg-[${bgColor}]`}>
          {title && <h3 className='font-bold text-lg'>{title}</h3>}
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
