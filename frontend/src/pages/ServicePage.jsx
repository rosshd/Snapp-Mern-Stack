import React from 'react'

const ServicePage = () => {
  return (
    <div className='flex flex-col w-screen bg-zinc-50 pt-8 items-center'>
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl border-b-orange-300 border-b-8'>Projects</h1>
      <div className='h-[75vh] flex flex-col w-screen justify-center max-md:items-center bg-zinc-50'>
        <div className='h-[50%] w-[60%] bg-zinc-700 rounded-lg md:ml-[3%]'>

        </div>
      </div>
      <div className='h-[75vh] flex flex-col w-screen justify-center max-md:items-center items-end bg-zinc-50'>
        <div className='h-[50%] w-[60%] bg-zinc-700 rounded-lg md:mr-[3%]'>

        </div>
      </div>
    </div>
  )
}

export default ServicePage