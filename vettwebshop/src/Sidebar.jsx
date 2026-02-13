import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/product">Products</Link>
    <div className="dropcontent">
        <a href="/product#tele">Telescope</a>
        <a href="/product#mounts">Mounts</a>
        <a href="/product#access">Accessories</a>
    </div>
    <Link to="/cart">Shopping Cart</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
  </nav>
);

export default Sidebar;