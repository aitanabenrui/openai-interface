import './App.css'
import { Button } from './components/button/Button'

function App() {

  return (
    <>
      <Button label="Add payment details" variant="green" onClick={() => alert('¡Compra!')} />
      <Button label="View usage" variant="gray" />
    </>
  )
}

export default App
