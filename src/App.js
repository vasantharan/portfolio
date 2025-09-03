import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Freelance from "./pages/Freelance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/freelancing" element={<Freelance />} />
      </Routes>
    </Router>
  );
}

export default App;
