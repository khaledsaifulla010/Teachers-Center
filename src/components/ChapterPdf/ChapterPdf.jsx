import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank, MdRemoveRedEye } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const ChapterPdf = () => {
  return (
    <div className="border p-2 max-w-[1050px] mx-auto h-[50px] rounded-md">
      <div className="flex items-center justify-between">
        {/* Chapter pdf div */}
        <div>
          <h1 className="flex items-center gap-3 font-bold">
            <MdOutlineCheckBoxOutlineBlank className="text-2xl" />
            <IoDocumentText className="text-3xl text-gray-600" /> Chapter 2
            revision notes.pdf
          </h1>
        </div>
        {/* Access Div */}
        <div className="flex items-center gap-8">
          <BsInfoCircleFill className="text-2xl" />
          <h1 className="p-1 rounded-md bg-gray-100 gap-2 flex items-center text-slate-600">
            <MdRemoveRedEye /> Access to <IoIosArrowDown />
          </h1>
          <h1 className="p-1 rounded-md bg-gray-100 gap-2 flex items-center text-slate-600">
            Actions <IoIosArrowDown />
          </h1>
        </div>
      </div>{" "}
    </div>
  );
};

export default ChapterPdf;
