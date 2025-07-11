import tailwind from "../styles/tailwind"

export default function Home() {

    const { HeaderFont } = tailwind()

    return (
        <>
            <header className="p-[13px_40px] bg-[#0F0F0F] w-[100%] flex justify-center">
                <div className="flex justify-between w-[1440px]!">
                    <div className="flex gap-[6px] items-center">
                        <img src="/images/Home/Deliverio Icon 1.svg" alt="" />
                        <img src="/images/Home/Deliverio.svg" alt="" />
                    </div>
                    <nav className="flex gap-[42px] items-center">
                        <div className="flex items-center gap-[28px]">
                            <a href="" className={`${HeaderFont}`}>About Us</a>
                            <a href="" className={`${HeaderFont}`}>Log in</a>
                        </div>
                        <button className={`p-[12px_24px] bg-[] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                    </nav>
                </div>
            </header>
            <div className="bg-[#000000] flex justify-center w-[100%]">
                <div className="w-[1440px]">
                    <section className="w-[100%] flex justify-between p-[140px_64px] mb-[160px]">
                        <div className="flex flex-col items-start gap-[35px]">
                            <div className="flex flex-col gap-[8px]">
                                <h1 className="text-[6.8rem] font-[900] leading-[100%] flex flex-col gap-[24px]">
                                    <span className="text-[#FFD451]">Simplifying</span>
                                    <span className="text-[#FFFFFF]">Deliveries</span>
                                </h1>
                                <h4 className="text-[1.8rem] font-[300] text-[#FFD451] leading-[100%]">For Businesses & Couriers</h4>
                            </div>
                            <button className={`p-[12px_24px] bg-[] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                        </div>
                        <img src="/images/Home/Rectangle 21.svg" alt="" />
                    </section>
                </div>
            </div>
        </>
    )
}
