import React from 'react';
import { HeroSection, CategoriesSection, InstructorCTA } from '@components';
import ContactUs from './ContactUs';
import { useAuth } from 'src/context/AuthContext';
import MyLearningDashboard from './MyLearning';

export const HomePage: React.FC = () => {

  const { session, logout } = useAuth();

  return (
    <div>
      {session ? (
        <div>
          <MyLearningDashboard />
        </div>
      ) : (
        <div>
          <HeroSection />
          <CategoriesSection />
          <InstructorCTA />
          <ContactUs />
        </div>
      )}
    </div>
  )
};

export default HomePage;
