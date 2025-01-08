import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-white">MyShop</h1>
            
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-indigo-200 transition-colors">Home</a>
              <a href="/services" className="text-white hover:text-indigo-200 transition-colors">Services</a>
              <a href="/products" className="text-white hover:text-indigo-200 transition-colors">Products</a>
              <a href="/about" className="text-white hover:text-indigo-200 transition-colors">About Us</a>
              <a href="/contact" className="text-white hover:text-indigo-200 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 py-1.5 pl-4 pr-10 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition-all"
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 text-white/70" />
            </div>

            {/* Favorites Button */}
            <button className="relative group">
              <Heart className="h-6 w-6 text-white hover:text-pink-200 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-pink-400 transition-colors">
                2
              </span>
            </button>

            {/* Cart Button */}
            <button className="relative group">
              <ShoppingCart className="h-6 w-6 text-white hover:text-indigo-200 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-indigo-400 transition-colors">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-indigo-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-700 px-4 py-3 space-y-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-4 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:bg-white/20"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/70" />
            </div>
            <a href="/" className="block py-2 text-white hover:text-indigo-200 transition-colors">Home</a>
            <a href="/services" className="block py-2 text-white hover:text-indigo-200 transition-colors">Services</a>
            <a href="/products" className="block py-2 text-white hover:text-indigo-200 transition-colors">Products</a>
            <a href="/about" className="block py-2 text-white hover:text-indigo-200 transition-colors">About Us</a>
            <a href="/contact" className="block py-2 text-white hover:text-indigo-200 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;