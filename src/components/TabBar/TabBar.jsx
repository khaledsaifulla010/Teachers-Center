import { CiCircleMore } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";

const TabBar = () => {
  return (
    <div>
      <div className="mt-6 px-10 flex items-center justify-around gap-72">
        {/* Left side of Tabbar */}
        <div className="flex items-center justify-center gap-8">
          <h2 className="text-blue-600">Students</h2>
          <h2 className="text-blue-600">Announcements</h2>
          <h2 className="text-blue-700 font-bold border-b-4 border-blue-700 mt-2">
            Materials
          </h2>
          <h2 className="text-blue-600">Homework</h2>
          <h2 className="text-blue-600">Attendance</h2>
          <h2 className="text-blue-600">Disscussion</h2>
          <h2 className="text-2xl">
            <CiCircleMore />
          </h2>
        </div>
        {/* Right side of Tabbar */}
        <div className="flex items-center justify-center gap-4">
          <RiDeleteBin6Fill className="text-2xl text-slate-600" />
          <LuDownload className="text-2xl text-slate-600" />
        </div>
      </div>
      <div className="border-b-3 max-w-[1195px] mx-auto mr-14  "></div>
    </div>
  );
};

export default TabBar;
