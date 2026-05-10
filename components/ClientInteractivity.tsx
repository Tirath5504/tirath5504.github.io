"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientInteractivity() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Fade Intesection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeDom = () => {
      // Small timeout to ensure DOM paints after React commits
      setTimeout(() => {
        const fadeElements = document.querySelectorAll(
          ".fade-in:not(.visible)",
        );
        fadeElements.forEach((el) => fadeObserver.observe(el));
      }, 100);
    };

    // Initial observation
    observeDom();

    // Observe future DOM changes (important for Async Server Components)
    const mutationObserver = new MutationObserver(() => {
      observeDom();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Smooth scroll for hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const hashLinks = document.querySelectorAll("a[href^='#']");
    hashLinks.forEach((link) => {
      link.addEventListener("click", handleHashClick as EventListener);
    });

    return () => {
      mutationObserver.disconnect();
      fadeObserver.disconnect();
      hashLinks.forEach((link) => {
        link.removeEventListener("click", handleHashClick as EventListener);
      });
    };
  }, [pathname]); // Re-run when pathname changes, so new pages get observed

  return null;
}
