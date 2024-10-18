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
        <div className={`flex flex-row max-lg:flex-col max-lg:p-2 justify-start items-center px-2 py-4 rounded-lg overflow-hidden bg-zinc-800 dark:bg-zinc-900 max-lg:bg-opacity-95 border-orange-300 lg:max-h-[65vh] xl:max-h-[60vh] max-w-[80dvw] max-lg:max-w-[85dvw] border-y-8 ${isLeftDiv ? 'lg:self-start lg:ml-[8dvw]' : 'lg:self-end lg:mr-[8dvw]'}`}>
          <div className='h-full flex w-fit'>
            <GalPannel files={service.Files} />
          </div>
          <div className='h-full max-lg:w-[100%] lg:max-w-[25dvw] rounded-lg py-4 px-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-transparent max-lg:items-center max-lg:justify-center scrollbar-thumb-transparent'>
            <h1 className='text-white text-start text-2xl mb-4 font-bold max-lg:self-center max-lg:text-center'>{service.Title}</h1>
            <h1 className='text-white text-opacity-50 text-xs text-start indent-4 mb-4'>{service.Description}</h1>
            {service.Link ? (
              <Button href={service.Link} className='h-auto py-4 self-center justify-self-center'>
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
    <div className='overflow-y-auto bg-zinc-300 dark:bg-zinc-900 justify-center items-center'>
      <Navbar />
      <h1 className='text-center text-9xl max-md:text-7xl max-md:mt-12 text-black rounded-2xl md:mb-[15vh] max-md:mb-12 mt-4 dark:text-white'>Gallery</h1>
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
