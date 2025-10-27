import React from 'react';
import { HeroSection, CategoriesSection, Category, Course, InstructorCTA } from '@components';
import ContactUs from './ContactUs';

export const HomePage: React.FC<{ categories: Category[], courses: Course[] }> = ({ categories, courses }) => {
  const featuredCourses = courses?.slice(0, 4);
  const devCourses = courses?.filter((c: { category: string; }) => c?.category === 'Programming & Development')?.slice(0, 4);

  return (
    <div>
      <HeroSection courses={featuredCourses} />
      <CategoriesSection categories={categories} />
      <InstructorCTA />
      {/* <CourseListSection title="Top Courses in Development" courses={devCourses} timeline={false} viewAllCheck={true} /> */}
      <ContactUs courses={courses} />
    </div>
  )
};

export default HomePage;
