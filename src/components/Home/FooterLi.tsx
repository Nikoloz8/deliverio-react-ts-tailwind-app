export default function FooterLi({ href, text, img = "" }: { href: string, text: string, img?: string }) {
    return (
        <li>
            <a href={href} className={`font-[400] leading-[36px] text-[1.4rem] text-[#C7C7C7] ${img && "flex gap-[23px] items-center leading-[24px]!"}`}>
                <img src={img} alt="" />
                {text}
            </a>
        </li>)
}
