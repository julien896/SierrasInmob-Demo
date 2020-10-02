import React from 'react';
import Contacto from './Contacto';
import Footer from './Footer';
import Header from './Header';
import Propiedades from './Propiedades';
import Servicios from './Servicios';
import Seccion from './Seccion'


const Home = () => {
    
    return (
        <>
 
        <Header/>
        <Seccion/>
        <Propiedades/>
        <Servicios/>
        <Contacto/>
        <Footer/>
        </>
    )
}
export default Home;