export default function ManagePackages() {
    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Manage Packages</h1>
            <table className="w-[807px] ml-[30px] mt-[43px]">
                <thead className="bg-[rgba(133,133,133,0.3)]">
                    <tr className="w-[100%]">
                        <th className="rounded-l-[6px] p-[12px_0] text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Order #</th>
                        <th className=" text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Assigned Courier</th>
                        <th></th>
                        <th></th>
                        <th className="rounded-r-[6px] p-[12px_0] opacity-0">placeholder</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr><td className="h-[13px]"></td></tr>
                    <tr className="border-b-[0.1px] rounded-[8px_8px_0_0] border-solid border-[#FFFFFF]">
                        <td className="border-solid border-[#B6B6B633] p-[15px_0_13px_13px] font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF] bg-[#00AB55] rounded-tl-[8px] text-left">#00</td>
                        <td className="bg-[#343434] rounded-[8px] font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF] w-[100px] whitespace-nowrap text-center mx-auto p-[6px_24px_9px_24px] mt-[7px] mb-[8px] flex gap-[3px] items-center">
                            Giorgi
                            <img src="/images/Home/Polygon 1 (1).svg" alt="" />
                        </td>
                        <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                            <div className="flex items-center justify-center gap-[8px]">
                                <img src="/images/Home/Layer_2_00000152245344270482311520000005181862943751293112_.svg" alt="" />
                                <span>599 123 456</span>
                            </div>
                        </td>
                        <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                            <div className="flex justify-center gap-[8px]">
                                <img src="/images/Home/path2317.svg" alt="" />
                                <span>Message</span>
                            </div>
                        </td>
                        <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                            <div className="flex items-center justify-center gap-[8px]">
                                <img src="/images/Home/Vector (6).svg" alt="" />
                                <span>Edit</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>)
}
