import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/success' element = {<Success/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App