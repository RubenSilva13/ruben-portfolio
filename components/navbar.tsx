"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#sobre" },
  { label: "What I do", href: "#areas" },
  { label: "Projects", href: "#projetos" },
  { label: "Skills", href: "#competencias" },
  { label: "Contact", href: "#contacto" },
];

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        {/* Name / logo */}
        <a href="#inicio" className="text-lg font-bold">
          Ruben Silva
        </a>

        {/* Links on large screens */}
        <div className="hidden md:flex gap-6">
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

        {/* Menu button on mobile */}
        <button
          className="md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Open menu"
        >
          {aberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Open menu on mobile */}
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
