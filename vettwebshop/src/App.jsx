import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Sign';
import Payment from './Payment';
import Transaction from './Transaction';
import './style.css'; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />

        <Route path="/*" element={
          <div className="app-container">
            <Header />
            <div className="main-content-wrapper">
              <Sidebar />
              <main className="content-body">
                <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Product" element={<Product />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Payment" element={<Payment />} />
                  <Route path="/Transaction" element={<Transaction />} />
                  <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}
