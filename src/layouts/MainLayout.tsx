import { Outlet } from 'react-router-dom'
import Header from '../components/Home/Header'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import index from '../utils'

export default function Layout() {


    const { register, watch, handleSubmit, reset, formState: { errors }, clearErrors } = useForm()

    const { MainLayoutUseEffect } = index({})

    useEffect(() => MainLayoutUseEffect(), [])

    return (
        <>
            <div className='flex flex-col bg-[#000000] min-h-[100vh]'>
                <Header />
                <Outlet context={{ register, watch, handleSubmit, reset, errors, clearErrors }} />
            </div>
        </>
    )
}
