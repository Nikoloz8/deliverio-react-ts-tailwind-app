import GetStartedCard from "./GetStartedCard"

export default function GetStartedSection() {


    return (
        <section className="p-[166px_0] w-[100%] flex justify-center">
            <div className="w-[1440px] flex flex-col gap-[76px] items-center!">
                <div className="flex flex-col gap-[76px] w-[1080px]">
                    
                    <GetStartedCard text1="For Stores" text2="Streamline Your Orders with Ease" text3="Upload, manage, and track all your orders effortlessly. Stay in control and ensure smooth deliveries to your customers with our intuitive platform." imgSrc="/images/Home/Rectangle 19.svg" photoLocation="left-[200px] top-[-30px] w-[873px]" />
                    
                    <GetStartedCard text1="For Couriers" text2="Deliver Smarter, Faster, and Safer" text3="Track your deliveries in real-time, optimize routes, and update statuses—all in one place. Deliver with ease and accuracy, every time." imgSrc="/images/Home/Rectangle 18.svg" photoLocation="w-[767px] left-[-100px] top-[235px] h-[379px]" ml="ml-[340px]" bg="#3B2900" />
                   
                    <GetStartedCard text1="For Admins" text2="Manage Operations from One Dashboard" text3="Monitor, assign, and oversee deliveries across multiple stores and couriers. Keep your operations running smoothly with complete control and real-time updates." imgSrc="/images/Home/Rectangle 19 (1).svg" photoLocation="right-0 bottom-[70px]" ml="max-w-[700px]"/>
                </div>
            </div>
        </section >)
}
