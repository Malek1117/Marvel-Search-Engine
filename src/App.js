import Home from "./Components/Home/Home";
import Charter from "./Components/Charcter_page/CharcterPage"
import { Routes , Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Charter />} />
      </Routes>
    </div>
  );
}

export default App;