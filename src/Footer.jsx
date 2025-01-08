import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">MyShop</h3>
            <p className="text-indigo-200 text-sm">
              Your one-stop destination for quality products and exceptional service. We're committed to providing the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-300" />
                <span className="text-indigo-200">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-300" />
                <span className="text-indigo-200">support@myshop.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-300" />
                <span className="text-indigo-200">123 Business Street, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-indigo-200 mb-4">Subscribe to get updates about our products and offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-indigo-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-indigo-300"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-indigo-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-indigo-200 text-sm text-center md:text-left">
              © 2025 MyShop. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-indigo-200 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;