import React from 'react';
import inquiryDark from '../../public/assets/inquiryDark.webp';
import inquiryPNG from "../../public/assets/inquiry.webp";
import Form from '../components/form.jsx';
import NavBar from '../components/navBar.jsx';

const Shop = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-800">
      <NavBar className="bg-zinc-900" />
      <div className="flex max-lg:flex-col pt-12 flex-row justify-center items-center md:h-[10%] w-[300px] max-md:w-[200px] space-x-2 mb-4 max-sm:mb-2">
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
      </div>
      {/* Email display under the yellow bar and above the form */}
      <h1 className="underline self-center dark:text-gray-200 text-orange-400 drop-shadow-lg mb-4 opacity-80">
        sales@snapplabs.co
      </h1>
      <Form/>
    </div>
  );
};

export default Shop;
