import Image from 'next/image';


export default function SliderMenu({flag}) {
  const display = flag === 1 ? {display:'block'} : {display:'none'}
    return (
      <>
       <div className="sliderMenuContainer">
         <div className='sliderProductContainer' style={display}>
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