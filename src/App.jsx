import { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Transaction from './components/Transaction'
import Data from './components/Data'

function App() {
  

  return (
    <div className=' h-screen w-[100%] '>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/transaction' element={<Transaction/>}></Route>
          <Route path='/data' element={<Data/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
