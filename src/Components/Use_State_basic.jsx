import React, { useState } from 'react'
function Use_State_basic() {

  const [count, setCount] = useState(true);

  return (
    <div>
      <div className='m-4'>
      <h1 className='mx-6'>{count.toString()}</h1>
      <button onClick={()=>setCount(!count)} className='bg-slate-600 text-white rounded-full px-2 py-1'>change</button>
      </div>
    </div>
  )
}

export default Use_State_basic

