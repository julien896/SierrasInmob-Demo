import React from 'react';
import FooterProps from '../FooterProps';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import c2 from '../../images/3/c2.jpg';
import c4 from '../../images/3/c4.jpg';
import c3 from '../../images/3/c3.jpg';
import c5 from '../../images/3/c5.jpg';



const Propiedades3 = () => {
    return ( 
        <>
        <HeaderProps/>
    <div className="prox">
        <h3>Casa en San Javier</h3>
        <p>CASA A LA VENTA A ESTRENAR EN SAN JAVIER - AMBIENTE AMPLIO CON ENTREPISO, COCINA Y BAÑO. 
            COCHERA - TODO SOBRE LOTE DE 5.000 MTS CON ESCRITURA - MUY BUEN ACCESO Y HERMOSA VISTA A LAS SIERRAS. 
            CONSULTE !!!.</p>
        <Carousel>
                <div className="ca">
                    <img src={c4} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={c2} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={c3} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={c5} alt="Propiedad"/>
                </div>
            
            </Carousel>
        
        </div>

        <FooterProps/>
        </>     );
}
 
export default Propiedades3;