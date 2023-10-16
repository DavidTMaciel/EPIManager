import React, { useState } from 'react';
import './style.css';
import logo from '../../img/safetyPNG.png';
import axios from 'axios'; // Importe o Axios

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://[::1]:5001/login', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className='pag-login'>
      <div className='login'>
        <img src={logo} alt='logo da empresa safeti'></img>
        <p>Bem-vindo(a) à plataforma Safeti! Informe seu e-mail.</p>
        <form onSubmit={handleSubmit}>
          <label>E-mail:</label>
          <input
            type='email'
            name='name'
            placeholder='exemple@email.com.br'
            value={formData.name}
            onChange={handleChange}
          />
          <label>Senha:</label>
          <input
            type='password'
            name='password'
            placeholder='*******'
            value={formData.password}
            onChange={handleChange}
          />
          <button type='submit'>Acessar</button>
        </form>
      </div>
      <div className='footer'><hr />© 2023 Safeti. Todos os direitos reservados.</div>
    </div>
  );
}
