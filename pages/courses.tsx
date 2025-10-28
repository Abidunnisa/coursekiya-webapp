import React, { useEffect, useState } from 'react';
import { Course, CourseListSection } from '@components';
import { useLocation } from 'react-router-dom';

export const Courses: React.FC<{ title: string; courses: Course[] }> = ({ title, courses }) => {
  const [allCourses, setAllCourses] = useState<Course[]>(courses)
  const { state } = useLocation();

  // useEffect(() => {
  //   if( state?.category ) {
  //     setAllCourses(courses?.filter((c: { category: string; }) => c?.category === state?.category))
  //   }
  // }, [state])

  return (
    <section className="py-16 bg-gray-50">
      <div className="font-sans antialiased text-gray-900 container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <CourseListSection
            title={ state?.title || title }
            courses={allCourses}
            category={state?.category || null}
            timeline={!state?.viewall}
            viewAllCheck={state?.viewall || false}
          />
        </main>
      </div>
    </section>
  );
};

export default Courses;
