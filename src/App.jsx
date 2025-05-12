import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetails';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import ListingModal from './components/ListingModal';
import TradeModal from './components/TradeModal';
import ProfilePage from './components/ProfilePage';
import { sampleProducts, sampleCategories, myItems } from './data/sampleData';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showListingModal, setShowListingModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    name: '',
    rating: 0,
    bio: '',
    profilePicture: '',
    listedItems: [],
    soldItems: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check for existing login session on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Filter products based on category and search query
    let filteredProducts = [...sampleProducts];
    
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setProducts(filteredProducts);
  }, [selectedCategory, searchQuery]);

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const viewProfile = (user) => {
    setSelectedUser(user);
    setCurrentPage('profile');
  };

  // Handle successful login
  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setShowLoginModal(false);
    
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Optional: Show success message
    alert("Login successful!");
  };

  // Handle successful registration
  const handleSignup = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setShowSignupModal(false);
    
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Optional: Show success message
    alert("Registration successful!");
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    
    // Remove user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to home page if on profile page
    if (currentPage === 'profile') {
      setCurrentPage('home');
    }
  };

  return (
    <>
      <Header 
        setShowLoginModal={setShowLoginModal} 
        setShowSignupModal={setShowSignupModal}
        setShowListingModal={setShowListingModal}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}  // Add logout handler
        currentUser={currentUser} // Pass current user data
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {currentPage === 'home' && (
        <main>
          <Hero />
          <div className="container">
            <Categories 
              categories={sampleCategories} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            <h2 className="section-title">Featured Listings</h2>
            <ProductGrid products={products} viewProduct={viewProduct} />
          </div>
        </main>
      )}

      {currentPage === 'product' && selectedProduct && (
        <main className="container mt-4">
          <ProductDetail 
            product={selectedProduct} 
            setShowTradeModal={setShowTradeModal}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser} // Pass current user data
            setShowLoginModal={setShowLoginModal}
            setSelectedUser={setSelectedUser}
            setCurrentPage={setCurrentPage}
          />
        </main>
      )}

      {currentPage === 'profile' && selectedUser.name && (
        <main className="container mt-4">
          <ProfilePage 
            user={selectedUser}
            viewProduct={viewProduct} // Pass viewProduct to allow profile to navigate to products
            isCurrentUser={currentUser && currentUser.id === selectedUser.id} // Check if viewing own profile
          />
        </main>
      )}
      
      <Footer />
      
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin} // Pass login handler
        />
      )}
      
      {showSignupModal && (
        <SignupModal 
          onClose={() => setShowSignupModal(false)} 
          onSignup={handleSignup} // Pass signup handler
        />
      )}
      
      {showListingModal && (
        <ListingModal 
          onClose={() => setShowListingModal(false)}
          currentUser={currentUser} // Pass current user data
        />
      )}
      
      {showTradeModal && selectedProduct && (
        <TradeModal 
          onClose={() => setShowTradeModal(false)} 
          product={selectedProduct}
          currentUser={currentUser} // Pass current user data 
        />
      )}
    </>
  );
}

export default App;