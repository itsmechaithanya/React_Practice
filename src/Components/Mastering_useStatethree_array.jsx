import React, { useState } from 'react'

function Mastering_useStatethree_array() {
    var [val,setVal] = useState([1,2,3,4,5,6])
  return (
    <div className='p-5'>
        {val.map(item=><h1>{item}</h1>)}
        <button onClick={()=> setVal(()=>{
            return val.filter((item,index)=> index!=val.length-1)
        })} className='bg-blue-300 px-3 py-1 rounded-full'>click</button>
    </div>
  )
}

export default Mastering_useStatethree_array 