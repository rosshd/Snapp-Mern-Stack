import React from 'react';
import { Link } from 'react-router-dom';

const UsesBox = ({ src, children, insideInfo, title, isActive, setIsActive }) => {
  const renderContent = (text) => {
    const linkPattern = /(https?:\/\/[^\s]+)/g;
    return text.split('\n').map((line, index) => (
      <p key={index} className="text-left mb-2">
        {line.split(linkPattern).map((part, i) => 
          linkPattern.test(part) ? (
            <a 
              key={i} 
              href={part} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-300 hover:underline transition-all hover:scale-105 duration-200 hover:to-blue-500"
            >
              {part}
            </a>
          ) : part
        )}
      </p>
    ));
  };

  return (
    <div>
      {/* Popup Modal */}
      {isActive && (
        <div className='fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 opacity-95  -translate-y-1/2
        bg-zinc-900 dark:bg-zinc-800 shadow-lg max-w-md w-full md:w-3/4 lg:w-1/2 rounded-lg
        p-8 flex flex-col gap-2 overflow-auto'>
          <h2 className='text-2xl font-bold text-center text-amber-400 opacity-80'>{title}</h2>
          <div className='flex-grow'>
            <div className='text-left mb-2 p-4 text-sm text-gray-200 opacity-80'>
              {renderContent(insideInfo)}
            </div>
          </div>
          <button 
            className="bg-zinc-700 text-white rounded-lg py-2 px-4
            hover:bg-zinc-600 w-[50%] self-center hover:rounded-xl hover:scale-105 transition-transform duration-300"
            onClick={() => setIsActive(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Uses Box */}
      <div className='bg-zinc-800 dark:bg-zinc-700 bg-opacity-75 drop-shadow-lg h-auto w-[18dvw] max-md:w-[36dvw] xl:w-[13dvw] rounded-lg flex flex-col justify-stretch items-center 
      shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 
      hover:bg-slate-700 transition duration-300 overflow-hidden'>
        <button 
          onClick={() => setIsActive(true)} 
          className='w-full h-full z-10 flex items-center justify-center flex-col p-2'>
          <img 
            loading='lazy' 
            className='w-full h-auto mb-6' 
            src={src} 
            alt="box content" 
          />
          <div className='rounded-lg w-full bg-zinc-900 bg-opacity-50 flex flex-col items-center 
          justify-center text-center p-2'>
            {children}
          </div>
        </button>
      </div>
    </div>
  );
};

export default UsesBox;
