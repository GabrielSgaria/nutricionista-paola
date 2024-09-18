'use client'
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Salad, Apple, HeartPulse, Star, CheckCircle, ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { NavBar } from "../components/navbar"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cinza-pasini">
          {/* <Image
            alt="Mountains"
            src="/images/12.png"
            quality={100}
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          /> */}
          <div className="container mx-auto px-4 md:px-6 z-20">
            <div className="flex flex-col md:flex-row gap-12 justify-around items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-verde-escuro-pasini text-center md:text-start">
                    Transforme sua saúde com <br />Paola Pasini
                  </h1>
                  <p className="max-w-[600px] text-verde-claro-pasini md:text-xl text-center md:text-start">
                    Descubra uma vida mais saudável e equilibrada com orientação nutricional personalizada.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center justify-center md:justify-start ">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                    href="#contact"
                  >
                    Agende uma Consulta
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-verde-escuro-pasini bg-cinza-pasini px-8 text-sm font-medium text-verde-escuro-pasini shadow-sm transition-colors hover:bg-verde-claro-pasini hover:text-cinza-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                    href="#services"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:max-w-[450px] max-w-[310px]"
              >
                <Image
                  alt="Paola Pasini"
                  className="object-fill "
                  height={550}
                  src="/images/logo-redonda-3.png"
                  width={550}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini">Nossos Serviços</h2>
                <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma variedade de serviços nutricionais para atender às suas necessidades individuais.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: Apple, title: "Consulta Nutricional", description: "Avaliação completa e plano alimentar personalizado." },
                { icon: HeartPulse, title: "Acompanhamento", description: "Suporte contínuo para alcançar seus objetivos de saúde." },
                { icon: CalendarDays, title: "Planejamento de Refeições", description: "Cardápios semanais adaptados ao seu estilo de vida." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-cinza-pasini bg-white text-verde-escuro-pasini shadow-md md:min-h-[240px]"
                >
                  <div className="flex flex-col items-center space-y-4 text-center p-6">
                    <service.icon className="h-12 w-12 text-dourado-escuro-pasini" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-verde-claro-pasini">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cinza-pasini">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini">Aqui está o que posso fazer por você:</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Desenvolver planos nutricionais personalizados",
                "Ajudar na perda de peso de forma saudável",
                "Melhorar sua relação com a comida",
                "Otimizar sua performance atlética",
                "Gerenciar condições de saúde através da dieta",
                "Criar hábitos alimentares sustentáveis"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-6 w-6 text-dourado-escuro-pasini" />
                  <span className="text-verde-escuro-pasini">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini">O que você pode esperar ao final desse processo</h2>
              <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ao trabalhar comigo, você experimentará uma transformação completa em sua saúde e bem-estar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Uma relação mais saudável com a comida",
                "Aumento significativo de energia e disposição",
                "Melhora na qualidade do sono",
                "Redução de sintomas relacionados à má alimentação",
                "Maior confiança e autoestima",
                "Hábitos alimentares sustentáveis a longo prazo"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <ArrowRight className="h-6 w-6 text-dourado-escuro-pasini" />
                  <span className="text-verde-escuro-pasini">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Paola Pasini trabalhando"
                  className="object-fill"
                  height={550}
                  src="/images/logo-redonda-3.png"
                  width={550}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini">Sobre Paola Pasini</h2>
                  <p className="max-w-[600px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Paola Pasini é uma nutricionista dedicada com anos de experiência em ajudar pessoas a alcançarem
                    uma vida mais saudável através da alimentação equilibrada.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    "Formada em Nutrição pela Universidade XYZ",
                    "Especialista em Nutrição Esportiva",
                    "Mais de 1000 pacientes atendidos"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <Star className="h-4 w-4 text-dourado-escuro-pasini" />
                      <span className="text-verde-escuro-pasini">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-cinza-pasini">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-verde-escuro-pasini"
            >
              Depoimentos
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Maria Silva", text: "A orientação da Paola mudou minha vida. Perdi peso e me sinto muito mais disposta!" },
                { name: "João Santos", text: "Graças à Paola, consegui melhorar meu desempenho nos treinos e competições." },
                { name: "Ana Oliveira", text: "O acompanhamento da Paola foi fundamental para controlar minha diabetes." }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-verde-claro-pasini bg-white text-verde-escuro-pasini shadow-sm"
                >
                  <div className="flex flex-col items-center space-y-4 text-center p-6">
                    <Image
                      alt={`Cliente ${index + 1}`}
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-verde-claro-pasini">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-verde-escuro-pasini text-cinza-pasini py-12">
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
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (11) 99999-9999</li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contato@paolapasini.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dourado-claro-pasini">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-dourado-claro-pasini"><Facebook className="h-6 w-6" /></Link>
                <Link href="#" className="hover:text-dourado-claro-pasini"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="hover:text-dourado-claro-pasini"><Linkedin className="h-6 w-6" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-verde-claro-pasini text-center">
            <p className="text-sm">&copy; 2023 Paola Pasini Nutrição. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <Link
        href="https://wa.me/5511999999999"
        className="fixed bottom-4 right-4 bg-dourado-escuro-pasini text-cinza-pasini p-3 rounded-full shadow-lg hover:bg-dourado-claro-pasini transition-colors"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>
    </div>
  )
}