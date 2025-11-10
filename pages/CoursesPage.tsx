import React, { useEffect, useState } from 'react';
import { CourseListSection } from '@components';
import { Course } from '@types';
import { useLocation } from 'react-router-dom';
import { useList } from '@refinedev/core';

export const Courses: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const { state } = useLocation();

  const { result: { data: coursesData }, query: { isLoading: coursesLoading } } = useList<Course>({
    resource: 'api/courses',
    pagination: {
      mode: 'off',
    },
  });

  useEffect(() => {
    if (!coursesLoading && coursesData?.length) {
      const imagePromises = coursesData.map((course) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = course.image_url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    }
  }, [coursesData, coursesLoading]);

  useEffect(() => {
    setAllLoaded(!coursesLoading && imagesLoaded);
  }, [coursesLoading, imagesLoaded]);

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
            isLoading={coursesLoading || !allLoaded}
          />
        </main>
      </div>
    </section>
  );
};

export default Courses;
