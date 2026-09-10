"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        {/* Nome / logo */}
        <a href="#inicio" className="text-lg font-bold">
          Ruben Silva
        </a>

        {/* Links no ecrã grande */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão do menu no telemóvel */}
        <button
          className="md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
        >
          {aberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu aberto no telemóvel */}
      {aberto && (
        <div className="md:hidden border-t bg-background">
          <div className="container flex flex-col py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
