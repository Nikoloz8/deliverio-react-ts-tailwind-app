import { useOutletContext } from "react-router-dom"
import NextPrevButtons from "./NextPrevButtons"

export default function ManagePackages() {

    const { pageOrders, filteredOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Manage Packages</h1>
            <table className="w-[660px] ml-[30px] mt-[43px] mr-[90px]!">
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
                    {pageOrders.map((e, i) => {
                        console.log(e["კურიერის სტატუსი"])
                        return <tr key={i} className={`border-b-[0.1px] ${i == 5 && "border-none!"} rounded-[8px_8px_0_0] border-solid border-[#FFFFFF]`}>
                            <td className={`border-solid border-[#B6B6B633] p-[15px_0_13px_13px] font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF] ${e["კურიერის სტატუსი"] === 'Completed' ? "bg-[#00AB55]" : e["კურიერის სტატუსი"] === 'Denied Once' ? "bg-[#FF9900]" : e["კურიერის სტატუსი"] === 'Denied Twice' ? "bg-[#FF0000]" : e["კურიერის სტატუსი"] === 'To Deliver' ? "bg-[#999696]" : ""}  ${i === 0 ? "rounded-tl-[8px]" : i === 5 ? "rounded-bl-[8px]" : ""} text-left`}>#{filteredOrders.findIndex(item => item === e)}</td>
                            <td className={`${e.კურიერი === "None" ?"bg-transparent! border-[1px] border-solid border-[#343434]" : "bg-[#343434]"} rounded-[8px] font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF] w-[100px] whitespace-nowrap text-center mx-auto p-[6px_24px_9px_24px] cursor-pointer mt-[7px] mb-[8px] flex gap-[4px] items-center`}>
                                {e.კურიერი}
                                <img src="/images/Home/Polygon 1 (1).svg" alt="" />
                            </td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                                <div className="flex items-center justify-center gap-[8px]">
                                    <img src="/images/Home/Layer_2_00000152245344270482311520000005181862943751293112_.svg" alt="" />
                                    <span>599 123 456</span>
                                </div>
                            </td>
                            <td className="text-center font-[300] text-[1.4rem] cursor-pointer leading-[100%] text-[#B8B8B8]">
                                <div className="flex justify-center gap-[8px]">
                                    <img src="/images/Home/path2317.svg" alt="" />
                                    <span>Message</span>
                                </div>
                            </td>
                            <td className="text-center font-[300] cursor-pointer text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                                <div className="flex items-center justify-center gap-[8px]">
                                    <img src="/images/Home/Vector (6).svg" alt="" />
                                    <span>Edit</span>
                                </div>
                            </td>
                        </tr>
                    })}

                    <tr className="h-[16px]"></tr>
                </tbody>
            </table>
            <div className="flex justify-between">
                <NextPrevButtons />
                <div className="flex gap-[16px] items-center">
                    <h5 className="text-[1.4rem] leading-[100%] text-[#FFFFFF] font-[300]">Status</h5>
                    <div className="flex gap-[32px]">
                        <div className="flex gap-[6px] items-center">
                            <span className="block w-[24px] h-[24px] rounded-[8px] bg-[#00AB55]"></span>
                            <h5 className="text-[1.4rem] leading-[100%] text-[#00AB55] font-[300]">Completed</h5>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <span className="block w-[24px] h-[24px] rounded-[8px] bg-[#FF9900]"></span>
                            <h5 className="text-[1.4rem] leading-[100%] text-[#FF9900] font-[300]">Denied once</h5>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <span className="block w-[24px] h-[24px] rounded-[8px] bg-[#FF0000]"></span>
                            <h5 className="text-[1.4rem] leading-[100%] text-[#FF0000] font-[300]">Denied Twice</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
