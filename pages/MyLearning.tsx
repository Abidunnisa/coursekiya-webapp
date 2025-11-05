import React, { useEffect, useState } from 'react';
import { useAuth } from 'src/context/AuthContext';
import { Course, CourseCard } from '@components';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const MyLearningDashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { session } = useAuth();

  useEffect(() => {
    const fetchMyCourses = async () => {
      if (!session) return;

      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${API_URL}/api/my-courses`, {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch your courses.');
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, [session]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        Loading your courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          My Learning
        </h1>
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.course_id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            You are not enrolled in any courses yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyLearningDashboard;