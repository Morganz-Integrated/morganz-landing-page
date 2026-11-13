"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/base-path";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const BROCHURES = [
  { url: "https://morganz.cloud/assets/brochure-en-urban.pdf", label: "CyberFlow- Urban brochure" },
  { url: "https://morganz.cloud/assets/brochure-en-field.pdf", label: "CyberFlow- Field brochure" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (open && t instanceof Element && !t.closest(".nav-links") && !t.closest(".nav-toggle")) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <img className="brand-mark" src={asset("/assets/morganz-logo.png")} alt="Morganz logo" width="128" height="128" />
          <span>MORGANZ</span>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="primary-nav" className={`nav-links${open ? " open" : ""}`} aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined}>
              {item.label}
            </Link>
          ))}
          <details className="nav-brochure">
            <summary>Brochures</summary>
            <div>
              {BROCHURES.map((b) => (
                <a key={b.url} href={b.url} download target="_blank" rel="noopener noreferrer">
                  {b.label}
                </a>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}