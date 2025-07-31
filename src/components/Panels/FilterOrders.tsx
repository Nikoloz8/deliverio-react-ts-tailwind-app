import { useState } from "react"
import { useOutletContext } from "react-router-dom"

export default function FilterOrders() {

    const [showFilters, setShowFilters] = useState(false)
    const { filterStore, setFilterStore, storesArr, setCountPages } = useOutletContext<TPanelsLayoutOutletContext>()

    return (
        <>
            <div className={`absolute transition-all duration-500 max-w-[200px] w-[200px] left-[-210px] p-[14px] bg-[#292929] border-[0.8px] border-solid border-[#585858] rounded-[8px] flex flex-col gap-[12px] shadow-[0_0_4px_0_#00000040] ${!showFilters && "opacity-0 pointer-events-none"}`}>
                <h5 className="font-[300] pl-[20px] text-[1.4rem] leading-[100%] text-[#ADADAD]">Store</h5>
                {storesArr.map((e, i) => {
                    return <h5 key={i} onClick={() => {
                        filterStore.includes(e) ? setFilterStore(filterStore.filter((el: string) => el !== e)) : setFilterStore([...filterStore, e])
                        setCountPages(1)
                    }} className={`font-[300] cursor-pointer text-[1.4rem] flex gap-[6px] leading-[100%] text-[#FFFFFF] ${!filterStore.includes(e) && "pl-[20px]"}`}>
                        {filterStore.includes(e) && <img src="/images/Home/Group 40674.svg" />}
                        {e}
                    </h5>
                })}
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="p-[8px_20px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                Filters
                <img src="/images/Home/mynaui_filter.svg" alt="" />
            </button>
        </>
    )
}
