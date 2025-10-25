import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { Header, Footer, HeroSection, CategoriesSection, Category, Course, CourseListSection, InstructorCTA, Instructor } from '@components';
import Courses from './courses';
import HomePage from './Home';
import Webinars from './Webinars';
import ContactUs from './ContactUs';

export const RenderPage: React.FC<{ categories?: Category[], courses?: Course[], title: string, currentPage: string }> = ({ categories, courses, title, currentPage }) => {
  switch (currentPage) {
    case 'home':
      return <main><HomePage categories={categories ?? []} courses={courses ?? []} /></main>;
    case 'courses':
      return <main><Courses title={title?.length > 0 ? title : "Courses"} courses={courses ?? []} /></main>;
    case 'webinars':
      return <main><Webinars title={title?.length > 0 ? title : "Webinars"} courses={courses ?? []} /></main>;
    case 'contactus':
      return <main><ContactUs courses={courses ?? []} /></main>
    // case 'digital-products':
    //   return <main><DigitalProductsPage /></main>;
    // case 'teach':
    //   return <main><TeachPage /></main>;
    default:
      return <main><HomePage categories={categories ?? []} courses={courses ?? []} /></main>;
  }
};

export default RenderPage;
