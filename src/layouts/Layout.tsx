import { Outlet } from 'react-router-dom'
import Header from '../components/Home/Header'
import { useForm } from 'react-hook-form'

export default function Layout() {


    const { register, watch, handleSubmit } = useForm()

    return (
        <>
            <div className='flex flex-col bg-[#000000] min-h-[100vh]'>
                <Header />
                <Outlet context={{ register, watch, handleSubmit }} />
            </div>
        </>
    )
}
