import React, { useState, useEffect } from 'react';
import { Heart, ChevronRight, Award, Users, Target, ArrowDown } from 'lucide-react';
import { Course, CourseCard } from '@components';
import { abidunnisa1 } from 'public';
import { useNavigate } from 'react-router-dom';
import { useList } from '@refinedev/core';

export const HeroSection: React.FC = () => {
  const push = useNavigate();

  const { result: { data: coursesData }, query: { isLoading: coursesLoading } } = useList<Course>({
    resource: 'api/courses',
    pagination: {
      mode: 'off',
    },
  });

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-6xl mx-auto px-6 pb-20 py-12 ">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="space-y-6 md:col-span-3 col-span-3">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Welcome to Our Platform
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Simplifying Learning,
                <span className="text-blue-600"> Empowering you</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in making quality education accessible to everyone. Our platform is designed to help you achieve your learning goals with expert-led courses.
              </p>
            </div>

            {/* <div className="relative" style={{ transform: translateY(${ scrollY * - 0.05}px)}}> */}
            <a href={"https://www.linkedin.com/company/coursekiya-edu/"} target='_blank' className="col-span-3 md:col-span-2 relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img src={abidunnisa1.src} className="w-full h-full object-cover" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abidunnisa Begum</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed">
                  "My mission is to democratize education and make learning accessible to everyone, everywhere."
                </p>
              </div>
            </a>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => { document.getElementById("courseSection")?.scrollIntoView({ behavior: "smooth" }) }}>
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
            <div className="flex items-center gap-8 mb-8 justify-center">
              {/* <div className="flex-shrink-0">
                <img src={abidunnisa2.src} className="w-28 h-28 rounded-2xl object-fit" />
              </div> */}

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet the Founders</h2>
                <a href='https://www.linkedin.com/in/abidunnisa-begum' target='_blank' className="text-blue-600 font-medium">Abidunnisa Begum </a>
                <a href='https://www.linkedin.com/in/dadavalli-shaik-abubai-0004a412a' target='_blank' className="text-blue-600 font-medium"> & Shaik Dadavalli</a>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We're Abidunnisa Begum and Shaik Dadavalli (DV) — co-founders of CourseKiya, an EdTech platform built to make learning truly career-driven and outcome-focused.
              </p>
              <p>
                When we started CourseKiya, we saw a clear gap — people were learning a lot, but not learning what actually gets them hired. That's where our mission began: to bridge the distance between theory and real-world application through practical, hands-on learning.
              </p>
              <p>
                Together, we bring a mix of technical depth and strategic thinking. With experience in data analytics, product management, business operations, and education, we've mentored hundreds of learners from non-technical backgrounds, helping them build confidence and successfully transition into tech and business roles.
              </p>
              <p>
                At CourseKiya, we believe education should do more than just teach — it should transform. That's why every program we design focuses on critical thinking, problem-solving, and real-world projects that help learners build tangible career outcomes.
              </p>
              <p>
                For us, CourseKiya isn't just a platform — it's a movement to inspire people to explore, experiment, and grow into confident professionals ready to thrive in the ever-evolving world of tech and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="courseSection">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our comprehensive range of courses designed to help you master new skills and advance your career
          </p>
          <div className="flex items-end justify-end mb-6">
            <button onClick={() => push('/courses')} className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" >
            {coursesData?.slice(0, 4)?.map((course) => (
              <CourseCard key={course?.course_id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div >
  );
}