import React from 'react'
import mail from '../../public/assets/mail.webp'
import youtube from '../../public/assets/youtube-64.webp'
import instagram from '../../public/assets/instagram-64.webp'
import facebook from '../../public/assets/facebook-64.webp'
import {Link, Route} from 'react-router-dom'

const contSocials = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen mt-10 mb-6 border-y-2 bg-zinc-900 bg-opacity-80 dark:bg-transparent dark:border-transparent border-y-orange-300 py-2'>
        <div>
            <h1 className='text-white text-3xl mb-2 opacity-80 font-bold dark:text-white'>Contact Us!</h1>
        </div>
        <div className='flex flex-row'>
            
            <Link rel='path' to='../serviceInquiry'>
                <button>
                    <img src={mail} alt="Mail" loading='lazy' className='w-16 h-16 hover:scale-110 transition-all duration-100 ease-out mx-2'/>
                </button>
            </Link>
            
            
            <Link to='https://www.youtube.com/@SnappLabs/videos'>
                <button>
                    <img src={youtube} alt="Youtube" loading='lazy' className='w-16 h-16 hover:scale-110 transition-all duration-100 ease-out mx-2'/>
                </button>
            </Link>

            
            <Link to='https://www.instagram.com/snapplabs/'>
                <button>
                    <img src={instagram} alt="Instagram" loading='lazy' className='w-16 h-16 hover:scale-110 transition-all duration-100 ease-out mx-2'/>
                </button>
            </Link>
            
            
            <Link to='https://www.facebook.com/SnappLabs3D/'>
                <button>
                    <img src={facebook} alt="facebook" loading='lazy' className='w-16 h-16 hover:scale-110 transition-all duration-100 ease-out'/>
                </button>
            </Link>
        </div>

    </div>
  )
}

export default contSocials