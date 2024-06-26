import React, { useEffect, useState }  from 'react'
import { Link, Route } from 'react-router-dom'

const Button = ( { className, href, onClick, children, px, white} ) => {

  const classes = `flex flex-row justify-center items-center button bg-zinc-700 text-white rounded-xl w-42
    hover:transition ease-in-out duration-300 hover:bg-zinc-600 hover:rounded-2xl hover:scale-105 h-10
    hover:border-2-orange-300 hover:shadow-md hover:shadow-zinc-500 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ""}
    `;

  const spanClasses = 'relative';

  const renderButton = () => (
      <button className={classes}>
        <span className='flex-row flex items-center'>{children}</span>
      </button>
  )

  const renderLink = () => (
    <Link to={href}>
      <button className={classes}>
        <span className='flex-row flex items-center'>{children}</span>
      </button>
    </Link>
  )

  return href
  ? renderLink()
  : renderButton();

};

export default Button