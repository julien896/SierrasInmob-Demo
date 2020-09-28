import React from 'react';
import './App.css';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Header from './components/Header';
import Propiedades from './components/Propiedades';
import Servicios from './components/Servicios';


function App() {
  return (
    <>
            <Header/>
            <Propiedades/>
            <Servicios/>
            <Contacto/>
            <Footer/>



        </>
  );
}

export default App;
