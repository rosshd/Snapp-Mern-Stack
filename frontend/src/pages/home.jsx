import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from '../components/heading'
import NavBar from '../components/navBar'

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
    <div>
        <NavBar />
        <Heading />

        <div className='items-center w-dvw bg-zinc-950 min-h-dvh'>
            <h1>hi</h1>
        </div>

        <div className='flex-row items-center w-dvw h-dvh bg-gray-400 min-h-dvh'>
            <h1>hey</h1>
        </div>
        
    </div>
  )
}

export default Home