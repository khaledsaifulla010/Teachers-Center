import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-12 mt-6">
      {/* Left side of navbar */}
      <div>
        <h1 className="font-bold text-xl">Teacher's Center</h1>
      </div>
      {/* Right side of navbar */}
      <div className="flex">
        <div className="flex items-center gap-8">
          <MdOutlineSupportAgent className="text-3xl" />
          <MdOutlineNotificationsActive className="text-3xl" />
          <PiLineVerticalThin className="text-4xl" />
        </div>
        <div className="flex items-center gap-4 ml-8">
          <div>
            <FaCircleUser className="text-4xl" />
          </div>
          <div>
            <h1 className="font-semibold">Sir 1</h1>
            <h3 className="text-slate-600">Chemistry | Level 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
