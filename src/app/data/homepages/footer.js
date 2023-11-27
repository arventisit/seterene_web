import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
    const marginStyle = {
        marginLeft: '15%',
      };
  return (
    <>
     

      <div className="">
      

        <div className="flex mt-10 alamatlengkap">
          <div className="flex-1 text-left bg-white-400 px-4 py-2 m-2" style={marginStyle}>
            <span>

                <h1 className="text-lg font-bold">Hubungi Kami</h1>
                <p>
                PT. STERENE PACIFICA INDONESIA
                <br/>
                Ruko Prominance Blok 38D No. 79
                <br/>
                Alam Sutera - Tangeran 15143
                </p>
                <br/>
                <p>
                    P.  +62(21)5317-0172
                    <br/>
                    WA. +62(811)807-8079
                    <br/>
                    E.  info@arventisintl.com
                    <br/>
                    W.  www.arventisintl.com 
                </p>
            </span>
            <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} />
          </div>
          <div className="flex-1 text-center bg-white-400 px-4 py-2 m-2">
            
          </div>
        </div>


      </div>
    </>
  );
}
