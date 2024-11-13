import "./App.css";
import Header from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx"; 
import Services from "./pages/services.jsx"; 
import Contact from "./pages/contact.jsx"; 
import Accommodation from "./pages/accommodation.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";  // Navbar is included here, no need to include it again

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
     
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/accommodation" element={<Accommodation />} /> {/* Accommodation route */}
          <Route path="/services" element={<Services />} /> {/* Services route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Catch-all 404 route */}
        </Routes>

        <Footer />  {/* Footer stays at the bottom */}
      </div>
    </BrowserRouter>
  );
}

export default App;
