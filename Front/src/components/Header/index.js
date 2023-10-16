import React from 'react';
import logo from '../../img/safetyPNG.png'
import './style.css'

function Header(){
    return(
        <div className='header'>
            <img src={logo} alt='Logo da SafeTi' className='logo-header'/>
        </div>
    );
}

export default Header;