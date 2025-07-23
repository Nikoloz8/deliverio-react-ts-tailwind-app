import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Navigation from "../components/Panels/Navigation";
import { useEffect, useMemo, useState } from "react";

export default function PanelsLayout() {

    const [orders, setOrders] = useState<any[]>([])
    const [sortBy, setSortBy] = useState("")
    const [countPages, setCountPages] = useState(1)
    const [pageOrders, setPageOrders] = useState<any[]>([])
    const [storesArr, setStoresArr] = useState<any[]>([])
    const [filterStore, setFilterStore] = useState<any[]>([])
    const itemsPerPage = 6

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("orders")!) || []
        setOrders(stored)

        const uniqueStores = new Set<string>()
        stored.forEach((order: any) => {
            if (order.მაღაზია) {
                uniqueStores.add(order.მაღაზია)
            }
        })

        setStoresArr(Array.from(uniqueStores))
    }, [])

    const filteredOrders = filterStore.length ? orders.filter((order) => filterStore.includes(order.მაღაზია)) : orders


    const sortedOrders = useMemo(() => {
        return sortBy === "Date" ? [...filteredOrders].sort((a, b) => new Date(a.თარიღი).getTime() - new Date(b.თარიღი).getTime()) : sortBy === "Store" ? [...filteredOrders].sort((a, b) => a.მაღაზია.localeCompare(b.მაღაზია)) : sortBy === "Status" ? [...filteredOrders].sort((a, b) => a.სტატუსი.localeCompare(b.სტატუსი)) : [...filteredOrders]
    }, [filteredOrders, sortBy])

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

    useEffect(() => {
        const startIndex = (countPages - 1) * itemsPerPage
        const newPage = sortedOrders.slice(startIndex, startIndex + itemsPerPage)
        setPageOrders(newPage)
    }, [countPages, filteredOrders, sortedOrders])

    return (
        <div className="flex flex-col items-center bg-[#000000] min-h-[100vh]">
            <Header />
            <div className="flex w-[1210px] justify-between p-[35px_40px]">
                <Navigation />
                <Outlet context={{ orders, storesArr, filterStore, setFilterStore, sortBy, setSortBy, pageOrders, filteredOrders, setCountPages, totalPages }} />
            </div>
        </div>
    )
}
