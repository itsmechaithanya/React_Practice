import React, { useState } from 'react'

function Use_state_int() {
  var [a,b] = useState(12)
  return (
    <div className='p-2'>
        <h1>{a}</h1>
        <button className='bg-zinc-400 px-3 py-1 rounded-xl'>change</button>
    </div>
  )
}

export default Use_state_int