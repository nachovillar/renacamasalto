import './App.css'
import React from 'react'
import Login from './componentes/auth/Login'
import OlvideContrasena from './componentes/OlvideContrasena'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PerfilAdministrador from './componentes/Perfiles/PerfilAdministrador'
import PerfilVoluntario from './componentes/Perfiles/PerfilVoluntario'


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login}    />
        <Route exact path = "/olvide-contrasena" component = {OlvideContrasena} />
        <Route exact path = "/perfil-admin" component = {PerfilAdministrador} />
        <Route exact path = "/pefil-voluntario" component = {PerfilVoluntario} />
      </Switch>
    </Router>
    
  );
}

export default App;
