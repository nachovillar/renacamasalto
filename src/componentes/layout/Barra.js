import React from 'react';
import './Barra.css'
import logo from '../../imagenes/logo.png';
import img_perfil from '../../imagenes/perfil.jpg';
import  {Navbar,Nav, NavDropdown} from 'react-bootstrap'

const Barra = () => {
    return ( 
        
        <div className="container-fluid contenedorBarra">
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand href="#"><img className="logoBarra" src={logo} alt="Logo Reñaca más alto"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-center barraMenu">
                        <Nav.Link className="menu" href="#">Inicio</Nav.Link>
                        <NavDropdown className="menu" title="Programas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Nueva Sesión</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Opcion2</NavDropdown.Item>
                       </NavDropdown>
                        <NavDropdown className="menu" title="Eventos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Lista de Eventos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Opcion2</NavDropdown.Item>                           
                        </NavDropdown>
                        <NavDropdown className="menu" title="Voluntarios" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Crear cuenta</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Opcion2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="menu" title="Beneficiarios" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Lista de Inscritos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Opcion2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="perfilUsuario">
                        <Nav>
                            <NavDropdown title={
                                <div className="img_Perfil">
                                    <img className="imgPerfil" src={img_perfil}></img>
                                    <p>NameUser</p>
                                </div>
                            }>
                                <NavDropdown.Item href="#">TipoUser</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}   
 
export default Barra

