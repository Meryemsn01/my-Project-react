import { useRef, useState } from "react";


function FormuseRef() {

    const [valeur, setValeur] = useState("")
    const inputRef = useRef()

    const AfficherValeur = () => {
        const p = inputRef.current.value;
        setValeur(p);
    }


    return (
        <div>
            <input ref={inputRef} />  
            <button onClick={AfficherValeur}>Afficher valeur</button>
            <p>{valeur}</p>
        </div>
    )
}

export default FormuseRef;