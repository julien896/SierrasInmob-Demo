import React from 'react';
import FooterProps from '../FooterProps';
import HeaderProps from '../HeaderProps';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import b2 from '../../images/2/b2.jpg';
import b1 from '../../images/2/b1.jpg';
import b3 from '../../images/2/b3.jpg';


const Propiedades2 = () => {
    return ( 
        <>
        <HeaderProps/>
    <div className="prox">
        <h3>Casa en San Javier</h3>
        <p>MAGNIFICA CASA DE ESTILO, SOBRE LOTE DE APROXIMADAMENTE UNA HECTAREA CON ESCRITURA - 
            UBICADA A 300 METROS DE LA PLAZA PRINCIPAL DE SAN JAVIER, COMPUESTA DE 4 DORMITORIOS, 3 BAÑOS, 
            (DOS DE ELLOS EN SUITE), AMPLIO LIVING COMEDOR CON HOGAR A LEÑA, COCINA, BIBLIOTECA, ESCRITORIO, 
            PUERTAS ANTIGUAS, PISCINA, COCHERA, AMPLIO QUINCHO Y DEPOSITO. MAS UNA CASA SECUNDARIA PARA HUESPEDES. 
            AÑOSA ARBOLEDA CON DISTINTAS ESPECIES. ¡CONSULTE!.</p>
        <Carousel>
                <div className="ca">
                    <img src={b1} />
                </div>
                <div className="ca">
                    <img src={b2}/>
                </div>
                <div className="ca">
                    <img src={b3}/>
                </div>
            
            </Carousel>
        
        </div>

        <FooterProps/>
        </>
     );
}
 
export default Propiedades2;