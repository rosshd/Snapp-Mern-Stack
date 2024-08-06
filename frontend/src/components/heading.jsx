import React from 'react'
import mainLogo from '../assets/mainLogo.webp'
import snappSaber from '../assets/snappSaber.webp'
import Button from './theButton'

const heading = () => {
    return (
    <div className= 'flex flex-col justify-center max-md:justify-start items-center bg-gradient-to-b to-zinc-300 from-zinc-50 transition-colors dark:from-zinc-800 dark:to-zinc-900 md:h-[95vh] overflow-hidden'>

        <div className='flex max-md:flex-col-reverse md:gap-8 justify-center items-center flex-row
          w-screen p-4 lg:flex-row xl:gap-40'>

            <div className=' justify-center md:items-end items-center md:min-w-[355px] max-md:max-w-[80dvw] flex xl:max-w-[600px] flex-col md:pr-16 max-lg:content-between max-md:my-4 rounded-xl drop-shadow-lg'>
                <picture>
                    <img src={mainLogo} className='lg:max-h-[80-px] px-6 py-2 lg:max-w-[400px] max-lg:max-w-[250px] scale-125 xl:mb-8 xl:max-h-[120px] xl:max-w-[600px] self-center dark:bg-transparent rounded-xl' alt="Snapp Labs"></img>
                </picture>
                <h1 className='overflow-hidden md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] max-md:max-w-[250px] text-end text-lg dark:opacity-55 mb-6 font-semibold dark:text-white 
                        animate-text-reveal'>Turning Ideas Into Reality</h1>

                <div className='flex flex-row max-sm:flex-col max-sm:gap-4 self-center items-center max-xl:my-2 justify-center'>
                    <Button href='/about' className='sm:mr-2'>
                        <h1>About Us</h1>
                    </Button>
                    <Button href='/serviceInquiry' className='sm:ml-2'>
                        <span>Get a Quote</span>
                        <img className=" ml-2 w-4 transition duration-300 ease-in-out h-4 border-y-8 border-y-transparent border-l-[16px] 
                            border-l-orange-300 " alt="->"></img>
                    </Button>
                </div>  

            </div>
            
            <picture>
                <img 
                    src={snappSaber}
                    className='w-[300px] max-md:pt-12 xl:w-[450px] xl:h-auto max-md:w-[250px] md:w-[300px] max-lg::h-auto h-[175.51px] lg:scale-125 mt-8 rounded-xl self-center md:m-4 shadow-md shadow-zinc-600 z-10' alt="3D Printing"
                />
            </picture>
        </div>
    </div>
  )
}

export default heading