import React from 'react'

function Login() {
  return (
    <div className='flex gap-6 items-center justify-center h-screen w-full bg-gray-200'>
    <div className=''>
      <h1 className='text-[3rem]  font-medium'>BUZZBOX</h1>
      <p  className='text-[1.5rem]  font-thin'>Buzzbox helps you connect and share with the people in your life.</p>
    </div>


    <div className='py-16 rounded-md p-5 shadow-lg  gap-3 flex flex-col items-center h-auto w-96  justify-center bg-white'>

      
        <form action="" className='flex flex-col gap-3 items-center'>
        <input type="text" name="" id="" className='px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-72 h-12 ' placeholder='Email' />
         <input type="text" name="" id="" className='px-3 shadow-sm border border-[#00000015] border-1 rounded-md focus:border-blue-600 outline-none w-72 h-12 '  placeholder='password'/>
         <button className='bg-gray-200 w-56 rounded-md h-9'>LOGIN</button>
        </form>
        <p>forgot password</p>
        <hr className='w-1/2 border-1 font-thin border-gray-400'/>
        <button className='bg-gray-200  rounded-md  w-72 h-12'>CREATE ACCOUNT</button>
      

    </div>


  </div>
  )
}

export default Login