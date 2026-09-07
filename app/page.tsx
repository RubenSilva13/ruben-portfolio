import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="container py-16 space-y-24">
      {/* ===== CABEÇALHO / HERO ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Engenheiro Informático
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Olá, sou o <span className="text-primary">Ruben Silva</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Recém-licenciado em Engenharia Informática, com interesse em
            desenvolvimento de software e na criação de soluções para
            problemas reais.
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
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:teuemail@gmail.com"
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
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Sobre mim</h2>

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Sou licenciado em Engenharia Informática pelo Instituto Politécnico
          de Bragança. Ao longo da minha formação desenvolvi projetos em
          diferentes áreas do desenvolvimento de software, trabalhando com
          tecnologias como Java, Spring Boot, Python, React, SQL e C/C++.
          Tenho especial interesse em desenvolvimento de software e gosto de
          transformar problemas técnicos em soluções funcionais.
        </p>
      </section>

      {/* ===== PROJETOS ===== */}
      <section className="space-y-8">
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
      <section className="space-y-6">
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
      <section id="contacto" className="space-y-4">
        <h2 className="text-3xl font-bold">Contacto</h2>

        <p className="text-muted-foreground max-w-2xl">
          Estás interessado em trabalhar comigo ou tens alguma pergunta?
          Envia-me uma mensagem.
        </p>

        <a
          href="mailto:teuemail@gmail.com"
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

const projetos = [
  {
    titulo: "Aplicação iOS com LiDAR",
    descricao:
      "Aplicação iOS desenvolvida no projeto final de curso para aquisição e processamento de dados LiDAR, reconstrução espacial e digitalização de objetos.",
    tecnologias: ["Swift", "ARKit", "RealityKit", "SwiftUI"],
    link: "https://github.com/RubenSilva13",
  },
  {
    titulo: "Sistema de Desenvolvimento Web",
    descricao:
      "Aplicação web desenvolvida com uma arquitetura baseada em frontend e backend, incluindo gestão de dados e comunicação através de APIs REST.",
    tecnologias: ["Java", "Spring Boot", "MySQL", "REST"],
    link: "https://github.com/RubenSilva13",
  },
  {
    titulo: "Análise de Dados",
    descricao:
      "Projeto de análise e processamento de dados utilizando técnicas de machine learning e ferramentas de análise em Python.",
    tecnologias: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    link: "https://github.com/RubenSilva13",
  },
];

const competencias = [
  "Java",
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Spring Boot",
  "SQL",
  "HTML & CSS",
  "Git",
  "Swift",
  "ARKit",
];

