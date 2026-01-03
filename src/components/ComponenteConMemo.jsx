import { useState, useMemo } from 'react';

const calculaLento=(num)=>{
    console.log('Calculando... ');
    for(let i=0; i<1000000; i++){
        num +=1;
    }
    return num;
};

function ComponenteConMemo(){
    const [numero, setNumero] = useState(100);
    const [contador, setContador] = useState(0);

    const resultadoCostoso= useMemo(()=> calculaLento(numero), [numero]);

    return(
        <div>
            <h3>Resultado: { resultadoCostoso }</h3>
            <button onClick={()=> setNumero(numero + 1)}  >
                cambiar Numero ({numero})
            </button>
            <hr/>
            <h4>contador: {contador}</h4>
            <button onClick={()=> setContador(contador +1)}>
                Incrementar setContador
            </button>
        </div>
    );
}

export default ComponenteConMemo;
