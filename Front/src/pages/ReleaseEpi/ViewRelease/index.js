import React, { useState } from "react";
import api from "../../../services/axios";

export default function ViewRelease() {

    const[displayViewRelease, setDisplayViewRelease] = useState([]);

    React.useEffect(()=>{
        api.get('http://[::1]:3000/list-all-form').then((response)=>{
            setDisplayViewRelease(response.data);
        }).catch((err)=>{
            console.log("Error ao exibir dados!" + err);
        })
    }, []);
    
    if(!displayViewRelease)
    return null


    return (
        <div className="release-epi">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Data da Liberação</th>
                            <th>Colaborador</th>
                            <th>EPI</th>
                            <th>QNTD</th>
                        </tr>
                    </thead>
                    <tbody>                       
                        {displayViewRelease.map(release =>(
                            <tr key={release.id}>
                                <td>{release.collaboratorID}</td>
                                <td>{release.itens}</td>
                            </tr>
                        ))}                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}