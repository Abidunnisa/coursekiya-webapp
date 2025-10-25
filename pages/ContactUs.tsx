import React, { useState } from "react";
import { Course } from "../src/components";

export const ContactUs: React.FC<{ courses: Course[] }> = ({courses}) => {
  const [formData, setFormData] = useState({
    course: "",
    name: "",
    phone: "",
    email: "",
    location: "In India",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 👇 Replace with your deployed Google Apps Script URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbwObm2fJZtXd-gYWpz_K7aScdHnSTADiqSBybe1T--Df_6Ok9o44pw_YalNeKvjPZLYMQ/exec";
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });
      setSubmitted(true);
      setFormData({
        course: "",
        name: "",
        phone: "",
        email: "",
        location: "In India",
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
    <section className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Enquire About a Course
        </h1>

        {submitted ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Thank you! Your enquiry has been received.
          </p>
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
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>In India</option>
                <option>Outside India</option>
              </select>
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="course"
                value={formData?.course}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a course</option>
                {courses?.map((c) => (
                  <option key={c?.id} value={c?.title}>
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

