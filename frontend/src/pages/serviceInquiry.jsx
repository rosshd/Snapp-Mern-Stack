import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import snapLogoBanner from "../assets/mainLogo.png"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-800'>
      <NavBar className='rounded-xl bg-zinc-800'></NavBar>
      <img src={snapLogoBanner} className='mt-[5%] h-[10%]'></img>
      <Form />

    </div>
  )
}

export default shop