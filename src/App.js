import React from 'react'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App