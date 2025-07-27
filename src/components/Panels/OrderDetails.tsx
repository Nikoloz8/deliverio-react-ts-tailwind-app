import { useEffect, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import StatusTab from "./StatusTab"
import { useForm } from "react-hook-form"

export default function OrderDetails() {

    const orders = JSON.parse(localStorage.getItem("orders")!)

    const { orderIndex } = useParams()
    const order = orders.find((_e: any, i: number) => i == Number(orderIndex))

    const [showDelete, setShowDelete] = useState(false)
    const [showChangeStatus, setShowChangeStatus] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [status, setStatus] = useState(order.სტატუსი)

    const navigate = useNavigate()
    const { setOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    const handleDelete = () => {
        const newOrders = [...orders].filter((e) => e !== order)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setOrders(newOrders)
        navigate("/panels/admin/Store Orders")
        setShowDelete(!showDelete)
    }

    const { register, watch, reset } = useForm({})

    console.log(watch())

    useEffect(() => {
        reset({
            Buyer: order.მყიდველი,
            Store: order.მაღაზია,
            Address: order.მისამართი,
            Number: order["ტელეფონის ნომერი"],
            Amount: order["რაოდენობა * ფასი"]
        })
    }, [])

    const handleSaveForm = (status: string) => {
        const changedOrder = { ...order, მყიდველი: watch().Buyer, მაღაზია: watch().Store, მისამართი: watch().Address, "ტელეფონის ნომერი": watch().Number, "რაოდენობა * ფასი": watch().Amount, სტატუსი: status }
        const newOrders = orders.map((e: any) => e === order ? changedOrder : e)
        setOrders(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowForm(false)
    }

    return (
        <div>
            {(showForm || showChangeStatus) && <div onClick={() => {
                setShowForm(false)
                setShowChangeStatus(false)
            }} className="fixed transition-all duration-1000 bg-[rgba(0,0,0,0.3)]  border-[#585858] rounded-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 h-[100%] w-[100%]"></div>}
            <div className={`fixed transition-all duration-1000 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 top-[-300px] flex items-end gap-[24px] ${showForm && "top-1/2!"}`}>
                <form action="" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[21px] p-[32px] bg-[#111111] rounded-[8px]">
                    <h4 className="font-[275] text-center w-[100%] cursor-pointer text-[#FFFFFF] text-[1.8rem] leading-[100%]">
                        Edit
                    </h4>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="buyer" className="font-[275] text-[#FFFFFF] text-[1.4rem] leading-[100%]">Buyer</label>
                        <input {...register("Buyer")} type="text" id="buyer" className="w-[350px] font-[275] text-[#FFFFFF] text-[1.2rem] leading-[100%] bg-[#343434] rounded-[4px] outline-none p-[5px_12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="store" className="font-[275] text-[#FFFFFF] text-[1.4rem] leading-[100%]">Store</label>
                        <input {...register("Store")} type="text" id="store" className="w-[350px] font-[275] text-[#FFFFFF] text-[1.2rem] leading-[100%] bg-[#343434] rounded-[4px] outline-none p-[5px_12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="address" className="font-[275] text-[#FFFFFF] text-[1.4rem] leading-[100%]">Address</label>
                        <input {...register("Address")} type="text" id="address" className="w-[350px] font-[275] text-[#FFFFFF] text-[1.2rem] leading-[100%] bg-[#343434] rounded-[4px] outline-none p-[5px_12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="number" className="font-[275] text-[#FFFFFF] text-[1.4rem] leading-[100%]">Phone Number</label>
                        <input {...register("Number")} type="text" id="number" className="w-[350px] font-[275] text-[#FFFFFF] text-[1.2rem] leading-[100%] bg-[#343434] rounded-[4px] outline-none p-[5px_12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="amount" className="font-[275] text-[#FFFFFF] text-[1.4rem] leading-[100%]">Amount</label>
                        <input {...register("Amount")} type="text" id="amount" className="w-[350px] font-[275] text-[#FFFFFF] text-[1.2rem] leading-[100%] bg-[#343434] rounded-[4px] outline-none p-[5px_12px]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <label className="font-[275] cursor-pointer text-[#FFFFFF] text-[1.4rem] leading-[100%]">Status</label>
                        <span onClick={() => setShowChangeStatus(!showChangeStatus)}>
                            <StatusTab order={order} status={status} />
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center gap-[6px]">
                            <button onClick={() => handleSaveForm(status)} className="bg-[#585858] rounded-[6px] p-[8px_32px] font-[300] text-[#FFFFFF] text-[1.4rem] leading-[100%] cursor-pointer">Save</button>
                            <button onClick={() => setShowForm(false)} className="bg-transparent rounded-[6px] p-[8px_32px] font-[300] text-[#FFFFFF] text-[1.4rem] leading-[100%] cursor-pointer">Cancel</button>
                        </div>
                    </div>
                </form>
                <div className={`transition-all duration-1000 p-[24px] bg-[#111111] border-[0.8px] border-solid border-[#363636] rounded-[8px] right-[-540px] w-[324px] hidden flex-col gap-[16px] shadow-[0_0_4px_0_#00000040] items-start ${showChangeStatus && "flex!"}`}>
                    <h3 className="font-[275] text-[1.8rem] leading-[100%] text-[#FFFFFF]">
                        Change Order Status
                    </h3>
                    <div className="flex flex-col gap-[8px] items-start">
                        <button onClick={() => setStatus("Completed")} className={`font-[300] p-[8px_24px] bg-[#0C3F25] cursor-pointer text-[#00AB55] rounded-[28px] text-[1.2rem] leading-[100%]`}>Delivered</button>
                        <button onClick={() => setStatus("In Process")} className={`font-[300] p-[8px_24px] bg-[#292929] cursor-pointer text-[#FFFFFF] rounded-[30px] text-[1.2rem] leading-[100%]`}>In Process</button>
                        <button onClick={() => setShowChangeStatus(false)} className={`font-[300] p-[8px_24px] bg-[#580C0C] cursor-pointer text-[#FF0000] rounded-[30px] text-[1.2rem] leading-[100%]`}>Cancel</button>
                    </div>
                </div>
            </div>
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
                                <StatusTab order={order} />
                            </div>
                            <h4 className="font-[300] text-[1.4rem] leading-[100%] text-[#757575]">{order.თარიღი}</h4>
                            <div className="flex gap-[24px]">
                                <button onClick={() => setShowForm(!showForm)} className="font-[300] text-[1.3rem] leading-[100%] text-[#FF9900] cursor-pointer">Edit</button>
                                <button className="font-[500] p-[10px_32px] bg-[rgba(255,0,0,0.3)] rounded-[35px] text-[1.3rem] leading-[100%] text-[#FF0000] cursor-pointer" onClick={() => setShowDelete(!showDelete)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
