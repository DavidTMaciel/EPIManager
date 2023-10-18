import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import Menu from '../../components/components-interface/menu';

function RegisterEpi() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/create-new-epi', { name });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Erro ao criar o EPI');
    }
  };

  return (
    <div >
      <Menu />
      <div className='register'>
        <h2>Cadastro de EPI</h2>
        <form onSubmit={handleSubmit} className="register-epi">
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder='Epi'
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default RegisterEpi;
