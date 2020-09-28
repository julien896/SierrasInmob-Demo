import React from 'react';


const Contacto = () => {
    return ( 

        <section id="contact">
        <div class="container">
            <h2>Contactanos</h2>

            <div class="flex">
                <div id="form-container">
                    <h3>Dejá un mensaje</h3>
                    <form>
                        <label for="name">Nombre</label>
                        <input type="text" id="name" />

                        <label for="email">Email</label>
                        <input type="text" id="email" />

                        <label for="subject">Motivo</label>
                        <input type="text" id="subject" />

                        <label for="message">Mensaje</label>
                        <textarea id="message">Escribí tu mensaje..</textarea>

                        <button class="rounded">Enviar</button>
                    </form>
                </div>

                <div id="address-container">
                    <label>Dirección</label>
                    <address>
                        San Javier, Cordoba 
                    </address>

                    <label>Telefono</label>
                    <a href="#">3544-32-2323</a>

                    <label>Email</label>
                    <a href="#">ouremail@domain.com</a>
                </div>
            </div>
        </div>
    </section>

     );
}
 
export default Contacto;