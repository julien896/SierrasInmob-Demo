import React from 'react'
import portada from '../images/seccion.jpg'


const Servicios = () => {
    return ( 
        <section id="the-best">
        <div class="flex container">
            <img src={portada} style={{borderRadius:5}} alt="Property 1" />
            <div>
                <h2>Inversiones</h2>
                <p>Uno de los pilares fundamentales de la actividad económica de nuestro país es la Inversión Inmobiliaria. 
                    Es tiempo de tomar decisiones de mediano y largo plazo, con un marco profesional que las avale.</p>
                <ul>
                    <li>Análisis completos de Factibilidad de Proyectos, en el plano técnico, económico y financiero.</li>
                    <li>Creación de Valor Agregado de inmuebles para la compraventa.</li>
                    <li>Departamento de Arquitectura, con todas las opciones de construcción, desde el proyecto hasta el “llave en mano”.</li>
                    
                </ul>
                <button class="rounded">Más información.</button>
            </div>
        </div>
    </section>
     );
}
 
export default Servicios;