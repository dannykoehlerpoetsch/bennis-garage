'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '#', label: 'Leistungen' },
  { href: '#', label: 'Kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-bg text-white">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Zur Startseite">
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
                  <Link href={link.href} className="hover:text-gray-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 px-3 hover:bg-green-400 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
