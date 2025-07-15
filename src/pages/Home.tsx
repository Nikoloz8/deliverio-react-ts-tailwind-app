import Footer from "../components/Home/Footer"
import GetStartedSection from "../components/Home/GetStartedSection"
import HeroSection from "../components/Home/HeroSection"
import HowItWorksSection from "../components/Home/HowItWorksSection"

export default function Home() {


    return (
        <>
            <main>
                <div className="bg-[#000000] flex flex-col items-center w-[100%]">
                    <HeroSection />
                    <HowItWorksSection />
                    <GetStartedSection />
                </div>
            </main>
            <Footer />
        </>
    )
}
