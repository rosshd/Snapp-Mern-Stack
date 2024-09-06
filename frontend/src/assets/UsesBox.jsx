import React, { useState } from 'react';

const UsesBox = ({ src, children, insideInfo }) => {
  const [isActive, setIsActive] = useState(false);

  const popUpTrigger = () => {
    setIsActive(true);
  };

  const popUpClose = () => {
    setIsActive(false);
  };

  return (
    <div>
      {isActive && (
        <div className='fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 dark:bg-zinc-700 bg-opacity-75 drop-shadow-lg h-[70vh] w-[50dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500'>
          <h1>{insideInfo}</h1>
          <button className="h-20 w-40 bg-red-700" onClick={popUpClose}>Close</button>
        </div>
      )}
      <div className='bg-zinc-800 dark:bg-zinc-700 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200 overflow-hidden'>
        <button onClick={popUpTrigger} className='z-10'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-6' src={src} alt="box content" />
          <div className='rounded-md w-[100%] scale-125 h-[40%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center text-center'>
            <span className="text-wrap">{children}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UsesBox;