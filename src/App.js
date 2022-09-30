import { useState } from 'react';
import './App.css';

function App(){
  
    const [age, setAge] = useState('')
    const [upper, setUpper] = useState('0')
    const [lower, setLower] = useState('0')

    function calculate(e){
      e.preventDefault()
      setUpper((220-age)*0.85)
      setLower((220-age)*0.65)

  }

  return (
  <div id='syke'>
    <h1>Heart rate limits calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
        </div>
        <div>
        <input value ={age} onChange={e => setAge(e.target.value)}/>
        </div>
          <label>Heart rate limits</label>
        <div>
          <output>{lower+'-'+upper}</output>
        </div>
        <button>Calculate</button>
      </form>
  </div>
  );
}

export default App;
