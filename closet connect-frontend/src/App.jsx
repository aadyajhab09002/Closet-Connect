import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyListings from "./pages/MyListings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-listings" element={<MyListings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

