import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const socialLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: BsTwitter, href: "#" },
  { icon: BsInstagram, href: "#" },
  { icon: LiaLinkedin, href: "#" },
];

const productLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Faq", href: "#faq" },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
];

export { socialLinks, productLinks, legalLinks };

export type SocialLink = (typeof socialLinks)[number];
export type ProductLink = (typeof productLinks)[number];
export type LegalLink = (typeof legalLinks)[number];

export type FooterLink = SocialLink | ProductLink | LegalLink;

export type FooterLinks = FooterLink[];

export type FooterLinkGroup = {
  title: string;
  links: FooterLinks;
};

export type FooterLinkGroups = FooterLinkGroup[];
