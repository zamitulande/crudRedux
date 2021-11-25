import React from 'react';
import Header from './components/Header';
import Guardas from './components/Guardas';
import NuevoGuarda from './components/NuevoGuarda';
import EditarGuarda from './components/EditarGuarda';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router'


function App() {
  return (
    <Router>
         <Header/>
         <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Guardas} />
                  <Route exact path="/guarda/nuevo" component={NuevoGuarda} />
                  <Route exact path="/guarda/editar/:id" component={EditarGuarda} />
              </Switch>

         </div>
    </Router>
  );
}

export default App;
