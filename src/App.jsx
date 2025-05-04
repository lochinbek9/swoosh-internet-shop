import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about-page/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
