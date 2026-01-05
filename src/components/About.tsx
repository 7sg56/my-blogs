import React from "react";
import { Image, Button } from "@nextui-org/react";
import { UIProvider } from "./UIProvider";

export const About = () => {
    return (
        <UIProvider>
            <section id="about" className="min-h-screen py-24 px-4 flex flex-col items-center justify-center bg-neutral-950 text-white border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                            src="https://github.com/7sg56.png"
                            alt="Sourish Ghosh"
                            className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10 mx-auto"
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                        Sourish Ghosh <span className="text-neutral-500 text-2xl md:text-3xl font-normal">(7sg56)</span>
                    </h1>

                    <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-lg mx-auto">
                        Developer, Security Enthusiast, and Digital Gardener.
                    </p>

                    <div className="prose prose-invert prose-lg prose-neutral mx-auto mb-16 text-left leading-8 text-neutral-300">
                        <p className="mb-6">
                            Hey there! I'm Sourish. I build things on the web, often
                            exploring the intersection of modern UI engineering and
                            cybersecurity. This blog serves as a collection of my
                            thoughts, experiments, and learnings.
                        </p>
                        <p>
                            I enjoy crafting performant, accessible, and visually
                            striking digital experiences.
                        </p>
                    </div>

                    <Button
                        as="a"
                        href="https://portfolio.7sg56.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
                    >
                        Visit Portfolio <span className="ml-2">&rarr;</span>
                    </Button>
                </div>
            </section>
        </UIProvider>
    );
};
