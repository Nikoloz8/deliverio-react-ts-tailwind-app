import { useNavigate, useOutletContext, useParams } from "react-router-dom"

export default function DeleteTab() {


    const { setOrders, showDelete, setShowDelete } = useOutletContext<TPanelsLayoutOutletContext>()
    const orders = JSON.parse(localStorage.getItem("orders")!)
    const { orderIndex } = useParams()
    const order = orders.find((_e: any, i: number) => i == Number(orderIndex))

    const navigate = useNavigate()

    const handleDelete = () => {
        const newOrders = [...orders].filter((e) => e !== order)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setOrders(newOrders)
        navigate("/panels/admin/Store Orders")
        setShowDelete(!showDelete)
    }

    return (
        <div className={`fixed transition-all duration-1000 p-[16px_32px_32px_24px] bg-[#111111] rounded-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-[-200px] flex flex-col gap-[32px] shadow-[0_0_4px_0_#00000040] ${showDelete && "top-1/2!"}`}>
            <h3 className="font-[275] text-[1.8rem] text-center leading-[100%] text-[#FFFFFF]">
                Delete Order?
            </h3>
            <div className="flex gap-[32px] w-[100%]">
                <button onClick={() => handleDelete()} className="font-[500] p-[8px_24px] bg-[#580C0C] rounded-[6px] text-[1.4rem] leading-[100%] text-[#FF0000] cursor-pointer">Delete</button>
                <button className={`font-[300] cursor-pointer text-[#FFFFFF] text-[1.4rem] leading-[100%]`} onClick={() => setShowDelete(!showDelete)}>Cancel</button>
            </div>
        </div>)
}
