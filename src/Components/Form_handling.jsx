import React from 'react'
import { useForm } from 'react-hook-form'

function Form_handling() {
    const {register,handleSubmit} = useForm();
  return (
    <div>
        <form className='flex gap-3 p-5' action="" onSubmit={handleSubmit(data=>console.log(data))}>
            <input {...register('name')} className='border' type="text" placeholder='name'/>
            <input {...register('email')} className='border' type="email" placeholder='email'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form_handling