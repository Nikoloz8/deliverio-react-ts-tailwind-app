import { useLocation, useNavigate } from "react-router-dom"
import index from "../../utils"

export default function Navigation() {

    const adminPanels = ["Store Orders", "Manage Packages", "GPS"]
    const courierPanels = ["My Packages", "Map"]
    const storePanels = ["My Orders", "Upload Order"]

    const { getRole } = index()
    const role = getRole()

    const forRender = () => {
        const panels = role === "admin" ? adminPanels : role === "courier" ? courierPanels : role === "store" ? storePanels : []
        return panels
    }
    const navigate = useNavigate()

    const panel = decodeURIComponent(useLocation().pathname).split("/")[3]
    console.log(panel)


    return (
        <div className="flex flex-col gap-[12px]">
            <h4 className="flex gap-[7px] items-center text-[1.4rem] leading-[100%] font-[300] text-[#FFD451]">
                <img src="/images/Home/Group 21.svg" alt="" />
                Dashboard
            </h4>
            <div className="bg-[#111111] border-[1px] border-solid border-[#545454] rounded-[8px]">
                <ul className="flex flex-col">
                    {forRender().map((p, index) => {
                        console.log(panel === p)
                        return <li onClick={() => navigate(`/panels/${role}/${p}`)} key={index} className={`p-[5px_21px] text-[1.4rem] font-[300] leading-[100%] text-[#858585] border-solid cursor-pointer border-[#545454] ${panel == p && "text-[#FFFFFF]!"} ${forRender().length - 1 !== index && "border-b-[1px]"}`}>
                            {p}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
