import { Outlet } from 'react-router-dom'
import Header from '../components/Home/Header'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export default function Layout() {


    const { register, watch, handleSubmit } = useForm()

    useEffect(() => {
        const users = localStorage.getItem('users')
        if (!users) {
            localStorage.setItem('users', "[]")
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
    },
        [])

    return (
        <>
            <div className='flex flex-col bg-[#000000] min-h-[100vh]'>
                <Header />
                <Outlet context={{ register, watch, handleSubmit }} />
            </div>
        </>
    )
}
