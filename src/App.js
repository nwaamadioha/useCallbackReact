import { useState, useEffect} from 'react'

function App() {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(0)
  const [num1] = useState(4)
  const [num2] = useState(5)

  const sum = () => num1 + num2

  useEffect(() => {
    console.log(`New sum value: ${sum()}`)
  }, [sum])
  return (
    <main className='App'>
      <input 
        type='text' 
        placeholder='input' 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
    </main>
  );
}

export default App;
