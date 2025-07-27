import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useOutletContext, useParams } from "react-router-dom"
import StatusTab from "./StatusTab"
import index from "../../utils"

export default function EditForm() {

    const { register, watch, reset } = useForm({})
    const orders = JSON.parse(localStorage.getItem("orders")!)

    const { orderIndex } = useParams()
    const order = orders.find((_e: any, i: number) => i == Number(orderIndex))

    useEffect(() => {
        reset({
            Buyer: order.მყიდველი,
            Store: order.მაღაზია,
            Address: order.მისამართი,
            Number: order["ტელეფონის ნომერი"],
            Amount: order["რაოდენობა * ფასი"]
        })
    }, [])
    const { setOrders, showForm, setShowForm, showChangeStatus, setShowChangeStatus } = useOutletContext<TPanelsLayoutOutletContext>()

    const { getRole } = index()

    const [status, setStatus] = useState(order.სტატუსი)

    const handleSaveForm = (status: string) => {
        const changedOrder = { ...order, მყიდველი: watch().Buyer, მაღაზია: watch().Store, მისამართი: watch().Address, "ტელეფონის ნომერი": watch().Number, "რაოდენობა * ფასი": watch().Amount, სტატუსი: status }
        const newOrders = orders.map((e: any) => e === order ? changedOrder : e)
        setOrders(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowForm(false)
        setShowChangeStatus(false)
    }

    return (
        <>
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
                    {getRole() === "admin" &&
                        <div className="flex flex-col gap-[8px]">
                            <label className="font-[275] cursor-pointer text-[#FFFFFF] text-[1.4rem] leading-[100%]">Status</label>
                            <span onClick={() => setShowChangeStatus(!showChangeStatus)}>
                                <StatusTab order={order} status={status} />
                            </span>
                        </div>
                    }
                    <div className="flex justify-center">
                        <div className="flex items-center gap-[6px]">
                            <button onClick={() => handleSaveForm(status)} className="bg-[#585858] rounded-[6px] p-[8px_32px] font-[300] text-[#FFFFFF] text-[1.4rem] leading-[100%] cursor-pointer">Save</button>
                            <button onClick={() => {
                                setShowForm(false)
                                setShowChangeStatus(false)
                            }} className="bg-transparent rounded-[6px] p-[8px_32px] font-[300] text-[#FFFFFF] text-[1.4rem] leading-[100%] cursor-pointer">Cancel</button>
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
        </>
    )
}
