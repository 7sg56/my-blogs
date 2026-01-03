import { NextUIProvider } from "@nextui-org/react";

export function UIProvider({ children }: { children: React.ReactNode }) {
    // In Astro, this might run on server or client. 
    // NextUIProvider is a client component mostly.
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}
