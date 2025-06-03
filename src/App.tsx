import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Menu } from './views/menu/Menu'
import { BillingPage } from './views/billing-page/BillingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route path='/BillingPage' element = {<BillingPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
