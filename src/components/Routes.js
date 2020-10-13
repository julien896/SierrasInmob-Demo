import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Inversiones from './Inversiones';
import Propiedades1 from './Propiedades/Propiedades1'
import Propiedades4 from './Propiedades/Propiedades4'
import Propiedades2 from './Propiedades/Propiedades2'
import Propiedades3 from './Propiedades/Propiedades3'
import Propiedades5 from './Propiedades/Propiedades5'
import Propiedades6 from './Propiedades/Propiedades6'


const Routes = () => {
    return ( 
        <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route exact path="/propiedades1" component={Propiedades1}/>
          <Route exact path="/propiedades2" component={Propiedades2}/>
          <Route exact path="/propiedades3" component={Propiedades3}/>
          <Route exact path="/propiedades4" component={Propiedades4}/>
          <Route exact path="/propiedades5" component={Propiedades5}/>
          <Route exact path="/propiedades6" component={Propiedades6}/>
          <Route exact path="/inversiones" component={Inversiones}/>
        
        </Switch>
      </BrowserRouter>

     );
}
 
export default Routes;