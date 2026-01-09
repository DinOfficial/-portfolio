import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AdminLoader from './components/AdminLoader';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* The Admin route for Netlify CMS */}
        <Route path="/admin" element={<AdminLoader />} />
      </Routes>
    </Router>
  );
};

export default App;