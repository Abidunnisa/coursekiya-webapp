import React from 'react';

export interface Instructor {
  instructor_id: string;
  name: string;
  image_url: string;
  bio: string;
}

export const InstructorCTA: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Become an instructor</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-100">
                Share your knowledge with millions of students around the world. We provide the tools and skills to teach what you love.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow-md px-6 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Start teaching today
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-auto lg:aspect-h-auto">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://placehold.co/800x600/E0E7FF/4338CA?text=Your+Teaching+Studio"
              alt="Instructor teaching"
            />
          </div>
        </div>
      </div>
    </section>
  );
};