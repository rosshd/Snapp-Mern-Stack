import React from 'react'
import mainLogo from '../assets/mainLogo.webp'
import snappSaber from '../assets/snappSaber.webp'
import Button from './theButton'

const heading = () => {
    return (
    <div className= 'flex flex-col justify-center max-md:justify-start items-center bg-gradient-to-b to-zinc-300 from-zinc-50 transition-colors dark:bg-zinc-900 h-[95vh] overflow-hidden'>

        <div className='flex max-md:flex-col justify-center items-center flex-row
          w-screen p-4 lg:flex-row max-md:justify-start max-md:py-20 lg:gap-10'>

            <div className=' justify-center items-center flex flex-col md:px-8 md:mr-8 max-lg:content-between max-md:my-4 rounded-xl drop-shadow-lg'>
                <picture>
                    <img src={mainLogo} className='max-h-[80-px] max-w-[400px] xl:max-h-[120px] xl:max-w-[600px] lg:scale-125 self-center max-lg:max-h-32 dark:bg-transparent scale-125 rounded-xl' alt="Snapp Labs"></img>
                </picture><h1 className='overflow-hidden text-end text-lg self-end dark:opacity-55 w-54 mb-8 font-semibold dark:text-white 
                        animate-text-reveal'>Turning Ideas Into Reality</h1>

                <div className='flex flex-row items-center my-2 justify-center'>
                    <Button href='/about' className='mr-2'>
                        <h1>About Us</h1>
                    </Button>
                    <Button href='/serviceInquiry' className='ml-2'>
                        <span>Get a Quote</span>
                        <img className=" ml-2 w-4 transition duration-300 ease-in-out h-4 border-y-8 border-y-transparent border-l-[16px] 
                            border-l-orange-300 " alt="->"></img>
                    </Button>
                </div>  

            </div>
            
            <picture>
                <img 
                    src={snappSaber}
                    className='w-[300px] h-[175.51px] lg:scale-125 mt-8 rounded-xl self-center md:m-4 shadow-md shadow-zinc-600 z-10' alt="3D Printing"
                />
            </picture>
        </div>
    </div>
  )
}

export default heading