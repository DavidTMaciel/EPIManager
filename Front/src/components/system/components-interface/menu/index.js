import React from 'react';
import './style.css';
import logo from '../../../../img/safetyPNG.png';


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
                        <a>Home</a>
                        <a>Cadastros</a>
                        <a>Epi</a>
                        <a>Centro de custos</a>
                        <a>Colaboradores</a>
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