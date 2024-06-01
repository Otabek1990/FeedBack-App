import Navbar from "../../components/Navbar";
import Sidebar from "../../containers/Sidebar/Sidebar";


function Home() {
  return (
    <div className="flex items-start gap-x-7">
      <Sidebar/>
      <div className="h-[90vh] flex-1">
        <Navbar/>


      </div>
       {/* Layout/> */}
    </div>
  );
}

export default Home;
