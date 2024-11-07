import "./App.css";
import Header from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx"; // Default import
import About from "./pages/about.jsx"; // Default import
import Services from "./pages/services.jsx"; // Default import
import Contact from "./pages/contact.jsx"; // Default import
import Navbar from "./components/Navbar/Navbar.jsx";
import CardActivities from './components/CardActivities.jsx';


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
