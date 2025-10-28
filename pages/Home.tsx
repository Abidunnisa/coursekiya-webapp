import React from 'react';
import { HeroSection, CategoriesSection, Category, Course, InstructorCTA } from '@components';
import ContactUs from './ContactUs';

export const HomePage: React.FC<{ categories: Category[], courses: Course[] }> = ({ categories, courses }) => {
  const featuredCourses = courses?.slice(0, 4);

  return (
    <div>
      <HeroSection courses={featuredCourses} />
      <CategoriesSection categories={categories} />
      <InstructorCTA />
      <ContactUs courses={courses} />
    </div>
  )
};

export default HomePage;
