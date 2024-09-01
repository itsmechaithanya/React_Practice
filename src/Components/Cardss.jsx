import React from 'react'

function Cardss({user}) {
  return (
    <>
          <div className='h-full w-44 bg-rose-400 rounded-lg flex flex-col items-center p-2'>
            <div className='w-[6vw] h-[6vw] mt-1 rounded-full bg-rose-700 overflow-hidden'>
                <img className='h-full w-full object-cover' src={user.Img} alt="" />
            </div>
            <h1 className='text-xl mt-2'>{user.Name}</h1>
            <h1 className='text-sm'>{user.Email}</h1>
            <h1 className='mt-4 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt atque consequatu sfsrg ethsrj ydtyhtgr fgrehtr jytrhte gwfgrt</h1>
            <button className=' capitalize bg-rose-900 text-white px-3 py-1 mt-5 rounded-full'>remove it</button>
        </div>
        
    </>
  )
}

export default Cardss