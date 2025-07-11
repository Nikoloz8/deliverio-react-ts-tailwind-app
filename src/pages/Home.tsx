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
            <div className="bg-[#000000] w-[100%] h-[100%] min-h-[100vh]!"></div>
        </>
    )
}
