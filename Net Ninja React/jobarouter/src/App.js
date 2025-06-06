import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="">
          <h1>Jobarouter</h1>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about"> About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
