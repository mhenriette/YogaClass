import React from 'react'
import Button from '../../components/ui/button'

 function Trial() {
  return (
    <div className='flex items-center h-screen overflow-hidden'>
      <div className='h-auto w-1/2 overflow-hidden
      '><img src='https://alomoves.s3.amazonaws.com/manual_uploads/shared/surveys/onboarding/landing/large.jpg' alt='yoga'/></div>
      <div className='flex flex-col justify-start   mx-auto '>
      <p className='text-black text-4xl my-5 font-bold text-start'>Welcome !</p>
      <h1 className='text-2xl font-semibold my-5'>LET'S FIND WHAT <br/> MOVES YOU</h1>
      <p className='text-lg'>Answer a few questions to help us personalize your class recommendations.</p>
      <div className=' flex gap-10 '>
        <Button name='Sign in' styles='px-20 font-bold hover:bg-black hover:text-white'  link='/Register'/>
        <Button  name='take Survey' styles='px-16 font-bold hover:bg-black hover:text-white'/>
      </div>
      </div>
    </div>
  )
  
}
export default Trial
