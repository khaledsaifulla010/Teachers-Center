import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";
import img1 from "../../assets/images/student1.png";
import Image from "next/image";

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
            <Image
              className="w-14 h-14 p-1 rounded-full bg-white border"
              src={img1}
              alt="student1"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg">Sir 1</h1>
            <h3 className="text-slate-600">Chemistry | Level 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
