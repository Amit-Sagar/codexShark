import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CryptoPage from "./pages/CryptoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#14161a] text-white min-h-[100vh]">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CryptoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
