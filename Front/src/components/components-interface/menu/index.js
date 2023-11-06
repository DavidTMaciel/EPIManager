import React from 'react';
import './style.css';
import logo from '../../../img/safetyPNG.png';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className='menu'>
            <div className='top-menu'>
                <img src={logo} />
            </div>
            <div className='content-menu'>
                <div className='nav-menu'>
                    <h1>Menu Principal</h1>
                    <div className='links-menu'>
                        <Link to="/interface">Home</Link>
                        <Link to="/registerCollaborator">Cadastrar Colaborador</Link>
                        <Link to="/registerEpi">Epi</Link>
                        <Link to="/releaseEpi">Liberação de Epi</Link>
                        <Link to="/collaborators">Colaboradores</Link>
                        <a>Relatorios</a>
                    </div>
                </div>
                <div className='credits'>
                    <p>© 2023 Safeti. Todos os direitos reservados.</p>
                </div>

            </div >
        </div>
    )
}
export default Menu;