import React, { useContext , useEffect} from 'react';
import './Barra.css'
import logo from '../../imagenes/logo.png';
import img_perfil from '../../imagenes/perfil.jpg';
import  {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';
import userAuth from '../auth/UserAuth'
import jwt_admin from 'jsonwebtoken'

import barraContext from '../../context/barra/BarraContext'
import authContext from '../../context/auth/AuthContext' 



const Barra = (props) => {

    userAuth.login()

    const barrasContext = useContext(barraContext)
    const { mostrarProgramas, mostrarEventos, mostrarVoluntarios, mostrarBeneficiarios, mostrarInicio } = barrasContext

    const authsContext = useContext(authContext)
    const { mensaje, autenticado, logout } = authsContext

    useEffect(() =>{

        if(!autenticado){
            console.log("cerrar sesion")
            
        }

    }, [mensaje, autenticado, props.history])

    const onClickInicio = () => {
        mostrarInicio()

    }

    const onClickProgramas = () =>{
        mostrarProgramas()
    }

    const onClickEventos = () => {
        mostrarEventos()
    }

    const onClickVoluntarios = () => {
        mostrarVoluntarios()
    }

    const onClickBeneficiarios = () => {
        mostrarBeneficiarios()
    }
    const cerrarSesion = e =>{
        logout()
        userAuth.logout()
        window.location.replace('');
    }
    return ( 
        
        <div className="container-fluid contenedorBarra">
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand href="/"><img className="logoBarra" src={logo} alt="Logo Reñaca más alto"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-center barraMenu">
                        <Nav.Link className="menu" onClick = {() => onClickInicio()} >Inicio</Nav.Link>
                        {userAuth.isCoordinador() === true ?
                        <Nav.Link className="menu"  title="Programas" id="collasible-nav-dropdown" onClick = {() => onClickProgramas()}>
                            Programas
                       </Nav.Link> : <div></div>
                       }

                        <Nav.Link className="menu" title="Eventos" id="collasible-nav-dropdown" onClick = {() => onClickEventos()}>
                            
                            Eventos 
                                                   
                        </Nav.Link>
                        {userAuth.isDirectivo() === true
                         ? (<Nav.Link className="menu" title="Voluntarios"  onClick = {() => onClickVoluntarios()}>
                            Voluntarios
                            </Nav.Link>) : <div></div>
                        }
                        {userAuth.isCoordinador() === true ?
                        <Nav.Link className="menu" title="Beneficiarios" id="collasible-nav-dropdown" onClick = {() => onClickBeneficiarios()}>
                            Beneficiarios
                        </Nav.Link> : <div></div>
                        }
                    </Nav>
                    <div className="perfilUsuario">
                        <Nav>
                            <NavDropdown title={
                                <div className="img_Perfil">
                                    <img className="imgPerfil" src={img_perfil}></img>
                                    <p>{userAuth.permisos}</p>
                                </div>
                            }>
                                <NavDropdown.Item href="#">TipoUser</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/"><Link className="enlace-cerrar-sesion" onClick ={cerrarSesion} >Cerrar Sesión</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}   
 
export default Barra

