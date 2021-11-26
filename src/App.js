import React from 'react';
import Header from './components/Header';
import Guardas from './components/Guardas';
import NuevoGuarda from './components/NuevoGuarda';
import EditarGuarda from './components/EditarGuarda';
import Dotacion from './components/Dotacion';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';

//importaciones redux
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
         <Header/>
         <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Guardas} />
                  <Route exact path="/guarda/nuevo" component={NuevoGuarda} />
                  <Route exact path="/guarda/editar/:id" component={EditarGuarda} />
                  <Route exact path="/guarda/nuevo/dotacion" component={Dotacion} />
              </Switch>

         </div>
         </Provider>
    </Router>
  );
}

export default App;
