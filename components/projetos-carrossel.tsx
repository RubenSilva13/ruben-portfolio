"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projetos = [
  {
    titulo: "Captura LiDAR em iOS",
    subtitulo: "Projeto Final de Licenciatura",
    descricao:
      "Aplicação iOS para captura de dados tridimensionais com o sensor LiDAR do iPhone, acompanhada de um pipeline de análise em Python que caracteriza a precisão do sensor em função da distância. O trabalho deu origem a dois artigos científicos submetidos a conferências internacionais.",
    tecnologias: ["Swift", "SwiftUI", "ARKit", "Python", "NumPy", "SciPy"],
    imagem: "/projetolidar.PNG",
    github: "https://github.com/RubenSilva13/LiDAR-capture-ios",
    demo: "",
  },
  {
    titulo: "FastAPI Auth — Frontend",
    subtitulo: "Aplicação Web",
    descricao:
      "Interface web em React para uma aplicação de autenticação e gestão de tarefas. Inclui registo e login de utilizadores, com autenticação por tokens JWT e comunicação com uma API REST.",
    tecnologias: ["React", "Tailwind CSS", "JavaScript", "JWT"],
    imagem: "/projeto.frontend.png",
    github: "https://github.com/RubenSilva13/FastApi-Auth-React",
    demo: "",
  },
  {
    titulo: "FastAPI Auth — Backend",
    subtitulo: "API REST",
    descricao:
      "API REST construída com FastAPI e MySQL, com autenticação JWT e gestão de tarefas. Fornece os endpoints consumidos pela aplicação frontend, com documentação automática gerada pelo FastAPI.",
    tecnologias: ["FastAPI", "Python", "MySQL", "JWT"],
    imagem: "/projetobackend.png",
    github: "https://github.com/RubenSilva13/FastApi-Auth-Rest",
    demo: "",
  },
];

export default function ProjetosCarrossel() {
  const [atual, setAtual] = useState(0);

  const projeto = projetos[atual];

  const anterior = () => {
    setAtual((i) => (i === 0 ? projetos.length - 1 : i - 1));
  };

  const seguinte = () => {
    setAtual((i) => (i === projetos.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      {/* Lado esquerdo: texto */}
      <div className="space-y-6 order-2 md:order-1">
        <span className="block text-6xl md:text-7xl font-bold text-muted-foreground/40">
          0{atual + 1}
        </span>

        <div>
          <h3 className="text-3xl font-bold">{projeto.titulo}</h3>
          <p className="text-xl text-primary">{projeto.subtitulo}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {projeto.descricao}
        </p>

        <div className="flex flex-wrap gap-2">
          {projeto.tecnologias.map((tec) => (
            <span key={tec} className="text-sm text-primary">
              {tec}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a
            href={projeto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border p-3 hover:bg-secondary transition-colors"
            aria-label="Ver no GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          {projeto.demo && (
            <a
              href={projeto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 hover:bg-secondary transition-colors"
              aria-label="Ver demonstração"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Lado direito: imagem + setas */}
      <div className="space-y-4 order-1 md:order-2">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden border bg-secondary p-4">
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={anterior}
            className="rounded-full bg-primary p-3 text-primary-foreground hover:opacity-90 transition-opacity"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={seguinte}
            className="rounded-full bg-primary p-3 text-primary-foreground hover:opacity-90 transition-opacity"
            aria-label="Projeto seguinte"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
