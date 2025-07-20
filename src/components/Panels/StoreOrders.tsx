import { useEffect, useState } from "react"

export default function StoreOrders() {

    const [orders, setOrders] = useState<any[]>([])
    const [countPages, setCountPages] = useState(1)
    const [pageOrders, setPageOrders] = useState<any[]>([])
    const [storesArr, setStoresArr] = useState<any[]>([])
    const [filterStore, setFilterStore] = useState<any>([])

    const itemsPerPage = 6


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders")!) || []
        setOrders(stored)

        const uniqueStores = new Set<string>()
        stored.forEach((order: any) => {
            if (order.მაღაზია) {
                uniqueStores.add(order.მაღაზია)
            }
        })

        setStoresArr(Array.from(uniqueStores))
    }, [])

    const filteredOrders = filterStore.length
        ? orders.filter((order) => filterStore.includes(order.მაღაზია))
        : orders

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

    useEffect(() => {
        const startIndex = (countPages - 1) * itemsPerPage
        const newPage = filteredOrders.slice(startIndex, startIndex + itemsPerPage)
        setPageOrders(newPage)
    }, [countPages, filteredOrders])

    const [showFilters, setShowFilters] = useState(false)


    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Store Orders</h1>
                <div className="flex gap-[10px] relative">
                    <div className={`absolute transition-all duration-500 max-w-[200px] w-[200px] left-[-210px] p-[14px] bg-[#292929] border-[0.8px] border-solid border-[#585858] rounded-[8px] flex flex-col gap-[12px] shadow-[0_0_4px_0_#00000040] ${!showFilters && "opacity-0"}`}>
                        <h5 className="font-[300] text-[1.4rem] leading-[100%] text-[#ADADAD]">Store</h5>
                        {storesArr.map((e, i) => {
                            return <h5 key={i} onClick={() => filterStore.includes(e) ? setFilterStore(filterStore.filter((el: string) => el !== e)) : setFilterStore([...filterStore, e])} className="font-[300] cursor-pointer text-[1.4rem] flex gap-[6px] leading-[100%] text-[#FFFFFF]">
                                {filterStore.includes(e) && <img src="/images/Home/Group 40674.svg" />}
                                {e}
                            </h5>
                        })}
                    </div>
                    <button onClick={() => setShowFilters(!showFilters)} className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
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
