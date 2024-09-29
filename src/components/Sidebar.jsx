import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const global = useSelector((store) => store.global);
  const sidebarItems = [
    { name: "Home", path: "/" },
    { name: "Shorts" },
    { name: "Subscriptions" },
    { name: "Youtube Music" },
    { name: "You" },
    { name: "Downloads" },
  ];

  return (
    global.showSidebar && (
      <div className="flex flex-col h-full items-center">
        {sidebarItems.map((element, index) => {
          return (
            <div>
              {element.path ? (
                <Link to={element.path}>
                  <button className="p-5" key={index}>
                    {element.name}
                  </button>
                </Link>
              ) : (
                <button className="p-5" key={index}>
                  {element.name}
                </button>
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
export default Sidebar;
