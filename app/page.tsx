import { Github, Linkedin, Mail, FileDown, ArrowRight, Smartphone, Brain, Network, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="container py-16 space-y-24">
      {/* ===== CABEÇALHO / HERO ===== */}
      <section id="inicio" className="scroll-mt-24 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Engenheiro Informático
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Olá, sou o <span className="text-primary">Ruben Silva</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Recém-licenciado em Engenharia Informática, com interesse em
            desenvolvimento de software, aplicações móveis e análise de dados.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Descarregar CV
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Contacta-me
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
          <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-secondary flex items-center justify-center text-5xl font-bold text-muted-foreground">
            RS
          </div>
        </div>
      </section>

      {/* ===== SOBRE MIM ===== */}
      <section id="sobre" className="scroll-mt-24 space-y-4">
        <h2 className="text-3xl font-bold">Sobre mim</h2>

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Sou licenciado em Engenharia Informática pelo Instituto Politécnico
          de Bragança. Ao longo do curso desenvolvi uma base sólida em
          programação, redes e sistemas operativos, e aprendizagem automática.
          O meu projeto final centrou-se na caracterização do sensor LiDAR de
          dispositivos iOS, trabalho que deu origem a dois artigos científicos
          submetidos a conferências internacionais. Tive ainda experiência
          internacional através do programa Erasmus, na Croácia, e de um
          programa BIP, na Lituânia. Procuro agora uma primeira oportunidade
          onde possa aplicar e desenvolver estas competências.
        </p>
      </section>

      {/* ===== O QUE FAÇO ===== */}
      <section id="areas" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold">O que faço</h2>

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

      {/* ===== PROJETOS ===== */}
      <section id="projetos" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold">Projetos</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <div
              key={projeto.titulo}
              className="rounded-xl border p-6 space-y-4 hover:border-primary transition-colors flex flex-col"
            >
              <h3 className="text-xl font-semibold">{projeto.titulo}</h3>

              <p className="text-muted-foreground text-sm flex-1">
                {projeto.descricao}
              </p>

              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tec) => (
                  <span
                    key={tec}
                    className="text-xs rounded-full bg-secondary px-3 py-1"
                  >
                    {tec}
                  </span>
                ))}
              </div>

              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Ver no GitHub
                <Github className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COMPETÊNCIAS ===== */}
      <section id="competencias" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold">Competências</h2>

        <div className="flex flex-wrap gap-3">
          {competencias.map((competencia) => (
            <span
              key={competencia}
              className="rounded-lg border px-4 py-2 text-sm font-medium"
            >
              {competencia}
            </span>
          ))}
        </div>
      </section>

      {/* ===== CONTACTO ===== */}
      <section id="contacto" className="scroll-mt-24 space-y-4">
        <h2 className="text-3xl font-bold">Contacto</h2>

        <p className="text-muted-foreground max-w-2xl">
          Estás interessado em trabalhar comigo ou tens alguma pergunta?
          Envia-me uma mensagem.
        </p>

        <a
          href="mailto:rubenmbs123@gmail.com"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Mail className="mr-2 h-4 w-4" />
          Enviar email
        </a>
      </section>
    </div>
  );
}

/* ===== DADOS ===== */

const areas = [
  {
    icone: Smartphone,
    titulo: "Desenvolvimento Mobile & AR",
    descricao:
      "Aplicações iOS com Swift, SwiftUI e ARKit. Foi nesta área que desenvolvi o meu projeto final, uma app de captura e processamento de dados LiDAR.",
  },
  {
    icone: Brain,
    titulo: "Machine Learning & Análise de Dados",
    descricao:
      "Aprendizagem automática e análise de dados em Python, incluindo modelação e caracterização experimental de resultados.",
  },
  {
    icone: Network,
    titulo: "Redes & Sistemas",
    descricao:
      "Fundamentos de redes, sistemas operativos e administração de sistemas, com experiência em virtualização e self-hosting (Proxmox, VMware) e containers (Docker).",
  },
  {
    icone: Globe,
    titulo: "Desenvolvimento Web",
    descricao:
      "APIs REST com FastAPI e interfaces em React, com autenticação, gestão de dados e comunicação entre frontend e backend.",
  },
];

const projetos = [
  {
    titulo: "Captura LiDAR em iOS",
    descricao:
      "Aplicação iOS para captura de dados tridimensionais com o sensor LiDAR do iPhone, acompanhada de um pipeline de análise em Python que caracteriza a precisão do sensor em função da distância.",
    tecnologias: ["Swift", "SwiftUI", "ARKit", "Python"],
    link: "https://github.com/RubenSilva13/LiDAR-capture-ios",
  },
  {
    titulo: "FastAPI Auth — Backend",
    descricao:
      "API REST com autenticação JWT e gestão de tarefas, construída com FastAPI e MySQL.",
    tecnologias: ["FastAPI", "Python", "MySQL", "JWT"],
    link: "https://github.com/RubenSilva13/FastApi-Auth-Rest",
  },
  {
    titulo: "FastAPI Auth — Frontend",
    descricao:
      "Frontend em React para uma API de autenticação e gestão de tarefas, com autenticação por JWT.",
    tecnologias: ["React", "Tailwind CSS", "JavaScript", "JWT"],
    link: "https://github.com/RubenSilva13/FastApi-Auth-React",
  },
];

const competencias = [
  "Python",
  "Swift",
  "Java",
  "SwiftUI",
  "ARKit",
  "Machine Learning",
  "C / C++",
  "C#",
  "JavaScript",
  "React",
  "FastAPI",
  "SQL",
  "Redes",
  "Linux",
  "Docker",
  "Git",
];
