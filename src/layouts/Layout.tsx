import { Outlet } from 'react-router-dom'
import Header from '../components/Home/Header'

export default function Layout() {
    return (
        <>
            <div className='flex flex-col bg-[#000000] min-h-[100vh]'>
                <Header />
                <Outlet />
            </div>
        </>
    )
}
