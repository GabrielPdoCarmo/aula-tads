import { useEffect, useState } from "react";
import "./SimulateApi.css";

const infoCampoMourao = {
    dataCriacao: "10/10/1947",
    nome: "Campo Mourão",
    qtdHabitantes: 99000,
    universidades: ["Integrado", "UTFPR", "Unicampo", "Unoeste",],
}

const SimulateApi = () => {
    const [info, setInfo] = useState();
    console.log(info)
    
    useEffect(() => {
        setTimeout(() => {
            setInfo(infoCampoMourao);
        }, 3000)
    }, []);


    return (
        <div className="container">{info ? (<div>
            <h3>{info.nome}</h3>
            <h4>{info.dataCriacao}</h4>
            <h4>{info.qtdHabitantes}</h4>
            <h4>{`${info.universidades}.`}</h4>
        </div>
        ): (
            <div>Carregando...</div>
        )}</div>
    );
}

export default SimulateApi;