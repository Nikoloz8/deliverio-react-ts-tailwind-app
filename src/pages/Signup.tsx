import { useEffect } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"

export default function Signup() {
    const { handleSubmit, register, watch, reset, errors, clearErrors } = useOutletContext<TForm>()

    useEffect(() => {
        clearErrors()
    }, [])

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
            <form action="" onSubmit={handleSubmit(handleSignUp)} className="flex flex-col items-center gap-[17px] w-[400px]">
                <div className="flex flex-col gap-[8px] w-full">
                    <label htmlFor="name" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF]  flex justify-between">
                        Name
                        {errors.name && (<span className="text-[red]">{errors.name.message}</span>)}
                    </label>
                    <input type="text" id="name" {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                        },
                        pattern: {
                            value: /^[a-zA-Z\s]+$/,
                            message: "Name can only contain letters and spaces",
                        }
                    })} className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! outline-none p-[8px_16px] rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                    <label htmlFor="email" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] flex justify-between">
                        Email
                        {errors.email && (<span className="text-[red]">{errors.email.message}</span>)}
                    </label>
                    <input type="text" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        }
                    })} id="email" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                    <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] flex justify-between">
                        Password
                        {errors.password && (<span className="text-[red]">{errors.password.message}</span>)}
                    </label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                            message:
                                "add Upper, lower, number, special symbols",
                        },
                    })
                    } id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                    <label htmlFor="contactInfo" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] flex justify-between">
                        Contact Info
                        {errors.contactInfo && (<span className="text-[red]">{errors.contactInfo.message}</span>)}
                    </label>
                    <input type="text" {...register("contactInfo", {
                        required: "Contact info is required",
                        pattern: {
                            value: /^(\d\s?){9,15}$/,
                            message: "Enter a valid phone number (digits and optional spaces)",
                        }
                    })} id="contactInfo" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
                </div>
                <button type="submit" className={`p-[12px_24px] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign Up</button>
            </form>
        </div>
    )
}
