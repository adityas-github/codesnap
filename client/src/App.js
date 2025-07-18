import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AddSnippet from "./pages/AddSnippet.js";
import EditSnippet from "./pages/EditSnippet.js";
import Navbar from "./pages/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSnippet />} />
        <Route path="/edit/:id" element={<EditSnippet />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
