import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about-page/About";
import PrivacyPolicy from "./pages/privacy-policy-page/PrivacyPolicy";
import Contact from "./pages/contact-page/Contact";
import NotFound from "./pages/notfound404-page/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
