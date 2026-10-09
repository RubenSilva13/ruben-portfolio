import { Sparkles, Github } from "lucide-react";

const aprendizagem = [
  {
    titulo: "Large Language Models (LLMs)",
    descricao:
      "Building hands-on projects with LLMs using LangChain and open models via Hugging Face — from prompt templates and chains to a chatbot with memory and a RAG system that answers questions over PDFs, citing its sources.",
    tags: ["LLMs", "LangChain", "Hugging Face", "RAG", "Python"],
    github: "https://github.com/RubenSilva13/learning-llms",
  },
];

export default function Learning() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {aprendizagem.map((item) => (
        <div
          key={item.titulo}
          className="rounded-xl border p-6 space-y-4 hover:border-primary transition-colors flex flex-col"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full border p-2">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">{item.titulo}</h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {item.descricao}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-full bg-secondary px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              View on GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
