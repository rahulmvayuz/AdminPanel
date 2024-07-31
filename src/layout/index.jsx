import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export const Layout = () => {
  return (
    <div className="md:flex">
      <div className="md:basis-3/12">
        <Sidebar />
      </div>
      <div className="md:basis-9/12 ">
        <Header />
        <Outlet/>
      </div>
    </div>
  );
};
