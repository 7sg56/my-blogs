import React from "react";
import Balatro from "./react-bits/Balatro";
import { Link } from "@nextui-org/react";

export const Footer = () => {
    return (
        <footer className="relative h-screen w-full bg-black border-t border-white/10 overflow-hidden flex flex-col">
            <div className="absolute inset-0 z-0">
                <Balatro
                    isRotate={true}
                    mouseInteraction={true}
                    color1="#242424ff"
                    color2="#111111"
                    color3="#282828ff"
                />
            </div>

            <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20 select-none">
                    7sg56.xyz
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <Link href="#" color="foreground" className="text-xl text-neutral-400 hover:text-white transition-colors">GitHub</Link>
                    <Link href="#" color="foreground" className="text-xl text-neutral-400 hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" color="foreground" className="text-xl text-neutral-400 hover:text-white transition-colors">LinkedIn</Link>
                </div>
            </div>

            <div className="relative z-10 border-t border-white/5 py-8 text-center text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Sourish Ghosh (7sg56). All rights reserved.
            </div>
        </footer>
    );
};
