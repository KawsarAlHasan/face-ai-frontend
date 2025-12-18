"use client";
import {
  legalLinks,
  productLinks,
  socialLinks,
} from "@/constants/footer/footerLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white pt-16 pb-4">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-16">
          {/* Brand Section */}
          <div className="max-w-[450px]">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo.png"
                width={400}
                height={100}
                alt="logo"
                className="h-fit w-[140px]"
              />
            </div>
            <p className="text-[#99A1AF] text-sm leading-relaxed text-justify mb-6">
              Transform your appearance naturally with our cutting-edge AI
              technology. Precise analysis and personalized routines to achieve
              your goals.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors bg-[#1E2939] p-2 rounded-md"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="pt-4">
          <p className="text-gray-500 text-sm">
            © 2025 FaceAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
