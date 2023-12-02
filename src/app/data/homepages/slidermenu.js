'use client';
import { useState, useEffect } from 'react';

export default function SliderMenu({ flag, setFlag }) {
  const display = flag === 1 ? { display: 'block' } : { display: 'none' };
  const [mouseEnter, setMouseEnter] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const mouseOut = () => {
    setFlag(0);
    setMouseEnter(false);
  };

  const mouseIn = () => {
    setMouseEnter(true);
    clearTimeout(timeoutId); //we remove the settimeout
  };

  const removeFastProduct = () => {
    if (!mouseEnter) {
      const id = setTimeout(() => {
        setFlag(0);
      }, 1000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      removeFastProduct();
    }, 4000);

    return () => {
      // Cleanup: Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [mouseEnter]);

  return (
    <>
      <div className='sliderMenuContainer'>
        <div
          className='sliderProductContainer'
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          style={display}
        >
          <div className='productContainer'>
            <div>
              <h3 className='tittleH3'>Autoclavable Goggles</h3>
              <div className='productBox'></div>

              <p className='productP'>disenfektan stickymat</p>
            </div>
            <div>
              <h3 className='tittleH3'>Autoclavable Goggles</h3>
              <div className='productBox'></div>

              <p className='productP'>disenfektan stickymat</p>
            </div>
            <div>
              <h3 className='tittleH3'>Autoclavable Goggles</h3>
              <div className='productBox'></div>

              <p className='productP'>disenfektan stickymat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
