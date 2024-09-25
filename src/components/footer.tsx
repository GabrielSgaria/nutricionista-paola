import { Instagram, Mail, MapPin, Phone, Salad } from "lucide-react";
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
                            <li><Link href="#about" className="hover:text-dourado-claro-pasini">Quem somos</Link></li>
                            <li><Link href="#contacts" className="hover:text-dourado-claro-pasini">Contato</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Contato</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><Link className="flex items-center hover:text-dourado-claro-pasini" href="https://wa.me/5541992645610?text=Olá Paola, vim através do site, gostaria de agendar uma consulta!"><Phone className="h-4 w-4 mr-2" /> (41) 99264-5610</Link></li>
                            <li className="flex items-center"><Link className="flex items-center hover:text-dourado-claro-pasini" href="mailto:nutripaolapasini@gmail.com"><Mail className="h-4 w-4 mr-2" /> nutripaolapasini@gmail.com</Link></li>
                            <li className="flex items-center"><Link className="flex items-center hover:text-dourado-claro-pasini" href="https://maps.app.goo.gl/BEGSbugqxQh5Knbm7"><MapPin className="h-4 min-w-4 mr-2" />Rua Senador Xavier da Silva, 488 | Sala 1102 Centro Cívico - Curitiba, PR.</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            {/* <Link href="#" target="_blank" className="hover:text-dourado-claro-pasini"><Facebook className="h-6 w-6" /></Link> */}
                            <Link href="https://www.instagram.com/nutripaolapasini/" target="_blank" className="hover:text-dourado-claro-pasini flex items-center gap-2"><Instagram className="h-6 w-6" />@nutripaolapasini</Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-verde-claro-pasini text-center">
                    <p className="text-sm">&copy; 2024 Paola Pasini Nutrição. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}