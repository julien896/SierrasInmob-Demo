import React, {useState} from 'react'

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
                        <li><a href="·" target="_blank">Propiedades</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
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