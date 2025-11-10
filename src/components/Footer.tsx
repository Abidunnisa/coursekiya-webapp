import React from "react";
import { Instagram, Linkedin, Phone, Mail, MapPin, Youtube } from "lucide-react";
import { coursekiyafullcroppedlogo } from "public";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-center text-white py-12 mt-10">
      {/* Top line sections */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 px-8 mx-auto">
        {/* Left Links */}
        <div className="text-sm  flex flex-col space-y-3 uppercase tracking-widest font-semibold w-1/3">
          <div className="w-full h-1 h-px bg-white mt-14 mb-12"></div>
          <a href="/termsofuse" target="_blank" className="cursor-pointer hover:text-gray-500">Terms & Conditions</a>
          <a href="/privacypolicy" target="_blank" className="cursor-pointer hover:text-gray-500">Privacy Policy</a>
          <a href="/refundpolicy" target="_blank" className="cursor-pointer hover:text-gray-500">Refund Policy</a>
        </div>

        {/* Center Logo & Socials */}
        <div className="flex flex-col items-center my-10 mx-8 md:my-0 w-1/3">
          <img
            src={coursekiyafullcroppedlogo.src}
            className="max-h-32 w-auto object-contain md:max-h-40"
          />

          <div className="flex items-center gap-6 mt-6">
            <a href="https://www.youtube.com/channel/UCLuF4nQOJMImbBqNCcpLvhQ" target="_blank"><Youtube size={18} className="cursor-pointer hover:opacity-70" /></a>
            <a href="https://www.linkedin.com/company/coursekiya-edu" target="_blank"><Linkedin size={18} className="cursor-pointer hover:opacity-70" /></a>
            <a href="https://www.instagram.com/coursekiya/" target="_blank"><Instagram size={18} className="cursor-pointer hover:opacity-70" /></a>
          </div>

          <div className="h-10 w-px bg-gray-400 mt-8 mb-4"></div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-gray-500" />
              <span>+91 9985462830</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-gray-500" />
              <span>support@coursekiya.com</span>
            </div>
            <div className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* Right Links */}
        <div className="text-sm  flex flex-col space-y-3 uppercase tracking-widest font-semibold w-1/3">
          <div className="w-full h-1 h-px bg-white mt-14 mb-12"></div>
          <a href="/contact-us" target="_blank" className="cursor-pointer hover:text-gray-500">Contact Us</a>
          <a href="/courses" target="_blank" className="cursor-pointer hover:text-gray-500">Our Courses</a>
          <a href="/webinars" target="_blank" className="cursor-pointer hover:text-gray-500">Our Webinars</a>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} CourseKiya, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
