import "./App.css";
import Navbar from "./components/header/navbar";
import { navcomponentsLeft, navcomponentsRight } from "./components/header/navcomponents";

function App() {
  return (
    <div className="App">
      <Navbar navcomponentsLeft={navcomponentsLeft} navcomponentsRight={navcomponentsRight} />
    </div>
  );
}

export default App;
