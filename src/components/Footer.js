import React from 'react';

const Footer = () => {
    return ( 
        <footer>
        <div class="flex container">
            <div class="footer-about">
                <h5>Sobre Nosotros</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>

            <div class="footer-quick-links">
                <h5>Links</h5>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            <div class="footer-subscribe">
                <h5>Subscribite a nuestro correo de novedades</h5>
                <div id="subscribe-container">
                    <input type="text" placeholder="Ingresá tu Email" />
                    <button class="right-rounded">Enviar</button>
                </div>

                <h5 class="follow-us">Seguinos</h5>
                <ul>
                    <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                </ul>
            </div>
        </div>

        <small>
            Copyright &copy; 2020 All rights reserved | <span class="fa fa-heart"></span><a href="x">Julian Ca</a>
        </small>
    </footer>

     );
}
 
export default Footer;