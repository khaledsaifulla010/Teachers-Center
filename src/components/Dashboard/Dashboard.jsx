import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SubNavbar from "../SubNavbar/SubNavbar";
import TabBar from "../TabBar/TabBar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="border border-b-2 mt-4"></div>
      <div className="flex gap-8">
        <div className=" h-[600px]">
          <Sidebar />
        </div>
        <div className=" bg-slate-50 w-full py-10 h-[600px]">
          <SubNavbar />
          <TabBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
