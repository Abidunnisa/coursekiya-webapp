import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { Header, Footer, HeroSection, CategoriesSection, Category, Course, CourseListSection, InstructorCTA, Instructor } from './components';

export const HomePage: React.FC<{ categories: Category[], courses: Course[] }> = ({ categories, courses }) => {
  const featuredCourses = courses.slice(0, 4);
  const devCourses = courses.filter((c: { category: string; }) => c.category === 'Programming & Development').slice(0, 4);

  return (
    <div>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <CourseListSection title="Featured Courses" courses={featuredCourses} timeline={false} viewAllCheck={true} />
      <InstructorCTA />
      <CourseListSection title="Top Courses in Development" courses={devCourses} timeline={false} viewAllCheck={true} />
    </div>
  )
};