export default function StatusTab({ order, status = "" }: { order: any, status?: String }) {

    const realStatus = (status ? status : order.სტატუსი)

    return (
        <button className={`font-[500] p-[10px_32px] ${realStatus === "Completed" ? "bg-[#0C3F25] text-[#00AB55]" : realStatus === "In Process" ? "bg-[#292929] text-[#FFFFFF]" : realStatus === "Cancelled" ? "text-[#FF0000] bg-[#580C0C]" : ""} rounded-[35px] text-[1.3rem] leading-[100%] cursor-pointer`}>{realStatus === "Completed" ? "Delivered" : realStatus}</button>
    )
}
