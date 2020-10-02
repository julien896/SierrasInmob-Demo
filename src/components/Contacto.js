import React from 'react';
import { Formik } from 'formik';
import uuid from 'uuid/v4'
import Schema from '../Schema'

const Contacto = () => ( 
        <>
     <Formik
                    initialValues={{ name: '', email: '', motivo: '', mensaje:'' }}
                    validationSchema={Schema}
                    onSubmit={( values, { setSubmitting }) => {
                    setTimeout(() => {
                    values.id=uuid();
                    setSubmitting(false);
                    }, 1000);
                    }}
               >{({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
    <section id="contact">
        <div class="container">
            <h2>Contactanos</h2>
            {console.log(values)}
        <div class="flex">  

                <div id="form-container">
                    <h3>Dejá un mensaje</h3>
                        

                  
                    <form onSubmit={handleSubmit}>
                        <label for="name">Nombre</label>
                        <input 
                        type="text" 
                        id="name"  
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} />
                        {errors.name && touched.name && errors.name}
                        <label for="email">Email</label>
                        <input  
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <label for="subject">Motivo</label>
                        <input type="text" 
                                id="subject" 
                                name="motivo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.motivo}
                        />
                        {errors.motivo && touched.motivo && errors.motivo}
                        <label for="message">Mensaje</label>
                        <textarea id="message"
                                  type="mensaje"
                                  name="mensaje"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.mensaje}
                        >Escribí tu mensaje..</textarea>
                        {errors.mensaje && touched.mensaje && errors.mensaje}
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
                    )}

                
</Formik> 

</>

);
export default Contacto;