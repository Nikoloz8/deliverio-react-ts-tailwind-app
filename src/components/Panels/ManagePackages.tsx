import { useLocation, useOutletContext } from "react-router-dom"
import NextPrevButtons from "./NextPrevButtons"
import { useState } from "react"
import SortOrders from "./SortOrders"
import index from "../../utils"

export default function ManagePackages() {

    const { pageOrders, filteredOrders, setOrders } = useOutletContext<TPanelsLayoutOutletContext>()

    const location = useLocation().pathname

    const getCouriers = () => {
        const users = localStorage.getItem("users")
        if (!users) return
        const parsedUsers = JSON.parse(users)
        const couriers = []
        for (let i = 0; i < parsedUsers.length; i++) {
            if (parsedUsers[i].role === "courier") {
                couriers.push(parsedUsers[i])
            }
        }
        return couriers
    }

    const couriers = getCouriers()

    const [showCouriers, setShowCouriers] = useState(-1)
    const [showStatus, setShowStatus] = useState(-1)


    const handleChangeCourier = (courier: string, ind: number) => {
        const orders = JSON.parse(localStorage.getItem("orders")!)
        const newOrders = orders.map((e: any, i: number) => i === ind ? { ...orders[i], კურიერი: courier } : e)
        setOrders(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
    }

    const handleChangeOrderStatus = (status: string, ind: number) => {
        const orders = JSON.parse(localStorage.getItem("orders")!)
        const newOrders = orders.map((e: any, i: number) => i === ind ? { ...orders[i], "კურიერის სტატუსი": status } : e)
        setOrders(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowStatus(-1)
    }

    const { getRole } = index()


    return (
        <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex w-[100%] justify-between items-center relative">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF]">{location.includes("admin") ? "Manage Packages" : "My Packages"}</h1>
                <SortOrders />
            </div>
            <table className="w-[660px] ml-[30px] mt-[43px] mr-[90px]!">
                <thead className="bg-[rgba(133,133,133,0.3)]">
                    <tr className="w-[100%]">
                        <th className="rounded-l-[6px] p-[12px_0] text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Order #</th>
                        <th className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Assigned Courier</th>
                        <th></th>
                        <th></th>
                        <th className="rounded-r-[6px] p-[12px_0] opacity-0">placeholder</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr><td className="h-[13px]"></td></tr>
                    {pageOrders.map((e, i) => {
                        return <tr key={i} className={`border-b-[0.1px] ${i == 5 && "border-none!"} rounded-[8px_8px_0_0] border-solid border-[#FFFFFF]`}>
                            <td onClick={() => showStatus === i ? setShowStatus(-1) : setShowStatus(i)} className={`border-solid border-[#B6B6B633] relative p-[15px_0_13px_13px] font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF] ${e["კურიერის სტატუსი"] === 'Completed' ? "bg-[#00AB55]" : e["კურიერის სტატუსი"] === 'Denied Once' ? "bg-[#FF9900]" : e["კურიერის სტატუსი"] === 'Denied Twice' ? "bg-[#FF0000]" : e["კურიერის სტატუსი"] === 'To Deliver' ? "bg-[#999696]" : ""}  ${i === 0 ? "rounded-tl-[8px]" : i === 5 ? "rounded-bl-[8px]" : ""} text-left`}>
                                #{filteredOrders.findIndex(item => item === e)}
                                <div className={`absolute transition-all duration-500 left-[100px] z-10 p-[16px_20px] bg-[#111111] border-[1px] top-0 border-solid border-[#363636] rounded-[8px] flex flex-col gap-[16px] shadow-[0_0_4px_0_#00000040] ${showStatus !== i && "hidden"}`}>
                                    <h3 className="font-[275] w-[190px] text-center text-[1.8rem] leading-[100%] text-[#FFFFFF]">Change Order Status</h3>
                                    <div className="flex flex-col gap-[8px] w-[100%] items-center">
                                        <button onClick={() => handleChangeOrderStatus("Completed", i)} className={`font-[300] w-[110px] py-[8px] bg-[#0C3F25] cursor-pointer text-[#00AB55] rounded-[28px] text-[1.2rem] leading-[100%]`}>Delivered</button>
                                        <button onClick={() => handleChangeOrderStatus("Denied Once", i)} className={`font-[300] w-[110px] py-[8px] bg-[#7E510D] cursor-pointer text-[#FF9900] rounded-[28px] text-[1.2rem] leading-[100%]`}>Denied Once</button>
                                        <button onClick={() => handleChangeOrderStatus("Denied Twice", i)} className={`font-[300] w-[110px] py-[8px] bg-[#580C0C] cursor-pointer text-[#FF0000] rounded-[28px] text-[1.2rem] leading-[100%]`}>Denied Twice</button>
                                        <button onClick={() => handleChangeOrderStatus("To Deliver", i)} className={`font-[300] w-[110px] py-[8px]    bg-[#343434] cursor-pointer text-[#FFFFFF] rounded-[28px] text-[1.2rem] leading-[100%]`}>To Deliver</button>
                                    </div>
                                </div>
                            </td>
                            <td className={`whitespace-nowrap flex justify-center mx-auto relative`}>
                                <div onClick={() => showCouriers === i ? setShowCouriers(-1) : setShowCouriers(i)} className={`${getRole() !== "courier" && `rounded-[8px] ${e.კურიერი === "None" ? "bg-transparent! border-[1px] border-solid border-[#343434]" : "bg-[#343434]"} cursor-pointer items-center text-[#FFFFFF]`} font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8] w-[100px] mt-[7px] mb-[8px] p-[6px_24px_9px_24px] flex gap-[4px] justify-center`}>
                                    <h6>{e.კურიერი}</h6>
                                    <img className={`${getRole() === "courier" && "hidden!"}`} src="/images/Home/Polygon 1 (1).svg" alt="" />
                                </div>
                                <div className={`absolute transition-all duration-500 left-[150px] p-[12px_32px_12px_16px] bg-[#292929] border-[0.8px] border-solid border-[#585858] rounded-[8px] flex flex-col gap-[12px] shadow-[0_0_4px_0_#00000040] ${showCouriers !== i && "hidden"}`}>
                                    {couriers?.map((c, ind) => {
                                        return <h5 key={ind} onClick={() => handleChangeCourier(c.name, filteredOrders.findIndex(item => item === e))} className={`flex items-center gap-[5px] font-[300] cursor-pointer text-[1.4rem] leading-[100%] text-[#FFFFFF] ${e.კურიერი !== c.name && "ml-[19px]"}`}>
                                            {e.კურიერი === c.name && <img src="/images/Home/Group 40674.svg" alt="" />}
                                            {c.name}
                                        </h5>
                                    })}
                                </div>
                            </td>
                            <td className="text-center font-[300] text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                                <div className="flex items-center justify-center gap-[8px]">
                                    <img src="/images/Home/Layer_2_00000152245344270482311520000005181862943751293112_.svg" alt="" />
                                    <span>599 123 456</span>
                                </div>
                            </td>
                            <td className="text-center font-[300] text-[1.4rem] cursor-pointer leading-[100%] text-[#B8B8B8]">
                                <div className="flex justify-center gap-[8px]">
                                    <img src="/images/Home/path2317.svg" alt="" />
                                    <span>Message</span>
                                </div>
                            </td>
                            <td className="text-center font-[300] cursor-pointer text-[1.4rem] leading-[100%] text-[#B8B8B8]">
                                <div className="flex items-center justify-center gap-[8px]">
                                    <img src="/images/Home/Vector (6).svg" alt="" />
                                    <span>Edit</span>
                                </div>
                            </td>
                        </tr>
                    })}

                    <tr className="h-[16px]"></tr>
                </tbody>
            </table>
            <div className="flex justify-between">
                <NextPrevButtons />
                <div className="flex gap-[16px] items-center">
                    {location.includes("admin") &&
                        <h5 className="text-[1.4rem] leading-[100%] text-[#FFFFFF] font-[300]">Status</h5>
                    }
                    <div className="flex gap-[32px]">
                        <div className="flex gap-[6px] items-center">
                            <span className={`block w-[24px] h-[24px] rounded-[8px] bg-[#00AB55] ${location.includes("courier") && "w-[22px]! h-[22px]!"}`}></span>
                            <h5 className={`text-[1.4rem] leading-[100%] ${location.includes("courier") && "text-[1.25rem]!"} text-[#00AB55] font-[300]`}>Completed</h5>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <span className={`block w-[24px] h-[24px] rounded-[8px] bg-[#FF9900] ${location.includes("courier") && "w-[22px]! h-[22px]!"}`}></span>
                            <h5 className={`text-[1.4rem] ${location.includes("courier") && "text-[1.25rem]!"} leading-[100%] text-[#FF9900] font-[300]`}>Denied once</h5>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <span className={`block w-[24px] h-[24px] rounded-[8px] bg-[#FF0000] ${location.includes("courier") && "w-[22px]! h-[22px]!"}`}></span>
                            <h5 className={`text-[1.4rem] leading-[100%] text-[#FF0000] font-[300] ${location.includes("courier") && "text-[1.25rem]!"}`}>Denied Twice</h5>
                        </div>
                        {location.includes("courier") &&
                            <div className="flex gap-[6px] items-center">
                                <span className={`block w-[24px] h-[24px] rounded-[8px] bg-[#999696] ${location.includes("courier") && "w-[22px]! h-[22px]!"}`}></span>
                                <h5 className={`text-[1.4rem] ${location.includes("courier") && "text-[1.25rem]!"} leading-[100%] text-[#999696] font-[300]`}>To Deliver</h5>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>)
}
