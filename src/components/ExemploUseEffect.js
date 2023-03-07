import { useState, useEffect } from 'react';

export default function ExemploUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {    
        document.title = `Vc clicou ${count} vezes`;  // Update the document title using the browser API  
    }); 
    
    return (
        <div>
            <p>Vc clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
            Clique em mim
            </button>
        </div>
    );
};
