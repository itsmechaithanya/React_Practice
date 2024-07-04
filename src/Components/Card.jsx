import React from 'react'

function Card() {

    const data = [
        {img: 'https://images.unsplash.com/photo-1701685493726-7ecbbbd0b199?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', title:"amazon box", dis:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
        {img: 'https://images.unsplash.com/photo-1719822077838-b48bf2c7903d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8', title:"something", dis:"Lorem ipsum dolor sit."},
        {img: 'https://images.unsplash.com/photo-1719831400714-5d4fe425cd8a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ̑', title:"somethings", dis:"lorem19"}
    ]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
        {data.map((elem,index)=>(<div key={index} className='w-52 bg-zinc-50 rounded-xl overflow-hidden'>
            <div className='h-42 w-full bg-zinc-300'>
                <img className='w-full h-full object-cover' src={elem.img} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.title}</h2>
                <p className='text-xs mt-3'>{elem.dis}</p>
            </div>
        </div>))}
        
    </div>
  )
}

export default Card