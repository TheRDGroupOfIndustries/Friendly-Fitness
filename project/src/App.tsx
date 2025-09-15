import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import CoursesPage from "./pages/Courses";
import SchedulePage from "./pages/Schedule";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import { ToastContainer } from "react-toastify";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Navigation />
          <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesPage />} />
          {/* <Route path="/schedule" element={<SchedulePage />} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
