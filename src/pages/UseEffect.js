import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState();
    const [myState2, setMyState2] = useState();

    useEffect(() => {
        console.log(
            "useEffect execultando na montagem do e atualização do componentes"
        );
    }, [myState, myState2])

    useEffect(() => {
        console.log("useEffect execultando  na montagem do componente");
    }, [])

    useEffect(() => {
        return () => {
            console.log("Função execultanda na desmontagem do componente");
        }
    }, [])


    const updateMyState = () => {
        setMyState("meu novo myState");
    };

    return (
        <div>
            <button onClick={updateMyState}> Disparar UseEffect</button>
        </div>
    );
}

export default UseEffect;