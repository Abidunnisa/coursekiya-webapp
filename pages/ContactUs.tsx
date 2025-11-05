import React, { useEffect, useState } from "react";
import { Course } from "@types";
import { useLocation } from "react-router-dom";
import { useList } from "@refinedev/core";
import { ScrollToTop } from "@components/ScrollToTop";

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "In India",
    type: "course",
    title: "",
    comments: "",
  });

  const location = useLocation();
  const [type, setType] = useState<string>('course');

  const { result: { data: coursesData }, query: { isLoading: coursesLoading } } = useList<Course>({
    resource: 'api/courses',
    pagination: {
      mode: 'off',
    },
  });

  const { result: { data: webinarsData }, query: { isLoading: webinarsLoading } } = useList<Course>({
    resource: 'api/webinars',
    pagination: {
      mode: 'off',
    },
  });

  useEffect(() => {
    if (location?.state?.selectedCourse) {
      setType(location?.state?.type)
      setFormData({ ...formData, ['title']: location?.state?.selectedCourse })
    }
  }, [location])

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwObm2fJZtXd-gYWpz_K7aScdHnSTADiqSBybe1T--Df_6Ok9o44pw_YalNeKvjPZLYMQ/exec";
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "In India",
        type: "course",
        title: "",
        comments: "",
      });
    } catch (error) {
      alert("Error submitting the form. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-4 px-4 flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6"> Contact Us</h1>
      </div>
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full p-8 ">
        <h1 className="text-xl font-bold text-center text-gray-900 mb-6">
          Enquire About a Course
        </h1>

        {submitted ? (
          <>
          <ScrollToTop />
          <p className="text-green-600 text-center font-medium">
            ✅ Thank you! Your enquiry has been received.
          </p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10,15}"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                name="location"
                value={formData?.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                <option>In India</option>
                <option>Outside India</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                name="type"
                value={type}
                onChange={(e) => {
                  handleChange
                  setType(e.target.value)
                }}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                <option>Course</option>
                <option>Webinar</option>
              </select>
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
              <select
                name="title"
                value={formData?.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                <option value="">{`Select a ${type}`}</option>
                {(type === 'course' ? coursesData : webinarsData)?.map((c) => (
                  <option key={c?.title} value={c?.title}>
                    {c?.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comments (optional)
              </label>
              <textarea
                name="comments"
                value={formData?.comments}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific queries..."
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;

