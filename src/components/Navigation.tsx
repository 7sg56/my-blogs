import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { UIProvider } from "./UIProvider";

export const Navigation = () => {
    return (
        <UIProvider>
            <Navbar
                shouldHideOnScroll
                className="bg-black/50 backdrop-blur-md border-b border-white/10"
                maxWidth="xl"
            >
                <NavbarBrand>
                    <p className="font-bold text-inherit text-xl tracking-tighter">ANTIGRAVITY</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page" className="text-sm text-white">
                            Blog
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                            About
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat" className="bg-white text-black font-semibold rounded-full px-6">
                            Subscribe
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </UIProvider>
    );
};
