import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyListings from "./pages/MyListings";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-listings" element={<MyListings />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

