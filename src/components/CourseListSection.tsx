import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CourseCard, Timeline } from '@components';
import { Course } from '@types';
import { useNavigate } from 'react-router-dom';
import { CourseCardSkeleton } from './skeletons/CourseCardSkeleton';

export const CourseListSection: React.FC<{ title: string; courses: Course[], category: string | null, timeline: boolean, viewAllCheck: boolean, isLoading?: boolean }> = ({ title, courses, category, timeline, viewAllCheck, isLoading }) => {

  const [currentTimelineTab, setCurrentTimelineTab] = useState<string>('all');
  const push = useNavigate();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (currentTimelineTab === "all") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        (c: any) => c.status === currentTimelineTab
      );
      setFilteredCourses(filtered);
    }
  }, [currentTimelineTab, courses]);

  return (
    <section className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {timeline && <Timeline setTab={setCurrentTimelineTab} />}
          {viewAllCheck &&
            <button onClick={() => push('/courses')} className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          }
        </div>
        {!isLoading ?
          courses?.length > 0 ?
            category !== null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(courses?.filter((c: { category: string; }) => c?.category === category))?.map((course) => (
                  <CourseCard key={course?.course_id} course={course} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses?.length > 0 ? (
                  filteredCourses.map((course) => (
                    <CourseCard key={course.course_id} course={course} />
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center pt-10 text-gray-700 ">
                    <span className="text-lg font-medium">{`No ${currentTimelineTab !== 'all' ? currentTimelineTab.charAt(0).toUpperCase() + currentTimelineTab.slice(1) : ''} courses found`}</span>
                    <p className="text-sm text-gray-600 mt-1">Try a different category or filter</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center pt-10 text-gray-700 ">
                <span className="text-lg font-medium">{`No ${currentTimelineTab !== 'all' ? currentTimelineTab.charAt(0).toUpperCase() + currentTimelineTab.slice(1) : ''} courses found`}</span>
                <p className="text-sm text-gray-600 mt-1">Try a different category or filter</p>
              </div>
            ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CourseCardSkeleton/>
            </div>
          )}
      </div>
    </section>
  );
};