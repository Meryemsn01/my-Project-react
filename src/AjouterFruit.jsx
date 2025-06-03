import { useRef } from "react";

function AjouterFruit({fruits ,setFruits}){

    const inputRef = useRef()

    const HandleAddFruit = () => {
        const textFruit = inputRef.current.value;
        if (textFruit) {
            setFruits([...fruits, textFruit]);
            inputRef.current.value=""
        }
        
    };

    return(
        <div>
            <input ref={inputRef}></input>
            <button onClick={HandleAddFruit}>Ajouter</button>
        </div>
    );

}
export default AjouterFruit;