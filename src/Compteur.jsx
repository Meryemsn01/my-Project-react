import { useState } from "react";

function Compteur(){
const [compteur, setCompteur] = useState(0);
 
const HandleClickAdd = () => {
    setCompteur(compteur => compteur + 1);
}

const HandleClickDes = () => {
    setCompteur(compteur =>compteur - 1);
}
const HandleClickReset = () => {
    setCompteur(0);
}
return(
 <div className="compteur-container">
    <p className="nombre">{compteur}</p>
    <div className="boutons">
         <button onClick={HandleClickAdd}>Augmenter</button>
         <button onClick={HandleClickDes}>Diminuer</button>
         <button onClick={HandleClickReset}>Reset</button>
    </div>
 </div>

);
}
export default Compteur;