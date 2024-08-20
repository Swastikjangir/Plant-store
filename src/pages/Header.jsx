import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-gray-900 text-gray-100 py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-lg hover:underline">Home</Link>
          <Link to="/products" className="text-lg hover:underline">Products</Link>
        </div>
        <Link to="/cart" className="text-lg hover:underline">
          Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
