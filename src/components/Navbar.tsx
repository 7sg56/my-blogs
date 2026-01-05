import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
            <div className="flex items-stretch justify-between h-20 w-full max-w-[1920px] mx-auto">

                {/* Brand Section */}
                <div className="flex items-center px-8 border-r border-white/10 min-w-[200px]">
                    <a href="/" className="text-white font-bold tracking-tighter hover:text-primary transition-colors text-xl uppercase flex gap-2 items-center">
                        {/* Simple Logo Icon if needed, or just text */}
                        <div className="w-5 h-5 bg-white skew-x-12"></div>
                        7sg56.xyz
                    </a>
                </div>

                {/* Center Links Section */}
                <div className="hidden md:flex flex-grow items-center justify-start px-8 gap-12">
                    <NavLink href="/blog">Blogs</NavLink>
                    <NavLink href="/about">About</NavLink>
                </div>

                {/* Right Actions Section */}
                <div className="flex items-center border-l border-white/10">
                    <a
                        href="/"
                        className="flex items-center justify-center px-8 h-full text-white text-xs font-medium tracking-widest uppercase hover:bg-white/5 transition-colors"
                    >
                        Home
                    </a>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children, isHeader }: { href: string; children: React.ReactNode, isHeader?: boolean }) => {
    return (
        <a
            href={href}
            className={`
                text-xs font-medium tracking-widest uppercase transition-colors
                ${isHeader ? 'text-neutral-500' : 'text-neutral-400 hover:text-white'}
            `}
        >
            {children}
        </a>
    );
};
