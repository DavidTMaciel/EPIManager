import React from 'react';
import './style.css';
import Header from '../../components/Header';

export default function PagSignature() {
    return (
        <div className='pagsignature'>
            <Header />
            <div className='topo-signature'>
                <h2>Planos gerais de preços da SafeTI</h2>
                <p>A melhor solução de assinatura eletrônica</p>
            </div>
            <div className='plans'>
                <div className='box-plans'>
                    <h3>Teste Gratis</h3>
                    <button>Comprar agora</button>                  
                </div>
                <div className='box-plans'>
                    <h3>Mensal</h3>
                    <button>Comprar agora</button>
                </div>
                <div className='box-plans'>
                    <h3>Trimestral</h3>
                    <button>Comprar agora</button>
                </div>
                <div className='box-plans'>
                    <h3>Anual</h3>
                    <button>Comprar agora</button>
                </div>
            </div>
            
        </div>
    )
}