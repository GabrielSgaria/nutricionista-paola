import { Facebook, Instagram, Mail, MapPin, Phone, Salad } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-verde-escuro-pasini text-cinza-pasini py-12" id="contacts">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <Salad className="h-8 w-8 text-dourado-claro-pasini" />
                            <span className="ml-2 text-xl font-bold">Paola Pasini</span>
                        </Link>
                        <p className="text-sm">Transformando vidas através da nutrição personalizada.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Menu Rápido</h3>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="hover:text-dourado-claro-pasini">Serviços</Link></li>
                            <li><Link href="#about" className="hover:text-dourado-claro-pasini">Sobre</Link></li>
                            <li><Link href="#testimonials" className="hover:text-dourado-claro-pasini">Depoimentos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Contato</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (41) 99917-4483</li>
                            <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contato@paolapasini.com</li>
                            <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Curitiba, PR.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <Link href="#" target="_blank" className="hover:text-dourado-claro-pasini"><Facebook className="h-6 w-6" /></Link>
                            <Link href="https://www.instagram.com/nutripaolapasini/" target="_blank" className="hover:text-dourado-claro-pasini"><Instagram className="h-6 w-6" /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-verde-claro-pasini text-center">
                    <p className="text-sm">&copy; 2023 Paola Pasini Nutrição. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}