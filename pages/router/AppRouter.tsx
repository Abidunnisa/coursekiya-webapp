"use client";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Courses from "../courses";
import InstructorPage from "../Instructor";
import Webinars from "../Webinars";
import CourseDetailsPage from "../CourseDetailsPage";
import ContactUs from "../ContactUs";
import DigitalProductsPage from "../DigitalProducts";
import { Header, Footer, ScrollToTop } from "@components";

export default function AppRouter({ Component, pageProps, courses }: any) {
  return (
    <Router>
      <ScrollToTop />
      <Header courses={courses} />
      <Routes>
        {/* Home page (Next.js index.tsx component) */}
        <Route path="/" element={<Component {...pageProps} />} />

        {/* Top Level Routes */}
        <Route path="/courses" element={<Courses title="Courses" courses={courses} />} />
        <Route path="/webinars" element={<Webinars title="Webinars" courses={courses} />} />
        <Route path="/digital-products" element={<DigitalProductsPage title="Digital Products" courses={courses} />} />
        <Route path="/teach" element={<InstructorPage />} />
        <Route path="/contact-us" element={<ContactUs courses={courses} />} />
        {/* Dynamic Route */}
        <Route path="/courses/:course_id" element={<CourseDetailsPage />} />

        {/* 404 fallback */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
