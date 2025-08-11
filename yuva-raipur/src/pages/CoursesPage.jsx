import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const CoursesPage = () => {
  const courses = [
    {
      name: "CGVYAPAM",
      description: "Comprehensive preparation for Chhattisgarh Vyapam exams.",
      pdf: "/pdfs/cgvyapam.pdf",
      size: "2.1 MB",
    },
    {
      name: "RAILWAY",
      description: "Covers syllabus for RRB exams with mock tests.",
      pdf: "/pdfs/railway.pdf",
      size: "3.4 MB",
    },
    {
      name: "CG PSC",
      description: "Foundation & advanced modules for CG Public Service Commission exams.",
      pdf: "/pdfs/cgpsc.pdf",
      size: "1.8 MB",
    },
    {
      name: "BANKING",
      description: "IBPS, SBI, RBI preparation with quantitative, reasoning & English focus.",
      pdf: "/pdfs/banking.pdf",
      size: "2.7 MB",
    },
    {
      name: "SSC",
      description: "Complete coverage for SSC CGL, CHSL, and related exams.",
      pdf: "/pdfs/ssc.pdf",
      size: "2.3 MB",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Available Courses
        </h1>

        {/* Search bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Table layout */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-center">Size</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-semibold text-gray-800">
                      {course.name}
                    </td>
                    <td className="p-3 text-gray-600">{course.description}</td>
                    <td className="p-3 text-center text-gray-500">
                      {course.size}
                    </td>
                    <td className="p-3 text-center">
                      <a
                        href={course.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        <FaFilePdf className="mr-2" />
                        View & Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-500 italic"
                  >
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
