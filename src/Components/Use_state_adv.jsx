import React, { useState } from 'react'

function Use_state_adv() {
    var [val,setVal] = useState({name:"Chey", isBanned:false})
  return (
    <div className='p-3'>
        <h1>Name : {val.name}</h1>
        <h1>banned : {val.isBanned.toString()}</h1>
        <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className='bg-green-500 text-white px-4 py-2 rounded-full'>change</button>
  
    </div>
  )
}

export default Use_state_adv