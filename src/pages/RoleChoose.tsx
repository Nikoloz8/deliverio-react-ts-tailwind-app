import index from "../utils"

export default function RoleChoose() {

    const { HandleGetSL } = index()

    return <>
        <div className="flex flex-col overflow-hidden!">
            <div className="flex items-center bg-[#000000] flex-col gap-[49px] p-[80px]">
                <h1 className="font-[900] text-[4.2rem] leading-[100%] text-[#FFFFFF] ">what’s your <span className="text-[#FFD451]">role</span></h1>
                <div className="flex justify-center gap-[38px] w-[1080px]">
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className="flex items-center justify-center w-[258px] h-[298px] rounded-[14px] bg-[#251B03] cursor-pointer">
                            <img src="/images/Home/Frame 11.svg" alt="" />
                        </div>
                        <h6 className="text-[#FFD451] font-[300] text-[1.4rem]">store</h6>
                    </div>
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className="flex items-center w-[258px] h-[298px] justify-center p-[42px_37px] rounded-[14px] bg-[#251B03] cursor-pointer">
                            <img src="/images/Home/Rectangle 17 (3).svg" alt="" />
                        </div>
                        <h6 className="text-[#FFD451] font-[300] text-[1.4rem]">courier</h6>
                    </div>
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className={`flex w-[258px] h-[298px] items-center justify-center p-[42px_37px] rounded-[14px] bg-[#251B03] ${HandleGetSL() === "Login" ? "cursor-pointer" : "bg-[#130e03]!"} `}>
                            <img src="/images/Home/Rectangle 18 (1).svg" alt="" />
                        </div>
                        <h6 className="text-[#FFD451] font-[300] text-[1.4rem]">admin</h6>
                    </div>
                </div>
            </div>
        </div >
    </>
}
