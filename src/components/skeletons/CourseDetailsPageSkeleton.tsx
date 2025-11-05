import React from "react";

export const CourseDetailsPageSkeleton: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 animate-pulse">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Image */}
            <div className="w-full h-64 bg-gray-200 rounded-xl" />

            {/* Title */}
            <div className="h-8 bg-gray-200 w-3/4 rounded-md" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 w-full rounded-md" />
              <div className="h-4 bg-gray-200 w-5/6 rounded-md" />
              <div className="h-4 bg-gray-200 w-4/6 rounded-md" />
            </div>

            {/* Stats Row */}
            <div className="flex gap-4 mt-4">
              <div className="h-4 w-20 bg-gray-200 rounded-md" />
              <div className="h-4 w-20 bg-gray-200 rounded-md" />
              <div className="h-4 w-28 bg-gray-200 rounded-md" />
            </div>

            {/* Instructor Section */}
            <div className="mt-6">
              <div className="h-6 bg-gray-200 w-40 rounded-md mb-3" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="h-4 bg-gray-200 w-32 rounded-md mb-2" />
                  <div className="h-3 bg-gray-200 w-48 rounded-md" />
                </div>
              </div>
            </div>

            {/* Course Content Section */}
            <div className="mt-6 space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-200 w-full rounded-md" />
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="bg-white shadow-lg rounded-xl p-6 sticky top-28 h-fit space-y-4">
            {/* Price Section */}
            <div className="h-8 bg-gray-200 w-24 rounded-md" />
            <div className="flex gap-4 items-center">
              <div className="h-4 bg-gray-200 w-20 rounded-md" />
              <div className="h-4 bg-gray-200 w-16 rounded-md" />
            </div>

            {/* Buttons */}
            <div className="mt-4 space-y-3">
              <div className="h-10 bg-gray-200 rounded-lg" />
              <div className="h-10 bg-gray-200 rounded-lg" />
            </div>

            {/* Course Includes */}
            <div className="mt-6">
              <div className="h-5 bg-gray-200 w-40 rounded-md mb-3" />
              <ul className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-md" />
                    <div className="h-4 bg-gray-200 w-3/4 rounded-md" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
