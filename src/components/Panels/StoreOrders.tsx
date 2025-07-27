import { useLocation, useNavigate, useOutletContext } from "react-router-dom"
import NextPrevButtons from "./NextPrevButtons"
import SortOrders from "./SortOrders"
import FilterOrders from "./FilterOrders"
import index from "../../utils"

export default function StoreOrders() {

    const { orders, pageOrders, filteredOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    const navigate = useNavigate()
    const location = useLocation().pathname

    const {getRole} = index()

    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">{location.includes("store") ? "My Orders" : "Store Orders"}</h1>
                <div className="flex gap-[10px] relative">
                    {location.includes("admin") && <FilterOrders />}
                    <SortOrders />
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
                        return <tr key={index} onClick={() => navigate(`/panels/${getRole()}/${orders.findIndex(e => e === order)}`)} className="cursor-pointer border-b-[1px] border-solid border-[#E0E6ED]">
                            <td className="p-[13px_0_13px_40px] text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">#{filteredOrders.findIndex(item => item === order)}</td>
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
            <NextPrevButtons />
        </div >)
}
