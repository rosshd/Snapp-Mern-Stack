import React from 'react';
import logoSpin from './logoIcon.webp';

const Spinner = () => {
  return (
    <div className='items-center justify-center flex'>
        <img src={logoSpin} className='animate-spin h-24 duration-2000'/>
    </div>
  )
}

export default Spinner