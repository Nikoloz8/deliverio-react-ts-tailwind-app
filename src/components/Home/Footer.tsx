import FooterLi from "./FooterLi";

export default function Footer() {
    return (
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
                                    <FooterLi href="" text="About Us" />
                                    <FooterLi href="" text="Contact Us" />
                                    <FooterLi href="" text="Team" />
                                    <FooterLi href="" text="Services" />
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-[14px]">
                            <h4 className="text-[#FFFFFF] font-[700] text-[2.2rem] leading-[100%] ">The Platform</h4>
                            <nav>
                                <ul className="flex flex-col">
                                    <FooterLi href="" text="Facebook" />
                                    <FooterLi href="" text="Instagram" />
                                    <FooterLi href="" text="LinkedIn" />
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-[19px]">
                            <h4 className="text-[#FFFFFF] font-[700] text-[2.2rem] leading-[100%] ">Contact Us</h4>
                            <nav>
                                <ul className="flex flex-col gap-[16px]">
                                    <FooterLi href="" text="+995 599 123 456" img="/images/Home/Vector (4).svg" />
                                    <FooterLi href="" text="deliverio@gmail.com" img="/images/Home/mail.svg" />
                                    <FooterLi href="" text="Address : Tbilisi" img="/images/Home/Vector (5).svg" />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[21px] items-end">
                    <span className="w-[100%] h-[1px] bg-[#AEAEAE]"></span>
                    <nav>
                        <ul className="flex gap-[16px]">
                            <FooterLi href="" text="Support" />
                            <FooterLi href="" text="Services" />
                            <FooterLi href="" text="Terms & Condition" />
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>)
}
