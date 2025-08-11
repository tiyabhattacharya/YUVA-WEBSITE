import React from "react";

const teachers = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Teacher ${i + 1}`,
  image: `/teachers/teacher${i + 1}.jpg`, // Place your images in public/images
}));

const TeachingFaculty = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Teaching Faculty
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              loading="lazy"
              className="w-full h-64 object-contain bg-gray-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {teacher.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingFaculty;
