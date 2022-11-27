import Link from 'next/link'
import React from 'react'


export default function Button({name, link, styles}) {
  return (
   <button className={`p-5 rounded-2xl text-white bg-gray-700 text-center max-w-lg my-6 hover:text-black hover:bg-white transition-all duration-300 ${styles} `}> <Link href={`${link}`} >{name}</Link> </button>
  )
}
