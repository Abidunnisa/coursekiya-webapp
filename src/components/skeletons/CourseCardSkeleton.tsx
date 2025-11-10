import React from "react";

export const CourseCardSkeleton: React.FC = () => {
  return (
    <>
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
    </>
  );
};