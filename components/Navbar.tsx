"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

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

  return (
    <nav>
      <div className="nav-container">
        <Link className="nav-logo" href="/">
          Tirath.
        </Link>
        <ul className="nav-menu">
          <li>
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className={`nav-link ${isActive("/experience") ? "active" : ""}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/research"
              className={`nav-link ${isActive("/research") ? "active" : ""}`}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`nav-link ${isActive("/blogs") ? "active" : ""}`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
