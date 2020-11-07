import './App.css'
import React from 'react'
import Login from './componentes/auth/Login'
import OlvideContrasena from './componentes/OlvideContrasena'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login}    />
        <Route exact path = "/olvide-contrasena" component = {OlvideContrasena} />
      </Switch>
    </Router>
  );
}

export default App;
