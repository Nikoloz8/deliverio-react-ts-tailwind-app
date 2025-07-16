import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Navigation from "../components/Panels/Navigation";

export default function PanelsLayout() {
    return (
        <div className="flex flex-col items-center bg-[#000000] min-h-[100vh]">
            <Header />
            <div className="flex w-[1210px] justify-between p-[35px_40px]">
                <Navigation />
                <Outlet />
            </div>
        </div>
    )
}
