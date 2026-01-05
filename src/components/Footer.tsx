import React, { useRef } from "react";
import { Link } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Twitter, Linkedin, Terminal, ArrowUpRight } from "lucide-react";

export const Footer = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);

    return (
        <section ref={containerRef} className="relative h-[100vh] w-full bg-black/10 p-4 pt-0 md:p-8 md:pt-0 flex flex-col justify-end">
            <motion.footer
                style={{ scale, borderRadius }}
                className="relative h-[calc(100vh-2rem)] w-full flex flex-col justify-between overflow-hidden bg-black border border-white/10 mx-auto transform-gpu origin-bottom shadow-2xl"
            >
                {/* Main Content Area */}
                <div className="flex-grow flex flex-col items-center justify-center relative">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <h2 className="relative z-10 text-[12vw] leading-none font-bold tracking-tighter text-white select-none">
                        7sg56
                        <span className="text-primary">.</span>
                        xyz
                    </h2>
                    <p className="relative z-10 mt-4 text-neutral-500 text-lg md:text-xl tracking-wide uppercase font-mono">
                        Digital Garden & Security Research
                    </p>
                </div>

                {/* Grid Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 divide-x divide-white/10">
                    <GridLink href="https://github.com/7sg56" icon={<Github size={20} />} label="GitHub" />
                    <GridLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                    <GridLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                    <GridLink href="/blogs" icon={<Terminal size={20} />} label="Archives" />

                    <GridItem content="© 2026 Sourish Ghosh" />
                    <GridLink href="#" label="Legal" />
                    <GridLink href="#" label="RSS Feed" />
                    <GridLink href="mailto:contact@7sg56.xyz" label="Contact" />
                </div>
            </motion.footer>
        </section>
    );
};

const GridLink = ({ href, icon, label }: { href: string; icon?: React.ReactNode; label: string }) => (
    <a
        href={href}
        className="group relative h-24 md:h-32 flex flex-col items-center justify-center gap-3 bg-black hover:bg-white/5 transition-colors duration-300"
    >
        <div className="text-neutral-400 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <span className="text-sm font-medium text-neutral-500 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
            {label}
        </span>
        <ArrowUpRight className="absolute top-4 right-4 text-neutral-700 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
    </a>
);

const GridItem = ({ content }: { content: string }) => (
    <div className="h-24 md:h-32 flex items-center justify-center bg-black">
        <span className="text-xs text-neutral-600 font-mono">
            {content}
        </span>
    </div>
);
