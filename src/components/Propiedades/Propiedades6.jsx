import React from 'react';
import Footer from '../Footer';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import f5 from '../images/6/f5.jpg';
import f1 from '../images/6/f1.jpg';
import f3 from '../images/6/f3.jpg';
import f2 from '../images/6/f2.jpg';
import f6 from '../images/6/f6.jpg';


const Propiedades6 = () => {
    return ( 
        <>
       <HeaderProps/>
    <div className="prox">
        <h3>Propiedad en San Javier</h3>
        <p>CASA A LA VENTA EN ACHIRAS ABAJO - SAN JAVIER, SOBRE LOTE DE 3.450 M² CON ESCRITURA Y 6.350 M² CON DERECHOS POSESORIOS, LA CASA CUENTA CON UN DORMITORIO, UN BAÑO, COCINA Y LIVING CON HOGAR A LEÑA INTEGRADOS, HERMOSA ARBOLEDA Y VISTA A LAS SIERRAS, FRUTALES. CONSULTE !!!.</p>
        <Carousel>
                <div className="ca">
                    <img src={f1} alt="Propiedad" />
                </div>
                <div className="ca">
                    <img src={f2} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={f3} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={f5} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={f6} alt="Propiedad"/>
                </div>
            
            </Carousel>
        
        </div>

        <Footer/>
        </>     );
}
 
export default Propiedades6;