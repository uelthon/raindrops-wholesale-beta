import React from 'react'
import TableFacts from './TableFacts'
import TableSize from './TableSize'

const Nutrition = ({ ingredients, nutritionFacts, dimensions }) => {
  return (
    <div className='flex flex-col justify-start items-start gap-4'>
      <div className='flex flex-col justify-start items-start gap-4'>
        <p className='text-center text-xs font-bold tracking-wide text-purple-drops bg-yellow-400 px-4 py-2 w-full'>INGREDIENTS</p>
        <p className='text-sm text-gray-600'>{ingredients}</p>
      </div>
      <div className='grid grid-cols-1 justify-start gap-4 items-start w-full lg:grid-cols-2'>
        <div className='flex flex-col justify-start items-stretch gap-4'>
          <p className='text-center text-xs font-bold tracking-wide text-purple-drops bg-yellow-400 p-2'>NUTRITION FACTS</p>
          <TableFacts nutritionFacts={nutritionFacts} />
        </div>
        <div className='flex flex-col justify-start items-stretch gap-4'>
          <p className='text-center text-xs font-bold tracking-wide text-purple-drops bg-yellow-400 p-2'>DISPLAY DIMENSIONS</p>
          <TableSize dimensions={dimensions} />
        </div>
      </div>
    </div>
  )
}

export default Nutrition
