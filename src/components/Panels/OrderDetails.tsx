import { useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"

export default function OrderDetails() {

    const orders = JSON.parse(localStorage.getItem("orders")!)

    const { orderIndex } = useParams()
    const order = orders.find((_e: any, i: number) => i == Number(orderIndex))

    const [showDelete, setShowDelete] = useState(false)
    const [showChangeStatus, setShowChangeStatus] = useState(false)

    const navigate = useNavigate()
    const { setOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    const handleDelete = () => {
        const newOrders = [...orders].filter((e) => e !== order)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setOrders(newOrders)
        navigate("/panels/admin/Store Orders")
        setShowDelete(!showDelete)
    }

    const handleChangeStatus = (status: string) => {
        const changedOrder = { ...order, სტატუსი: status }
        const newOrders = orders.map((e: any) => e === order ? changedOrder : e)
        setOrders(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowChangeStatus(false)
    }

    return (
        <div>
            {(showDelete || showChangeStatus) && <div onClick={() => {
                setShowDelete(false)
                setShowChangeStatus(false)
            }} className="fixed transition-all duration-1000 bg-[rgba(0,0,0,0.3)]  border-[#585858] rounded-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 h-[100%] w-[100%]"></div>}
            <div className={`fixed transition-all duration-1000 p-[16px_32px_32px_24px] bg-[#111111] rounded-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-[-200px] flex flex-col gap-[32px] shadow-[0_0_4px_0_#00000040] ${showDelete && "top-1/2!"}`}>
                <h3 className="font-[275] text-[1.8rem] text-center leading-[100%] text-[#FFFFFF]">
                    Delete Order?
                </h3>
                <div className="flex gap-[32px] w-[100%]">
                    <button onClick={() => handleDelete()} className="font-[500] p-[8px_24px] bg-[#580C0C] rounded-[6px] text-[1.4rem] leading-[100%] text-[#FF0000] cursor-pointer">Delete</button>
                    <button className={`font-[300] cursor-pointer text-[#FFFFFF] text-[1.4rem] leading-[100%]`} onClick={() => setShowDelete(!showDelete)}>Cancel</button>
                </div>
            </div>
            <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
                <div className="flex justify-between items-center">
                    <h1 onClick={() => navigate("/panels/admin/Store Orders")} className="text-[1.8rem] font-[500] pl-[8px] cursor-pointer leading-[100%] text-[#FFFFFF] flex gap-[12px] items-center">
                        <img src="/images/Home/Polygon 1 (1).svg" className="rotate-[90deg]" alt="" />
                        Order Details
                    </h1>
                </div>
                <table className="w-[807px] mt-[17px]">
                    <thead className="bg-[rgba(133,133,133,0.3)]">
                        <tr>
                            <th className="rounded-l-[6px] p-[13px_0] text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Buyer</th>
                            <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Phone Number</th>
                            <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Address</th>
                            <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Store</th>
                            <th className="rounded-r-[6px] text-center p-[13px_0] font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cursor-pointer border-b-[1px] border-solid border-[#E0E6ED]">
                            <td className="p-[13px_0] text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მყიდველი}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order["ტელეფონის ნომერი"]}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მისამართი}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მაღაზია}</td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">
                                {order["რაოდენობა * ფასი"]}
                            </td>
                        </tr>
                        <tr className="h-[21px]"></tr>
                    </tbody>
                </table>
                <div className="flex flex-col gap-[18px] pl-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <h3 className="font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Product Details:</h3>
                        <p className="font-[300] text-[1.4rem] leading-[100%] text-[#757575] w-[707px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <h3 className="font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Package Status:</h3>
                        <div className="flex justify-between items-center">
                            <div className="relative">
                                <button onClick={() => setShowChangeStatus(!showChangeStatus)} className={`font-[500] p-[10px_32px] ${order.სტატუსი === "Completed" ? "bg-[#0C3F25] cursor-pointer text-[#00AB55]" : order.სტატუსი === "In Process" ? "bg-[#292929] text-[#FFFFFF]" : order.სტატუსი === "Cancelled" ? "text-[#FF0000] bg-[#580C0C]" : ""} rounded-[35px] text-[1.3rem] leading-[100%] cursor-pointer`}>{order.სტატუსი === "Completed" ? "Delivered" : order.სტატუსი}</button>
                                <div className={`fixed transition-all duration-1000 p-[24px] bg-[#111111] border-[0.8px] border-solid border-[#363636] rounded-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-[-200px] w-[324px] flex flex-col gap-[16px] shadow-[0_0_4px_0_#00000040] items-start ${showChangeStatus && "top-1/2!"}`}>
                                    <h3 className="font-[275] text-[1.8rem] leading-[100%] text-[#FFFFFF]">
                                        Change Order Status
                                    </h3>
                                    <div className="flex flex-col gap-[8px] items-start">
                                        <button onClick={() => handleChangeStatus("Completed")} className={`font-[300] p-[8px_24px] bg-[#0C3F25] cursor-pointer text-[#00AB55] rounded-[28px] text-[1.2rem] leading-[100%]`}>Delivered</button>
                                        <button onClick={() => handleChangeStatus("In Process")} className={`font-[300] p-[8px_24px] bg-[#292929] cursor-pointer text-[#FFFFFF] rounded-[30px] text-[1.2rem] leading-[100%]`}>In Process</button>
                                        <button onClick={() => setShowChangeStatus(false)} className={`font-[300] p-[8px_24px] bg-[#580C0C] cursor-pointer text-[#FF0000] rounded-[30px] text-[1.2rem] leading-[100%]`}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-[300] text-[1.4rem] leading-[100%] text-[#757575]">{order.თარიღი}</h4>
                            <div className="flex gap-[24px]">
                                <button className="font-[300] text-[1.3rem] leading-[100%] text-[#FF9900] cursor-pointer">Edit</button>
                                <button className="font-[500] p-[10px_32px] bg-[rgba(255,0,0,0.3)] rounded-[35px] text-[1.3rem] leading-[100%] text-[#FF0000] cursor-pointer" onClick={() => setShowDelete(!showDelete)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
