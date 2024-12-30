"use client";

import { Icon } from "@/components/ui/icon";
import { ChevronDown, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/story", label: "Our Story" },
  { href: "/guestbook", label: "Guestbook" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/jmarquezmadianichols/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/jmarquezmadianichols",
    label: "Facebook",
    icon: Facebook,
  },
];

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#8B4513]/10 last:border-b-0 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 md:cursor-default md:py-0"
      >
        <h3 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-lg font-semibold text-transparent">
          {title}
        </h3>
        <Icon
          icon={ChevronDown}
          className={`transition-transform duration-200 md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`space-y-2 overflow-hidden transition-all duration-200 md:block ${
          isOpen ? "max-h-48 pb-4" : "max-h-0 md:max-h-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto w-full bg-gradient-to-t from-[#FDF1E7] to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-[0.15]" />

      <div className="container relative mx-auto px-4 py-8 md:py-12">
        {/* Logo & Social Links */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 border-b border-[#8B4513]/10 pb-6 md:mb-8 md:flex-row md:pb-8">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-2xl text-transparent transition-transform hover:scale-105"
          >
            MR. & MRS. NICHOLS
          </Link>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513] transition-all hover:text-[#CD853F] hover:scale-105"
                aria-label={`Visit our ${link.label}`}
              >
                <Icon icon={link.icon} size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation & Info - Mobile Collapsible, Desktop Grid */}
        <div className="grid gap-0 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Navigation */}
          <CollapsibleSection title="Navigation" defaultOpen={true}>
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#8B4513]/70 transition-colors hover:text-[#8B4513]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </CollapsibleSection>

          {/* Wedding Details */}
          <CollapsibleSection title="Wedding Details">
            <div className="space-y-2 text-sm text-[#8B4513]/70">
              <p>May 05, 2024</p>
              <p>STELLA SUITES EVENTS PLACE</p>
              <p>1008 Quezon Ave, Diliman</p>
              <p>Quezon City, Metro Manila</p>
            </div>
          </CollapsibleSection>

          {/* Contact */}
          <CollapsibleSection title="Contact">
            <div className="space-y-2 text-sm text-[#8B4513]/70">
              <p>Email: jmarquezmadia@gmail.com</p>
            </div>
          </CollapsibleSection>

          {/* Credits */}
          <CollapsibleSection title="Credits">
            <div className="space-y-2 text-sm text-[#8B4513]/70">
              <p>Photography by Studio</p>
              <p>Website by John Nathaniel Marquez</p>
            </div>
          </CollapsibleSection>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-[#8B4513]/10 pt-6 text-center text-sm text-[#8B4513]/60 md:mt-8 md:pt-8">
          <p>© 2024 Wedding Memories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
