import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="w-11/12 mx-auto ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
