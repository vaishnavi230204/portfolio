import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home/>}/>
        <Route path='/not-found' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
