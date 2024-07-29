import React, { useState } from 'react'

function Mastering_useStatetwo() {
    var [val,setVal] = useState({name:"chey", age:21})
  return (
    <div>
        <button onClick={()=>{
            setVal({...val, gender: "male"});
            console.log(val)
        }}>Print</button>
    </div>
  )
}

export default Mastering_useStatetwo