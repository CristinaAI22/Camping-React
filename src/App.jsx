import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; // Default import
import About from "./pages/about"; // Default import
import Services from "./pages/services"; // Default import
import Contact from "./pages/contact"; // Default import
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
