import './App.css'
import React from 'react'
import Login from './componentes/auth/Login'
import OlvideContrasena from './componentes/OlvideContrasena'
<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.min.css'
=======
>>>>>>> 4547ee75fb0e51bf44a8107c564be8d900010332
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PerfilAdministrador from './componentes/Perfiles/administrador/PerfilAdministrador'
import PerfilVoluntario from './componentes/Perfiles/voluntario/PerfilVoluntario'

import ActividadState from './context/actividad/ActividadState'


function App() {

  return (
<<<<<<< HEAD
    
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login}    />
        <Route exact path = "/olvide-contrasena" component = {OlvideContrasena} />
        <Route exact path = "/perfil-admin" component = {PerfilAdministrador} />
        <Route exact path = "/pefil-voluntario" component = {PerfilVoluntario} />
      </Switch>
    </Router>
    
=======
    <ActividadState>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Login}    />
          <Route exact path = "/olvide-contrasena" component = {OlvideContrasena} />
          <Route exact path = "/perfil-admin" component = {PerfilAdministrador} />
          <Route exact path = "/pefil-voluntario" component = {PerfilVoluntario} />
        </Switch>
      </Router>
    </ActividadState>
>>>>>>> 4547ee75fb0e51bf44a8107c564be8d900010332
  );
}

export default App;
