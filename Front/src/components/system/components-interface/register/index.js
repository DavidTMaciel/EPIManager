import React, { useState } from 'react';
import SuccessNotification from './notification';
import './style.css'
import api from '../../../../services/axios'
import Menu from '../menu/index'

function RegisterCollaborator() {

  const [formData, setFormData] = useState({
    name: '',
    office: '',
    admission_Date: '',
    constructions: '',
    company: '',
  });
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/create-new-collaborator', formData);
      console.log(response.data.message);
      setShowSuccessNotification(true);
    } catch (error) {
      console.error('Erro ao criar colaborador:', error);
    }
  };
  return (
    <div className='register'>
      <Menu />
      <div className="form-container">
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="office"
            placeholder="Cargo"
            value={formData.office}
            onChange={handleChange}
          />
          <input
            type="text"
            name="admission_Date"
            placeholder="Data de Admissão"
            value={formData.admission_Date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="constructions"
            placeholder="Construções"
            value={formData.constructions}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            value={formData.company}
            onChange={handleChange}
          />
          <button type="submit">Criar Colaborador</button>
        </form>
        {showSuccessNotification && (
          <SuccessNotification message="Colaborator cadastrado com sucesso" />
        )}
      </div>
    </div>
  )
}

export default RegisterCollaborator;