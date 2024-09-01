import React from 'react'

function Formm() {
  return (
    <div>
      <form className='flex justify-center mt-5 gap-3' action="">
        <input className='rounded px-3 py-1 outline-none' type="text" placeholder='name' />
        <input className='rounded px-3 py-1 outline-none' type="email" placeholder='email' />
        <input className='rounded px-3 py-1 outline-none bg-rose-600 text-white' type="submit" value='Submit' />
      </form>
    </div>

  )
}

export default Formm