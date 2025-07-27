export default function StatusTab({ order }: { order: any }) {
    return (
        <button className={`font-[500] p-[10px_32px] ${order.სტატუსი === "Completed" ? "bg-[#0C3F25] cursor-pointer text-[#00AB55]" : order.სტატუსი === "In Process" ? "bg-[#292929] text-[#FFFFFF]" : order.სტატუსი === "Cancelled" ? "text-[#FF0000] bg-[#580C0C]" : ""} rounded-[35px] text-[1.3rem] leading-[100%] cursor-pointer`}>{order.სტატუსი === "Completed" ? "Delivered" : order.სტატუსი}</button>
    )
}
