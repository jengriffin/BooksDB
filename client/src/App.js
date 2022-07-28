import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddForm from './pages/AddForm'
import UpdateForm from './pages/UpdateForm'
function App() {
  return (
    <div className="App">
      <h1>Books for every Child!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddForm" element={<AddForm />} />
        <Route path="/UpdateForm/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  )
}

export default App
