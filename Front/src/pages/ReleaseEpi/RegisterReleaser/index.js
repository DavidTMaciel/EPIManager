import React from "react";
import './style.css';

export default function RegisterRelease() {
    return (
        <div>
            <div className="container-release">
                <div className="release-epi">
                    <form method="POST">
                        <input type="text" placeholder="Funcionario*"></input>
                        <input type="text" placeholder="Codigo*"></input>
                        <input type="number" placeholder="Quantidades*"></input>
                        <input type="text" placeholder="C.A*"></input>
                        <input type="date" placeholder="Data de Entrega*"></input>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
