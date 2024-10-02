import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.jsx';
import Navbar from '../components/navBar.jsx';
import Button from '../components/theButton.jsx';
import GalPannel from '../components/galleryImgPannel.jsx';
import ContSo from '../components/contSocials.jsx';
import servicesData from '../../public/assets/services.json'; 

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setServices(servicesData);
      setLoading(false);
    }, 500);
  }, []);

  const renderService = (service, index) => {
    const isLeftDiv = index % 2 === 0;
    return (
      <div key={index} className='flex flex-col flex-wrap w-screen justify-center mb-[10vh] max-lg:items-center'>
        <div className={`flex flex-row max-lg:flex-col max-lg:p-12 justify-start items-center px-2 py-4 rounded-lg overflow-hidden bg-zinc-800 dark:bg-zinc-900 max-lg:bg-opacity-95 border-orange-300 lg:max-h-[65vh] xl:max-h-[60vh] max-w-[80dvw] max-lg:max-w-[75dvw] border-y-8 ${isLeftDiv ? 'lg:self-start lg:ml-[8dvw]' : 'lg:self-end lg:mr-[8dvw]'}`}>
          <div className='h-full flex w-fit'>
            <GalPannel files={service.Files} />
          </div>
          <div className='h-full max-lg:w-[100%] lg:max-w-[30dvw] rounded-lg py-4 px-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent'>
            <h1 className='text-white text-start text-2xl mb-4 font-bold'>{service.Title}</h1>
            <h1 className='text-white text-opacity-50 text-xs text-start indent-4 mb-4'>{service.Description}</h1>
            {service.Link ? (
              <Button href={service.Link} className='h-12'>
                <h1 className='text-xs opacity-85'>See here</h1>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-screen dark:from-zinc-950 dark:to-zinc-900 bg-gradient-to-br h-screen from-zinc-100 to-zinc-400 pt-16 items-center justify-center overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent'>
      <Navbar />
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl mb-[15vh] mt-4 dark:text-white'>Gallery</h1>
      {loading ? (
        <div className='h-[80vh] dark:bg-zinc-800 bg-zinc-200 flex items-center justify-center'>
          <Spinner className='translate-y-[100px]' />
        </div>
      ) : (
        services.map((service, index) => renderService(service, index))
      )}
      <ContSo />
    </div>
  );
};

export default ServicePage;
