import { useState } from "react";

function Form(){
    const [nom, setNom] = useState("");

    return(
        <div className="form-container">
            <input onChange={(e) => setNom(e.target.value)}/> 
            <p> Bonjour {nom}</p>
        </div>
    );
}
export default Form;