import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

function App() {

  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
