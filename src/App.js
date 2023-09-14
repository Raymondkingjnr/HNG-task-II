import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import SingleMovie from "./components/SingleMovie";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      {/* <Hero /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/card/:id" element={<SingleMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
