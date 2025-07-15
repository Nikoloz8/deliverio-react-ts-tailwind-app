import tailwind from "../../styles/tailwind";

export default function GetStartedCard({ text1, text2, text3, imgSrc, photoLocation, ml, bg }: TGetStartedCard) {

    const { ButtonStyle } = tailwind()

    return (
        <div className={`flex flex-col min-h-[614px] gap-[49px] relative p-[80px] w-[100%] rounded-[14px] items-start`} style={{ backgroundColor: bg || "#251B03" }}>
            <div className={`flex flex-col max-w-[600px] ${ml}`}>
                <h3 className="text-[2.6rem] font-[300] leading-[100%] text-[#FFD451]">{text1}</h3>
                <h1 className="text-[6.4rem] font-[900] leading-[88px] text-[#FFFFFF]">{text2}</h1>
                <p className="text-[1.4rem] font-[300] text-[rgba(255,255,255,0.6)] max-w-[317px] leading-[160%]">{text3}</p>
            </div>
            <button className={`${ButtonStyle}`}>Get Started</button>
            <img src={imgSrc} className={`absolute ${photoLocation}`} alt="" />
        </div>)
}
