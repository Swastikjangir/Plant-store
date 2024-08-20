import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10 },
  { id: 2, name: 'Fiddle Leaf Fig', price: 25 },
  { id: 3, name: 'Snake Plant', price: 15 },
  { id: 4, name: 'Spider Plant', price: 12 },
  { id: 5, name: 'Peace Lily', price: 20 },
  { id: 6, name: 'Monstera', price: 30 },
];

function ProductListingPage() {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-gray-800 text-gray-100 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p className="text-gray-400 mt-2">${plant.price}</p>
            <button
              onClick={() => dispatch(addItemToCart(plant))}
              className="mt-4 px-4 py-2 bg-blue-600 text-gray-100 rounded hover:bg-blue-700 transition-all"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
