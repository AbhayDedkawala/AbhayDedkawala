import { useState } from "react";

function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const MenuLinks = ({ href, text }) => {
        return <a href={href} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{text}</a>
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <MenuLinks href={"#"} text={"Home"} />
                            <MenuLinks href={"#"} text={"About Us"} />
                            <MenuLinks href={"#"} text={"Contact Us"} />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true"
                                className="h-6 w-6 dark:stroke-white stroke-black transition-all ease-in-out duration-1500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={"md:hidden transition-all ease-in-out duration-500 " + (showMobileMenu ? "block" : "hidden")} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <MenuLinks href={"#"} text={"Home"} />
                    <MenuLinks href={"#"} text={"About Us"} />
                    <MenuLinks href={"#"} text={"Contact Us"} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;