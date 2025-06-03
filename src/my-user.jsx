import { useState } from "react";

function User() {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("")

    const [user, setUser] = useState([])


    const handleClickAdd = () => {
        setUser([...user, {nom , prenom}])
        setNom("")
        setPrenom("")
    }
    return(
        <div>
            {
                user.length === 0 
                ? <p>Aucun Utilisateur</p>
                : <ul>
                {user.map((user, index) => (
                    <li key={index} > {user.nom} {user.prenom}</li>
                ))}
            </ul>
            }
            
           
            <input value={nom} onChange={(e) => setNom(e.target.value)}></input>
            <input value={prenom} onChange={(e) => setPrenom(e.target.value)}></input>
            <button onClick={handleClickAdd}> Ajouter</button>
        </div>
    );
}
export default User;