import React, { useState } from 'react'

function UseState_hooks() {
    const [val,setval] = useState(true)
  return (
    <div className='p-5'>
        <h1 className='pl-3'>{val === true ? "I'm True" : "I'm False"}</h1>
        <button onClick={()=>setval((item)=>!item)} className='bg-red-400 px-3 py-1 rounded-full'>Change</button>
    </div>
  )
}

export default UseState_hooks