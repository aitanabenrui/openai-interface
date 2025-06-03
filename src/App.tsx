import './App.css'
import { Aside } from './components/aside/aside'
import { Button } from './components/button/Button'

function App() {


  return (
    <div className='aside_container'>
      <Aside/>
      <Button label='Add payment details'></Button>
    </div>
  )
}

export default App
