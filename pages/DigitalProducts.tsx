import React from 'react';
import { Course, ComingSoon } from '@components';

export const DigitalProductsPage: React.FC<{ title: string, courses: Course[] }> = ({ title, courses }) => {
  return (
    <div className="bg-gray-50 ">
      <div className="flex w-full justify-start container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-xl font-extrabold text-gray-900">
          {title}
        </h2>
      </div>
      <ComingSoon />
    </div>
  )
};

export default DigitalProductsPage;
