import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Weather />
      </main>
      <Footer />
    </div>
  );
}

export default App;
