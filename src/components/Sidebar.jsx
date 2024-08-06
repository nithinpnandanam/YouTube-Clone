import { useSelector } from "react-redux";

const Sidebar = () => {
  const global = useSelector((store)=>store.global)
  const sidebarItems = [
    "Home",
    "Shorts",
    "Subscriptions",
    "YoutubeMusic",
    "You",
    "Downloads",
  ];
  
  return (
    global.showSidebar &&  (<div className="border-2 border-solid border-green-600 flex flex-col h-full">
        {sidebarItems.map((element, index) => {
          return (
            <button className="p-5" key={index}>
              {element}
            </button>
          );
        })}
      </div>)
  );
};
export default Sidebar;
