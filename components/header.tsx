"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo1.png"
            alt="Mulindwa Charity Logo"
            width={50}
            height={50}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#8c3420] ${
                pathname === item.href ? "text-[#8c3420]" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/get-involved">
            <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">
              Donate Now
            </Button>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#8c3420]" />
                <span className="text-lg font-bold text-[#8c3420]">
                  Mulindwa Charity
                </span>
              </Link>
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container mt-4 flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-[#8c3420] ${
                    pathname === item.href ? "text-[#8c3420]" : "text-gray-600"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/get-involved" onClick={toggleMenu}>
                <Button className="mt-4 w-full bg-[#8c3420] hover:bg-[#6a2718] text-white">
                  Donate Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
