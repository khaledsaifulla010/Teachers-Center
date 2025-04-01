import { AiFillFolderAdd } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaTextWidth } from "react-icons/fa6";
import { FaPaste } from "react-icons/fa";

const UploadFolder = () => {
  return (
    <div className="border p-2 max-w-[1050px] mx-auto h-[75px] rounded-md flex items-center justify-between">
      <h2 className="flex items-center gap-2 border-2 border-gray-400 p-2 rounded-md border-dashed text-gray-600 font-bold">
        <AiFillFolderAdd className="text-2xl text-black" /> Add Folder
      </h2>
      <h2 className="flex items-center gap-2 border-2 border-gray-400 p-2 rounded-md border-dashed text-gray-600 font-bold">
        <FaFileUpload className="text-2xl text-black" /> Upload File
      </h2>
      <h2 className="flex items-center gap-2 border-2 border-gray-400 p-2 rounded-md border-dashed text-gray-600 font-bold">
        <MdDriveFolderUpload className="text-2xl text-black" /> Upload Folder
      </h2>
      <h2 className="flex items-center gap-2 border-2 border-gray-400 p-2 rounded-md border-dashed text-gray-600 font-bold">
        <FaTextWidth className="text-2xl text-black" /> Add Text
      </h2>
      <h2 className="flex items-center gap-2 border-2 border-gray-400 p-2 rounded-md border-dashed text-gray-600 font-bold">
        <FaPaste className="text-2xl text-black" /> Paste
      </h2>
    </div>
  );
};

export default UploadFolder;
