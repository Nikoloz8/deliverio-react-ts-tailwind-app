import { useLocation, useNavigate } from "react-router-dom"
import * as XLSX from "xlsx"

export default function index({ watch, role, reset, showDelete, setShowDelete, setOrders, order, orders, setShowChangeStatus, setShowForm, setShowStatus, setFileName, setNotFoundError }: TIndex) {

    const navigate = useNavigate()
    const location = useLocation().pathname

    const HandleSignUpButton = () => {
        localStorage.setItem("SL", "SignUp")
        navigate("/role-choose")
    }

    const HandleLoginButton = () => {
        localStorage.setItem("SL", "SignIn")
        navigate("/role-choose")
    }

    const HandleGetSL = () => {
        const SL = localStorage.getItem("SL")
        return SL
    }

    const getRole = () => {
        return location.split("/")[2]
    }

    const MainLayoutUseEffect = () => {
        let users = localStorage.getItem('users')
        if (!users) {
            localStorage.setItem('users', "[]")
            users = "[]"
        }
        const admin = JSON.parse(localStorage.getItem('users')!).find((user: any) => user.role === 'admin')
        if (!admin) {
            const parsedUsers = JSON.parse(users!)
            parsedUsers.push({
                role: "admin",
                email: "admin@gmail.com",
                password: "admin",
                contactInfo: "1234567890"
            })
            localStorage.setItem("users", JSON.stringify(parsedUsers))
        }
    }

    const handleSignUp = () => {

        const user = {
            id: Math.random(),
            name: watch("name"),
            email: watch("email"),
            password: watch("password"),
            contactInfo: watch("contactInfo"),
            role
        }

        const users = localStorage.getItem("users")
        if (!users) {
            localStorage.setItem("users", "[]")
        }
        const parsedUsers = JSON.parse(users!)
        parsedUsers.push(user)
        localStorage.setItem("users", JSON.stringify(parsedUsers))
        navigate("/")
        reset()
    }

    const handleDelete = () => {
        const newOrders = [...orders!].filter((e) => e !== order)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setOrders!(newOrders)
        navigate("/panels/admin/Store Orders")
        setShowDelete!(!showDelete)
    }

    const handleSaveForm = (status: string) => {
        const changedOrder = { ...order, მყიდველი: watch().Buyer, მაღაზია: watch().Store, მისამართი: watch().Address, "ტელეფონის ნომერი": watch().Number, "რაოდენობა * ფასი": watch().Amount, სტატუსი: status }
        const newOrders = orders!.map((e: any) => e === order ? changedOrder : e)
        setOrders!(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowForm!(false)
        setShowChangeStatus!(false)
    }

    const getCouriers = () => {
        const users = localStorage.getItem("users")
        if (!users) return
        const parsedUsers = JSON.parse(users)
        const couriers = []
        for (let i = 0; i < parsedUsers.length; i++) {
            if (parsedUsers[i].role === "courier") {
                couriers.push(parsedUsers[i])
            }
        }
        return couriers
    }

    const handleChangeCourier = (courier: string, ind: number) => {
        const orders = JSON.parse(localStorage.getItem("orders")!)
        const newOrders = orders.map((e: any, i: number) => i === ind ? { ...orders[i], კურიერი: courier } : e)
        setOrders!(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
    }

    const handleChangeOrderStatus = (status: string, ind: number) => {
        const orders = JSON.parse(localStorage.getItem("orders")!)
        const newOrders = orders.map((e: any, i: number) => i === ind ? { ...orders[i], "კურიერის სტატუსი": status } : e)
        setOrders!(newOrders)
        localStorage.setItem("orders", JSON.stringify(newOrders))
        setShowStatus!(-1)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            setFileName!(file.name)
            reader.onload = (event) => {
                const data = new Uint8Array(event.target?.result as ArrayBuffer)
                const workbook = XLSX.read(data, { type: "array" })
                const sheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[sheetName]
                const jsonData = XLSX.utils.sheet_to_json(worksheet)
                const orders = localStorage.getItem("orders")
                if (!orders) {
                    localStorage.setItem("orders", "[]")
                }
                const parsedOrders = JSON.parse(orders || "[]")
                parsedOrders.push(...jsonData)
                localStorage.setItem("orders", JSON.stringify(parsedOrders))
            }

            reader.readAsArrayBuffer(file)


        } else {
            setFileName!("Choose File...")
        }
    }

    const handleSignIn = () => {
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", "[]")
        }

        const parsedUsers = JSON.parse(localStorage.getItem("users")!)
        for (let i = 0; i < parsedUsers.length; i++) {
            if ((parsedUsers[i].email === watch("email/phone") || parsedUsers[i].contactInfo === watch("email/phone")) && getRole() === parsedUsers[i].role) {
                if (parsedUsers[i].password === watch("password")) {
                    navigate(`/panels/${parsedUsers[i].role}/${getRole() === "admin" ? "Store Orders" : getRole() === "courier" ? "My Packages" : "My Orders"}`)
                    setNotFoundError!(1)
                    return
                } else {
                    setNotFoundError!(2)
                    return
                }
            } else {
                setNotFoundError!(0)
            }
        }
    }

    return { HandleLoginButton, HandleSignUpButton, HandleGetSL, getRole, MainLayoutUseEffect, handleSignUp, handleDelete, handleSaveForm, getCouriers, handleChangeCourier, handleChangeOrderStatus, handleFileChange, handleSignIn }
}
