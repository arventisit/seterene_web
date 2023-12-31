'use client';
import styles from './data/css/home.css';
import { useState } from 'react';
import SliderMenu from './data/homepages/slidermenu.js';
import Sliderproduct from './data/homepages/sliderproduct.js';
import Info from './data/homepages/info.js';
import Aboutus from './data/homepages/aboutus.js';
import Footer from './data/homepages/footer.js';
import Register from './data/homepages/register';

export default function Home() {
  const [FastProductflag, setFastProductFlag] = useState(0);
  const [registerFlag, setRegisterFlag] = useState(0);

  const handleFastProductsHover = (e) => {
    setFastProductFlag(1);
  };

  const handleFastProductsClick = (e) => {
    setFastProductFlag(0);
  };

  const handleRegistrationClick = (e) => {
    setRegisterFlag(1);
  };

  return (
    <>
      <div className=' navBarContainer'>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <a href='' className='flex items-center'>
              <img
                src='https://arventisintl.com/assets/arventis-files/categorybrand/61f1f6fec4d45.png'
                className='h-20 mr-3'
                alt='Seterene Logo'
              />
            </a>
            <button
              data-collapse-toggle='navbar-default'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
            <div
              className='hidden w-full md:block md:w-auto'
              id='navbar-default'
            >
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <a
                    href='#productsJudul'
                    onMouseOver={handleFastProductsHover}
                    onClick={handleFastProductsClick}
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    aria-current='page'
                  >
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Info
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Hubungi kami
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    onClick={handleRegistrationClick}
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Daftar/Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className='container sliderMenuContent'>
        <SliderMenu flag={FastProductflag} setFlag={setFastProductFlag} />
      </div>

      <div className='register'>
        <Register
          registerFlag={registerFlag}
          setRegisterFlag={setRegisterFlag}
        />
      </div>

      <div className='products' id='productsJudul'>
        <Sliderproduct />
      </div>

      <div className='information'>
        <Info />
      </div>

      <div className='aboutus'>
        <Aboutus />
      </div>

      <div className='footerpage'>
        <Footer />
      </div>
    </>
  );
}
