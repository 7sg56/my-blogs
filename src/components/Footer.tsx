import React from "react";
import Balatro from "./react-bits/Balatro";
import { Link } from "@nextui-org/react";

export const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-white/10 overflow-hidden">
            <Balatro />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">7sg56.xyz</h2>
                    <p className="text-neutral-400 max-w-sm">
                        Digital garden and thoughts by Sourish Ghosh. <br />
                        Building at the edges of web and security.
                    </p>
                </div>

                <div className="flex gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-semibold text-white uppercase tracking-wider">Socials</span>
                        <Link href="#" color="foreground" className="text-neutral-400 hover:text-white">GitHub</Link>
                        <Link href="#" color="foreground" className="text-neutral-400 hover:text-white">Twitter</Link>
                        <Link href="#" color="foreground" className="text-neutral-400 hover:text-white">LinkedIn</Link>
                    </div>
                </div>
            </div>

            <div className="relative z-10 border-t border-white/5 py-8 text-center text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} Sourish Ghosh (7sg56). All rights reserved.
            </div>
        </footer>
    );
};
