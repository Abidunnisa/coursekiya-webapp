import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { Course, CourseCard, Timeline } from '@components';
import { RenderPage } from '../../pages/RenderPage';

export const CourseListSection: React.FC<{ title: string; courses: Course[], timeline: boolean, viewAllCheck: boolean }> = ({ title, courses, timeline, viewAllCheck }) => {

  const [currentTimelineTab, setCurrentTimelineTab] = useState<string>('all');

  const handleViewAllClick = () =>  {
    <RenderPage title={title} courses={courses} categories={undefined} currentPage='courses' />
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {timeline && <Timeline setTab={setCurrentTimelineTab}/>}
          {viewAllCheck &&
            <button onClick={() => handleViewAllClick()} className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(currentTimelineTab === "all" ? courses : courses?.filter((c: { status: string; }) => c.status === currentTimelineTab))?.map((course) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};