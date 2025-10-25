import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const CategoriesSection: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Top Categories
        </h2>
        <div className="flex gap-4 md:gap-6">
          {categories.map((category) => (
            <div className="sm:w-1/2 md:w-1/4 lg:w-1/7" key={category.id}>
            <a
              key={category.id}
              href="#"
              className="group flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <category.icon size={32} />
              </div>
              <span className="mt-4 font-semibold text-gray-800 text-center group-hover:text-blue-600">
                {category.name}
              </span>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};