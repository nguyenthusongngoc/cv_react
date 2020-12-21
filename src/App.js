import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import Routing from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
