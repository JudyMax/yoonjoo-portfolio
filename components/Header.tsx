'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bx--header">
      <div className="bx--header__inner">
        <Link href="/" className="bx--header__name">
          [YJ Portfolio]
        </Link>

        {/* Desktop nav */}
        <nav
          className="bx--header__nav"
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`bx--header__menu-item${pathname === link.href ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/김윤주_경력기술서(2026).pdf"
            download
            className="bx--header__menu-item bx--header__menu-item--cta"
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="bx--header__menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none' }}
        >
          <div className="bx--header__menu-toggle__icon">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            background: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bx--header__menu-item"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/김윤주_경력기술서(2026).pdf"
            download
            className="bx--header__menu-item bx--header__menu-item--cta"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
