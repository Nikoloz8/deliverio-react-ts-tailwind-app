import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import NextPrevButtons from "./NextPrevButtons"
import SortOrders from "./SortOrders"

export default function StoreOrders() {

    const { orders, storesArr, filterStore, setFilterStore, pageOrders, filteredOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    const navigate = useNavigate()



    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Store Orders</h1>
                <div className="flex gap-[10px] relative">
                    <div className={`absolute transition-all duration-500 max-w-[200px] w-[200px] left-[-210px] p-[14px] bg-[#292929] border-[0.8px] border-solid border-[#585858] rounded-[8px] flex flex-col gap-[12px] shadow-[0_0_4px_0_#00000040] ${!showFilters && "opacity-0"}`}>
                        <h5 className="font-[300] pl-[20px] text-[1.4rem] leading-[100%] text-[#ADADAD]">Store</h5>
                        {storesArr.map((e, i) => {
                            return <h5 key={i} onClick={() => filterStore.includes(e) ? setFilterStore(filterStore.filter((el: string) => el !== e)) : setFilterStore([...filterStore, e])} className={`font-[300] cursor-pointer text-[1.4rem] flex gap-[6px] leading-[100%] text-[#FFFFFF] ${!filterStore.includes(e) && "pl-[20px]"}`}>
                                {filterStore.includes(e) && <img src="/images/Home/Group 40674.svg" />}
                                {e}
                            </h5>
                        })}
                    </div>
                    <button onClick={() => setShowFilters(!showFilters)} className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                        Filters
                        <img src="/images/Home/mynaui_filter.svg" alt="" />
                    </button>
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
                        return <tr key={index} onClick={() => navigate(`/panels/admin/${orders.findIndex(e => e === order)}`)} className="cursor-pointer border-b-[1px] border-solid border-[#E0E6ED]">
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
