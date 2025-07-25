import { useLocation, useOutletContext } from "react-router-dom"

export default function SortOrders() {

    const { showSorts, sortBy, setSortBy, setShowSorts } = useOutletContext<TPanelsLayoutOutletContext>()
    const sortOptions = ["Date", "Store", "Status"]

    const location = useLocation().pathname

    return (
        <>
            <div className={`absolute transition-all duration-500 p-[8px_28px_8px_8px] bg-[#292929] border-[0.8px] border-solid border-[#585858] rounded-[8px] ${location.includes("Packages") && "left-[580px]! top-[-3px]!"} left-[210px] flex flex-col gap-[12px] shadow-[0_0_4px_0_#00000040] ${!showSorts && "opacity-0"}`}>
                {sortOptions.map((e, i) => {
                    return <h5 key={i} onClick={() => sortBy === e ? setSortBy("") : setSortBy(e)} className={`font-[300] cursor-pointer text-[1.4rem] flex gap-[6px] leading-[100%] text-[#FFFFFF] ${sortBy !== e && "pl-[20px]"}`}>
                        {sortBy === e && <img src="/images/Home/Group 40674.svg" />}
                        {e}
                    </h5>
                })}
            </div>
            <button onClick={() => setShowSorts(!showSorts)} className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                Sort by
                <img src="/images/Home/Polygon 1 (1).svg" className="mt-[1px]" alt="" />
            </button>
        </>
    )
}
