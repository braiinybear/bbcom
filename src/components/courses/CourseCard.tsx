import { Link } from "react-router-dom";
import { Course } from "../../types";

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-[1.02] bg-white overflow-hidden border border-gray-100"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {course.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-1">{course.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
