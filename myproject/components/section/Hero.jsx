import React from 'react'
import Button from '../ui/button'

export default function Hero() {
  return (
    <div className='bg-hero bg-cover flex h-screen items-center relative  bg-no-repeat  justify-center '>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
        <div className=' flex flex-col items-center z-20'>
        <h1 className='text-white text-3xl text-center my-5 font-bold'>Nkindi's Yoga Classes </h1>
        <h2 className='text-white text-xl text-center my-5 font-semibold'>The best Yoga class in town with good Services</h2>
        <Button name='START YOUR FREE TRIAL' link='/Trial'/>
        </div>
       
      
   
{/*     
       <div>
       
        <form className='bg-white rounded-xl shadow-xl shadow-gray-500 p-10 box-border mx-auto '>
        <p>hellow world</p>

please work
        </form>
       </div> */}
  
     </div>

   
  )
}
