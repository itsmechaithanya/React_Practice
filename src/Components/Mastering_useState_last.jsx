// import React, { useState } from 'react'

// function Mastering_useState_last() {
//     const [val,setVal] = useState([
//         {name:'Shravya', age:21},
//         {name:'Chaithanya', age:12},
//         {name:'Rajini', age:40}
//     ]);
//   return (
//     <div className='p-5'>
//         {val.map((items)=>
//         <div>
//             <h1>{items.name}</h1>
//             <h3>{items.age}</h3>
//         </div>
//         )}
//         <button onClick={()=>setVal(()=>val.map(item=> item.name == 'Chaithanya' ? {name:'Chaithanya',age:21} : item))} className='bg-pink-500 px-3 py-1 rounded-full'>click</button>
//     </div>
//   )
// }

// export default Mastering_useState_last

import React, { useState } from 'react'

function Mastering_useState_last() {
    const [val,setval] = useState([
        {name:'Shravya', age:21},
        {name:'Chaithanya', age:12},
        {name:'Rajini', age:40}
    ])
  return (
    <div className='p-5'>
        {val.map((item)=>
            <div>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
            </div>
        )}
        <button onClick={()=>setval(val.map((item)=>item.name == 'Chaithanya'? {name:'Chaithanya', age:21} :item))} className='bg-blue-300 rounded-full px-3 py-1'>click</button>
    </div>
  )
}

export default Mastering_useState_last