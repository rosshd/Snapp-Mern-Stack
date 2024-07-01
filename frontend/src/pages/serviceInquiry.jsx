import React from 'react'
import NavBar from '../components/navBar.jsx'
import Form from "../components/form.jsx"

const shop = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-zinc-800'>
      <NavBar className='rounded-xl bg-zinc-800'></NavBar>
      <Form />

    </div>
  )
}

export default shop