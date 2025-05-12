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
  const [selectedProfile, setSelectedProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTradeModal, setShowTradeModal] = useState(false);

  useEffect(() => {
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
    setSelectedProfile(user);
    setCurrentPage('profile');
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header 
        setShowLoginModal={setShowLoginModal} 
        setShowSignupModal={setShowSignupModal}
        setShowListingModal={setShowListingModal}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
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
            setShowLoginModal={setShowLoginModal}
            viewProfile={viewProfile}
          />
        </main>
      )}

      {currentPage === 'profile' && selectedProfile && (
        <main className="container mt-4">
          <ProfilePage user={selectedProfile} isLoggedIn={isLoggedIn} setShowLoginModal={setShowLoginModal} />
        </main>
      )}

      <Footer />

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)} 
          setIsLoggedIn={setIsLoggedIn}
          setShowSignupModal={setShowSignupModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}

      {showSignupModal && (
        <SignupModal 
          onClose={() => setShowSignupModal(false)}
          setShowLoginModal={setShowLoginModal}
          setShowSignupModal={setShowSignupModal}
        />
      )}

      {showListingModal && (
        <ListingModal onClose={() => setShowListingModal(false)} />
      )}

      {showTradeModal && selectedProduct && (
        <TradeModal 
          onClose={() => setShowTradeModal(false)} 
          product={selectedProduct}
          myItems={myItems}
        />
      )}
    </>
  );
}

export default App;
