"use client";

import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Our Story", href: "/story" },
  { name: "Guestbook", href: "/guestbook" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scroll state
      setIsScrolled(currentScrollY > 50);

      // Update visibility
      if (isHome) {
        setIsVisible(currentScrollY > 50);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    setIsVisible(!isHome);
    setIsScrolled(window.scrollY > 50);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-b from-[#FDF8F4] to-transparent backdrop-blur-sm"
          : isHome
          ? "bg-transparent"
          : "bg-gradient-to-b from-[#FDF8F4] to-transparent backdrop-blur-sm",
        !isVisible && "pointer-events-none -translate-y-full opacity-0"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "bg-gradient-to-r bg-clip-text font-script text-2xl text-transparent transition-all",
              isScrolled || !isHome
                ? "from-[#8B4513] via-[#A0522D] to-[#CD853F] hover:scale-105"
                : "from-[#FDF8F4] via-[#F5E6D3] to-white hover:from-[#8B4513] hover:via-[#A0522D] hover:to-[#CD853F]"
            )}
          >
            MR. & MRS. NICHOLS
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex space-x-1">
              {navigation.map((item) => (
                <NavigationMenu.Item key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      pathname === item.href
                        ? isScrolled || !isHome
                          ? "text-[#8B4513] before:absolute before:inset-x-2 before:bottom-1 before:h-0.5 before:bg-gradient-to-r before:from-[#8B4513] before:via-[#A0522D] before:to-[#CD853F] before:opacity-70"
                          : "text-white before:absolute before:inset-x-2 before:bottom-1 before:h-0.5 before:bg-gradient-to-r before:from-[#FDF8F4] before:via-[#F5E6D3] before:to-white before:opacity-70"
                        : isScrolled || !isHome
                        ? "text-[#8B4513]/70 hover:bg-[#8B4513]/10 hover:text-[#8B4513]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Navigation Button */}
          <button
            className={cn(
              "relative rounded-lg p-2 shadow-lg transition-all hover:shadow-xl md:hidden",
              isScrolled || !isHome
                ? "bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] text-white shadow-[#8B4513]/20"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "absolute left-0 right-0 top-16 origin-top bg-gradient-to-br from-[#FDF1E7] to-white p-4 shadow-xl transition-all duration-200 md:hidden",
            isOpen
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          )}
        >
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] text-white shadow-md"
                    : "text-[#8B4513] hover:bg-[#8B4513]/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
