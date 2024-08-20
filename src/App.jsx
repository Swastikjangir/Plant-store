import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Header from './pages/Header.jsx';

function App() {
  return (
    <Router>
      <Header /> {/* Header without user information */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
