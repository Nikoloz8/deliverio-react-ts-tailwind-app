import tailwind from "../../styles/tailwind"

export default function HeroSection() {
    const { HeaderFont } = tailwind()
    return (
        <div className="w-[1080px]">
            <section className="w-[100%] flex gap-[75px] justify-center p-[140px_64px] mb-[160px]">
                <div className="flex flex-col items-start gap-[35px]">
                    <div className="flex flex-col gap-[8px]">
                        <h1 className="text-[6.8rem] font-[900] leading-[100%] flex flex-col gap-[24px]">
                            <span className="text-[#FFD451]">Simplifying</span>
                            <span className="text-[#FFFFFF]">Deliveries</span>
                        </h1>
                        <h4 className="text-[1.8rem] font-[300] text-[#FFD451] leading-[100%]">For Businesses & Couriers</h4>
                    </div>
                    <button className={`p-[12px_24px] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                </div>
                <img src="/images/Home/Rectangle 21.svg" alt="" />
            </section>
        </div>)
}
