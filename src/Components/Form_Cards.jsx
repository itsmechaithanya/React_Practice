import React, { useState } from 'react'
import Cardss from './Cardss'

function Form_Cards({users}) {
  return (
    <div className='w-full h-[45vh] max-h-[45vh] overflow-auto p-4 flex justify-center gap-4 flex-wrap rounded-lg'>
        <Cardss users={users}/>
    </div>
  )
}

export default Form_Cards