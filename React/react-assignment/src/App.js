import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomePage";
import { Footer } from "./components/Footer";
import About from "./components/AboutPage";
import Images from "./components/ImagesPage";
import Counter from "./components/CounterPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Images" element={<Images />} />
          <Route path="/Counter" element={<Counter />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
