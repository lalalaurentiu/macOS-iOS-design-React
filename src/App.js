import "./App.css";
import Navbar from "./components/header/navbar";
import navComponents from "./components/header/navcomponents";

function App() {
  return (
    <div className="App">
      <Navbar navComponents={navComponents} />
    </div>
  );
}

export default App;
