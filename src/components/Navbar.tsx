// import { NavLink } from "react-router-dom";
import vector from "../assets/Vector.png";
import Button from "./ui/Button";
function Navbar() {
  const addFeedbackHandler = () => {
    alert("feedback qoshish");
  };
  return (
    <nav className="bg-black-700 w-full h-20 rounded-md flex items-center gap-3 text-white-400 justify-between p-4">
      <div className="flex gap-3 items-center">
        <img src={vector} alt="" />
        <h1 className="text-xl">6 Suggestions</h1>
        <h1>
          <span>Sort By: Most Upvostest</span>
        </h1>
      </div>

      <Button
        handleClick={addFeedbackHandler}
        styles={"bg-purple-300 px-6 py-4 font-bold text-sm"}
      >
        + Add FeedBack
      </Button>
    </nav>
  );
}

export default Navbar;
