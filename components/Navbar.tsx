"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    if (!mounted) return false;
    if (path === "/") {
      return pathname === "/" || pathname === "/index.html";
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link className="nav-logo" href="/" onClick={closeMobileMenu}>
          Tirath.
        </Link>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={isMobileMenuOpen ? "uil uil-times" : "uil uil-bars"}></i>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? "mobile-active" : ""}`}>
          <li>
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className={`nav-link ${isActive("/experience") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/research"
              className={`nav-link ${isActive("/research") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`nav-link ${isActive("/blogs") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
