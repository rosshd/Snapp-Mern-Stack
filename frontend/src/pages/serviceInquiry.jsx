import React from 'react';
import inquiryDark from '../../public/assets/inquiryDark.webp';
import inquiryPNG from "../../public/assets/inquiry.webp";
import Form from '../components/form.jsx';
import NavBar from '../components/navBar.jsx';

const Shop = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-200 dark:bg-zinc-900">
      <NavBar className="bg-zinc-900" />
      <div className="flex max-lg:flex-col pt-12 flex-row justify-center items-center md:h-[10%] w-[300px] max-md:w-[200px] space-x-2 mb-4 max-sm:mb-2 relative">
        {/* Adjusting image sizes for different screen sizes */}
        <img
          src={inquiryPNG}
          className="hidden dark:block opacity-90 dark:bg-none rounded-md px-2 max-md:mb-4 border-b-orange-400 border-b-2"
          style={{
            width: '400px',
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
        />
        <img
          src={inquiryDark}
          className="dark:hidden opacity-90 dark:bg-none rounded-md px-2 max-md:mb-4 border-b-orange-400 border-b-2"
          style={{
            width: '400px',
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'center bottom',
          }}
        />
        {/* Adjusting email display for screen sizes */}
        <h1 className="underline self-end max-lg:hidden dark:text-gray-200 text-orange-400 absolute lg:translate-x-[155%] translate-y-[2px] opacity-80 drop-shadow-lg">
          sales@snapplabs.co
        </h1>
      </div>
      <Form/>
        <h1 className="underline self-center lg:hidden max-lg:mb-4 dark:text-gray-200 text-orange-400 drop-shadow-lg mb-12 mt-2">
          sales@snapplabs.co
        </h1>
    </div>
  );
};

export default Shop;
