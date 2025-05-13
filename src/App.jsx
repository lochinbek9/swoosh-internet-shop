import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about-page/About";
import PrivacyPolicy from "./pages/privacy-policy-page/PrivacyPolicy";
import Contact from "./pages/contact-page/Contact";
import NotFound from "./pages/notfound404-page/NotFound";
import Order from "./pages/order-page/Order";
import Blog from "./pages/blog-page/Blog";
import BlogPost from "./pages/blog-page/BlogPost";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
