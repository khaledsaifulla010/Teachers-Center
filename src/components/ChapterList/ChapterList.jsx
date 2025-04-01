import { FaCircleArrowLeft } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const ChapterList = () => {
  return (
    <div className="py-4 flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <h1>
          <FaCircleArrowLeft className="text-2xl text-black" />
        </h1>
        <h1 className="underline text-slate-700">Chapter 1</h1>
        <h1>
          <MdKeyboardArrowRight className="text-2xl" />
        </h1>
        <h1 className="underline text-slate-700">Chapter 1.1</h1>
        <h1>
          <MdKeyboardArrowRight className="text-2xl" />
        </h1>
        <h1 className="flex items-center gap-1 p-2 rounded-md bg-gray-100">
          <MdOutlineCheckBoxOutlineBlank />
          Chapter 1
        </h1>
      </div>
      {/* Others icon */}
      <div className="flex items-center gap-8">
        <HiOutlineInformationCircle className="text-2xl" />
        <h1 className="p-1 rounded-md bg-gray-100 gap-2 flex items-center text-slate-600">
          <MdRemoveRedEye /> Access to <IoIosArrowDown />
        </h1>
        <h1 className="p-1 rounded-md bg-gray-100 gap-2 flex items-center text-slate-600">
          Actions <IoIosArrowDown />
        </h1>
      </div>
    </div>
  );
};

export default ChapterList;
