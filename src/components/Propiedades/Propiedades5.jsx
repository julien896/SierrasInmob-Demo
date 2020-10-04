import React from 'react';
import Footer from '../Footer';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import e5 from '../images/5/e5.jpg';
import e1 from '../images/5/e1.jpg';
import e3 from '../images/5/e3.jpg';
import e2 from '../images/5/e2.jpg';

const Propiedades5 = () => {
    return ( 
        <>
       <HeaderProps/>
    <div className="prox">
        <h3>Posibilidad de Inversión</h3>
        <p>Sobre la esquina de mayor presencia de la plaza del pueblo de San Javier, el predio paseo del pueblo se propone con una inmejorable inversión inmobiliaria con flujo de caja presente y gran potencial de desarrollo futuro. Compuesto de 7 locales comerciales, todos con alquiler vigente. El inmueble también cuenta con una casa de 1 dormitorios, 2 baños, cocina, living en L con hogar a leña. Con gran potencial ya que cuenta con los locales existentes en pleno funcionamiento y la posibilidad de ampliar el desarrollo ya sea con más locales o complejo de cabañas, dada su ubicación en la esquina de las dos calles principales de San Javier con el agregado de una añosa arboleda y teniendo como uno de sus límites el arroyo del pueblo. El predio presente consiste en 2 unidades con una superficie total de: 9.250 M2 terreno. 635 M2 construido.
</p>
        <Carousel>
                <div className="ca">
                    <img src={e5}  alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={e2} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={e3} alt="Propiedad"/>
                </div>
                <div className="ca">
                    <img src={e1} alt="Propiedad"/>
                </div>
            
            </Carousel>
        
        </div>

        <Footer/>
        </>     );
}
 
export default Propiedades5;