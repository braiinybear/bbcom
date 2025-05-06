import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseCard from "../../components/courses/CourseCard";

const CourseCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <div className="p-6 text-red-600">No category selected.</div>;
  }

  const filteredCourses = courses.filter(
    (course) => course.category === category
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          {category} <span className="text-blue-700">Courses</span>
        </h1>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10 text-lg">
            Sorry, no courses found in <span className="font-semibold">{category}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseCategoryPage;
