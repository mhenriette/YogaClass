import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-1 bg-transparent text-white px-5 absolute z-30 w-full top-0'>
        <div className=''>
            <p className='font-extrabold text-4xl text-white  uppercase '>NKINDI</p>

        </div>
      
        <nav className='flex items-center '>
                <Link href='/Trial' className='listitem'><p>Our Services</p></Link>
                <Link href='/#'  className='listitem'><p>What we Do</p></Link>
                <Link href='/#'  className='listitem'><p>Our Work</p></Link>
                <Link href='/#'  className='listitem'><p>Contact Us</p></Link>
                <Link href='/#'  className='listitem'><p>Say Hi</p></Link>
         
            </nav>
            <div>
            <Link href='/#' className='listitem leading-7'><p>LOGIN</p></Link>
            </div>
       
    </div>
  )
}
