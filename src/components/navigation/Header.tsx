import React from "react";
import Link from "next/link";
import Container from "../layout/Container";

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  navItems?: {
    label: string;
    href: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({
  logoSrc = "/logo.png",
  logoAlt = "Uniworld",
  navItems = [],
}) => {
  return (
    <header className="bg-white shadow-sm py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className="h-10" />
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-uniworld-blue font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header; 