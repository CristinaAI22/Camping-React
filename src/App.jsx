import "./App.css";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
     
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Catch-all 404 route */}
        </Routes>

        <Footer />  {/* Footer stays at the bottom */}
      </div>
    </BrowserRouter>
  );
}

export default App;
