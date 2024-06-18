import HomePage from "./HomePage"
import NavBar from "./Navbar"
import ToDo from "./Pages/ToDo"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Video from "./Pages/Video"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </>

  );
}

export default App;
