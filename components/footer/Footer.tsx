"use client";

import React, { memo, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaHeartbeat,
  FaUserMd,
  FaLink,
  FaArrowUp,
} from "react-icons/fa";

import {
  HEALTH_CATEGORIES,
  MEDICAL_SPECIALTIES,
  USEFUL_LINKS,
  SOCIAL_LINKS,
} from "./footer.constants";

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // integrate API later
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      dir="rtl"
      className="relative border-t bg-background text-foreground"
    >
      <div className="container mx-auto px-4 py-12">
        {/* TOP GRID */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Newsletter – LEFT SIDE */}
          <section
            aria-labelledby="newsletter-title"
            className="lg:order-1 order-2"
          >
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 id="newsletter-title" className="mb-2 text-lg font-semibold">
                عضویت در خبرنامه
              </h3>

              <p className="mb-4 text-sm text-muted-foreground">
                جدیدترین مقالات و اخبار سلامت را دریافت کنید
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  ایمیل
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  required
                  dir="ltr"
                  placeholder="email@example.com"
                  className="w-full rounded-md border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                >
                  عضویت
                </button>
              </form>
            </div>
          </section>

          {/* Health Categories */}
          <nav aria-labelledby="health-title">
            <h4
              id="health-title"
              className="mb-4 flex items-center gap-2 font-semibold"
            >
              <FaHeartbeat className="text-primary" />
              دسته‌بندی سلامت
            </h4>

            <ul className="space-y-2">
              {HEALTH_CATEGORIES.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <FaChevronLeft className="mr-auto opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Medical Specialties */}
          <nav aria-labelledby="specialty-title">
            <h4
              id="specialty-title"
              className="mb-4 flex items-center gap-2 font-semibold"
            >
              <FaUserMd className="text-primary" />
              تخصص‌های پزشکی
            </h4>

            <ul className="grid grid-cols-2 gap-3">
              {MEDICAL_SPECIALTIES.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex flex-col items-center rounded-lg border bg-card p-3 text-xs hover:bg-accent transition"
                  >
                    {item.icon}
                    <span className="mt-1">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Useful Links */}
          <nav aria-labelledby="useful-title">
            <h4
              id="useful-title"
              className="mb-4 flex items-center gap-2 font-semibold"
            >
              <FaLink className="text-primary" />
              لینک‌های مفید
            </h4>

            <ul className="space-y-2">
              {USEFUL_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <FaChevronLeft className="mr-auto opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="سلامت آنلاین"
              width={48}
              height={48}
              priority
            />
            <span className="font-semibold">سلامت آنلاین</span>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-accent transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} سلامت آنلاین. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>

      {/* GO TO TOP BUTTON */}
      <button
        type="button"
        aria-label="بازگشت به بالا"
        onClick={handleScrollTop}
        className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border bg-background shadow hover:bg-accent transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default memo(Footer);
