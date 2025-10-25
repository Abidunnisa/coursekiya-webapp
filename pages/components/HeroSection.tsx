import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Find your next learning adventure
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600">
            Learn from industry experts. Master new skills. Get job-ready with our hands-on courses.
          </p>
          <form className="mt-8 md:mt-10 flex max-w-lg mx-auto">
            <label htmlFor="search-course" className="sr-only">
              Search for courses
            </label>
            <input
              type="text"
              name="search-course"
              id="search-course"
              className="flex-1 block w-full px-5 py-4 rounded-l-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="What do you want to learn today?"
            />
            <button
              type="submit"
              className="inline-flex items-center px-6 py-4 border border-transparent rounded-r-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-gray-700">Popular:</span>
            {['React', 'Python', 'UI/UX', 'AWS', 'Data Science'].map((tag) => (
              <a
                key={tag}
                href="#"
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};