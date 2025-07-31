import { useOutletContext } from "react-router-dom"

export default function StatusTab({ order, status = "", edit }: { order: any, status?: String, edit?: boolean }) {

    const realStatus = (status ? status : order.სტატუსი)
    const { setShowChangeStatus, showChangeStatus } = useOutletContext<TPanelsLayoutOutletContext>()

    return (
        <button type="button" onClick={edit ? () => setShowChangeStatus(!showChangeStatus) : () => { }
        } className={`font-[500] p-[10px_32px] ${realStatus === "Completed" ? "bg-[#0C3F25] text-[#00AB55]" : realStatus === "In Process" ? "bg-[#292929] text-[#FFFFFF]" : realStatus === "Cancelled" ? "text-[#FF0000] bg-[#580C0C]" : ""} ${edit && "cursor-pointer"} rounded-[35px] text-[1.3rem] leading-[100%]`}> {realStatus === "Completed" ? "Delivered" : realStatus}</button >
    )
}
