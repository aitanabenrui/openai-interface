import './App.css'
import { Button } from './components/button/button'

function App() {

  return (
    <>
    <div className="flex gap-2">
      <Button label="Add payment details" variant="green" />
      <Button label="View usage" variant="white" />
    </div>
    </>
  )
}

export default App
