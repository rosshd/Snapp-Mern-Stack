import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import inquiryDark from '../../public/assets/inquiryDark.webp'
import inquiryPNG from "../../public/assets/inquiry.webp"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center max-h-screen overflow-visible bg-zinc-200 dark:bg-zinc-900'>
      <NavBar className=' bg-zinc-900'></NavBar>
      <div className='flex flex-row justify-center items-center h-[10%] space-x-2 mb-4 max-sm:mb-2 relative'>
        <img src={inquiryPNG} className='h-[100%] hidden dark:block opacity-90 dark:bg-none rounded-md px-2 border-b-orange-400 border-b-2' />
        <img src={inquiryDark} className='h-[100%] dark:hidden opacity-90 dark:bg-none rounded-md px-2 border-b-orange-400 border-b-2' />
        <h1 className='underline self-end max-sm:hidden max-md:translate-x-[100%] dark:text-gray-200 text-orange-400 absolute md:translate-x-[100%] xl:translate-x-[120%] translate-y-[2px] opacity-80 drop-shadow-md'>sales@snapplabs.co</h1>
      </div>
      <Form />
      <h1 className='underline self-center sm:hidden dark:text-gray-200 text-orange-400 drop-shadow-md'>sales@snapplabs.co</h1>
    </div>
  )
}

export default shop