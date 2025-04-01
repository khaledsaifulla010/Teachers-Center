import { PiLineVerticalThin } from "react-icons/pi";
import { GiClassicalKnowledge } from "react-icons/gi";
import img1 from "../../assets/images/student1.png";
import img2 from "../../assets/images/student2.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const SubNavbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10">
        {/* Left Side of sub navbar */}
        <div className=" flex">
          <div className="flex">
            <h1 className="flex items-center  justify-center gap-4 p-2 rounded-md bg-white border w-[200px] text-slate-700">
              Course for Chemistry <IoIosArrowDown className="mt-1" />
            </h1>
            <PiLineVerticalThin className="text-5xl text-slate-500" />
            <h1 className="flex items-center justify-center gap-4 p-2 rounded-md bg-white border w-[150px] text-slate-700">
              All Batches <IoIosArrowDown className="mt-1" />
            </h1>
          </div>
        </div>
        {/* Right Side of sub navbar */}
        <div className="flex items-center">
          <h1 className="bg-black p-2 rounded-md text-white flex items-center gap-1 mr-20">
            <GiClassicalKnowledge className="text-lg" /> Take Class
          </h1>
          <div className="flex items-center mr-4">
            <Image
              className="w-14 h-14 p-1 rounded-full bg-white"
              src={img1}
              alt="student1"
            />
            <Image
              className="w-14 h-14 p-1 rounded-full absolute ml-8 z-10"
              src={img2}
              alt="student2"
            />
            <h1 className="p-2 border rounded-r-full bg-white ml-4 text-slate-700">
              Add TA
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1195px] mx-auto h-3 bg-[linear-gradient(to_right,black_50%,white_40%)] border mt-4 rounded-full mr-14"></div>
    </div>
  );
};

export default SubNavbar;
