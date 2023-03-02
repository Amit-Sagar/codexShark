import "./App.css";
import Monuments from "./components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Monuments />
      </main>
      <Footer />
    </>
  );
}

export default App;
