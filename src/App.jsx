import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'

import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/pageNotFound'
import Course from './pages/Course'
import Blog from './pages/Blog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={<Course/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
