export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div style={{border:'1px solid purple', borderRadius:'10px', margin:'20px',padding:'20px'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}