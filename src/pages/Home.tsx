import Card from "../components/Home/Card"
import tailwind from "../styles/tailwind"

export default function Home() {

    const { HeaderFont } = tailwind()

    return (
        <>
            <header className="p-[13px_40px] bg-[#0F0F0F] w-[100%] flex justify-center">
                <div className="flex justify-between w-[1080px]">
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
            <main>
                <div className="bg-[#000000] flex flex-col items-center w-[100%]">
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
                                <button className={`p-[12px_24px] bg-[] ${HeaderFont} text-[#FF9900]! bg-[#251B03] rounded-[8px] cursor-pointer`}>Sign up</button>
                            </div>
                            <img src="/images/Home/Rectangle 21.svg" alt="" />
                        </section>
                    </div>
                    <section className="p-[64px_0] w-[100%] bg-[#0F0F0F] flex justify-center">
                        <div className="w-[1440px] flex flex-col gap-[48px] items-center!">
                            <h2 className="text-[4.2rem] font-[700] leading-[100%] text-[#FFFFFF]">How It Works</h2>
                            <div className="flex gap-[30px]">
                                <Card bg="#251B03" text="See live updates of deliveries and customer feedback." title="Upload Orders" img="/images/Home/Rectangle 17.svg" />
                                <Card bg="#543200" text="Accept deliveries, update statuses, and optimize routes." title="Manage Deliveries" img="/images/Home/Rectangle 17 (1).svg" />
                                <Card bg="#251B03" text="View detailed analytics on store and courier activities." title="Monitor Performance" img="/images/Home/Rectangle 17 (2).svg" />
                            </div>
                        </div>
                    </section>
                    <section className="p-[166px_0] w-[100%] flex justify-center">
                        <div className="w-[1440px] flex flex-col gap-[76px] items-center!">
                            <div className="flex flex-col gap-[76px] w-[1080px]">
                                <div className="flex flex-col min-h-[614px] gap-[49px] relative p-[80px] w-[100%] bg-[#251B03] rounded-[14px] items-start">
                                    <div className="flex flex-col max-w-[600px]">
                                        <h3 className="text-[2.6rem] font-[300] leading-[100%] text-[#FFD451]">For Stores</h3>
                                        <h1 className="text-[6.4rem] font-[900] leading-[88px] text-[#FFFFFF]">Streamline Your Orders with Ease</h1>
                                        <p className="text-[1.4rem] font-[300] text-[rgba(255,255,255,0.6)] max-w-[317px] leading-[160%]">Upload, manage, and track all your orders effortlessly. Stay in control and ensure smooth deliveries to your customers with our intuitive platform.</p>
                                    </div>
                                    <button className="p-[16px_30px] bg-[#543200] rounded-[14px] border-[0.5px] border-[#FFFFFF33] border-solid font-[500] text-[1.4rem] leading-[100%] text-[#FF9900] cursor-pointer shadow-[0_0_27px_0_#00000040]">Get Started</button>
                                    <img src="/images/Home/Rectangle 19.svg" className="absolute left-[200px] top-[-60px] w-[873px]" alt="" />
                                </div>
                                <div className="flex flex-col min-h-[614px] gap-[49px] relative p-[80px] w-[100%] bg-[#3B2900] rounded-[14px] overflow-hidden items-end">
                                    <div className="flex flex-col max-w-[600px] gap-[49px] items-start ml-[340px]">
                                        <div className="flex flex-col">
                                            <h3 className="text-[2.6rem] font-[300] leading-[100%] text-[#FFD451]">For Couriers</h3>
                                            <h1 className="text-[6.4rem] font-[900] leading-[88px] text-[#FFFFFF]">Deliver Smarter, Faster, and Safer</h1>
                                            <p className="text-[1.4rem] font-[300] text-[rgba(255,255,255,0.6)] max-w-[317px] leading-[160%]">Track your deliveries in real-time, optimize routes, and update statuses—all in one place. Deliver with ease and accuracy, every time.</p>
                                        </div>
                                        <button className="p-[16px_30px] bg-[#543200] rounded-[14px] border-[0.5px] border-[#FFFFFF33] border-solid font-[500] text-[1.4rem] leading-[100%] text-[#FF9900] cursor-pointer shadow-[0_0_27px_0_#00000040]">Get Started</button>
                                    </div>
                                    <img src="/images/Home/Rectangle 18.svg" className="absolute w-[767px] left-[-100px] top-[235px] h-[379px]" alt="" />
                                </div>
                                <div className="flex flex-col min-h-[614px] gap-[49px] relative p-[80px] w-[100%] bg-[#251B03] rounded-[14px] items-start">
                                    <div className="flex flex-col max-w-[700px]">
                                        <h3 className="text-[2.6rem] font-[300] leading-[100%] text-[#FFD451]">For Admins</h3>
                                        <h1 className="text-[6.4rem] font-[900] leading-[88px] text-[#FFFFFF]">Manage Operations from One Dashboard</h1>
                                        <p className="text-[1.4rem] font-[300] text-[rgba(255,255,255,0.6)] max-w-[317px] leading-[160%]">Monitor, assign, and oversee deliveries across multiple stores and couriers. Keep your operations running smoothly with complete control and real-time updates.</p>
                                    </div>
                                    <button className="p-[16px_30px] bg-[#543200] rounded-[14px] border-[0.5px] border-[#FFFFFF33] border-solid font-[500] text-[1.4rem] leading-[100%] text-[#FF9900] cursor-pointer shadow-[0_0_27px_0_#00000040]">Get Started</button>
                                    <img src="/images/Home/Rectangle 19 (1).svg" className="absolute right-[0] bottom-[70px]" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="p-[72px_50px_50px_50px] bg-[#0F0F0F] w-[100%] flex justify-center">
                <div className="w-[1080px] flex flex-col gap-[90px]">
                    <div className="flex gap-[112px]">
                        <div className="flex items-start flex-col gap-[14px] max-w-[330px]">
                            <img src="/images/Home/Deliverio (1).svg" alt="" />
                            <p className="font-[400] text-[1.4rem] leading-[26px] text-[#C7C7C7]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-[14px]">
                                <h4 className="text-[#FFFFFF] font-[700] text-[2.2rem] leading-[100%] ">Other Links</h4>
                                <nav>
                                    <ul className="flex flex-col">
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">About Us</a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">Team</a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">Services</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-col gap-[14px]">
                                <h4 className="text-[#FFFFFF] font-[700] text-[2.2rem] leading-[100%] ">The Platform</h4>
                                <nav>
                                    <ul className="flex flex-col">
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7]">LinkedIn</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-col gap-[19px]">
                                <h4 className="text-[#FFFFFF] font-[700] text-[2.2rem] leading-[100%] ">Contact Us</h4>
                                <nav>
                                    <ul className="flex flex-col gap-[16px]">
                                        <li>
                                            <a href="" className="font-[400] leading-[24px] text-[1.4rem] text-[#C7C7C7] flex gap-[23px] items-center">
                                                <img src="/images/Home/Vector (4).svg" alt="" />
                                                +995 599 123 456
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[24px] text-[1.4rem] text-[#C7C7C7] flex gap-[23px] items-center">
                                                <img src="/images/Home/mail.svg" alt="" />
                                                deliverio@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="font-[400] leading-[24px] text-[1.4rem] text-[#C7C7C7] flex gap-[23px] items-center">
                                                <img src="/images/Home/Vector (5).svg" alt="" />
                                                Address : Tbilisi
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[21px] items-end">
                        <span className="w-[100%] h-[1px] bg-[#AEAEAE]"></span>
                        <nav>
                            <ul className="flex gap-[16px]">
                                <li>
                                    <a href="" className="font-[400] leading-[100%] text-[1.4rem] text-[#C7C7C7]">Support</a>
                                </li>
                                <li>
                                    <a href="" className="font-[400] leading-[100%] text-[1.4rem] text-[#C7C7C7]">Services</a>
                                </li>
                                <li>
                                    <a href="" className="font-[400] leading-[100%] text-[1.4rem] text-[#C7C7C7]">Terms & Condition</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}
