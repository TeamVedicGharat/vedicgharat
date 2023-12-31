import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { cn } from '../utils/Utils'


export default function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleSidebar = () => setSidebarOpen(!sidebarOpen)


    useEffect(() => {

        const handleBodyScroll = () => {
            document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
        };

        handleBodyScroll();
        document.body.addEventListener('scroll', handleBodyScroll);

        return () => {
            document.body.removeEventListener('scroll', handleBodyScroll);
        };

    }, [sidebarOpen]);

    console.log(scrolled)

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [])

    return (
        <>
            <header className={cn('w-full fixed top-0 px-4 z-10', { "bg-white": scrolled })}>
                <div className='flex  items-center py-2.5 max-w-[1400px] justify-between container mx-auto'>
                    <Link to="/" className='flex items-center gap-1'>
                        <img src="/vg.jpg" className='w-20 rounded-t-full   ' alt="vite" />
                    </Link>
                    <div className='hidden md:block'>
                        <Nav scrolled={scrolled} />
                    </div>
                    <div className='flex md:hidden items-center gap-2 justify-end w-full'>
                        <button onClick={handleSidebar}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>                        </button>
                    </div>
                </div>
            </header>
            {
                <>
                    <div className={cn({ 'bg-black z-10 w-full fixed left-0 top-0 h-full backdrop-blur-sm bg-opacity-80': sidebarOpen })} onClick={handleSidebar}>
                        <div className={cn('md:hidden bg-zinc-600 text-white h-full w-1/2 sm:w-1/3 duration-200 ease-linear fixed md:justify-end ',
                            { "left-0 top-0": sidebarOpen },
                            { "left-[-400px] top-0": !sidebarOpen }
                        )}>
                            {/* <X className='ml-auto mt-2 mr-3 cursor-pointer text-white' /> */}
                            <Link to="/" className='items-center gap-1 max-w-max mt-4 mb-8 block mx-auto'>
                                <img src="/vite.svg" alt="vite" />
                            </Link>
                            <Nav scrolled={scrolled} />
                        </div>
                    </div>

                </>

            }
        </>

    )
}

const Nav = ({ scrolled }) => {

    return (
        <div className={cn('flex flex-col z-10  md:flex-row md:justify-end items-center gap-x-8 gap-y-5 font-medium text-white', { "text-black": scrolled })}>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/shop">Shop</Link>
            <Link className='nav-link' to="/blog">Blog</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            {/* <AuthButton className="border-blue-500 md:border-transparent" /> */}
        </div>
    )
}

Nav.propTypes = {
    scrolled: PropTypes.bool
}