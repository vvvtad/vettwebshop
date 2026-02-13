import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './App';
import Product from './Product';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Sign';
import Payment from './Payment';
import Transaction from './Transaction';
import './style.css'; 

function App() {
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
                  <Route path="/home" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/transaction" element={<Transaction />} />
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

export default App;