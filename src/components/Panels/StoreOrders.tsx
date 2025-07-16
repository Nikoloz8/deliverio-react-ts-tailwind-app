export default function StoreOrders() {
    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Store Orders</h1>
            <table className="w-[807px] mt-[17px]">
                <thead className="bg-[rgba(133,133,133,0.3)]">
                    <tr>
                        <th className="rounded-l-[6px] p-[13px_0_13px_40px] text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Order #</th>
                        <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Date</th>
                        <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Store</th>
                        <th className="rounded-r-[6px] text-center p-[13px_40px_13px_0] font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-solid border-[#E0E6ED]">
                        <td className="p-[13px_0_13px_40px] text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">#00</td>
                        <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Mar 05, 2025</td>
                        <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">QuickMart</td>
                        <td className="text-center pr-[40px]">
                            <span className="p-[3px_14px] bg-[rgba(0,171,85,0.3)] rounded-[35px] text-[#00AB55] leading-[100%] font-[500] text-[1.3rem]">
                                Completed
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>)
}
