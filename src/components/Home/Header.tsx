import { useLocation, useNavigate, useParams } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import index from "../../utils"

export default function Header() {

    const { HeaderFont } = tailwind()
    const location = useLocation().pathname
    const { HandleLoginButton, HandleSignUpButton } = index()
    const { role } = useParams()
    const navigate = useNavigate()

    return (
        <header className="bg-[#0F0F0F] w-[100%] flex justify-center">
            <div className="flex p-[13px_40px] justify-between w-[1200px]">
                <div onClick={() => navigate("/")} className="cursor-pointer flex gap-[6px] items-center">
                    <img src="/images/Home/Deliverio Icon 1.svg" alt="" />
                    <img src="/images/Home/Deliverio.svg" alt="" />
                </div>
                {(location.includes("signin") || location.includes("signup") || location.includes("panels")) &&
                    <h3 className="text-[#FFD451] font-[300] flex items-center text-[1.4rem] leading-[100%]">{role}</h3>
                }
                <nav className="flex gap-[42px] items-center">
                    <div className="flex items-center gap-[28px]">
                        <a href="" onClick={() => location.includes("panels") && navigate("/")} className={`${HeaderFont} ${location.includes("role-choose") && `p-[12px_24px]! ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`} ${location.includes("signin") || location.includes("signup") || location.includes("panels") ? "p-[12px_18px]! border-[#FFFFFF33]! border-[1px]! text-[1.4rem]! leading-[100%]! font-[400]! border-solid! rounded-[8px]! bg-transparent!" : ""}`}>{location.includes("panels") ? "Log Out" : "About Us"} </a>
                        {!location.includes("role-choose") && !location.includes("panels") && !(location.includes("signin") || location.includes("signup")) &&
                            <a onClick={() => HandleLoginButton()} href="" className={`${HeaderFont}`}>Log in</a>
                        }
                    </div>
                    {!location.includes("role-choose") && !(location.includes("signin") || location.includes("signup") || location.includes("panels")) &&
                        <button onClick={() => HandleSignUpButton()} className={`p-[12px_24px] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                    }
                </nav>
            </div>
        </header>)
}
