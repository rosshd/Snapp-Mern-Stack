import React, { useEffect, useState } from 'react'
import ironsuit1 from '../assets/products/ironSuit1.png'
import Spinner from '../assets/Spinner.jsx'
import axios from 'axios'
import Navbar from '../components/navBar.jsx'



const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    axios.get('http://localhost:3000/myServices')
    .then((response) => {
      setServices(response.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  const leftDiv = ( services ) => (
    <div className='h-[40vh] flex flex-col w-screen justify-center max-md:items-center dark:bg-zinc-800 bg-zinc-50'>
      <div className='h-[30vh] flex flex-row justify-center gap-[5%] items-center w-[60%] py-10 bg-zinc-700 dark:bg-zinc-900 rounded-3xl md:ml-[3%] border-orange-300 border-y-8'>
        <div className='flex flex-row gap-2'>
          <div className='h-full flex flex-col justify-center items-stretch overflow-hidden'>
            <img src={ironsuit1} className='h-[31vh]'/>
            </div>
          <div className='h-full flex flex-col justify-center gap-[1vh] items-center overflow-hidden'>
            <img src={ironsuit1} className='h-[15vh]'/>
            <img src={ironsuit1} className='h-[15vh]'/>
          </div>
        </div>
        <div className='h-full w-[50%] rounded-lg bg-opacity-20 bg-zinc-900 px-8 flex flex-col items-center justify-center'>
          <h1 className='text-white text-center text-xs'>{services.Description}
          </h1>
        </div>
      </div>
    </div>
  )

  const rightDiv = (  services ) => (
    <div className='h-[40vh] flex flex-col w-screen justify-center max-md:items-center dark:bg-zinc-800 bg-zinc-50'>
      <div className='h-[30vh] flex flex-row justify-center self-end gap-[5%] items-center w-[60%] py-10 bg-zinc-700 dark:bg-zinc-900 rounded-3xl md:mr-[3%] border-orange-300 border-y-8'>
        <div className='flex flex-row gap-2'>
          <div className='h-full flex flex-col justify-center items-stretch overflow-hidden'>
            <img src={ironsuit1} className='h-[31vh]'/>
            </div>
          <div className='h-full flex flex-col justify-center gap-[1vh] items-center overflow-hidden'>
            <img src={ironsuit1} className='h-[15vh]'/>
            <img src={ironsuit1} className='h-[15vh]'/>
          </div>
        </div>
        <div className='h-full w-[50%] rounded-lg bg-opacity-20 bg-zinc-900 px-8 flex flex-col items-center justify-center'>
          <h1 className='text-white text-center text-xs'>{services.Description}
          </h1>
        </div>
      </div>
    </div>
  )



  return (
    <div className='flex flex-col w-screen dark:bg-zinc-800 bg-zinc-50 pt-8 items-center justify-center'>
      <Navbar/>
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl border-b-orange-300 border-b-8 dark:text-white'>Gallery</h1>
        
        {loading ? (
          <div className='h-[80vh] dark:bg-zinc-800 bg-zinc-50 flex items-center justify-center'>
            <Spinner className='translate-y-[100px]'/>
          </div>
        ) : (
          services.map((services, index) => (
            index % 2 == 0 
            ? leftDiv(services)
            : rightDiv(services)
        )))}
    </div>
  )
}

export default ServicePage