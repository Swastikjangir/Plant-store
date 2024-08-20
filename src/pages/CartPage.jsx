import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, deleteItemFromCart } from '../store/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <p className="text-lg mb-4">Total: <span className="font-semibold">${totalPrice}</span></p>
      <button className="bg-blue-600 text-gray-100 px-4 py-2 rounded hover:bg-blue-700 transition-all mb-4">
        Checkout (Coming Soon)
      </button>
      <button
        className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition-all mb-4 ml-4"
        onClick={() => window.location.href = '/products'}
      >
        Continue Shopping
      </button>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-gray-800 text-gray-100 shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-400">${item.price}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(removeItemFromCart(item.id))}
                className="bg-red-500 text-gray-100 px-3 py-1 rounded hover:bg-red-600 transition-all"
              >
                -
              </button>
              <button
                onClick={() => dispatch(deleteItemFromCart(item.id))}
                className="bg-red-700 text-gray-100 px-3 py-1 rounded hover:bg-red-800 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
