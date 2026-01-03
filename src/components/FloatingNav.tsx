import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-8 inset-x-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="pointer-events-auto"
            >
                <div className={`
                    flex items-center gap-1 p-2 pl-4 rounded-full border border-white/10
                    bg-neutral-900/60 backdrop-blur-2xl shadow-xl transition-all duration-300
                    ${isScrolled ? "scale-95" : "scale-100"}
                `}>
                    {/* Brand */}
                    <a href="/" className="px-2 py-2 text-white font-bold tracking-tighter hover:text-primary transition-colors hover:cursor-pointer z-50">
                        7sg56.xyz
                    </a>

                    <div className="w-px h-6 bg-white/10 mx-2"></div>

                    {/* Links */}
                    <div className="flex items-center gap-1">
                        <NavLink href="/blogs">Blogs</NavLink>
                        <NavLink href="/about">About</NavLink>
                    </div>

                    <div className="w-px h-6 bg-white/10 mx-2"></div>

                    {/* Home Button */}
                    <a
                        href="/"
                        className="flex items-center justify-center bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
                    >
                        Home
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a
            href={href}
            className="px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
            {children}
        </a>
    );
};
