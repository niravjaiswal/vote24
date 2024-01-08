import React, { useState } from "react";
import Register from './Register';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const gradientStyle = {
        background: 'linear-gradient(to top right, #EC4899, #F43F5E, #F59E0B)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
    };

    return (
        <div>
            <nav className="bg-white border-b">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden absolute left-4">
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? '✖' : '☰'}
                    </button>
                    <a href="/" className="text-3xl font-bold cursor-pointer z-10" style={gradientStyle}>Vote24</a>

                    <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row flex-1 justify-center items-center absolute md:relative inset-0`}>
                        <nav aria-label="Global" className="flex flex-1 items-center justify-center">
                            <ul className="flex flex-col md:flex-row items-center gap-6 text-sm">
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/candidates"> Candidates </a></li>
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/map"> Map </a></li>
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/policies"> Policies </a></li>
                            </ul>
                        </nav>
                    </div>

                    <Register />
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <nav aria-label="Global">
                            <ul className="flex flex-col items-center gap-6 text-sm">
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/candidates"> Candidates </a></li>
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/map"> Map </a></li>
                                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="/policies"> Policies </a></li>
                            </ul>
                        </nav>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Nav;
