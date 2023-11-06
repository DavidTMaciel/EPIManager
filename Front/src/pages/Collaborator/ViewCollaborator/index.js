import React, { useState } from 'react';
import api from '../../../services/axios';
import Menu from '../../../components/components-interface/menu';
import './style.css'


export default function ViewCollaborator() {

    const [displayViewCollaborator, setDisplayViewRelease] = useState([]);

    React.useEffect(() => {
        api.get('http://[::1]:3000/list-all-collaborators').then((response) => {

            const formattedCollaborators = response.data.map(collaborator => {
                const createdAtDate = new Date(collaborator.createdAt);
                const dia = createdAtDate.getDate();
                const mes = createdAtDate.getMonth() + 1;
                const ano = createdAtDate.getFullYear();
                const dataFormatada = `${dia}/${mes}/${ano}`;
                
                return {
                    ...collaborator,
                    createdAt: dataFormatada
                };
            });
            
            setDisplayViewRelease(formattedCollaborators);
        }).catch((err) => {
            console.log('Erro ao exibir lista de collaboradores' + err);
        })
    })

    return (
        <div>
            <Menu />
            <div className="view-collaborrator">
                <div className='interface-collaborator'>
                    <table >
                        <thead className='table-collaborator'>
                            <tr>
                                <th>Data entrada</th>
                                <th>Nome</th>
                                <th>Funcão</th>
                                <th>Obra</th>
                                <th>Empresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayViewCollaborator.map(collaborator => (
                                <tr key={collaborator.id}>
                                    <td>{collaborator.createdAt}</td>
                                    <td>{collaborator.name}</td>
                                    <td>{collaborator.office}</td>
                                    <td>{collaborator.constructions}</td>
                                    <td>{collaborator.company}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}