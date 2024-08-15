import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6";

function UseState_hook_CreatingSomething() {
    const [val,setval] = useState(false)

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='w-80 h-50 relative bg-zinc-600 rounded-xl flex overflow-hidden'>
            <img className={`shrink-0 ${val == true ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover duration-500 ease-in-out`} src="https://plus.unsplash.com/premium_photo-1722180932260-da1a58af338b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
            <img className={`shrink-0 ${val == true ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover duration-500 ease-in-out`} src="https://plus.unsplash.com/premium_photo-1722180932886-b8328b569164?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt="" />
            <span onClick={()=>setval(!val)} className='absolute p-1.5 rounded-full -rotate-90 bg-[#ffffff8e] bottom-3 right-3'>
                <FaArrowDown />
            </span>
        </div>
    </div>
  )
}

export default UseState_hook_CreatingSomething