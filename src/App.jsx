// importing react router
import { Routes, Route,Router, BrowserRouter } from "react-router-dom";

//  importing styles
import './App.css'
// importing components
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route to path="/" element={<Home/>}></Route>
        <Route to path="/projects" element={<Projects/>}></Route>
        <Route to path="/about" element={<About/>}></Route>
        <Route to path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
