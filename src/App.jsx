import ComponenteConMemo from './components/ComponenteConMemo';
import ComponenteConCallback from './components/ComponenteConCallback';
import ComponenteConRef from './components/ComponenteConRef';
import React from 'react';

function App() {

  return (
    <>
        <p>Componente con useMemo</p>
        <ComponenteConMemo/>
        <hr/>
        <p>Componente con useCallback</p>
        <ComponenteConCallback/>
        <hr/>
        <p>Componente con useRef</p>
        <ComponenteConRef/>
    </>
  )
}

export default App;
