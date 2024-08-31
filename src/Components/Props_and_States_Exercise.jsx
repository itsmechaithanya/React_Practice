import React from 'react'

function Props_and_States_Exercise({name,img,artist,added}) {
  return (
    <div className='w-60 p-4 bg-zinc-100 rounded-md flex gap-3 relative pb-20'>
        <div className='w-20 h-20 bg-orange-300 rounded-md overflow-hidden'>
            <img className='h-full w-full' src={img} alt="" />
        </div>
        <div>
            <h3 className='text-xl'>{name}</h3>
            <h5 className='text-sm'>{artist}</h5>
        </div>
        <button className={`absolute ${added == false ? 'bg-green-500' : 'bg-orange-500'}  px-10 py-2 bottom-5 right-12 text-base rounded-full`}>{added == false ? 'Add to Fav' : "Fav"}</button>
    </div>
  )
}

export default Props_and_States_Exercise