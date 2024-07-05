import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from '../components/heading'
import NavBar from '../components/navBar'
import Projects from '../components/projectLanding'

const Home = () => {

  

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    setLoading(true);
    axios   
        .get('http://localhost:3000/')
        .then((res) => {
            setServices(res.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })
  }, [])
  return (
    <div className='bg-zinc-900 h-fit flex flex-col max-w-[100dvw] overflow-x-hidden justify-center items-center'>
        <NavBar />

        <Heading />
          <div className='w-72 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300'></div>
        <Projects />
          <div className='w-72 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300'></div>


        <div className='flex-row items-center w-dvw h-dvh bg-zinc-900 min-h-dvh'>
            <h1>hey</h1>
        </div>
        
    </div>
  )
}

export default Home