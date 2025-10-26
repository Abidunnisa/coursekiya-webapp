import React, { useState, useEffect } from 'react';
import { Heart, Search, ShoppingCart, User, Menu, X, Star, PlayCircle, BookOpen, Clock, BarChart2, ChevronRight, ChevronLeft, MapPin, Mail, Phone, Award, Users, Target, ArrowDown } from 'lucide-react';
import { CourseListSection, Course, CourseCard } from '@components';
import { abidunnisa1, abidunnisa2 } from 'public';

export const HeroSection: React.FC<{ courses: Course[] }> = ({ courses }) => {
  //   return (
  //     <div className="bg-gray-50">
  //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  //         <div className="max-w-3xl mx-auto text-center">
  //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
  //             Find your next learning adventure
  //           </h1>
  //           <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600">
  //             Learn from industry experts. Master new skills. Get job-ready with our hands-on courses.
  //           </p>
  //           <form className="mt-8 md:mt-10 flex max-w-lg mx-auto">
  //             <label htmlFor="search-course" className="sr-only">
  //               Search for courses
  //             </label>
  //             <input
  //               type="text"
  //               name="search-course"
  //               id="search-course"
  //               className="flex-1 block w-full px-5 py-4 rounded-l-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //               placeholder="What do you want to learn today?"
  //             />
  //             <button
  //               type="submit"
  //               className="inline-flex items-center px-6 py-4 border border-transparent rounded-r-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  //               aria-label="Search"
  //             >
  //               <Search size={20} />
  //             </button>
  //           </form>
  //           <div className="mt-6 flex flex-wrap justify-center gap-2">
  //             <span className="text-sm font-medium text-gray-700">Popular:</span>
  //             {['React', 'Python', 'UI/UX', 'AWS', 'Data Science'].map((tag) => (
  //               <a
  //                 key={tag}
  //                 href="#"
  //                 className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50"
  //               >
  //                 {tag}
  //               </a>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 py-12 ">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="space-y-6 md:col-span-3 col-span-3">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Welcome to Our Platform
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Learning,
                <span className="text-blue-600"> One Course at a Time</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in making quality education accessible to everyone. Our platform is designed to help you achieve your learning goals with expert-led courses.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">4.8★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* <div className="relative" style={{ transform: translateY(${ scrollY * - 0.05}px)}}> */}
            <div className="col-span-3 md:col-span-2 relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img src={abidunnisa1.src} className="w-full h-full object-cover"/>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abidunnisa</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed">
                  "My mission is to democratize education and make learning accessible to everyone, everywhere."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-600" size={32} />
        </div>
      </section >

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Platform</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of online learning with cutting-edge technology and world-class instructors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">What We Offer</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our platform provides comprehensive learning experiences across various domains. From beginner-friendly introductions to advanced professional courses, we ensure quality content delivered by industry experts.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Each course is carefully crafted with practical projects, real-world applications, and continuous support to help you succeed in your learning journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Goal-Oriented</h4>
                <p className="text-sm text-gray-600">Structured learning paths designed to achieve your objectives</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow mt-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Certified</h4>
                <p className="text-sm text-gray-600">Earn recognized certificates upon course completion</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Community</h4>
                <p className="text-sm text-gray-600">Join thousands of learners worldwide</p>
              </div>

              <div className="bg-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow mt-8">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Support</h4>
                <p className="text-sm text-gray-600">24/7 assistance from our dedicated team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <img src={abidunnisa2.src} className="w-28 h-28 rounded-2xl object-fit" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet the Founder</h2>
                <p className="text-blue-600 font-medium">Abidunnisa - Educator & Entrepreneur</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                With over 15 years of experience in education and technology, John Anderson founded this platform with a simple yet powerful vision: to make quality education accessible to everyone, regardless of their background or location.
              </p>
              <p>
                After working with leading educational institutions and tech companies, John recognized the gap between traditional education systems and the evolving needs of modern learners. This insight led to the creation of our platform in 2020.
              </p>
              <p>
                Today, we're proud to have helped thousands of students transform their careers and achieve their learning goals. Our commitment to excellence and innovation continues to drive everything we do.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Credentials & Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">MBA from Stanford University</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Former VP at Tech Education Corp</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Published author of 3 books on learning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">TEDx speaker on education innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our comprehensive range of courses designed to help you master new skills and advance your career
          </p>
          <div className="flex items-end justify-end mb-6">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses?.map((course) => (
              <CourseCard key={course?.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div >
  );
}