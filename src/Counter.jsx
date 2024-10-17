import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{ margin: '20px', padding: '20px', border: '2px solid yellowgreen', borderRadius: '10px' }}>
            <h3>Count:{count}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button style={{ backgroundColor: 'green' }} onClick={handleAdd}>+</button>
                <button style={{ backgroundColor: 'red' }} onClick={handleReduce}>-</button>
            </div>
        </div>
    )
}