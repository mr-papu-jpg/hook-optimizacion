import { useRef } from 'react';

function ComponenteConRef(){
    const inputRef=useRef(null);

    const enfocarInput=()=>{
        if(inputRef.current){
            inputRef.current.focus();

            inputRef.current.style.backgroundColor='yellow';
        }
    };

    return(
        <div>
            <input type='text' ref={inputRef} placeholder='soy un input'/>
            <br />
            <button onClick={ enfocarInput }>
                Hacer foco y cambiar color 
            </button>
            <p>
                **Nota:** Usar useRef para manipualr el DOM debe de hacerse con moderacion.
            </p>
        </div>
    );
}

export default ComponenteConRef;
