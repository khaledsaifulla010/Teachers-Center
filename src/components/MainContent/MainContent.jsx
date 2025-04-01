import { IoMdAddCircle } from "react-icons/io";
import { CiCircleMore, CiSearch } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbArrowsDownUp } from "react-icons/tb";
import { FaSliders } from "react-icons/fa6";
import ChapterList from "../ChapterList/ChapterList";
import ChapterContent from "../ChapterContent/ChapterContent";
import ChapterPdf from "../ChapterPdf/ChapterPdf";
import UploadFolder from "../UploadFolder/UploadFolder";

const MainContent = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between px-4">
        {/* Content tabbar left side */}
        <div className="flex items-center justify-center gap-8">
          <h2 className="font-bold border-b-4 border-black mt-2">Content</h2>
          <h2 className="text-slate-700">Course Details</h2>
          <h2 className="text-slate-700">Revision</h2>
          <h2 className="flex items-center gap-1 text-slate-500 italic">
            <IoMdAddCircle className="text-black text-xl" /> Add Main Folder
          </h2>
        </div>
        {/* Content tabbar right side */}
        <div className="flex items-center justify-between gap-8">
          {/* Search Bar */}
          <div className="flex items-center">
            <CiSearch className="absolute ml-4 text-xl" />
            <input
              type="search"
              name=""
              id=""
              className="border-2 px-1 rounded-full"
            />
          </div>
          {/* Others icon */}
          <div className="flex items-center gap-8 ml-4">
            <h2 className="text-2xl mt-1">
              <CiCircleMore />
            </h2>
            <h2 className="text-2xl">
              <IoIosCreate />
            </h2>
            <h2 className="text-2xl">
              <RiDeleteBin2Fill />
            </h2>
            <h2 className="text-2xl">
              <TbArrowsDownUp />
            </h2>
            <h2 className="text-2xl">
              <FaSliders />
            </h2>
          </div>
        </div>
      </div>
      <div className="border-b-1"></div>
      {/* Chapter List */}
      <div>
        <ChapterList />
      </div>
      {/* Chapter Content */}
      <div>
        <ChapterContent />
      </div>
      {/* Chapter Content PDF */}
      <div>
        <ChapterPdf />
      </div>
      {/* Chapter Content PDF */}
      <div>
        <UploadFolder />
      </div>
    </div>
  );
};

export default MainContent;
