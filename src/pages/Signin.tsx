import { useOutletContext } from "react-router-dom"
import index from "../utils"
import { useEffect, useState } from "react"

export default function Signin() {

  const { handleSubmit, register, watch, errors, clearErrors } = useOutletContext<TForm>()
  const [notFoundError, setNotFoundError] = useState(1)

  const { handleSignIn } = index({ setNotFoundError, watch })

  useEffect(() => {
    clearErrors()
  }, [])


  return (
    <div className={`flex flex-col ${notFoundError !== 1 ? "gap-[30px]" : "gap-[50px]"} items-center p-[70px]`}>
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="font-[300] text-[5rem] text-[#FFFFFF] leading-[100%]">Sign in</h1>
        {notFoundError !== 1 &&
          <h2 className="font-[300] text-[1.5rem] text-[red] leading-[100%]">{notFoundError === 0 ? "User not found" : notFoundError === 2 ? "Incorrect Credentials" : ""}</h2>
        }
      </div>
      <form onClick={handleSubmit(handleSignIn)} action="" className="flex items-center flex-col gap-[17px] w-[400px]">
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="email/phone" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] flex justify-between">
            Email/Phone Number
            {errors["email/phone"] && (<span className="text-[red]">{errors["email/phone"].message}</span>)}
          </label>
          <input type="text" id="email/phone" {...register("email/phone", {
            required: "Email/Phone is required"
          })} className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! outline-none p-[8px_16px] rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] flex justify-between">
            Password
            {errors.password && (<span className="text-[red]">{errors.password.message}</span>)}
          </label>
          <input type="password" {...register("password", {
            required: "Password is required"
          })} id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
        </div>
        <button type="submit" className={`p-[12px_24px] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign In</button>
      </form>
    </div>
  )
}
