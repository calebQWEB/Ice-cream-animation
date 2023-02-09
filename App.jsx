import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../src/pages/Home/Home'
import Details from '../src/pages/Details/Details'
import './App.css'
import Navbar from './Component/Navbar/Navbar'


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence initial={false} exitBeforEnter mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='details' element={<Details />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
