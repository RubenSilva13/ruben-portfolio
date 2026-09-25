import { Github, Linkedin, Mail, FileDown, ArrowRight, Smartphone, Brain, Network, Globe } from "lucide-react";
import Image from "next/image";
import ProjetosCarrossel from "@/components/projetos-carrossel";
import Competencias from "@/components/competencias";

export default function Home() {
  return (
    <div className="container py-16 space-y-24">
      {/* ===== HERO ===== */}
      <section id="inicio" className="scroll-mt-24 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Software Engineer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-primary">Ruben Silva</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Computer Engineering graduate with a strong interest in software
            development, mobile applications and data analysis.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a
              href="https://github.com/RubenSilva13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/ruben-silva-048b953aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:rubenmbs123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden bg-secondary">
            <Image
              src="/foto.jpeg"
              alt="Ruben Silva"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="sobre" className="scroll-mt-24 space-y-4">
        <h2 className="text-3xl font-bold">About me</h2>

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          I hold a degree in Computer Engineering from the Polytechnic Institute
          of Bragança (Portugal). Throughout my studies I built a solid
          foundation in programming, networks and operating systems, and machine
          learning. My final-year project focused on characterising the LiDAR
          sensor on iOS devices, work that led to two scientific papers submitted
          to international conferences. I also gained international experience
          through an Erasmus programme in Croatia and a BIP programme in
          Lithuania. I&apos;m now looking for a first opportunity where I can
          apply and grow these skills.
        </p>
      </section>

      {/* ===== WHAT I DO ===== */}
      <section id="areas" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold">What I do</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {areas.map((area, i) => {
            const Icone = area.icone;
            return (
              <div key={area.titulo} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <div className="rounded-full border p-3">
                    <Icone className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{area.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.descricao}
                </p>
                <div className="border-t pt-2" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== PROJECTS (CAROUSEL) ===== */}
      <section id="projetos" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <ProjetosCarrossel />
      </section>

      {/* ===== SKILLS ===== */}
      <section id="competencias" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold">Skills</h2>
        <Competencias />
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contacto" className="scroll-mt-24 space-y-4">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="text-muted-foreground max-w-2xl">
          Interested in working together or have a question? Send me a message.
        </p>

        <a
          href="mailto:rubenmbs123@gmail.com"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send email
        </a>
      </section>
    </div>
  );
}

/* ===== DATA ===== */

const areas = [
  {
    icone: Smartphone,
    titulo: "Mobile & AR Development",
    descricao:
      "iOS applications with Swift, SwiftUI and ARKit. This is the area where I developed my final-year project, a LiDAR data capture and processing app.",
  },
  {
    icone: Brain,
    titulo: "Machine Learning & Data Analysis",
    descricao:
      "Machine learning and data analysis in Python (NumPy, SciPy, Matplotlib), including modelling and experimental characterisation of results.",
  },
  {
    icone: Network,
    titulo: "Networks & Systems",
    descricao:
      "Fundamentals of networking, operating systems and system administration, with experience in virtualisation and self-hosting (Proxmox, VMware) and containers (Docker).",
  },
  {
    icone: Globe,
    titulo: "Web Development",
    descricao:
      "REST APIs with FastAPI and interfaces in React, with authentication, data management and communication between frontend and backend.",
  },
];
