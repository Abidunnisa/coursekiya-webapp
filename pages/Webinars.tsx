import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { CourseCard, Course, CourseListSection } from '@components';

export const Webinars: React.FC<{ title: string, courses: Course[] }> = ({ title, courses }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="font-sans antialiased text-gray-900 container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          {courses?.length > 0 && <CourseListSection title={title} courses={courses} timeline={true} viewAllCheck={false} />}

          {courses?.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">No courses found.</h2>
              <p className="text-gray-500 mt-2">Check back later or try refreshing.</p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Webinars;
