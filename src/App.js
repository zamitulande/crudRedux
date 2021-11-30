import React from 'react';
import {Switch} from 'react-router';

//importaciones redux
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store';
import Principal from './components/Principal';
import Guardas from './components/Guardas';
import NuevoGuarda from './components/NuevoGuarda';
import NuevaDotacion from './components/nuevaDotacion';
import Dotaciones from './components/Dotaciones';
import EditarGuarda from './components/EditarGuarda';
import EditarDotacion from './components/editarDotacion';
import Header from './components/Header'



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
      <Switch>
          <Route exact path="/" component={Principal}  /> 
          <Route exact path="/guarda" component={Guardas}  />
          <Route exact path="/guarda/nuevo" component={NuevoGuarda} />
          <Route exact path="/dotacion" component={NuevaDotacion} />
          <Route exact path="/dotaciones" component={Dotaciones} />
          <Route exact path="/guarda/editar/:id" component={EditarGuarda} />
          <Route exact path="/dotacion/editar/:id" component={EditarDotacion} />
          
          
          
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
