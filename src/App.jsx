import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 px-6 py-3 border-b border-neutral-200 bg-white sticky top-0 z-10">
        <Link
          to="/"
          className="text-sm font-medium text-neutral-700 hover:text-rose-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium text-neutral-700 hover:text-rose-600 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium text-neutral-700 hover:text-rose-600 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}