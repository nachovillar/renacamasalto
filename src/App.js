import './App.css'
import React from 'react'
import Login from './componentes/auth/Login'
import OlvideContrasena from './componentes/confirmarContraseña/OlvideContrasena'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PerfilAdministrador from './componentes/Perfiles/administrador/PerfilAdministrador'

import ActividadState from './context/actividad/ActividadState'
import ProgramaState from './context/programa/ProgramaState'
import BeneficiarioState from './context/beneficiario/BeneficiarioState'
import AlertaState from './context/alerta/AlertaState'
import AuthState from './context/auth/AuthState'
import BarraState from './context/barra/BarraState'
import VoluntarioState from './context/voluntario/VoluntarioState'

function App() {

 
   
  return (
    <BeneficiarioState>
    <ActividadState>
      <VoluntarioState>
      <ProgramaState>
        <AlertaState>
          <AuthState>
            <BarraState>
              <Router>
              <Switch>
                <Route exact path = "/" component = {Login}    />
                <Route exact path = "/olvide-contrasena" component = {OlvideContrasena} />
                <Route exact path = "/perfil-admin" component = {PerfilAdministrador} />
              </Switch>
              </Router>
            </BarraState>
          </AuthState>
        </AlertaState>
      </ProgramaState>
      </VoluntarioState>
    </ActividadState>
    </BeneficiarioState>
  );
}

export default App;
