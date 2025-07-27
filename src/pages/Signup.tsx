import { useNavigate, useOutletContext, useParams } from "react-router-dom"

export default function Signup() {
    const { handleSubmit, register, watch, reset } = useOutletContext<TForm>()

    const onSubmit = () => { }
    const navigate = useNavigate()
    
    const { role } = useParams()
    const handleSignUp = () => {

        const user = {
            id: Math.random(),
            name: watch("name"),
            email: watch("email"),
            password: watch("password"),
            contactInfo: watch("contactInfo"),
            role
        }

        const users = localStorage.getItem("users")
        if (!users) {
            localStorage.setItem("users", "[]")
        }
        const parsedUsers = JSON.parse(users!)
        parsedUsers.push(user)
        localStorage.setItem("users", JSON.stringify(parsedUsers))
        navigate("/")
        reset()
    }

    return (
        <div className="flex flex-col gap-[50px] items-center p-[70px]">
            <h1 className="font-[300] text-[5rem] text-[#FFFFFF] leading-[100%]">Sign up</h1>
            <form onClick={handleSubmit(onSubmit)} action="" className="flex flex-col gap-[17px] w-[380px]">
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="email/phone" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Name</label>
                    <input type="text" id="email/phone" {...register("name")} className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! outline-none p-[8px_16px] rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Email</label>
                    <input type="text" {...register("email")} id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Password</label>
                    <input type="text" {...register("password")} id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Contact Info</label>
                    <input type="text" {...register("contactInfo")} id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
            </form>
            <button onClick={() => handleSignUp()} className={`p-[12px_24px] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign Up</button>
        </div>
    )
}
