import React, { useEffect, useRef, useState } from "react";
import { Clock, PlayCircle, Star } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course, CourseContents, Topic, Outcomes, CourseDetailsPageSkeleton } from "@components";
import * as LucideIcons from "lucide-react";
import { useList } from "@refinedev/core";

export const CourseDetailsPage: React.FC = () => {
  const location = useLocation();
  const [course, setCourse] = useState<Course>(location.state?.course);
  const push = useNavigate();
  const refAmountSection = useRef(null);
  const [isAmountSectionVisible, setIsAmountSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAmountSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // triggers when 30% of element is visible
    );

    if (refAmountSection.current) observer.observe(refAmountSection.current);

    return () => {
      if (refAmountSection.current) observer.unobserve(refAmountSection.current);
    };
  }, []);

  useEffect(() => {
    if (location.state?.course) {
      setCourse(location.state.course);
      localStorage.setItem("selectedCourse", JSON.stringify(location.state.course));
    } else {
      const saved = localStorage.getItem("selectedCourse");
      if (saved) setCourse(JSON.parse(saved));
    }
  }, [location.state]);

  useEffect(() => {
    if (!course?.course_id) return;
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses/${course?.course_id}`
        );
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };
    fetchCourse();
  }, [course?.course_id]);

  const { result: { data: courseTopics }, query: { isLoading: topicsLoading } } = useList<Topic>({
    resource: `api/topics?course_id=${course?.course_id}`,
    pagination: {
      mode: 'off',
    },
    queryOptions: {
      enabled: !!course?.course_id,
    }
  });

  const { result: { data: courseOutcomes }, query: { isLoading: outcomesLoading } } = useList<Outcomes>({
    resource: `api/outcomes?course_id=${course?.course_id}`,
    pagination: {
      mode: 'off',
    },
    queryOptions: {
      enabled: !!course?.course_id,
    }
  });

  const { result: { data: courseObjectives }, query: { isLoading: objectivesLoading } } = useList<Outcomes>({
    resource: `api/objectives?course_id=${course?.course_id}`,
    pagination: {
      mode: 'off',
    },
    queryOptions: {
      enabled: !!course?.course_id,
    }
  });

  if (topicsLoading && outcomesLoading && objectivesLoading) return <CourseDetailsPageSkeleton />

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
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

            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-1">
                <Clock size={16} /> {course?.duration_hours} hrs
              </div>
              <div className="flex items-center gap-1">
                <PlayCircle size={16} /> {course?.lessons_count} lessons
              </div>
            </div>

            {/* Instructor */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Instructor</h2>
              <div className="flex items-center gap-4">
                <img
                  src={course?.instructors?.image_url}
                  alt={course?.instructors?.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {course?.instructors?.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {course?.instructors?.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE: Price + Includes (visible only on mobile) */}
            <div className="lg:hidden mt-6">
              {/* Price + Action Buttons */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Price Section */}
                <div  ref={refAmountSection} id="AmountSection" className="flex-1">
                  {course?.original_price && course?.discounted_price.toString() !== "0" ? (
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹ {course?.discounted_price}
                      </p>
                      <div className="flex gap-3 items-center flex-wrap">
                        <p className="text-sm text-gray-500 line-through">
                          ₹ {course?.original_price}
                        </p>
                        <span className="text-green-600 font-semibold">
                          {Math.round(
                            ((+course?.original_price - +course?.discounted_price) /
                              +course?.original_price) *
                            100
                          )}
                          % OFF
                        </span>
                      </div>
                    </div>
                  ) : course?.original_price && course?.original_price.toString() !== "0" ? (
                    <p className="text-2xl font-bold text-gray-900">
                      ₹ {course?.original_price}
                    </p>
                  ) : (
                    <p className="text-2xl text-green-600 font-semibold">Free</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-3/4">
                  <button
                    onClick={() =>
                      push("/contact-us", { state: { selectedCourse: course?.title } })
                    }
                    className="w-full sm:w-auto flex-1 border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition text-center"
                  >
                    Enquire Now
                  </button>

                  {course?.status === "ongoing" ? (
                    <button className="w-full sm:w-auto flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition text-center">
                      Buy Now
                    </button>
                  ) : (
                    <button className="w-full sm:w-auto flex-1 bg-gray-200 border border-gray-500 text-black font-semibold py-3 rounded-lg transition text-center">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>

              {/* Course Includes */}
              <div>
                <h2 className="text-xl font-semibold mb-3">This course includes</h2>
                <div className="bg-white rounded-lg shadow-lg px-6 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {courseOutcomes?.map((outcome) => {
                      const IconMapped = (LucideIcons as any)[outcome?.icon];
                      return (
                        <div
                          key={outcome?.order}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <IconMapped size="18px" />
                          </div>
                          <span>{outcome?.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
              <div className="bg-white rounded-lg shadow-lg px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {courseObjectives?.map((objective) => (
                    <div
                      key={objective?.order}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <LucideIcons.Check size={14} color="green" />
                      </div>
                      <span>{objective?.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <CourseContents topics={courseTopics} />
            </div>
          </div>

          {/* Sidebar (Desktop Only) */}
          <div className="hidden lg:block bg-white shadow-lg rounded-xl p-6 sticky top-28 h-fit">
            {course?.original_price && course?.discounted_price.toString() !== "0" ? (
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹ {course?.discounted_price}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="text-sm text-gray-500 line-through">
                    ₹ {course?.original_price}
                  </p>
                  <span className="text-green-600 font-semibold">
                    {Math.round(
                      ((+course?.original_price - +course?.discounted_price) /
                        +course?.original_price) *
                      100
                    )}
                    % OFF
                  </span>
                </div>
              </div>
            ) : course?.original_price && course?.original_price.toString() !== "0" ? (
              <p className="text-2xl font-bold text-gray-900">
                ₹ {course?.original_price}
              </p>
            ) : (
              <p className="text-2xl text-green-600 font-semibold">Free</p>
            )}

            <div>
              <button
                onClick={() =>
                  push("/contact-us", { state: { selectedCourse: course?.title } })
                }
                className="mt-3 w-full border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Enquire Now
              </button>
              {course?.status === "ongoing" ? (
                <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              ) : (
                <button className="mt-3 w-full bg-gray-200 border border-gray-500 text-black font-semibold py-3 rounded-lg transition">
                  Coming Soon
                </button>
              )}
            </div>

            <div className="mt-6">
              <span className="text-lg text-gray-900 font-semibold">
                This course includes:
              </span>
              <ul className="text-sm text-gray-600 px-2 py-2">
                {courseOutcomes?.map((outcome) => {
                  const IconMapped = (LucideIcons as any)[outcome?.icon];
                  return (
                    <li key={outcome?.order} className="mt-2 flex gap-4">
                      <IconMapped size="20px" />
                      {outcome?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar (Mobile Only) */}
      {!isAmountSectionVisible && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md p-4 flex items-center justify-between z-50">
          <div>
            {course?.original_price && course?.discounted_price.toString() !== "0" ? (
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹ {course?.discounted_price}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="text-sm text-gray-500 line-through">
                    ₹ {course?.original_price}
                  </p>
                  <span className="text-green-600 font-semibold">
                    {Math.round(
                      ((+course?.original_price - +course?.discounted_price) /
                        +course?.original_price) *
                      100
                    )}
                    % OFF
                  </span>
                </div>
              </div>
            ) : course?.original_price && course?.original_price.toString() !== "0" ? (
              <p className="text-2xl font-bold text-gray-900">
                ₹ {course?.original_price}
              </p>
            ) : (
              <p className="text-2xl text-green-600 font-semibold">Free</p>
            )}
          </div>
          <button
            onClick={() =>
              push("/contact-us", { state: { selectedCourse: course?.title } })
            }
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enquire Now
          </button>
        </div>
      )}
    </div>
  );

};

export default CourseDetailsPage;
