import React from 'react'

const TableFacts = ({ nutritionFacts }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <tbody>
          {Object.keys(nutritionFacts).map(fact =>
            <tr key={fact}>
              <td className='text-xs font-bold bg-[#6c55a4] text-white'>{fact}</td>
              <td className='text-xs font-bold bg-[#6c55a4] text-white'>
                {nutritionFacts[fact].value && nutritionFacts[fact].value}
                {!nutritionFacts[fact].value && nutritionFacts[fact]}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableFacts
