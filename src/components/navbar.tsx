"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            closeMenu();
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="z-50 relative border-b border-cinza-pasini">
            <div className="bg-cinza-pasini">
                <div
                    className={`container mx-auto flex flex-row items-center justify-between gap-8 py-6 text-lg px-8  ${isMenuOpen ? "flex-col" : "flex-row "
                        }`}
                >
                    <div className="flex h-9 w-9 items-center justify-center lg:hidden">
                        <DotsHorizontalIcon
                            onClick={handleMenuToggle}
                            className="size-8 text-verde-escuro-pasini hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>
                    <div className="w-48 h-full relative">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                width={400}
                                height={400}
                                src="/images/logo.png"
                                alt="Logo Principal"
                                priority
                                quality={100}
                                className="object-fill"
                            />
                        </Link>
                    </div>

                    <div
                        className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? "flex" : "hidden"
                            }`}
                    >
                        <nav className="md:flex grow justify-center ">
                            <div
                                className={`flex min-w-0 flex-row items-center justify-center gap-8 text-base text-center ${isMenuOpen ? "flex-col" : "flex-row"
                                    }`}
                            >
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                                >
                                    Serviços
                                </button>

                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                                >
                                    Quem somos
                                </button>
                                <button
                                    onClick={() => scrollToSection("clients")}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                                >
                                    Clientes
                                </button>
                                <button
                                    onClick={() => scrollToSection("contacts")}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                                >
                                    Contato
                                </button>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
