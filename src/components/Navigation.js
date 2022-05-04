import './styles/Navigation.css';
import React from 'react';

function Navigation() {
    return (
        <div className="nav">
            <div className="nav-img">
                <a href="/">
                    <img src="images/fesw-logo-w.png" alt="fesw-logo" />
                </a>
            </div>
            <div id="navigation">
                <a href="/proyectos"> Proyectos Actuales </a>
                <a href="/versiones-anteriores"> Versiones Anteriores </a>
                <a href="#contacto"> Contacto </a>
            </div>
            <div className="nav-img">
                <a href="https://www.inf.utfsm.cl/">
                    <img src="images/Departamento-de-Informática.png" alt="fesw-logo" />
                </a>
            </div>
        </div>
    );
}

export default Navigation;