import React from 'react'

function Passing_data_via_props({img, name, place ,handleFriends, friends ,index}) {
  return (
    <div className='w-52 bg-white rounded-xl overflow-hidden '>
      <img className='w-full h-52 object-cover bg-sky-400 ' src={img} alt="" />
      <div className='w-full p-3 bg-white'>
        <div className='pl-3 pb-3'>
          <h3 className=' pt-3 text-xl font-semibold'>{name}</h3>
          <h5 className=' text-sm text-slate-500'>{place}</h5>
        </div>
        <button onClick={()=>handleFriends(index)} className={`${friends == true ? "bg-blue-300" : "bg-green-300"} py-1 px-3 rounded-full`}>{friends ? "Add Friend": "Friends"}</button>
      </div>
      
    </div>
  )
}

export default Passing_data_via_props