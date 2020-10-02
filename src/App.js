import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Propiedades1 from './components/Propiedades/Propiedades1'
import Propiedades4 from './components/Propiedades/Propiedades4'
import Propiedades2 from './components/Propiedades/Propiedades2'
import Propiedades3 from './components/Propiedades/Propiedades3'
import Propiedades5 from './components/Propiedades/Propiedades5'
import Propiedades6 from './components/Propiedades/Propiedades6'



function App() {
  return (
    <>           
             <BrowserRouter>
             <Switch>

            <Route exact path="/" component={Home}/>
            <Route exact path="/propiedades1" component={Propiedades1}/>
            <Route exact path="/propiedades2" component={Propiedades2}/>
            <Route exact path="/propiedades3" component={Propiedades3}/>
            <Route exact path="/propiedades4" component={Propiedades4}/>
            <Route exact path="/propiedades5" component={Propiedades5}/>
            <Route exact path="/propiedades6" component={Propiedades6}/>
            </Switch>
            </BrowserRouter>
      
        </>
  );
}

export default App;
