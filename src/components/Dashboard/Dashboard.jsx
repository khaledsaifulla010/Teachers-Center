import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="border border-b-2 mt-4"></div>
      <div className="bg-slate-50 h-[600px]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
