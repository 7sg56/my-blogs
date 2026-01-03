import { UIProvider } from "./UIProvider";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Dither from "./react-bits/Dither";

// Separate component for motion to allow client directive in Astro
export const HeroContent = () => {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono">System Online</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Secure Your <br /> Digital Future.
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                Exploring the frontiers of technology, security, and design.
                Insights from the edge of the network.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <Button size="lg" className="bg-white text-black font-semibold rounded-full px-8">
                    Start Reading
                </Button>
                <Button size="lg" variant="bordered" className="text-white border-white/20 hover:bg-white/5 rounded-full px-8">
                    View Archive
                </Button>
            </div>
        </div>
    );
}

export const Hero = () => {
    return (
        <UIProvider>
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none">
                    <Dither
                        waveSpeed={0.03}
                        waveAmplitude={0.31}
                        colorNum={7.7}
                        waveColor={[0.5, 0.4, 0.4]}
                    />
                </div>

                <HeroContent />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </section>
        </UIProvider>
    );
};
