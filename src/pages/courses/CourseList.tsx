import { useState } from "react";
import { courses } from "../../data/courses";
import CourseCard from "../../components/courses/CourseCard";
import CategoryTabs from "../../components/courses/CategoryTabs";
import { Link } from "react-router-dom";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("IT Courses");

  const filteredCourses = courses.filter(
    (course) => course.category === selectedCategory
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Our <span className="text-blue-700">{selectedCategory}</span>
        </h1>

        <CategoryTabs
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length > 4 && (
          <div className="text-center mt-10">
            <Link
              to={`/courses/category/${selectedCategory}`}
              className="inline-block bg-blue-950 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 shadow"
            >
              View All {selectedCategory} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
