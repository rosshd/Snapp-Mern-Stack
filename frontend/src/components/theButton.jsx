import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = React.memo(({ className, href, onClick, children, px = 'px-7', white }) => {
  const buttonClasses = classNames(
    'flex flex-row justify-center items-center button bg-zinc-700 text-white rounded-xl w-42',
    'hover:transition ease-in-out duration-300 hover:bg-zinc-600 hover:rounded-2xl hover:scale-105 h-10 z-50',
    'hover:border-2-orange-300 hover:shadow-md hover:shadow-zinc-500',
    px,
    { 'text-n-8': white, 'text-n-1': !white },
    className
  );

  const buttonElement = (
    <button className={buttonClasses} onClick={onClick}>
      <span className='flex-row text-sm flex items-center'>{children}</span>
    </button>
  );

  return href ? (
    <Link to={href}>
      {buttonElement}
    </Link>
  ) : buttonElement;
});

export default Button;