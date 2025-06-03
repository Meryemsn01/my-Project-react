import { useEffect, useState } from "react";


function ListeUserApi (){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json()
        .then (data => setUsers(data))
    )
    }, [])


    return (
        <div>
            {users.map((user) => (
                <li key={user.id}>
                    {user.id}, {user.name}
                </li>
            ))}
        </div>
    )
}
export default ListeUserApi;
