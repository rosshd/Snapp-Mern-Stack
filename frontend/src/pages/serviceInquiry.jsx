import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"
import snapLogoBanner from "../assets/mainLogo.png"
import logoIcon from "../assets/logoIcon.png"

const shop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-900'>
      <NavBar className='rounded-xl bg-zinc-900'></NavBar>
      <img src={snapLogoBanner} className='mb-4 mt-[2%] h-[10%]'></img>
      <Form />

    </div>
  )
}

export default shop