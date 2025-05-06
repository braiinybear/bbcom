import { useParams } from "react-router-dom";
import { useState } from "react";
import { courses } from "../../data/courses";
import { Course } from "../../types";

// Reusable Component: What You'll Learn
const WhatYouWillLearn = ({ items }: { items: string[] }) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-start gap-3">
        <span className="text-blue-600 font-bold mt-1">✓</span>
        <p className="text-gray-700">{item}</p>
      </div>
    ))}
  </section>
);

// Reusable Component: Course Includes
const CourseIncludes = ({ includes }: { includes: Course["includes"] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    {includes.map((item, idx) => (
      <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="text-blue-500">📘</span>
        <p className="text-gray-800">{item.label}</p>
      </div>
    ))}
  </div>
);

// Main Component
const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((c) => c.id === courseId);

  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModuleIndex((prev) => (prev === index ? null : index));
  };

  if (!course) {
    return <div className="p-6 bg-white text-red-500">Course not found</div>;
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Course header */}
      <div className="bg-blue-50 border-b border-blue-100 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-blue-950">{course.title}</h1>
          <p className="text-gray-600">{course.description}</p>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        {/* What You'll Learn */}
        {course.whatYouWillLearn && (
          <div className="bg-white p-6 rounded-lg mb-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">What you'll learn</h2>
            <WhatYouWillLearn items={course.whatYouWillLearn} />
          </div>
        )}

        {/* Course Includes */}
        {course.includes && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">This course includes:</h2>
            <CourseIncludes includes={course.includes} />
          </div>
        )}

        {/* Course Content */}
        {course.modules && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Course content</h2>
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-1">
              {course.modules.map((mod, i) => (
                <div key={i} className="mb-2 border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => toggleModule(i)}
                    className={`w-full text-left px-4 py-3 flex justify-between items-center transition ${
                      openModuleIndex === i 
                        ? "bg-blue-50 text-blue-800" 
                        : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-medium">{mod.title}</h3>
                      <p className="text-sm text-gray-500">
                        {mod.lecturesCount} lectures • {mod.duration}
                      </p>
                    </div>
                    <span className="text-xl text-blue-500">
                      {openModuleIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  {openModuleIndex === i && (
                    <div className="bg-gray-50 px-4 py-3">
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        {mod.chapters.map((chap, j) => (
                          <li key={j} className="text-gray-700">
                            {chap.title}
                            {chap.duration && <span className="text-gray-500 ml-2">– {chap.duration}</span>}
                            {chap.preview && <span className="text-blue-600 ml-2">(Preview)</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;