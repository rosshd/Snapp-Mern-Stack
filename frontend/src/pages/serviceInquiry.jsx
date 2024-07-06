import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import snapLogoIcon from "../assets/logoIcon.png"
import inquiryPNG from "../assets/inquiry.png"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-900'>
      <NavBar className='rounded-xl bg-zinc-900'></NavBar>
      <div className='flex flex-row justify-center items-center h-[10%] space-x-2 mb-4'>
        <img src={inquiryPNG} className='h-[100%] opacity-90 rounded-sm px-2 border-b-orange-400 border-b-2' />
      </div>
      <Form />

    </div>
  )
}

export default shop