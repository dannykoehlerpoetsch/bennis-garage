'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '#services', label: 'Leistungen' },
  { href: '#anfahrt', label: 'Anfahrt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <header className="header-bg text-white sticky top-0 z-50">
      <div className="relative px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            aria-label="Zur Startseite"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const el = document.querySelector('#home');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
          >
            <Image
              src="/Headerlogo.png"
              alt="Bennis Garage Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <button
            type="button"
            className="md:hidden p-2 -mr-2 hover:bg-green-400 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menu schließen' : 'Menu öffnen'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 header-bg z-50 px-4 py-4 rounded-b-lg shadow-lg">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="block py-2 px-3 hover:bg-green-400 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 px-3 hover:bg-green-400 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
