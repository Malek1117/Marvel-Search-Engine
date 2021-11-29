import Home from "./Components/Home/Home";
import Charter from "./Components/Charcter_page/CharcterPage";
import ComicsPage from "./Components/Comics_page/Comics_page";
import { Routes , Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Charter />} />
        <Route path="/comics_page" element={<ComicsPage />} />
      </Routes>
    </div>
  );
}

export default App;