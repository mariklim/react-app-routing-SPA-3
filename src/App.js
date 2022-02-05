import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contacts from './Components/Contacts';

import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header/> */}

      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
