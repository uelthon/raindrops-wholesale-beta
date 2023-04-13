import React from 'react'

const TableSize = ({ dimensions }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <tbody>
          <tr>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>Length</td>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>
              {dimensions.length}
            </td>
          </tr>
          <tr>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>Width</td>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>
              {dimensions.width}
            </td>
          </tr>
          <tr>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>Height</td>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>
              {dimensions.height}
            </td>
          </tr>
          <tr>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>Unit Weight OZ</td>
            <td className='text-xs font-bold bg-[#6c55a4] text-white'>
              {dimensions.unitWeightOz}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableSize
