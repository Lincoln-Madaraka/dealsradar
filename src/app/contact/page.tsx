import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/contact-form";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-6 title-gradient">Contact Us</h1>

      <div className="space-y-4 text-lg text-gray-800">
        <div className="flex items-center justify-center gap-3">
          <Mail className="text-primary" />
          <a
            href="mailto:support@dealsradar.com"
            className="hover:text-primary transition text-gray-100"
          >
            support@dealsradar.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Phone className="text-primary" />
          <span className="text-gray-100">+254 712 345 678</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <MapPin className="text-primary" />
          <span className="text-gray-100">Nairobi, Kenya</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Clock className="text-primary" />
          <span className="text-gray-100">Mon – Fri, 9am – 5pm EAT</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
        <div className="flex gap-5 justify-center">
          <a
            href="https://wa.me/254712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <MessageCircle />
          </a>

          <a
            href="https://facebook.com/dealsradar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Facebook />
          </a>

          <a
            href="https://instagram.com/dealsradar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Instagram />
          </a>

          <a
            href="https://twitter.com/dealsradar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="X (formerly Twitter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M715 539L1147 0H1046L660 471L342 0H0L456 683L0 1227H101L512 727L858 1227H1200L715 539ZM562 655L524 602L162 101H291L546 474L584 527L954 1070H825L562 655Z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/company/dealsradar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Or send us a message</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
