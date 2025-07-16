import { useLocation } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import index from "../../utils"
import Signup from "../../pages/Signup"

export default function Header() {

    const { HeaderFont } = tailwind()
    const location = useLocation().pathname
    const { HandleLoginButton, HandleSignUpButton } = index()

    console.log(location)

    return (
        <header className="p-[13px_40px] bg-[#0F0F0F] w-[100%] flex justify-center">
            <div className="flex justify-between w-[1080px]">
                <div className="flex gap-[6px] items-center">
                    <img src="/images/Home/Deliverio Icon 1.svg" alt="" />
                    <img src="/images/Home/Deliverio.svg" alt="" />
                </div>
                {(location.includes("signin") || location.includes("signup")) &&
                    <h3 className="text-[#FFD451] font-[300] flex items-center text-[1.4rem] leading-[100%]">{location.split("/")[location.split("/").length - 1]}</h3>
                }
                <nav className="flex gap-[42px] items-center">
                    <div className="flex items-center gap-[28px]">
                        <a href="" className={`${HeaderFont} ${location.includes("role-choose") && `p-[12px_24px]! ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`} ${location.includes("signin") || location.includes("signup") ? "p-[12px_18px]! border-[#FFFFFF33]! border-[1px]! text-[1.4rem]! leading-[100%]! font-[400]! border-solid! rounded-[8px]! bg-transparent!" : ""}`}>About Us</a>
                        {!location.includes("role-choose") && !(location.includes("signin") || location.includes("signup")) &&
                            <a onClick={() => HandleLoginButton()} href="" className={`${HeaderFont}`}>Log in</a>
                        }
                    </div>
                    {!location.includes("role-choose") && !(location.includes("signin") || location.includes("signup")) &&
                        <button onClick={() => HandleSignUpButton()} className={`p-[12px_24px] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                    }
                </nav>
            </div>
        </header>)
}
