// src/components/header.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Trending Offers", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Join", href: "/#why-join" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    setIsScrolled(scrollY > 50);

    if (pathname === "/") {
      ["how-it-works", "why-join"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    }

    if (window.innerWidth < 1024) return setIsVisible(true);

    if (scrollY <= heroHeight) {
      setIsVisible(true);
      clearTimeout(timeoutRef.current!);
      return;
    }

    setIsVisible(true);
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 3000);
  }, [pathname]);

  useEffect(() => {
    const handle = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeoutRef.current!);
    };
  }, [handleScroll]);

  useEffect(() => {
    const closeMenu = (e: KeyboardEvent | MouseEvent) => {
      if (
        (e instanceof KeyboardEvent && e.key === "Escape") ||
        (e instanceof MouseEvent && isMobileOpen && !(e.target as Element).closest("nav"))
      ) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("keydown", closeMenu);
      document.addEventListener("click", closeMenu);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("click", closeMenu);
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const navigationLinks = navLinks.map(({ label, href }) => {
    const [hrefPath, hash] = href.split("#");
    const isActive = pathname === hrefPath && (hash ? activeSection === hash : true);

    return (
      <Link
        key={href}
        href={href}
        onClick={() => setIsMobileOpen(false)}
        className={`relative px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all hover:text-primary hover:bg-gray-100/60 hover:scale-105 active:scale-95 ${isActive ? "text-primary bg-primary/5" : "text-gray-700"}`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        {isActive && (
          <>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary to-primary-hover rounded-full" />
            <span className="absolute inset-0 rounded-lg bg-primary/5 -z-10" />
          </>
        )}
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 hover:opacity-100 transition-opacity -z-10" />
      </Link>
    );
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? "border-b border-gray-200/50 backdrop-blur-md" : "backdrop-blur-sm"} ${isVisible ? "translate-y-0" : "-translate-y-full"} glass-effect`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="DealsRadar Logo"
            width={80}
            height={80}
            className="h-8 w-auto sm:h-10 object-contain group-hover:scale-110 transition-transform"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg lg:text-xl text-gradient truncate">DealsRadar</h1>
            <p className="text-xs lg:text-sm text-gray-500 -mt-1 truncate">Shop Smart, Save Hard</p>
          </div>
        </Link>

        <div className="hidden lg:flex gap-4">{navigationLinks}</div>

        <div className="hidden lg:flex gap-3 items-center">
          <ThemeToggle />
          <Link href="/login" className="px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100/50 transition">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 text-sm text-white rounded-full bg-primary hover:bg-primary-hover transition hover:scale-105 font-medium">
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100/50 rounded-md transition"
        >
          {isMobileOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-200/30 glass-effect ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 sm:px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <ThemeToggle />
            {navigationLinks}
          </div>
          <div className="pt-4 border-t border-gray-200/30 flex flex-col space-y-3">
            <Link href="/login" onClick={() => setIsMobileOpen(false)} className="text-center text-gray-700 hover:bg-gray-50/50 px-4 py-2 rounded-md transition">
              Login
            </Link>
            <Link href="/signup" onClick={() => setIsMobileOpen(false)} className="text-center text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-full font-medium transition">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
