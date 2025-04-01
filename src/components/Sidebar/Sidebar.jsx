import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="bg-white w-[200px] py-6">
      <h2 className="flex items-center justify-center gap-24 text-lg text-slate-700">
        Teach <FaCircleArrowLeft className="text-2xl text-black" />
      </h2>
      <h2 className="mt-6 ml-4 text-lg text-slate-700">Dashboard</h2>
      <h2 className="flex items-center justify-center gap-8 mt-6 text-lg text-slate-700">
        Manage Batch <IoIosArrowDown />
      </h2>
      <h2 className="mt-4 text-center text-lg text-slate-700 p-2 border w-full rounded-md bg-blue-200">
        All Batches
      </h2>
      <h2 className="mt-4 text-center text-lg text-slate-700">Resources</h2>
      <h2 className="mt-6 ml-4 text-lg text-slate-700">My Earnings</h2>
      <h2 className="mt-6 ml-4 text-lg text-slate-700">Time Table</h2>
      <h2 className="mt-6 ml-4 text-lg text-slate-700">Analytics</h2>
      <h2 className="mt-16 ml-4 text-lg text-slate-700">Manage Profile</h2>
      <h2 className="mt-4 ml-4 text-lg text-slate-700">Settings</h2>
    </div>
  );
};

export default Sidebar;
