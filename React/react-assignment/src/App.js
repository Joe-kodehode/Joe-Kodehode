import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/HomePage";
import { Footer } from "./components/Footer";
import API from "./components/API/APIPage";
import Props from "./components/Props/PropsPage";
import Counter from "./components/Counter/CounterPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/API" element={<API />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/Counter" element={<Counter />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
