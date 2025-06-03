import { useState } from "react";
import AfficherFruit from "./AfficherFruit";
import AjouterFruit from "./AjouterFruit";

function ListeFruit(){

    const [fruit, setFruit]=useState(["orange","banane","pomme","fraise"])

    return(
        <div>
            <AfficherFruit fruits={fruit}/>
            <AjouterFruit fruits={fruit} setFruits={setFruit} />
        </div>
    );

}
export default ListeFruit;