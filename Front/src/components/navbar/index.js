import React from 'react';
import './style.css';
import logo from '../../img/safetyPNG.png';
import bandeira from '../../img/bandeira.png';
import icone from '../../img/icone.png';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <header className="nav-bar">
            <div className="nav-links-left">
                <div className='nav-links-left-primary'>
                    <img src={bandeira} alt='Bandeira do Brasil' className='bandeira'></img>
                    <img src={icone} className='icone' />
                    <a href="#">Fale com um representante de vendas</a>
                </div>
                <div className='nav-links-left-secondary menu'>
                    <Link to="/login">Login</Link>
                    <a href="#">Suporte ao Cliente</a>
                    <a href="#">Sobre</a>
                </div>
            </div>
            <div className="nav-links-right">
                <div className='container-logo-navbar'>
                    <a><img src={logo} alt='Logo da empresa cujo o nome é SafeTy' className='logo' /></a>
                    <div className='nav-links-right-primary'>
                        <Link to="/product">Assine </Link>
                        <Link to="/pagSignature">Preços </Link>
                        <Link to="/interface">Software </Link>
                    </div>
                </div>

                <div>
                    <button><a href=''>Começe gratis ou peça uma demonstração</a></button>
                </div>

            </div>
        </header>
    );
}

export default NavBar;
