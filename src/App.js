import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import Pricing from './components/Pricing';
import History from './components/History';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/history" element={<History />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
};

export default App;
