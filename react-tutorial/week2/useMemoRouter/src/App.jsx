import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Mock Product Data
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Smartphone', category: 'Electronics' },
  { id: 3, name: 'T-shirt', category: 'Fashion' },
  { id: 4, name: 'Jeans', category: 'Fashion' },
  { id: 5, name: 'Sofa', category: 'Home' },
  { id: 6, name: 'Table', category: 'Home' },
];

// Home Page Component
const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2>Categories</h2>
    <ul>
      <li><Link to="/category/Electronics">Electronics</Link></li>
      <li><Link to="/category/Fashion">Fashion</Link></li>
      <li><Link to="/category/Home">Home</Link></li>
    </ul>
  </div>
);

// Category Page Component
const Category = () => {
  const { categoryName } = useParams();

  // Memoize the filtered product list
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter((product) => product.category === categoryName);
  }, [categoryName]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products in {categoryName}</h2>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found in this category.</p>
      )}
      <Link to="/" style={{ marginTop: '20px', display: 'block' }}>
        Back to Categories
      </Link>
    </div>
  );
};

// App Component with Router
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<Category />} />
    </Routes>
  </Router>
);

export default App;
