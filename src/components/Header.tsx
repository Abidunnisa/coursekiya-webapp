import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { coursekiyalogo } from 'public';

export const Header: React.FC <{ onNavigate: (page: string) => void, currentPage: string }> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Courses', page: 'courses' },
    { name: 'Webinars', page: 'webinars' },
    { name: 'Digital Products', page: 'digital-products' },
    { name: 'Teach', page: 'teach' },
    { name: 'Contact Us', page: 'contactus'}
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('home');
              }}
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <img className="h-24 w-auto" src={coursekiyalogo?.src} alt="CourseKiya Logo" />
              <span className="text-3xl font-bold text-blue-600">Coursekiya</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems?.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item?.page)}
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm cursor-pointer"
              >
                {item?.name}

              </button>
            ))}
          </div>

          {/* Icons and Auth */}
          <div className="flex items-center space-x-3">
            {/* <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100">
              <Search size={20} />
            </button> */}
            <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            {/* <button className="hidden sm:block px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Login
            </button>
            <button className="hidden sm:block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Sign Up
            </button> 
            <button className="sm:hidden p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100">
              <User size={20} />
            </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems?.map((item) => (
              <a
                key={item?.name}
                onClick={() => handleNavigate(item?.page)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item?.name}
              </a>
            ))}
          </div>
          {/* <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 flex flex-col space-y-2">
              <a href="#" className="w-full text-left px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Sign Up
              </a>
              <a href="#" className="w-full text-left px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Login
              </a>
            </div>
          </div> */}
        </div>
      )}
    </header>
  );
};