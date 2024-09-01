import React from 'react'
import { useForm } from 'react-hook-form'

function Formm({handleData}) {
  const {register,handleSubmit} = useForm()
  return (
    <div>
      <form className='flex justify-center mt-5 gap-3' onSubmit={handleSubmit(data=>handleData(data))}>
        <input {...register("Img")} className='rounded px-3 py-1 outline-none' type="text" placeholder='Img URL' />
        <input {...register("Name")} className='rounded px-3 py-1 outline-none' type="text" placeholder='Name' />
        <input {...register("Email")} className='rounded px-3 py-1 outline-none' type="email" placeholder='Email' />
        <input className='rounded px-3 py-1 outline-none bg-rose-600 text-white' type="submit" value='Submit' />
      </form>
    </div>

  )
}

export default Formm