import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
