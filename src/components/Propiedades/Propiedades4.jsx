import React from 'react';
import Footer from '../Footer';

const Propiedades4 = () => {
    return ( 
        <>
        <header style={{backgroundColor:"#333"}}>  <div className="headerpropss">
                <a className="logo" id="logo" style={{color:'white'}} href="/">Traslasierra Inmobiliaria</a>
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span className="strip"></span>
                        <span className="strip"></span>
                        <span className="strip"></span>
                    </button>
                </nav>
            </div>  </header>
    <div className="prox">
        <h1>prop4</h1>
        <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.

        Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
        
        El texto en sí no tiene sentido, aunque no es completamente aleatorio, sino que deriva de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del texto no tiene importancia, ya que solo es una demostración o prueba, pero se inspira en la obra de Cicerón De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit2​
        A pesar de estar extraído de ese escrito, el texto usado habitualmente[cita requerida] es:
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Existen múltiples variantes del texto original, algunas casi sin parecido con él. Estas versiones incluyen letras adicionales que no son comunes en latín (como la k, w y z) o palabras sin sentido como zzril, takimata y gubeergren que intentan hacer la distribución aún más parecida al inglés.
        
        Varios editores de texto proveen la funcionalidad de generación de lorem ipsum.</p>
        </div>

        <Footer/>
        </>     );
}
 
export default Propiedades4;