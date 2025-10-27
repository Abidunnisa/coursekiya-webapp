import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';
import { Header, Footer, HeroSection, CategoriesSection, Category, Course, CourseListSection, InstructorCTA, Instructor } from '@components';
import { RenderPage } from './RenderPage';
import { dataanalyticscoursecard, datasciencecoursecard, powerbicoursecard, pythoncoursecard, sqlcoursecard, tableaucoursecard } from 'public';

const mockInstructors: Record<string, Instructor> = {
  'inst-1': {
    instructor_id: 'inst-1',
    name: 'Abidunnisa',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHD7papk42fYA/profile-displayphoto-crop_800_800/B56ZhgZx_hHcAI-/0/1753964029192?e=1762992000&v=beta&t=B_T_IhUTBEl3phvrSHTrkj1iGdF-nKj228Ecx1BVyko',
    bio: 'Software Developer & Teaching modern web tech.'
  },
};

const mockCategories: Category[] = [
  { category_id: 'cat-1', name: 'Programming & Development', icon: BarChart2 },
  { category_id: 'cat-2', name: 'Design', icon: PlayCircle },
  { category_id: 'cat-3', name: 'Data Analytics & Business Intelligence', icon: BookOpen },
  { category_id: 'cat-4', name: 'Data Science & Management', icon: Clock },
  { category_id: 'cat-5', name: 'IT & Software', icon: User },
];

const mockCourses: Course[] = [
  {
    course_id: 'course-1',
    title: 'Data Analytics Mastery: From SQL to Power BI with Real Projects',
    description: 'Become a Full-Stack Web Developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
    image_url: dataanalyticscoursecard.src,
    original_price: "31999",
    discounted_price: "19999",
    rating: "4.8",
    review_count: "182000",
    instructor: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Beginner',
    duration_hours: "55.5",
    lessons_count: "612",
    status: 'ongoing',
  },
  {
    course_id: 'course-2',
    title: 'Data Science Mastery: From Python to Machine Learning',
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    image_url: datasciencecoursecard.src,
    discounted_price: "24999",
    original_price: "34999",
    rating: "4.7",
    review_count: "155000",
    instructor: mockInstructors['inst-1'],
    category: 'Data Science & Management',
    level: 'Intermediate',
    duration_hours: "48",
    lessons_count: "579",
    status: 'ongoing',
  },
  {
    course_id: 'course-3',
    title: 'Complete Python 2025: From Basics to AI',
    description: 'Learn to design beautiful and user-friendly interfaces. Master Figma, color theory, typography, and the full design process.',
    image_url: pythoncoursecard.src,
    original_price: "7999",
    discounted_price: "4999",
    rating: "4.6",
    review_count: "42000",
    instructor: mockInstructors['inst-1'],
    category: 'Programming & Development',
    level: 'Beginner',
    duration_hours: "22",
    lessons_count: "180",
    status: 'upcoming',
  },
  {
    course_id: 'course-4',
    title: 'SQL Mastery 2025: Data Power Unlocked',
    description: 'Master Digital Marketing: SEO, YouTube, Email, Facebook Marketing, Google Analytics & More!',
    image_url: sqlcoursecard.src,
    discounted_price: "4999",
    original_price: "7499",
    rating: "4.5",
    review_count: "98000",
    instructor: mockInstructors['inst-1'],
    category: 'Data Science & Management',
    level: 'Beginner',
    duration_hours: "35.5",
    lessons_count: "405",
    status: 'upcoming',
  },
  {
    course_id: 'course-5',
    title: 'Power BI 2025: Visuals That Drive Strategy',
    description: 'The most advanced and modern CSS course on the web: master flexbox, grid, responsive design, and so much more.',
    image_url: powerbicoursecard.src,
    discounted_price: "4999",
    original_price: "8499",
    rating: "4.8",
    review_count: "31000",
    instructor: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Advanced',
    duration_hours: "28",
    lessons_count: "220",
    status: 'upcoming',
  },
  {
    course_id: 'course-6',
    title: 'Tableau 2025: The Art of Data Storytelling',
    description: 'The skills you need to become a BI Analyst - SQL, Tableau, Power BI, and more. Taught by a professional data scientist.',
    image_url: tableaucoursecard.src,
    discounted_price: "4999",
    original_price: "7999",
    rating: "4.7",
    review_count: "76000",
    instructor: mockInstructors['inst-1'],
    category: 'Data Analytics & Business Intelligence',
    level: 'Intermediate',
    duration_hours: "42",
    lessons_count: "450",
    status: 'upcoming',
  },
];


const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [currentPage, setCurrentPage] = useState('home');
  const title = "";

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <RenderPage categories={categories} courses={courses} title={title} currentPage={currentPage} />
      <Footer />
    </div>
  );
};

export default App;
