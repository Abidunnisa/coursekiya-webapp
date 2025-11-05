import React, { useEffect, useState } from 'react';
import { CourseListSection } from '@components';
import { Course } from '@types';
import { useLocation } from 'react-router-dom';
import { useList } from '@refinedev/core';

export const Courses: React.FC = () => {
  const [allCourses, setAllCourses] = useState()
  const { state } = useLocation();

  const { result: { data: coursesData }, query: { isLoading: coursesLoading} } = useList<Course>({
    resource: 'api/courses',
    pagination: {
      mode: 'off',
    },
  });

  console.log(coursesLoading  )
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="font-sans antialiased text-gray-900 container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <CourseListSection
            title={state?.title || 'Courses'}
            courses={coursesData}
            category={state?.category || null}
            timeline={!state?.viewall}
            viewAllCheck={state?.viewall || false}
            isLoading={coursesLoading}
          />
        </main>
      </div>
    </section>
  );
};

export default Courses;
