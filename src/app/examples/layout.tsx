import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="bg-uniworld-blue text-white py-4">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-libel-bold">
              <Link href="/" className="hover:text-uniworld-gold transition-colors">
                Uniworld Components
              </Link>
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/examples" className="hover:text-uniworld-gold transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/examples/layout-components" className="hover:text-uniworld-gold transition-colors">
                    Layout Components
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      <main>{children}</main>

      <footer className="bg-uniworld-blue text-white py-8">
        <Container>
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Uniworld Components. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
