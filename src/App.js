import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
