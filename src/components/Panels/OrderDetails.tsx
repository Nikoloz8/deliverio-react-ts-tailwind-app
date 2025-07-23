import { useOutletContext, useParams } from "react-router-dom"

export default function OrderDetails() {

    const orders = JSON.parse(localStorage.getItem("orders")!)

    const { orderIndex } = useParams()
    const order = orders.find((_e: any, i: number) => i == Number(orderIndex))

    return (
        <div>    <div className="p-[20px] rounded-[6px] bg-[#111111] mt-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.8rem] font-[500] leading-[100%] text-[#FFFFFF] ">Store Orders</h1>
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
                        <td className="text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order["ტელეფონის ნომერი"]}</td>
                        <td className="text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მისამართი}</td>
                        <td className="text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">{order.მაღაზია}</td>
                        <td className="text-center font-[500] text-[1.4rem] leading-[100%] text-[#FFFFFF]">
                            {order["რაოდენობა * ფასი"]}
                        </td>
                    </tr>
                    <tr className="h-[21px]"></tr>
                </tbody>
            </table>
            <div className="flex flex-col gap-[18px] pl-[16px]">
                <div className="flex flex-col gap-[1px]">
                    <h3 className="font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Product Details:</h3>
                    <p className="font-[300] text-[1.4rem] leading-[100%] text-[#757575] w-[707px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
                <div className="flex flex-col gap-[7px]">
                    <h3 className="font-[300] text-[1.4rem] leading-[100%] text-[#FFFFFF]">Package Status:</h3>
                    <div className="flex justify-between items-center">
                        <div className="font-[500] p-[10px_32px] bg-[rgba(0,171,85,0.3)] rounded-[35px] text-[1.3rem] leading-[100%] text-[#00AB55]">Delivered</div>
                        <h4 className="font-[300] text-[1.4rem] leading-[100%] text-[#757575]">{order.თარიღი}</h4>
                        <div className="flex gap-[24px]">
                            <button className="font-[300] text-[1.3rem] leading-[100%] text-[#FF9900] cursor-pointer">Edit</button>
                            <button className="font-[500] p-[10px_32px] bg-[rgba(255,0,0,0.3)] rounded-[35px] text-[1.3rem] leading-[100%] text-[#FF0000] cursor-pointer">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
