import './App.css'
import { Button } from './components/button/button'

function App() {

  return (
    <>
   <Button label="Add payment details" variant="green" onClick={() => alert('¡Compra!')} />
<Button label="View usage" variant="gray" disabled />
    </>
  )
}

export default App
