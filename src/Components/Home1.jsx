import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: "Modern Sofa", 
    oldPrice: "$1299", 
    price: "$999", 
    image: "/api/placeholder/400/400",
    isLiked: false
  },
  { 
    id: 2, 
    name: "Dining Table Set with Six Chairs", 
    oldPrice: "$999", 
    price: "$799", 
    image: "/api/placeholder/400/400",
    isLiked: true
  },
  { 
    id: 3, 
    name: "Bedroom Set", 
    oldPrice: "$1599", 
    price: "$1299", 
    image: "/api/placeholder/400/400",
    isLiked: false
  },
  { 
    id: 4, 
    name: "Office Chair", 
    oldPrice: "$399", 
    price: "$299", 
    image: "/api/placeholder/400/400",
    isLiked: false
  },
  { 
    id: 5, 
    name: "Coffee Table", 
    oldPrice: "$499", 
    price: "$399", 
    image: "/api/placeholder/400/400",
    isLiked: true
  },
  { 
    id: 5, 
    name: "Coffee Table", 
    oldPrice: "$499", 
    price: "$399", 
    image: "/api/placeholder/400/400",
    isLiked: true
  },
  { 
    id: 6, 
    name: "Floor Lamp", 
    oldPrice: "$699", 
    price: "$599", 
    image: "/api/placeholder/400/400",
    isLiked: false
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState(
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: product.isLiked
    }), {})
  );

  // Responsive breakpoints
  const getVisibleProducts = () => {
    if (window.innerWidth < 640) return 2; // Mobile
    if (window.innerWidth < 1024) return 3; // Tablet
    return 4; // Desktop
  };

  const [visibleProducts, setVisibleProducts] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      setVisibleProducts(getVisibleProducts());
      // Reset index if needed
      setCurrentIndex(prev => 
        Math.min(prev, products.length - getVisibleProducts())
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const slideLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - visibleProducts));
  };

  const slideRight = () => {
    setCurrentIndex(prev => {
      const maxIndex = products.length - visibleProducts;
      return Math.min(maxIndex, prev + visibleProducts);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full">
        <img 
          src="/api/placeholder/1920/1080"
          alt="Luxury Room Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center px-4">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl px-4">
            Discover our collection of premium furniture
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-indigo-100 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span>Shop Now</span>
          </button>
        </div>
      </div>

      {/* Products Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button 
              onClick={slideLeft}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-indigo-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-600" />
            </button>
          )}
          
          {currentIndex < products.length - visibleProducts && (
            <button 
              onClick={slideRight}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-indigo-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-indigo-600" />
            </button>
          )}

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div 
              className="grid transition-transform duration-500"
              style={{
                gridTemplateColumns: `repeat(${products.length}, minmax(0, 1fr))`,
                transform: `translateX(-${(currentIndex * (100 / visibleProducts))}%)`,
                width: `${(products.length / visibleProducts) * 100}%`
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="px-2"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-square">
                    <div className="relative h-2/3">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => toggleLike(product.id)}
                        className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors group"
                      >
                        <Heart 
                          className={`h-5 w-5 ${
                            likedProducts[product.id] 
                              ? 'text-pink-500 fill-pink-500' 
                              : 'text-gray-400 group-hover:text-pink-500'
                          } transition-colors`}
                        />
                      </button>
                    </div>
                    <div className="p-4 h-1/3">
                      <h3 className="text-sm font-medium text-gray-800 truncate">
                        {product.name}
                      </h3>
                      <div className="mt-1 flex items-baseline space-x-2">
                        <span className="text-xs text-gray-400 line-through">
                          {product.oldPrice}
                        </span>
                        <span className="text-sm font-bold text-indigo-600">
                          {product.price}
                        </span>
                      </div>
                      <button className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm py-1.5 rounded hover:opacity-90 transition-opacity">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;