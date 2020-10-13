import React from 'react';
import FooterProps from '../FooterProps';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import d4 from '../../images/4/d4.jpg';
import d1 from '../../images/4/d1.jpg';
import d3 from '../../images/4/d3.jpg';
import d2 from '../../images/4/d2.jpg';


const Propiedades4 = () => {
    return ( 
        <>
        <HeaderProps/>
    <div className="prox">
        <h3>Propiedad en San Javier</h3>
        <p>HERMOSA PROPIEDAD A LA VENTA EN SAN JAVIER - EXCELENTE UBICACIÓN HACIA LAS SIERRAS - 
            CASA PRINCIPAL DE ADOBE CON 2 DORMITORIOS, LIVING COCINA COMEDOR INTEGRADOS, BAÑO, TERMOTANQUE SOLAR. 
            CASA SECUNDARIA TAMBIÉN DE ADOBE CON TALLER EN PLANTA BAJA Y DORMITORIO CON BAÑO EN PLANTA ALTA - 
            TODO SOBRE LOTE DE 2.100 M² CON DERECHOS POSESORIOS. HERMOSO PARQUE CON PISCINA. CONSULTE !!!</p>
        <Carousel>
                <div className="ca">
                    <img src={d4} alt='Propiedad' />
                </div>
                <div className="ca">
                    <img src={d2} alt='Propiedad'/>
                </div>
                <div className="ca">
                    <img src={d3} alt='Propiedad'/>
                </div>
                <div className="ca">
                    <img src={d1} alt='Propiedad'/>
                </div>
            
            </Carousel>
        
        </div>

        <FooterProps/>
        </>     );
}
 
export default Propiedades4;