import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <h1 className="text-5xl font-bold">Welcome to Our Plant Store</h1>
      <p className="text-xl mt-4">We offer the best selection of houseplants for your home.</p>
      <Link to="/products">
        <button className="mt-8 px-6 py-3 bg-blue-600 text-gray-100 font-semibold rounded hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
