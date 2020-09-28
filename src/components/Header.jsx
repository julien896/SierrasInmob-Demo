import React from 'react'

const Header = () => {

    return ( 
        <>
<div id="header-hero-container">
        <header>
            <div className="flex container">
                <a id="logo" href="#">Traslasierra Inmobiliaria</a>
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span className="strip"></span>
                        <span className="strip"></span>
                        <span className="strip"></span>
                    </button>

                    <ul id="nav-menu">
                        <li><a href="#" className="active">Inicio</a></li>
                        <li><a href="·" target="_blank">Propiedades</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li id="close-flyout"><span className="fas fa-times"></span></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="hero">
            <div class="fade"></div>
            <div class="hero-text">
                <h1>Nuestra Misión</h1>
                <p>.Ofrecer soluciones inmobiliarias integrales en cada una de nuestras distintas áreas de acción comercial y de prestación de servicios, que reporte un ahorro general de tiempo y dinero y un negocio mutuamente beneficioso para todas las partes</p>
                <p>.Establecer métodos permanentes de sondeo de la satisfacción percibida por nuestros Clientes internos y externos como base para la mejora de nuestro sistema de gestión</p>
            </div>
        </section>
</div>

            </>


        );
}
 
export default Header;