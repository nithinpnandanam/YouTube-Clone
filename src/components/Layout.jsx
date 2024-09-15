import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Layout = () => {
  const global = useSelector((store) => store.global);
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex">
        <div className={`h-full ${global.showSidebar ? "w-[12%]" : null}`}>
          <Sidebar />
        </div>
        <div className={global.showSidebar ? "w-[88%]" : "w-full"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
