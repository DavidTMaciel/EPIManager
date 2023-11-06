import React, { useState } from "react";
import RegisterRelease from "./RegisterReleaser";
import ViewRelease from "./ViewRelease";
import Menu from "../../components/components-interface/menu";
import './style.css'

export default function ReleaseEpi() {

    const [displayReleaser, setdislayRelease] = useState(true);

    const toglleDisplay = () => {
        setdislayRelease(!displayReleaser)
    };
    return (
        <div>
            <Menu />
            <div className="container-release-epi">
                <div className="release-epi-button">
                    <button
                        onClick={toglleDisplay}
                        className={displayReleaser ? 'active-button' : 'inactive-button'}
                    >
                        Cadastro
                    </button>
                    <button
                        onClick={toglleDisplay}
                        className={displayReleaser ? 'inactive-button' : 'active-button'}
                    >
                        Visualizar
                    </button>
                </div>
                {displayReleaser ? <RegisterRelease /> : <ViewRelease />}
            </div>
        </div>
    )
}
