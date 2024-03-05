import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header'
import Details from './pages/Details/Details'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/shop'
          element={<Shop />}
        />
        <Route
          path='/shop/:id'
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
