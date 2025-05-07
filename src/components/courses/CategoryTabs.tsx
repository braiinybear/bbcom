const categories = [
    "IT Courses",
    "Marketing",
    "Finance",
  ];
  
  interface Props {
    selected: string;
    onSelect: (category: string) => void;
  }
  
  const CategoryTabs = ({ selected, onSelect }: Props) => {
    return (
      <div className="overflow-x-auto border-b bg-white">
        <div className="flex space-x-4 px-4 py-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  selected === category
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-900"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoryTabs;
  