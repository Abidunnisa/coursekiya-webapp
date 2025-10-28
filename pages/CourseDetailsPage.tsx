import React, { useEffect, useState } from "react";
import { Clock, PlayCircle, Star } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "@components";

export const CourseDetailsPage: React.FC = () => {
  const location = useLocation();
  const [course, setCourse] = useState<Course>(location.state?.course);
  const push = useNavigate();

  useEffect(() => {
    if (location.state?.course) {
      setCourse(location.state.course);
      localStorage.setItem("selectedCourse", JSON.stringify(location.state.course));
    } else {
      const saved = localStorage.getItem("selectedCourse");
      if (saved) setCourse(JSON.parse(saved));
    }
  }, [location.state]);

  // useEffect(() => {
  //   if (!course_id) return;
  //   const fetchCourse = async () => {
  //     try {
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses/${course_id}`
  //       );
  //       const data = await res.json();
  //       setCourse(data);
  //     } catch (err) {
  //       console.error("Error fetching course:", err);
  //     }
  //   };
  //   fetchCourse();
  // }, [course_id]);

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <img
            src={course?.image_url}
            alt={course?.title}
            className="rounded-xl w-full h-64 object-cover"
          />
          <h1 className="text-3xl font-bold text-gray-900">{course?.title}</h1>
          <p className="text-gray-600">{course?.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={16} /> {course?.duration_hours} hrs
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle size={16} /> {course?.lessons_count} lessons
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" /> {course?.rating}{" "}
              ({course?.review_count} reviews)
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Instructor</h2>
            <div className="flex items-center gap-4">
              <img
                src={course?.instructor?.image_url}
                alt={course?.instructor?.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {course?.instructor?.name}
                </p>
                <p className="text-sm text-gray-500">{course?.instructor?.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white shadow-lg rounded-xl p-6 sticky top-20 h-fit">
          <p className="text-2xl font-bold text-gray-900">
            ₹{course?.discounted_price}
          </p>
          {course?.original_price && (
            <p className="text-sm text-gray-500 line-through">
              ₹{course?.original_price}
            </p>
          )}
          <button onClick={() => push('/contact-us', { state: { selectedCourse: course?.title } })} className="mt-3 w-full border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
            Enquire Now
          </button>
          {course?.status === 'ongoing' ? (
            <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button> ) : (
            <button className="mt-3 w-full bg-gray-200 border border-gray-500 text-black-600 font-semibold py-3 rounded-lg transition">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
