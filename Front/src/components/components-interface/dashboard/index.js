import React from "react";
import './style.css'

function Dashboard() {
    return (

            <div className='dashboard'>
                <div className='content-dashboard' id='color-first'>
                    <div className='field-content-dashboard'>
                        <h3>Total de funcionários</h3>
                        <p>50</p>
                    </div>
                </div>
                <div className='content-dashboard' id='secondary-color'>
                    <div className='field-content-dashboard'>
                        <h3>Centro de Custos</h3>
                        <p>50</p>
                    </div>
                </div>
                <div className='content-dashboard'>
                    <div className='field-content-dashboard'>
                        <h3>Relatorios de Estatísticas</h3>
                        <p>50</p>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard;