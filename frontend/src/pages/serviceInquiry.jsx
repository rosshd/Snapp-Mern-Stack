import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import inquiryDark from '../assets/inquiryDark.webp'
import inquiryPNG from "../assets/inquiry.webp"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-200 dark:bg-zinc-900'>
      <NavBar className='rounded-xl bg-zinc-900'></NavBar>
      <div className='flex flex-row justify-center items-center h-[10%] space-x-2 mb-4 relative'>
        <img src={inquiryPNG} className='h-[100%] hidden dark:block opacity-90 dark:bg-none rounded-md px-2 border-b-orange-400 border-b-2' />
        <img src={inquiryDark} className='h-[100%] dark:hidden opacity-90 dark:bg-none rounded-md px-2 border-b-orange-400 border-b-2' />
        <h1 className='underline self-end max-md:translate-x-[120%] dark:text-gray-200 text-orange-400 absolute translate-x-[100%] xl:translate-x-[120%] translate-y-[2px] opacity-80 drop-shadow-md'>viktorsnapp@gmail.com</h1>
      </div>
      <Form />
      
    </div>
  )
}

export default shop