import React from 'react'
import Printer from '../assets/3DPrint.webp'
import ContSoci from '../components/contSocials'
import mainLogo from '../assets/mainLogo.webp'
import NavBar from '../components/navBar'

const aboutUs = () => {
  return (
    <div className=' scrollbar-thin scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent 
    w-screen bg-zinc-200 dark:bg-zinc-900 justify-center items-center py-8'>
      <div className='flex-col w-screen items-center justify-center py-8'>
        <div className='h-[60%] w-screen flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 mb-[18%]'>
          <h1 className='text-8xl dark:text-white opacity-90 dark:bg-none rounded-md mr-8 lg:self-end border-yellow-400 border-b-4 drop-shadow-md'>About Us</h1>
          <img src={Printer} alt="3d Printer" className='w-[300px] h-[200px] xl:h-[417px] xl:w-[500px] rounded-md  lg:self-end shadow-md shadow-zinc-600 z-10'/>
        </div>
        <NavBar/>
        <div className='mx-[15%] border-yellow-400 flex flex-col items-center justify-center border-y-2 rounded-md p-8 dark:bg-zinc-900 bg-zinc-200 bg-opacity-80'>
          <div>
            <img src={mainLogo} alt='SnappLabs' className='md:w-[400px] w-[300px] mb-4'/>
          </div>

          <h1 className='text-start text-zinc-800 dark:text-gray-200 indent-8 text-xl text-opacity-80 mb-2'>  Our journey began in high school with just one 3D printer and a passion for 3D modeling and design. We take on various commission requests, which allows us to refine our 3D modeling techniques and better understand the diverse needs of our clients.
            Now, as I embark on my college journey at Georgia Tech, I am excited to continue pushing the boundaries of the 3D printing industry. Our latest project involves developing a commercial 3D filament recycler and winder, a step towards making 3D printing more sustainable and accessible for everyone.</h1>
          <div className='w-32 max-md:w-36 h-1 rounded-lg self-center justify-self-center bg-yellow-400 mb-2'/>
          <h1 className='text-start text-zinc-800 dark:text-gray-200 indent-8 text-xl text-opacity-80 mb-2'>
            Throughout this journey, our commitment to innovation and quality has remained exemplary. We are grateful for the support of our clients and community, and we look forward to sharing our ongoing progress and future innovations with you.</h1>
          <div className='w-32 max-md:w-36 h-1 rounded-lg self-center justify-self-center bg-yellow-400 mb-2'/>
          <h1 className='text-start text-zinc-800 dark:text-gray-200 indent-8 text-xl text-opacity-80 mb-2'>
            Thank you for being a part of our story. Together, we will continue to grow and transform the world of 3D development.</h1>
        </div>
        <ContSoci/>  
      </div>
      

    </div>
    
  )
}

export default aboutUs