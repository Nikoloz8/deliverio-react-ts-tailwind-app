import { useEffect, useState } from "react"

export default function StoreOrders() {

    const [orders, setOrders] = useState<any[]>([])
    const [countPages, setCountPages] = useState(1)
    const [pageOrders, setPageOrders] = useState<any[]>([])

    const itemsPerPage = 6

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders")!) || []
        setOrders(stored)
    }, [])

    useEffect(() => {
        const startIndex = (countPages - 1) * itemsPerPage
        const newPage = orders.slice(startIndex, startIndex + itemsPerPage)
        setPageOrders(newPage)
    }, [countPages, orders])

    const totalPages = Math.ceil(orders.length / itemsPerPage)

    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Store Orders</h1>
                <div className="flex gap-[10px]">
                    <button className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                        Filters
                        <img src="/images/Home/mynaui_filter.svg" alt="" />
                    </button>
                    <button className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                        Sort by
                        <img src="/images/Home/Polygon 1 (1).svg" className="mt-[1px]" alt="" />
                    </button>
                </div>
            </div>
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
                    {pageOrders.map((order: any, index: number) => {
                        return <tr key={index} className="border-b-[1px] border-solid border-[#E0E6ED]">
                            <td className="p-[13px_0_13px_40px] text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">#{index}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.თარიღი}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მაღაზია}</td>
                            <td className="text-center pr-[40px]">
                                <span className={`p-[3px_14px] ${order.სტატუსი === "Completed" ? "bg-[rgba(0,171,85,0.3)] text-[#00AB55]" : order.სტატუსი === "In Process" ? "bg-[#292929] text-[#ACACAC]" : "bg-[rgba(255,0,0,0.3)] text-[#FF0000]"} rounded-[35px] leading-[100%] font-[500] text-[1.3rem]`}>
                                    {order.სტატუსი}
                                </span>
                            </td>
                        </tr>
                    })}
                    <tr className="h-[21px]"></tr>
                </tbody>
            </table>
            <div className="flex gap-[6px]">
                <button onClick={() => setCountPages((prev) => Math.max(prev - 1, 1))} className="p-[8px_16px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#292929] rounded-[8px]">
                    <img src="/images/Home/Polygon 1 (1).svg" className="rotate-[90deg] mt-[1px]" alt="" />
                    Prev
                </button>
                <button onClick={() => setCountPages((prev) => prev < totalPages ? prev + 1 : prev)} className="p-[8px_16px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                    Next
                    <img src="/images/Home/Polygon 1 (1).svg" className="rotate-[-90deg] mt-[1px]" alt="" />
                </button>
            </div>

        </div >)
}
