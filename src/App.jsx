import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert("Click Me Button Clicked!")
  }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>React core concepts (Part-02)</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <div style={{margin: '20px', padding: '20px', border: '2px solid gray', borderRadius: '10px'}}>
      <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  )
}

export default App
