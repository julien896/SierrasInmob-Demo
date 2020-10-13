import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css'


const Header = () => {

    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setHeader(true)
        }
        else{
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return ( 
        <>
<div id="header-hero-container">
        <header className={header ? "header active" : "header"}>
            <div className="flex container">
                <a className="logo" id="logo" href="/">Traslasierra Inmobiliaria</a>
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span className="strip"></span>
                        <span className="strip"></span>
                        <span className="strip"></span>
                    </button>

                    <ul id="nav-menu">
                        <li><a href="#" className="Inicio">Inicio</a></li>
                        <li style={{cursor:"pointer"}}><Link  to="properties" smooth={true} offset={-82} spy={true}>Propiedades</Link></li>
                        <li style={{cursor:"pointer"}}><Link to="the-best" smooth={true} offset={-95} spy={true}>Servicios</Link></li>
                        <li style={{cursor:"pointer"}}><Link to="contact" smooth={true} offset={-82} spy={true}>Contacto</Link></li>
                        <li id="close-flyout"><span className="fas fa-times"></span></li>
                    </ul>
                </nav>
            </div>
        </header>
        
</div>

            </>


        );
}
 
export default Header;