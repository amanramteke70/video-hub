import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Button } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home"; 
import Footer from "./components/Footer";
import Video from "./components/video";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Added '=' sign before <Home/> */}
        <Route path="/videos" element={<Video />} /> {/* Added '=' sign before <Home/> */}
        <Route path="/upload" element={<Upload />} /> {/* Added '=' sign before <Home/> */}
        <Route path="/Signup" element={<Signup />} /> {/* Added '=' sign before <Home/> */}
        <Route path="/Login" element={<Login />} /> {/* Added '=' sign before <Home/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
