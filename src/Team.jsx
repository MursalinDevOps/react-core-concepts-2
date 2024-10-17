import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11); // useState(11) is a initial value of the useState hook !!! 
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }
    return (
        <div style={{ margin: '20px', padding: '20px', border: '2px solid blue', borderRadius: '10px' }}>
            <h3>Players: {team}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={handleAdd}>Add </button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}