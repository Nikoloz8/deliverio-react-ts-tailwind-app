import { useOutletContext } from "react-router-dom"

export default function NextPrevButtons() {

    const { setCountPages, totalPages } = useOutletContext<TPanelsLayoutOutletContext>()

    return (
        <div className="flex gap-[6px]">
            <button onClick={() => setCountPages((prev) => Math.max(prev - 1, 1))} className="p-[8px_16px] text-[1.2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center cursor-pointer gap-[4px] bg-[#292929] rounded-[8px]">
                <img src="/images/Home/Polygon 1 (1).svg" className="rotate-[90deg]" alt="" />
                Prev
            </button>
            <button onClick={() => setCountPages((prev) => prev < totalPages ? prev + 1 : prev)} className="p-[8px_16px] text-[1.
                2rem] leading-[100%] text-[#FFFFFF] font-[300] flex items-center z-10 cursor-pointer gap-[4px] bg-[#343434] rounded-[8px]">
                Next
                <img src="/images/Home/Polygon 1 (1).svg" className="rotate-[-90deg]" alt="" />
            </button>
        </div>)
}
