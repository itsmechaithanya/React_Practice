// import React, { useState } from 'react'

// function Mastering_useStatefour_arraytwo() {
//   const [val,setVal] = useState([1,2,3,4,5])
//   return (
//     <div className='p-5'>
//       {val.map(items => <h1>{items}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=> index!=2))} className='bg-blue-300 px-3 py-1 rounded-full'>click</button>
//     </div>
//   )
// }

// export default Mastering_useStatefour_arraytwo;

import React, { useState } from 'react'

function Mastering_useStatefour_arraytwo() {
  const [val,setval] = useState([1,2,3,4,5])
  return (
    <div className='p-5'>
      {val.map(items=><h1>{items}</h1>)}
      <button onClick={()=>setval(val.filter((items,index)=>index!=2))} className='bg-pink-400 px-3 py-1 rounded-full'>click</button>
    </div>
  )
}

export default Mastering_useStatefour_arraytwo