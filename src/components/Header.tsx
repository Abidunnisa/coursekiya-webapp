"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X
} from "lucide-react";
import { coursekiyalogo } from "public";
import { useNavigate } from 'react-router-dom';
import { Course } from "@components";

export const Header: React.FC<{ courses: Course[] }> = (courses) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const push = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Webinars", path: "/webinars" },
    { name: "Digital Products", path: "/digital-products" },
    { name: "Teach", path: "/teach" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div  className="flex items-center cursor-pointer">
            <img className="h-20 w-auto" src={coursekiyalogo.src} alt="CourseKiya Logo" />
            <span className="text-3xl font-bold text-blue-600">CourseKiya</span>
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  push(item.path, {
                    state: {
                      courses: courses,
                      title: item.name,
                      page: 'show',
                    },
                  })
                }}
                className="block cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
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
                      courses: courses,
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
          </div>
        </div>
      )}
    </header>
  );
};
