// import { NavLink } from "react-router-dom";
import vector from '../assets/Vector.png'
function Navbar() {
  return (
    <nav className="bg-black-700 w-full h-20 rounded-md flex items-center gap-3 text-white-400 justify-between p-4">
      <div className="flex gap-3 items-center">
        <img src={vector} alt="" />
        <h1 className="text-xl">6 Suggestions</h1>
        <h1>
          <span>Sort By: Most Upvostest</span>
        </h1>
      </div>
      <button className="bg-purple-300 rounded-lg w-40 min-h-11">
        + Add FeedBack
      </button>
      {/* <NavLink to={"/"}>Home </NavLink>
      <NavLink to={"/create-feedback"}>Create </NavLink>
      <NavLink to={"/create-feedback"}>Edit </NavLink> */}
    </nav>
  );
}

export default Navbar;
