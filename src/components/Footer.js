import React from 'react';

const Footer = () => {
    return ( 
        <footer>
        <div class="flex container">
            <div class="footer-about">
                <h5>Sobre Nosotros</h5>
                <p>Deseamos mejorar el ambiente en el cual vivimos, colaborando en la realización de los sueños de nuestros clientes, amigos y también de la gente que trabaja con nosotros, brindando en forma desinteresada asesoramiento profesional para la toma de decisiones.</p>
            </div>

            <div class="footer-quick-links">
                <h5>Links</h5>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
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
                    <li><a href="#"><span class="fab fa-facebook-f">Facebook</span></a></li>
                    <li><a href="#"><span class="fab fa-twitter">Twitter</span></a></li>
                    <li><a href="#"><span class="fab fa-instagram">Instagram</span></a></li>
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