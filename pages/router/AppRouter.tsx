"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "../courses";
import InstructorPage from "../Instructor";
import Webinars from "../Webinars";
import CourseDetailsPage from "../CourseDetailsPage";
import ContactUs from "../ContactUs";
import DigitalProductsPage from "../DigitalProducts";
import { Header, Footer, ScrollToTop } from "@components";
import LoginPage from "../Login";
import RegisterPage from "../Register";
import MyLearningDashboard from "../MyLearning";
import { ProtectedRoute } from "pages/router/ProtectedRoute"; // Adjust path if needed
import { AuthProvider } from "src/context/AuthContext";
import HomePage from "pages/Home";
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const queryClient = new QueryClient();

export default function AppRouter({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Refine dataProvider={dataProvider(API_URL || '')}>
        <Router>
          <AuthProvider>
            <ScrollToTop />
            <Header />
            <Routes>
              {/* Home page (Next.js index.tsx component) */}
              <Route path="/" element={<HomePage />} />

              {/* Top Level Routes */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/digital-products" element={<DigitalProductsPage />} />
              <Route path="/teach" element={<InstructorPage />} />
              <Route path="/contact-us" element={<ContactUs />} />

              {/* Dynamic Route */}
              <Route path="/courses/:course_id/:course_name" element={<CourseDetailsPage />} />

              {/* NEW AUTH ROUTES */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* NEW PROTECTED ROUTE */}
              <Route
                path="/my-learning"
                element={
                  <ProtectedRoute>
                    <MyLearningDashboard />
                  </ProtectedRoute>
                }
              />

              {/* 404 fallback */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
              <Route path="*" element={<Component {...pageProps} />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </Router>
      </Refine>
    </QueryClientProvider>
  );
}