import React from 'react'
import { CourseCard, Course, CourseListSection } from '@components';

export const Courses: React.FC<{ title:string, courses: Course[] }> = ({ courses, title }) => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="font-sans antialiased text-gray-900 container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          {courses?.length > 0 && <CourseListSection title={title} courses={courses} timeline={true} viewAllCheck={false} />}
        </main>
      </div>
    </section>
  );
};

export default Courses;
