import { useDispatch, useSelector } from "react-redux";
import hamburger from "../assets/hamburger.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.svg";
import { $toggleSidebar } from "../utils/slices/globalSlice";
import { useEffect, useState } from "react";
import { searchAPI } from "../utils/consatnts";
import { $addToSearchCache } from "../utils/slices/searchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestion, setShowSuggestion] = useState([]);
  const searchCache = useSelector((store)=>store.searchCache)
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if(searchCache[searchValue]){
        setShowSuggestion(searchCache[searchValue])
      }else{
        fetchSuggestions(searchValue);
      }
      
    }, 200);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchValue]);
  const fetchSuggestions = async (searchValue) => {
    const data = await fetch(searchAPI + searchValue);
    const json = await data.json();
    setShowSuggestion(json[1]);
    dispatch($addToSearchCache({
      [searchValue]:json[1]
    }))
  };
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
    dispatch($toggleSidebar());
  };
  return (
    <div>
      <div className="flex justify-between p-3">
        <img
          src={hamburger}
          alt="hamburger icon"
          className="w-10 h-10"
          onClick={toggleSidebar}
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-gray-500 rounded-l-full pl-4 p-2 bg-black w-[37rem] focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <div className="border-2 border-l-0 border-gray-500 rounded-r-full p-[9px] bg-[#666565] opacity-70">
              <img src={searchIcon} alt="search icon" className="w-5 h-5 " />
            </div>
          </div>
          {showSuggestion.length > 0 && (
            <div className="border border-red-800 border-solid z-10 absolute top-[58px] w-[632px] bg-customGray rounded-2xl ">
              <ul className="p-3">
                {showSuggestion.map((element, index) => {
                  return (
                    <li className="pb-2 pl-2" key={index}>
                      <img
                        src={searchIcon}
                        alt="search icon"
                        className="w-5 h-5 inline-block mr-2"
                      />
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <img
          src={userIcon}
          alt="search icon"
          className="w-8 h-8 border-solid border-2 border-gray-600 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
