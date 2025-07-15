import Card from "./Card";

export default function HowItWorksSection() {


    return (
        <section className="p-[64px_0] w-[100%] bg-[#0F0F0F] flex justify-center">
            <div className="w-[1440px] flex flex-col gap-[48px] items-center!">
                <h2 className="text-[4.2rem] font-[700] leading-[100%] text-[#FFFFFF]">How It Works</h2>
                <div className="flex gap-[30px]">
                    <Card bg="#251B03" text="See live updates of deliveries and customer feedback." title="Upload Orders" img="/images/Home/Rectangle 17.svg" />
                    <Card bg="#543200" text="Accept deliveries, update statuses, and optimize routes." title="Manage Deliveries" img="/images/Home/Rectangle 17 (1).svg" />
                    <Card bg="#251B03" text="View detailed analytics on store and courier activities." title="Monitor Performance" img="/images/Home/Rectangle 17 (2).svg" />
                </div>
            </div>
        </section>)
}
