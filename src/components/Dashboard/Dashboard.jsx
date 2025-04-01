import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SubNavbar from "../SubNavbar/SubNavbar";
import TabBar from "../TabBar/TabBar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="border border-b-2 mt-2"></div>
      <div className="flex gap-8">
        <div>
          <Sidebar />
        </div>
        <div className=" bg-gray-100 w-full py-10 h-[600px]">
          <SubNavbar />
          <TabBar />
          <div className=" bg-white w-[1200px] mx-auto mt-4 h-[410px] rounded-md mr-14">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
