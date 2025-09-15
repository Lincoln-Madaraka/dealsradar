import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
    className?: string;
}

const sections = [
    {
        title: "Navigation",
        links: [
            { text: "Trending Offers", href: "/" },
            { text: "How It Works", href: "#how-it-works" },
            { text: "Why Join", href: "#why-join" },
            { text: "About Us", href: "/about" },
            { text: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Account",
        links: [
            { text: "Login", href: "/login" },
            { text: "Sign Up", href: "/signup" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "Privacy & Policy", href: "#" },
            { text: "Terms of Service", href: "#" },
            { text: "Support", href: "/contact" },
        ],
    },
];

const FooterLink = ({ text, href }: { text: string; href: string }) => (
    <li>
        <Link
            href={href}
            className="text-slate-300 hover:text-white transition duration-200 text-sm"
        >
            {text}
        </Link>
    </li>
);

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white ${className}`}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Image
                                    src="/logo.png"
                                    alt="Deals Radar Logo"
                                    width={64}
                                    height={64}
                                    className="rounded-full ring-2 ring-orange-500/20"
                                />
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20 blur-sm"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">Deals Radar</h2>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Shop Smart, Save Hard
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Description */}
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Discover the best deals and offers from top retailers. Never miss a bargain again.
                        </p>
                    </div>

                    {/* Footer Sections */}
                    {sections.map((section, idx) => (
                        <div key={idx} className="px-4">
                            <h3 className="font-semibold text-lg text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <FooterLink key={i} text={link.text} href={link.href} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-400">
                            &copy; {currentYear} Deals Radar. All rights reserved.
                        </p>
                        <p className="text-xs text-slate-400">
                            Deals Radar copyrighted by{" "}
                            <Link
                                href="https://hello-lincoln-prime.vercel.app/projects"
                                className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200"
                            >
                             Lincoln Madaraka
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;