import React, { useState } from 'react'
import Cardss from './Cardss'

function Form_Cards({users}) {
  return (
    <div className='w-full h-[50vh] max-h-[45vh] overflow-auto p-4 flex justify-center gap-4 flex-wrap rounded-lg'>
        {users.map((item,index)=>{
          return <Cardss user={item} key={index} />
      })}
    </div>
  )
}

export default Form_Cards