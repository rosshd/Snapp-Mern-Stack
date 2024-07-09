import React from 'react'
import snappSaber from '../assets/snappSaber.png'
import Button from './theButton'
import mainLogo from '../assets/mainLogo.png'

const heading = () => {
    return (
    <div className= 'flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-900 h-[95vh] overflow-hidden'>

        <div className='flex justify-center items-center flex-col
          w-screen p-4 lg:p-16 lg:flex-row py-20 mt-12'>

            <div className=' justify-center items-center flex flex-col md:py-8 lg:mr-12 max-lg:content-between max-lg:my-4 m-4 rounded-xl drop-shadow-lg'>

                <img src={mainLogo} className='w-4/5 self-center max-lg:max-h-32 bg-white bg-opacity-25 rounded-3xl'></img>
                <h1 className='overflow-hidden text-end text-lg self-end dark:opacity-55 w-4/5 mb-8 max-sm:pr-10 pr-16 font-semibold dark:text-white 
                        animate-text-reveal'>Turning Ideas Into Reality</h1>

                <div className='flex flex-row items-center my-2 justify-center'>
                    <Button href='/about' className='mr-2'>
                        <h1>About Us</h1>
                    </Button>
                    <Button href='/serviceInquiry' className='ml-2'>
                        <span>Get a Quote</span>
                        <img className=" ml-2 w-4 transition duration-300 ease-in-out h-4 border-y-8 border-y-transparent border-l-[16px] 
                            border-l-orange-300 "></img>
                    </Button>
                </div>  

            </div>
            

            <img 
                src={snappSaber}
                className='lg:w-2/5 mt-8 max-lg:max-w-72 rounded-xl self-center lg:m-12 max-lg:h-auto shadow-md shadow-zinc-600 z-10'
            />

        </div>
    </div>
  )
}

export default heading