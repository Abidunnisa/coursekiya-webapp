import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Course, CourseCard, Timeline } from '@components';
import { useNavigate } from 'react-router-dom';

export const CourseListSection: React.FC<{ title: string; courses: Course[], category: string | null, timeline: boolean, viewAllCheck: boolean }> = ({ title, courses, category, timeline, viewAllCheck }) => {

  const [currentTimelineTab, setCurrentTimelineTab] = useState<string>('all');
  const push = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
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
        {courses?.length > 0 ? category !== null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(courses?.filter((c: { category: string; }) => c?.category === category))?.map((course) => (
              <CourseCard key={course?.course_id} course={course} />
            ))}
          </div>
        ) :(
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(currentTimelineTab === "all" ? courses : courses?.filter((c: { status: string; }) => c.status === currentTimelineTab))?.map((course) => (
              <CourseCard key={course?.course_id} course={course} />
            ))}
          </div>
        ): (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  <div className="flex items-center justify-between pt-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};