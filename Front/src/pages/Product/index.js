import React from 'react';
import Header from '../../components/Header';
import './style.css'

function Product() {
    return (
        <div >
            <div><Header /></div>
            <div className='product'>
                <div className='registration'>
                    <form>
                        <div className='form-name input-spacing'>
                            <input type='text' placeholder='Nome *' className='custom-placeholder width-input-minors'></input>
                            <input type='text' placeholder='Sobrenome *' className='custom-placeholder width-input-minors'></input>
                        </div>
                        <input type='email' placeholder='E-mail *' className='email input-spacing custom-placeholder'></input>
                        <div className='form-contact input-spacing' >
                            <input type='text' placeholder='Contato*' className='custom-placeholder width-input-minors'></input>
                            <select id="country" name="country" className="select-styled width-input-minors">
                                <option value="brasil">Brasil</option>
                                <option value="estadosunidos">Estados Unidos</option>
                                <option value="canada">Canadá</option>
                            </select>
                            
                        </div>
                        <div className='form-send-email'>
                            <label>
                                <input type="checkbox" name="receberEmails" value="sim" />
                                Eu concordo em receber comunicações de marketing da SafeTI e reconheço que posso cancelar esse recebimento a qualquer momento visitando a <span>Central de preferências.</span>
                            </label>
                        </div>
                        <input type="submit" value="Começar agora" className='send-form'></input>
                        <p>Ao clicar no botão Começar agora abaixo, você concorda com os <span>Termos e condições</span> e com a <span>Política de privacidade.</span></p>
                    </form>
                </div>
                <div className='slogan'>
                    <h2>Junte-se aos demais
                        usuários
                        que confiam na
                        SafeTI.</h2>
                    <p>Faça um teste grátis do eSignature por 30 dias.</p>
                </div>
            </div>
            <div className='footer'><hr />© 2023 Safeti. Todos os direitos reservados.</div>
        </div>
    );  
}

export default Product;