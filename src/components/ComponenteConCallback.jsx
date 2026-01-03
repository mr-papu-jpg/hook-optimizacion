import React,{ useState, useCallback } from "react";

const BotonMemorizado = React.memo(({ onClick })=>{
    console.log('Boton memorizado re-renderizado');
    return <button onClick={onClick}>Presionae Boton</button>;
});

function ComponenteConCallback(){
    const [ contador, setContador ]=useState(0);
    
    const handleClick= useCallback(()=>{
        setContador(prev=> prev+1);
    },[]);//dependencias vacias, la funcion nunca cambia

    return(
        <div>
            <h3>contador Padre:{contador}</h3>
            <BotonMemorizado onClick={handleClick}/>
            <hr/>
            <button onClick={()=>console.log('Renderizado padre...')}>
                Re-renderizado Padre.
            </button>
        </div>
    );
}

export default ComponenteConCallback;
