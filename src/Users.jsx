import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div  style={{border:'2px solid red', borderRadius:'10px', margin:'20px',padding:'20px'}}>
            <h3>
                Users: {users.length}
            </h3>
        </div>
    )
}