import React from 'react';
import './style.css';
import imagebody from '../../img/image-body.png'

function Body() {
    return (
        <body>
            <div className='banner'>
                <p>Maximize a Segurança no Trabalho com Nosso Novo Software de Gestão de Ficha de EPI.</p>
            </div>
            <div className='download'>
                <p>Baixe agora para obter acesso imediato às vantagens e recursos exclusivos.</p>
                <button>Download</button>
            </div>
            <div className='secondary-session'>
                <div>
                    <img src={imagebody} alt='Mulher segurando um tablet, sendo a representação da utilização do serviço oferecido'></img>
                </div>
                <div className='values'>
                    <h2 id='title-values'>EM QUE ACREDITAMOS?</h2>
                    <h2>Nós acreditamos na inovação:</h2>
                    <p>Na nossa empresa, temos uma crença fundamental que nos guia em tudo o que fazemos: acreditamos no poder da inovação para melhorar a segurança e eficiência nas organizações. Acreditamos que cada desafio é uma oportunidade de criar soluções inteligentes que impulsionam o progresso e tornam o ambiente de trabalho mais seguro e produtivo. Uma dessas soluções é o nosso software de gestão de EPI’S.</p>
                    <h2>Qual é a nossa missão?</h2>
                    <p>Acreditamos na simplicidade e na acessibilidade. Nossa missão é fornecer uma solução de gestão que seja fácil de usar e acessível para empresas de todos os tamanhos. Acreditamos que a tecnologia deve ser uma aliada, não uma barreira, para a segurança no local de trabalho. Com nosso software intuitivo, estamos democratizando o acesso a ferramentas avançadas de gestão de riscos, permitindo que todas as organizações protejam seus colaboradores e ativos de maneira eficaz.</p>
                </div>
            </div>
        </body>
    )
}

export default Body;
