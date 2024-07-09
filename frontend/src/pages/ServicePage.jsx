import React from 'react'
import ironsuit1 from '../assets/products/ironSuit1.png'

const ServicePage = () => {
  return (
    <div className='flex flex-col w-screen dark:bg-zinc-700 bg-zinc-50 pt-8 items-center'>
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl border-b-orange-300 border-b-8'>Projects</h1>
      <div className='h-[75vh] flex flex-col w-screen justify-center max-md:items-center bg-zinc-50'>
        <div className='h-[50%] flex flex-row justify-center gap-[5%] items-center w-[60%] py-10 bg-zinc-700 dark:bg-zinc-900 rounded-3xl md:ml-[3%] border-orange-300 border-y-8'>
          <div className='flex flex-row gap-2'>

            <div className='h-full flex flex-col justify-center items-stretch overflow-hidden'>
              <img src={ironsuit1} className='h-[31vh]'/>
            </div>
            <div className='h-full flex flex-col justify-center gap-[1vh] items-center overflow-hidden'>
              <img src={ironsuit1} className='h-[15vh]'/>
              <img src={ironsuit1} className='h-[15vh]'/>
            </div>
          </div>
          

          <div className='h-full w-[50%] rounded-lg bg-opacity-20 bg-zinc-900 px-8 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center'>This full upper body suit complete with lights and motorization was a large dedication of both materials and time. 
            It showcases commitment, artistic ability, and problem solving skills, which were all needed to make this project a reality. 
            The full guide to how I built this project can be found here: https://www.instructables.com/3D-Printed-Iron-Man-Suit/
            </h1>
            
          </div>

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