import React from 'react'
import { Link } from 'react-router-dom'
import a4 from './images/1/a4.jpg'
import b4 from './images/2/b4.jpg'
import c1 from './images/3/c1.jpg'
import d5 from './images/4/d5.jpg'
import e4 from './images/5/e4.jpg'
import f4 from './images/6/f4.jpg'



const Propiedades = () => {
    

    return ( 
        
        <section id="properties">
        <div className="container">
            <h2>Propiedades</h2>
            <div id="properties-slider" className="slick">
                <div className="di">
                    <img src={a4} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades1" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link>
                    </div>
                </div>

                <div className="di">
                    <img className="im" src={b4} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades2" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link> 
                    </div>
                </div>

                <div className="di">
                    <img className="im" src={c1} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades3" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link> 
                    </div>
                </div>

                <div className="di">
                    <img className="im" src={d5} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades4" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link> 
                    </div>
                </div>

                <div className="di">
                    <img className="im" src={e4} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades5" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link> 
                    </div>
                </div>

                <div className="di">
                    <img className="im" src={f4} alt="Property 1" />
                    <div class="property-details">
                        <p class="price">$3,400,000</p>
                        <span class="beds">6 beds</span>
                        <span class="baths">4 baths</span>
                        <span class="sqft">4,250 sqft.</span>
                        <address>
                            480 12th, Unit 14, San Francisco, CA
                        </address>
                        <Link to="/propiedades6" style={{textDecoration:"none"}}><button class="rounded">Ver más</button></Link> 
                    </div>
                </div>
            </div>
            
        </div>
    </section>
     );
}
 
export default Propiedades;