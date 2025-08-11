import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    category: "",
    address: "",
    mobile: "",
    email: "",
    education: "",
    course: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl max-w-4xl w-full p-6 md:p-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          YUVA Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block font-semibold mb-1">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              placeholder="Enter father's name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mother's Name */}
          <div>
            <label className="block font-semibold mb-1">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              placeholder="Enter mother's name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <select
              name="gender"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-semibold mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Education */}
          <div>
            <label className="block font-semibold mb-1">Education</label>
            <input
              type="text"
              name="education"
              placeholder="Enter your qualification"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course */}
          <div>
            <label className="block font-semibold mb-1">Course Applied For</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          {/* Photo Upload */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Upload Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full border rounded-lg p-2"
              onChange={handleChange}
              required
            />
          </div>

          <div>
        <label>Drop a Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows="4"
          style={{ width: "200%" }}
        ></textarea>
      </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
