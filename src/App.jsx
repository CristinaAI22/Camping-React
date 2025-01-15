import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Switcher from "../src/components/Switcher";
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-white dark:bg-gray-900 dark:text-white min-h-screen">
        <Header className="bg-white dark:bg-gray-900 shadow-md z-10"></Header>
        <Hero />   
        <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
          <Switcher /> {/* Place switcher in the corner */}
        </div>     
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="*" element={<h2>404 Not Found</h2>} />{" "}
          {/* Catch-all 404 route */}
        </Routes>
        <Footer /> {/* Footer stays at the bottom */}
      </div>
    </BrowserRouter>
  );
}

export default App;
