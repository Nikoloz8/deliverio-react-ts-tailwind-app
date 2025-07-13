export default function Card({ bg, text, title, img }: { bg: string, text: string, title: string, img: string }) {
    return (
        <div className="p-[35px] flex flex-col gap-[58px] rounded-[14px] items-center max-w-[337px]" style={{ backgroundColor: bg }}>
            <img src={img} alt="" />
            <div className="flex flex-col gap-[12px]">
                <h5 className="text-[#FF9900] text-[1.8rem] font-[500] leading-[100%]">{title}</h5>
                <p className="text-[rgba(255,255,255,0.6)] text-[1.8rem] font-[300] leading-[100%]">{text}</p>
            </div>
        </div>)
}
