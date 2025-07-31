import { useState } from "react";
import index from "../../utils";

export default function UploadOrder() {

  const [fileName, setFileName] = useState("Choose File...");

  const { handleFileChange } = index({ setFileName });

  return (
    <div className="p-[20px] rounded-[6px] bg-[#111111] w-[807px] mt-[24px] flex flex-col gap-[20px]">
      <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Manage Packages</h1>
      <div className="flex flex-col gap-[16px]">
        <div className="flex justify-between items-center">
          <h3 className="font-[500] text-[1.6rem] text-[#FF9900] leading-[100%]">Upload</h3>
          <button className="cursor-pointer ">
            <img src="/images/Home/Frame.svg" alt="" />
          </button>
        </div>
        <form action="">
          <div className="flex items-center h-[40px]">
            <p className="w-[100%] p-[12px_16px] bg-[#343434] border-[1px_0_1px_1px] border-solid border-[#E0E6ED1A] rounded-l-[6px] h-[100%] font-[400] text-[1.4rem] text-[#FFFFFF99] leading-[100%]">{fileName}
            </p>
            <label htmlFor="browse" className="p-[8px_16px] bg-[rgba(255,153,0,0.2)] text-[#FF9900] rounded-r-[6px] cursor-pointer border-[1px_1px_1px_0] border-solid border-[#E0E6ED1A] flex items-center justify-center h-[100%] font-[600] font-['Nunito']" >Browse</label>
            <input type="file" id="browse" className="hidden" onChange={handleFileChange} />
          </div>
        </form>
      </div >
      <div className="w-[100%] flex items-center justify-center m-[85px_0]">
        <img src="/images/Home/Group (1).svg" alt="" />
      </div>
    </div >
  )
}
