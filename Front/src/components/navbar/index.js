import React from 'react';
import './style.css';
import logo from '../../img/safetyPNG.png';
import bandeira from '../../img/bandeira.png';
import icone from '../../img/icone.png';



function NavBar() {
    return (
        <header className="nav-bar">
            <div className="nav-links-left">
                <div className='nav-links-left-primary'>
                    <img src={bandeira} alt='Bandeira do Brasil' className='bandeira'></img>
                    <img src={icone} className='icone'/>
                    <a href="#">Fale com um representante de vendas</a>
                </div>
                <div className='nav-links-left-secondary menu'>
                    <a href="/interface">Login</a>
                    <a href="#">Suporte ao Cliente</a>
                    <a href="#">Sobre</a>
                </div>
            </div>
            <div className="nav-links-right">
                <div>
                <a><img src={logo} alt='Logo da empresa cujo o nome é SafeTy' className='logo'/></a>
                </div>
                <div className='nav-links-right-primary'>                   
                    <a href="#">Assine </a>
                    <a href="#">Preços </a>
                    <a href="#">Software </a>
                </div>
                <div>
                    <button><a href=''>Começe gratis ou peça uma demonstração</a></button>
                </div>

            </div>
        </header>
    );
}

export default NavBar;
