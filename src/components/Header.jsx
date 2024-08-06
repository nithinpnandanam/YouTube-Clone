import { useDispatch } from "react-redux";
import hamburger from "../assets/hamburger.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.svg"
import { $toggleSidebar } from "../utils/slices/globalSlice";

const Header = () => {
  const dispatch = useDispatch()
  const categories = [
    "All",
    "News",
    "Music",
    "Travel",
    "Software Engineering",
    "Gadjects",
    "Recently Uploaded",
    "Romantic Comedies",
    "Watched",
  ];
  const toggleSidebar = () => {
    dispatch($toggleSidebar())
  }
  return (
    <div>
      <div className="flex justify-between border-2 border-solid border-orange-900 p-3">
        <img src={hamburger} alt="hamburger icon" className="w-10 h-10" onClick={toggleSidebar}/>
        <div className="flex items-center">
          <input type="text" className="border border-gray-500 rounded-l-full pl-4 p-2 bg-black w-[37rem] focus:outline-none focus:border-blue-500" placeholder="Search"/>
          <div className="border-2 border-l-0 border-gray-500 rounded-r-full p-[11px] bg-[#666565] opacity-70">
            <img src={searchIcon} alt="search icon" className="w-4 h-4 " />
          </div>
        </div>
        <img src={userIcon} alt="search icon" className="w-8 h-8 border-solid border-2 border-gray-600 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
