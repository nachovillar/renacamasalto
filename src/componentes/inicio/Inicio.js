import React from 'react'
import construccion from '../../imagenes/construccion.png'
import './inicio.css'
import Carousel from 'react-bootstrap/Carousel'

import org6 from '../../imagenes/organizacion/Org6.jpg'
import org7 from '../../imagenes/organizacion/Org7.png'
import org8 from '../../imagenes/organizacion/Org8.png'
import org9 from '../../imagenes/organizacion/Org9.png'

const Inicio = () => {
    return(

        <div className="container"> 
            <div>
                <div className="titInicio">
                    <h2>Acerca de Reñaca Más Alto</h2>
                </div>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Fundación Reñaca Más Alto es un espacio de encuentro y vinculación, que desde el año 2011 busca generar trabajo colaborativo para el desarrollo integral de la comunidad de Reñaca Alto, ubicada en la periferia de la ciudad de Viña del Mar. <br/><br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A través de nuestros programas y actividades, aportamos al fortalecimiento del tejido social y fomentamos la equidad territorial, promoviendo la participación de niños, niñas, jóvenes y sus familias. Con un trabajo constante y permanente, buscamos contribuir al desarrollo de una nueva sociedad, donde primen los valores de Vínculo, Comunidad, Territorio, Voluntariado y Participación, desde un enfoque de derechos. Nuestras principales temáticas de trabajo son la Prevención y Promoción de Derechos de Infancia y Juventud, Familia, Educación, Hábitat, Vivienda y Desarrollo Comunitario.
                </p>
            </div>
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={org6}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={org7}
                        alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={org8}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={org9}
                        alt="Four slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="">
                <div className="titInicio">
                    <h2>Nuestros Valores</h2>
                </div>
                <div className="row">
                    <div className="col-md-4"> 
                        <h3>Vínculo</h3>
                        <p>
                            El Vínculo es el articulador de nuestras prácticas. Nos invita a mirarnos a los ojos y construir en conjunto.
                        </p>
                        <ul>
                            <li>Amistad</li>
                            <li>Permanencia</li>
                            <li>Horizontalidad</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Comunidad y Territorio</h3>
                        <p>
                            Estamos convencidos de que las soluciones se construyen desde la originalidad del territorio y sus comunidades.
                        </p>
                        <ul>
                            <li>Tejido Social</li>
                            <li>Pertenencia</li>
                            <li>Autogestión</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Voluntariado y Participación</h3>
                        <p>
                            Creemos en el valor del voluntariado y la participación como factores de cambio decisivos en el desarrollo de nuestra sociedad.
                        </p>
                        <ul>
                            <li>Factor de cambio</li>
                            <li>Transformación</li>
                            <li>Compromiso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Inicio