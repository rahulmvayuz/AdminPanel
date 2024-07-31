import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="md:flex ">
      <div className="md:basis-3/12">
        <Sidebar />
      </div>
      <div className="md:basis-9/12 ">
        <Header />
        <div className="main body flex justify-center items-center h-96 cursor-pointer">
          <Link to="./addUser">
            <FaPlusCircle size={40} color="#1C2434" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
