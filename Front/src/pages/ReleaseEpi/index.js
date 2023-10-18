import React from "react";
import './style.css';
import Menu from "../../components/components-interface/menu";


export default function ReleaseEpi() {
    return (
        <div>
            <Menu />
            <div className="container-release">
                <div>
                <button>Visualizar</button>
                <button>Registar Epi</button>
                </div>

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
