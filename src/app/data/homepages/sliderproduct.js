'use client'
import { useState } from "react"; 


const ProductItem = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const productThemeStyle = `product-item  ${isHovered ? 'border-blue-500 border-b-4' : 'border-black border-b'} pb-2 hover:text-blue-500 text-center w-[20rem] sm:w-[26.5rem] transition-all duration-400`;
  
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={productThemeStyle}
      >
        <div>{children}</div>
      </div>
    );
  };


export default function Sliderproduct() {  
    return (
      <>
        <h2 className="mb-10">Produk Kami</h2>
        <div className="product-container mb-10">
            <ProductItem>Disinfektan</ProductItem>
            <ProductItem>Autoclavable Googles</ProductItem>
            <ProductItem>Stickymat</ProductItem>
        </div>
        
       {/* disinfektan */}
        <h3 className="mb-10 mt-0" id="disenfektan">Disinfektan</h3>
        <div className="lineThin"></div>
        <div className='productContainer2'>
            <div className="theProduct">
                <div className='productBox2'>
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
             
        </div>

        
        {/* Autoclavable Googles */}
       <h3 id="autoclavableGoogles">Autoclavable Googles</h3>
        <div className="lineThin"></div>

        <div className='productContainer2'>
            
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
             
        </div>

       {/* Stickymat */}
        <h3 id="stickymat">Stickymat</h3>
        <div className="lineThin"></div>

        <div className='productContainer2'>
            
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
            <div className="theProduct">
                <div className='productBox2'>
                
                </div>
                <p className="namaProduct">Nama produk</p>
            </div>
             
        </div>
      </>
    );
  }