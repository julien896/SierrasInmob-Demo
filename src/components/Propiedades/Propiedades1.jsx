import React from 'react';
import FooterProps from '../FooterProps';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import a from '../../images/1/a.jpg';
import a1 from '../../images/1/a1.jpg';
import a3 from '../../images/1/a3.jpg';


const Propiedades1 = () => {


    return ( 
    <>
    <HeaderProps/>
    <div className="prox">
        <h3>Lotes en San Javier</h3>
        <p>EXCELENTES LOTES CON ESCRITURA A METROS DE LA PLAZA PRINCIPAL DE SAN JAVIER - MAGNIFICA VISTA A LAS SIERRAS. DESDE 2.200 M² - GRAN OPORTUNIDAD DE INVERSIÓN 
            ¡CONSULTE!.</p>
        <Carousel>
                <div className="ca">
                    <img src={a} />
                </div>
                <div className="ca">
                    <img src={a1}/>
                </div>
                <div className="ca">
                    <img src={a3}/>
                </div>
            
            </Carousel>
        
        </div>

        <FooterProps/>
        </>
     );
}
 
export default Propiedades1;