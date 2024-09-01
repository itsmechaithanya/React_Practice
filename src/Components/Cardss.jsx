import React from 'react'

function Cardss() {
  return (
    <div className='h-full w-44 bg-rose-400 rounded-lg flex flex-col items-center p-2'>
        <div className='w-[3vw] h-[3vw] rounded-full bg-rose-700 overflow-hidden'>
            {/* <img className='h-full w-full object-cover' src="" alt="" /> */}
        </div>
        <h1 className='text-xl mt-3'>Chaithanya</h1>
        <h1 className='mt-3 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt atque consequatu</h1>
        <button className=' capitalize bg-rose-900 text-white px-3 py-1 mt-2 rounded-full'>remove it</button>
    </div>
  )
}

export default Cardss