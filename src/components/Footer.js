import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {

    const notify = () => toast("Te has suscripto exitosamente!");
    const err = () => toast("Ha habido un error. Por favor intenta nuevamente.");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_q', e.target, 'user_3LffPJJ2QPXZDq6CF3BY1')
          .then((result) => {
              notify()
              console.log(result.text);
          }, (error) => {
              err()
              console.log(error.text);
          });
                e.target.reset()

      }

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
                <form id="subscribe-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Ingresá tu Email"/>
                    <button class="right-rounded" value="Send" type="submit">Enviar</button>
                </form>

                <h5 class="follow-us">Seguinos</h5>
                <ul>
                    <li><a href="https://web.facebook.com/inmobiliariatraslasierra/"><span class="fab fa-facebook-f">Facebook</span></a></li>
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