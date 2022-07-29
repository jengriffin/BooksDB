import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddForm from './pages/AddForm'
import UpdateForm from './pages/UpdateForm'
import Author from './components/Author'
import AuthorDetails from './pages/AuthorDetails'
function App() {
  return (
    <div className="App">
      <h1>Books for every Child!</h1>
      <Routes>
        <Route path="/AddForm" element={<AddForm />} />
        <Route path="/UpdateForm/:id" element={<UpdateForm />} />
        <Route path="/AuthorDetails/:id" element={<AuthorDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
