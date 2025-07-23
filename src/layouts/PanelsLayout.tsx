import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Navigation from "../components/Panels/Navigation";
import { useState } from "react";

export default function PanelsLayout() {

    const [orders, setOrders] = useState<any[]>([])

    return (
        <div className="flex flex-col items-center bg-[#000000] min-h-[100vh]">
            <Header />
            <div className="flex w-[1210px] justify-between p-[35px_40px]">
                <Navigation />
                <Outlet context={{orders, setOrders}}/>
            </div>
        </div>
    )
}
