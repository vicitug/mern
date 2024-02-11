import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import CreateStudent from './pages/create'
import ShowStudents from './pages/show'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<CreateStudent/>}/>
      <Route path='/show-students' element={<ShowStudents/>}/>
    </Routes>
  )
}
