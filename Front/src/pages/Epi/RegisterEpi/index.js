import React, { useState } from 'react';
import './style.css';
import api from '../../../services/axios';
import Menu from '../../../components/components-interface/menu';
import SuccessNotification from '../../../components/notification';

function RegisterEpi() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('http://[::1]:3000/create-new-epi', { name });
      setMessage(response.data.message);
      setShowSuccessNotification(true);
    } catch (error) {
      setMessage('Erro ao criar o EPI', error);
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
        {showSuccessNotification && (
          <SuccessNotification message="EPI cadastrado com sucesso" />
        )}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default RegisterEpi;
