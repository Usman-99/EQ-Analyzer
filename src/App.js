import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";

import VoiceRecorder from "./components/VoiceRecorder";

import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VoiceRecorder />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer className="mt-5" />
    </Router>
  );
}

export default App;
