import React from 'react'

function Handling() {

  const data = [
      {
        name:"black dress",
        dis:"lorem ipsum dolor sit amet, consectetur"
      },
      {
        name:"white shirt",
        dis:"lorem ipsum dolor sit amet, consecteturrramcoritet"
      }
  ]
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center justify-center gap-4'>
      {data.map((items,index) =>(
        <div className=" w-44 song px-3 py-3 bg-zinc-100 rounded-lg">
        <img src="https://a10.gaanacdn.com/gn_img/albums/10q3ZR1352/q3ZRmR0A35/size_m.webp" alt="" />
        <h3 className='font-extrabold text-xl my-2'>{items.name}</h3>
        <p className='text-xs '>{items.dis}</p>
        <button onClick={()=>{alert ("js is working")}} className='bg-zinc-900 text-white mt-3 px-3 py-1 rounded-lg'>Download Now</button>
      </div>
      ))}
    </div>
  )
}

export default Handling 