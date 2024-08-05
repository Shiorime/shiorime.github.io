import HomePage from "./HomePage"
import NavBar from "./Navbar"
import ToDo from "./Pages/ToDo"
import About from "./Pages/About"
import Video from "./Pages/Video"
import Cards from "./Pages/Cards"
import SVG from "./Pages/SVG"
import Contact from "./Pages/Contact"
import ThreeByThree from "./Pages/ThreeByThree"
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
        <Route path="/ThreeByThree" element={<ThreeByThree />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/SVG" element={<SVG />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
