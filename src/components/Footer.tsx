import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    'Community': [
      { name: 'Students', href: '#' },
      { name: 'Instructors', href: '#' },
      { name: 'Affiliates', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 bottom-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <a href="#" className="text-3xl font-bold text-white">CourseKiya</a>
            <p className="text-sm">Start learning from the world's best instructors.</p>
            <div className="space-y-2">
               <div className="flex items-center">
                 <Phone size={16} className="mr-2 text-gray-500" />
                 <span>+1 (555) 123-4567</span>
               </div>
               <div className="flex items-center">
                 <Mail size={16} className="mr-2 text-gray-500" />
                 <span>support@coursekiya.com</span>
               </div>
               <div className="flex items-start">
                 <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
                 <span>123 Learning St, Education City, EC 54321</span>
               </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks)?.map(([title, links]) => (
            <div key={title} className="md:justify-self-center">
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links?.map((link) => (
                  <li key={link?.name}>
                    <a href={link?.href} className="text-base text-gray-400 hover:text-white">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} CourseKiya, Inc. All rights reserved.</p>
          {/* Social icons would go here */}
        </div>
      </div>
    </footer>
  );
};