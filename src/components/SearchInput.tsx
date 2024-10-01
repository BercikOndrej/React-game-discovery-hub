import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex items-center w-full group focus:text-gray-50">
      <FaSearch className="relative left-8 top-2 transform -translate-y-1/2 z-10 text-gray-400 group-hover:text-gray-50 group-hover:dark:text-gray-700 duration-500 ease-linear" />
      <Input placeholder="Search Games..." className="pl-10 h-10" />
    </div>
  );
};

export default SearchInput;
