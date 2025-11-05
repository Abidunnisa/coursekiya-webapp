import React from 'react';
import { Heart } from 'lucide-react';
import { Instructor } from '@components';
import { useNavigate } from 'react-router-dom';

export interface Course {
  course_id: string;
  title: string;
  description: string;
  image_url: string;
  original_price?: string;
  discounted_price: string;
  rating: string;
  review_count: string;
  instructors: Instructor;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration_hours: string;
  lessons_count: string;
  status: string;
}

export const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const push = useNavigate();
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div onClick={() => push(`/courses/${course?.course_id}/${course?.title}`, {
        state: {
          course: course,
        },
      })} className="block cursor-pointer">
        <div className="relative">
          <img className="object-fill" src={course?.image_url} alt={course?.title} />
          <div className="absolute top-2 left-2 bg-white px-2 py-0.5 rounded-full text-xs font-semibold text-blue-600">
            {course?.category}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 truncate">
            {course?.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{course?.instructors?.name}</p>
          {/* <div className="flex items-center mb-3">
            <span className="text-base font-bold text-yellow-500 mr-1">{course?.rating?.toFixed(1)}</span>
            <StarRating rating={course?.rating} />
            <span className="text-sm text-gray-500 ml-2">({course?.reviewCount.toLocaleString()})</span>
          </div> */}

          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-gray-900">₹{course?.discounted_price}</span>
              {course?.original_price && (
                <span className="ml-2 text-sm text-gray-500 line-through">₹{course?.original_price}</span>
              )}
            </div>
            <button className="p-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};