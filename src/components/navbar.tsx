'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            setIsOpen(false)
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const NavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
        <button
            onClick={onClick}
            className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
        >
            {children}
        </button>
    )

    const NavItems = () => (
        <>
            <NavButton onClick={() => scrollToSection("services")}>Serviços</NavButton>
            <NavButton onClick={() => scrollToSection("about")}>Quem somos</NavButton>
            {/* <NavButton onClick={() => scrollToSection("clients")}>Clientes</NavButton> */}
            <NavButton onClick={() => scrollToSection("contacts")}>Contato</NavButton>
        </>
    )

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cinza-pasini shadow-md' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Principal"
                            width={150}
                            height={40}
                            priority
                            quality={100}
                            className="object-contain"
                        />
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavItems />
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden bg-transparent shadow-none border-none hover:bg-verde-claro-pasini/50">
                            <Button variant="outline" size="icon" className={scrolled ? '' : 'border-transparent'}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-cinza-pasini">
                            <div className="flex flex-col space-y-4 mt-8">
                                <NavItems />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}