import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import snapLogoBanner from "../assets/mainLogo.png"
import inquiryPNG from "../assets/inquiry.png"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-900'>
      <NavBar className='rounded-xl bg-zinc-900'></NavBar>
      <div className='flex flex-row justify-center items-center h-[10%] space-x-2 mb-2'>
        <img src={snapLogoBanner} className='mb-4 mt-[2%] h-[100%]'></img>
        <img src={inquiryPNG} className='h-[60%] self-end opacity-90 rounded-lg px-2 bg-zinc-800 bg-opacity-25 shadow-sm shadow-zinc-600' />
      </div>
      <Form />

    </div>
  )
}

export default shop