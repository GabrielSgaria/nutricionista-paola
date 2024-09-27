'use client'

import Image from "next/image"
import Link from "next/link"
import {
  CalendarDays, Apple, HeartPulse, ArrowRight, Clipboard,
  Weight, Activity, Stethoscope, Sprout, HeartHandshake, Hospital, Bed, Salad, Dumbbell, Pill,
  Thermometer, GraduationCap, BookOpen, Award
} from "lucide-react"
import { motion } from "framer-motion"
import { NavBar } from "../components/navbar"
import { scrollToSection } from "../utils/actions"
import { WhatsappLogo } from "@phosphor-icons/react"
import { Footer } from "../components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative">

      <NavBar />
      <main className="flex-1">
        <section className="w-full pb-12 pt-32 md:py-24 lg:py-32 xl:py-48 bg-cinza-pasini/85 relative">
          <Image
            alt="Background"
            src='/images/10.png'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            className="opacity-20 -z-20"
          />
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
                    Viva mais. <br />
                    Viva melhor!
                  </h1>
                  <p className="max-w-[600px] text-verde-claro-pasini md:text-xl text-center md:text-start flex items-center justify-center md:justify-start">
                    {/* <Brain className="w-6 h-6 mr-2 text-dourado-escuro-pasini" /> */}
                    Nutricionista no processo do envelhecimento e da longevidade.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center justify-center md:justify-start ">
                  <Link
                    href="https://wa.me/5541992645610?text=Olá Paola, vim através do site, gostaria de agendar uma consulta!"
                    aria-label="Contato via WhatsApp"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-verde-escuro-pasini px-8 text-sm font-medium text-cinza-pasini shadow-md transition-colors hover:bg-verde-claro-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                  >
                    <CalendarDays className="w-4 h-4 mr-2" /> Agende uma Consulta
                  </Link>
                  <button onClick={() => scrollToSection("services")}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-verde-escuro-pasini bg-cinza-pasini px-8 text-sm font-medium text-verde-escuro-pasini shadow-md transition-colors hover:bg-verde-claro-pasini hover:text-cinza-pasini focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-verde-escuro-pasini"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" /> Saiba Mais
                  </button>
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
                  className="object-fill rounded-full"
                  height={550}
                  src="/images/logo-redonda-3.png"
                  width={550}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="envelhecimento" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
          {/* <Image
            alt="Mountains"
            src='/images/12.png'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            className="opacity-5"
          /> */}
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini flex items-center">
                <HeartHandshake className="w-12 h-12 mr-4 text-dourado-escuro-pasini" /> Envelhecimento
              </h2>
              <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                O processo de envelhecimento é visto por uma boa parte da população como uma fase assustadora, pois está associado, entre outros fatores, a doenças, maior fragilidade, limitações físicas, alterações neurológicas e perda de autonomia, tornando o idoso uma pessoa dependente, restrita em suas atividades, o que o afasta de seu meio social, de novos relacionamentos e da participação em atividades de lazer.
              </p>
              <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Esse processo pode se tornar mais leve quando bem acompanhado por um profissional capacitado, que tenha uma visão ampla de todos os fatores que podem acometer a pessoa idosa, atuando na prevenção, assim como no maior controle desses fatores, de forma a retardar a evolução da fragilidade que acomete o idoso.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="longevidade" className="w-full py-12 md:py-24 lg:py-32 bg-cinza-pasini/85 relative">
          <Image
            alt="Background"
            src='/images/10.png'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            className="opacity-20 -z-20"
          />
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini flex items-center">
                <HeartPulse className="w-12 h-12 mr-4 text-dourado-escuro-pasini" /> Longevidade com Saúde
              </h2>
              <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Também é fundamental iniciar os cuidados com a saúde e o acompanhamento nutricional antes dos 60 anos, de forma a se preparar positivamente para a terceira idade, por meio da prevenção de diversas doenças e condições que podem debilitar o idoso, com o objetivo de promover saúde, vitalidade, capacidade física, mental e emocional para um maior aproveitamento dessa fase tão especial.
              </p>
              <p className="max-w-[900px] text-verde-claro-pasini md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hoje, as pessoas estão vivendo mais, no entanto, é preciso viver com mais saúde!
              </p>
            </motion.div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:pt-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini flex items-center">
                <Clipboard className="w-12 h-12 mr-4 text-dourado-escuro-pasini" /> Serviços
              </h2>
            </motion.div>
            <div className="grid gap-6 py-12 mx-auto max-w-4xl grid-cols-1 lg:grid-cols-2 lg:gap-12 ">
              {[
                { icon: Apple, text: "Atendimento e acompanhamento nutricional a partir dos 40 anos." },
                { icon: Hospital, text: "Acompanhamento nutricional nas doenças crônicas não transmissíveis." },
                { icon: Bed, text: "Acompanhamento nutricional após alta hospitalar para recuperação do estado nutricional." },
                { icon: Stethoscope, text: "Atendimento nutricional a pessoas acamadas ou com dificuldade de locomoção e em uso de sonda para alimentação." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-96 rounded-lg border border-cinza-pasini bg-white text-verde-escuro-pasini shadow-md p-6 flex flex-col justify-center items-center text-center gap-5 mx-auto"
                >
                  <service.icon className="w-10 h-10 text-dourado-escuro-pasini flex-shrink-0" />
                  <p className="text-verde-claro-pasini">{service.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini flex items-center">
                <Sprout className="w-12 h-12 mr-4 text-dourado-escuro-pasini" /> O que posso fazer por você
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: Salad, text: "Reeducação alimentar respeitando as suas preferências e hábitos alimentares." },
                { icon: Weight, text: "Recuperação do peso ideal." },
                { icon: Dumbbell, text: "Melhorar a composição corporal (relação entre massa magra e gordura corporal)." },
                { icon: Stethoscope, text: "Acompanhamento nutricional nas doenças como diabetes, câncer, doenças respiratórias e doenças cardiovasculares, assim como nas doenças neurológicas (doença de Alzheimer, Parkinson, demência senil)." },
                { icon: Activity, text: "Manejo nutricional dos sintomas gastrointestinais." },
                { icon: Activity, text: "Manejo nutricional nas lesões por pressão." },
                { icon: Clipboard, text: "Plano alimentar personalizado." },
                { icon: Pill, text: "Prescrição de suplementos alimentares considerando a condição clínica e a necessidade individual." },
                { icon: Thermometer, text: "Prescrição de nutrição enteral e manejo nutricional nas lesões por pressão." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-cinza-pasini rounded-lg p-4 shadow-md"
                >
                  <item.icon className="h-8 w-8 text-dourado-escuro-pasini flex-shrink-0" />
                  <span className="text-verde-escuro-pasini">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-cinza-pasini/85 relative">
          <Image
            alt="Background"
            src='/images/10.png'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            className="opacity-20 -z-20"
          />
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 justify-around items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:max-w-[450px] max-w-[310px]"
              >
                <Image
                  alt="Paola Pasini trabalhando"
                  className="object-fill rounded-xl"
                  height={550}
                  src="/images/sem-fundo.png"
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-verde-escuro-pasini flex items-center">
                    <GraduationCap className="w-12 h-12 mr-4 text-dourado-escuro-pasini" /> Sobre Paola Pasini
                  </h2>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    { icon: Award, text: "Nutricionista formada desde 2006." },
                    { icon: BookOpen, text: "Pós-graduada em Nutrição Oncológica pelo Hospital Erasto Gaertner (2008)." },
                    { icon: Hospital, text: "Residência multiprofissional em Nutrição Oncológica pelo Hospital Erasto Gaertner (2013)." },
                    { icon: GraduationCap, text: "Mestrado em Alimentação e Nutrição pela UFPR (2019)." },
                    { icon: BookOpen, text: "Docente da Universidade Tuiuti do Paraná (atual)." },
                    { icon: BookOpen, text: "Docente do Centro Universitário Internacional Uninter (atual)." },
                    { icon: Stethoscope, text: "Com mais de 10 anos em experiência na área hospitalar: setor de oncologia, traumatologia e cirurgia geral, com ampla experiência em atendimento a pacientes adultos e idosos hospitalizados." }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 max-w-[560px]"
                    >
                      <item.icon className="h-6 w-6 text-dourado-escuro-pasini flex-shrink-0" />
                      <span className="text-verde-escuro-pasini w-full">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Link
        href="https://wa.me/5541992645610?text=Olá Paola, vim através do site, gostaria de agendar uma consulta!"
        aria-label="Contato via WhatsApp"
        target="_blank"
        className="fixed bottom-4 right-4 bg-green-600 text-cinza-pasini p-3 rounded-full shadow-lg hover:bg-green-500 transition-colors"
      >
        <WhatsappLogo size={32} />
      </Link>
    </div>
  )
}