import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdRemoveRedEye } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImFolder } from "react-icons/im";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";

const ChapterContent = () => {
  return (
    <div className="border p-2 max-w-[1050px] mx-auto h-[160px] flex items-center justify-between rounded-md">
      <div>
        <div className="flex items-center justify-between gap-40">
          {/* Chapter Folder div */}
          <div>
            <h1 className="flex items-center gap-3 underline font-bold">
              <MdOutlineCheckBoxOutlineBlank className="text-2xl" />
              <ImFolder className="text-3xl text-gray-600" />
              Chapter 1.1 <IoIosArrowUp />
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
        </div>
        <p className="text-xs italic mt-20 text-right">
          <strong>Visible to : </strong>
          <span className="text-slate-600 font-semibold">
            Batch 1, Batch 2, Batch 3, For both Online & Physical Students
          </span>
        </p>
      </div>

      {/* Info Div */}
      <div className="h-full border-l-2 border-gray-500 px-2">
        <div></div>
        <p>
          <strong>Created on:</strong> 25/02/2025 10:35 pm
        </p>
        <p>
          <strong>Created by:</strong> Sir
        </p>
        <p>
          <strong>Last Modified:</strong> Friday, 25/02/2025, 10:35 pm
        </p>
        <p>
          <strong>Last Modified by:</strong> Sir
        </p>
        <p>
          <strong>Kind:</strong> PDF Document
        </p>
        <p>
          <strong>Size:</strong> 23 MB
        </p>
      </div>
    </div>
  );
};

export default ChapterContent;
