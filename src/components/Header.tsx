"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";
import { coursekiyalogo } from "public";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "src/context/AuthContext";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const push = useNavigate();
  const { session, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Webinars", path: "/webinars" },
    { name: "Digital Products", path: "/digital-products" },
    { name: "Teach", path: "/meeting" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  if (session) {
    navItems.splice(5, 0, { name: "My Learning", path: "/my-learning" });
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={() => push('/')}
            className="flex items-center cursor-pointer"
          >
            <img className="h-20 w-auto" src={coursekiyalogo.src} alt="CourseKiya Logo" />
            <span className="text-3xl font-bold text-blue-600">Coursekiya</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  push(item.path, {
                    state: {
                      title: item.name,
                      page: 'show',
                    },
                  })
                }}
                className="block cursor-pointer px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                {item.name}
              </div>
            ))}
          </div>


          <div className="flex space-x-4">
            {/* Hamburger for Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Icons */}
            <div className="max-[340px]:hidden flex items-center space-x-3">
              <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 relative">
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>
              {session ? (
              <>
                <button
                  onClick={() => push('/my-learning')}
                  className="hidden md:flex items-center p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  title="My Learning"
                >
                  <User size={20} />
                </button>
                <button
                  onClick={logout}
                  className="hidden md:flex items-center p-2 rounded-full text-gray-600 hover:text-red-600 hover:bg-red-50"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => push('/login')}
                  className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                >
                  Log In
                </button>
                <button
                  onClick={() => push('/register')}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  push(item.path, {
                    state: {
                      title: item.name,
                      page: 'show',
                    },
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="block cursor-pointer"
              >
                {item.name}
              </div>
            ))}
            <div className="min-[340px]:hidden flex items-center space-x-3">
              <button className="block cursor-pointer" onClick={() => {
                // push(item.path, {
                //   state: {
                //     courses: courses,
                //     title: item.name,
                //     page: 'show',
                //   },
                // });
                setIsMobileMenuOpen(false);
              }}>
                Cart
              </button>
            </div>
            <div className="pt-4 border-t border-gray-100">
              {session ? (
                <div
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  Logout
                </div>
              ) : (
                <>
                  <div
                    onClick={() => {
                      push('/login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Log In
                  </div>
                  <div
                    onClick={() => {
                      push('/register');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Sign Up
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
