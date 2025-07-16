import { useNavigate, useOutletContext } from "react-router-dom"
import index from "../utils"

export default function Signin() {

  const { handleSubmit, register, watch } = useOutletContext<TForm>()

  const onSubmit = () => { }

  const { getRole } = index()

  const navigate = useNavigate()

  const handleSignIn = () => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", "[]")
    }

    const parsedUsers = JSON.parse(localStorage.getItem("users")!)
    for (let i = 0; i < parsedUsers.length; i++) {
      if ((parsedUsers[i].email === watch("email/phone") || parsedUsers[i].contactInfo === watch("email/phone")) && getRole() === parsedUsers[i].role) {
        if (parsedUsers[i].password === watch("password")) {
          console.log("User signed in:", parsedUsers[i])
          navigate(`/panels/${parsedUsers[i].role}/${getRole() === "admin" ? "Store Orders" : getRole() === "courier" ? "My Packages" : "My Orders"}`)
          return
        } else {
          console.error("Incorrect Credentials")
          return
        }
      } else {
        console.log("User not found")
      }
    }
  }

  return (
    <div className="flex flex-col gap-[50px] items-center p-[70px]">
      <h1 className="font-[300] text-[5rem] text-[#FFFFFF] leading-[100%]">Sign in</h1>
      <form onClick={handleSubmit(onSubmit)} action="" className="flex flex-col gap-[17px] w-[380px]">
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email/phone" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Email/Phone Number</label>
          <input type="text" id="email/phone" {...register("email/phone")} className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! outline-none p-[8px_16px] rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="password" className="text-[1.4rem] font-[300] leading-[100%] text-[#FFFFFF] ">Password</label>
          <input type="text" {...register("password")} id="password" className="w-[100%] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! p-[8px_16px] outline-none rounded-[5px] border-[0.7px] border-solid border-[#0033081F] bg-[#111111]" />
        </div>
      </form>
      <button onClick={() => handleSignIn()} className={`p-[12px_24px] font-[300] text-[1.4rem] leading-[100%] text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign In</button>
    </div>
  )
}
