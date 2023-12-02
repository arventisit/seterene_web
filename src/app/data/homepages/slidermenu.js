'use client';
import { useState, useEffect } from "react";


export default function SliderMenu({flag, setFlag}) {

  const display = flag === 1  ? { display: 'block' } : { display: 'none' }


  const mouseOut = () => {
    setFlag(0)
  }

  

    return (
      <>
       <div className="sliderMenuContainer">
         <div className='sliderProductContainer'  onMouseLeave={mouseOut} style={display}>
           <div className='productContainer'>
              <div>
                <h3 className='tittleH3'>Autoclavable Goggles</h3>
                <div className='productBox'>
            
                </div>

                <p className='productP'>disenfektan stickymat</p>
              </div>
              <div>
                <h3 className='tittleH3'>Autoclavable Goggles</h3>
                <div className='productBox'>
            
                </div>

                <p className='productP'>disenfektan stickymat</p>
              </div>
              <div>
                <h3 className='tittleH3'>Autoclavable Goggles</h3>
                <div className='productBox'>
            
                </div>

                <p className='productP'>disenfektan stickymat</p>
              </div>
             
           </div>
         </div>
        </div>
      </>
    );
  }