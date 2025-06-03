function AfficherFruit({fruits}){

    return(
        <ul>
            {fruits.map((fruit, index) => (
                <li> {fruit}</li>
        ))}
        </ul>
        
    );
}
export default AfficherFruit;