import { useRef, useState } from "react";

function ListeUtilisateur() {
    
    const [user, setUser] = useState([
        {id:1 , nom: "Meryem" , prenom: "Souaini"},
        {id:2 , nom: "ahmad" , prenom: "alaoui"},
        {id:3 , nom: "samia" , prenom: "kmiti"},
    ]);

    const inputRefNom = useRef()
    const inputRefPrenom = useRef()

    const HandleClickAdd = () => {
        const textNom = inputRefNom.current.value;
        const textPrenom = inputRefPrenom.current.value;
        setUser([...user, {id: user.lenth + 1, nom: textNom, prenom: textPrenom}])
        inputRefNom.current.value =""
        inputRefPrenom.current.value =""
    }

    return(
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.nom}</li>
            ))}
            <input ref= {inputRefNom}></input>
            <input ref= {inputRefPrenom}></input>
            <button onClick={HandleClickAdd}>Ajouter User </button>
        </ul>
        
    );

}
export default ListeUtilisateur;