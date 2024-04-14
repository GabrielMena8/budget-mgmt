import React from 'react'

export default function BudgetTracker() {
  return (

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex justify-center gap-5'>
            <img src="/grafico.jpg" alt="grafico" className=''/>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button
                className='bg-pink-500 w-full hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'    
            type="button">reset</button>
        </div>
    </div>
  )
}
