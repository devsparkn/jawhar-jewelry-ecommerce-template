"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/content/jawhar";
import { BrandMark } from "./brand-mark";
import { BagIcon, HeartIcon, SearchIcon, UserIcon } from "./icons";
import { useStorefront } from "./storefront-provider";

type SiteHeaderProps = {
  dark?: boolean;
};

export function SiteHeader({ dark = false }: SiteHeaderProps) {
  const { cartCount, wishlistCount, user, openDrawer } = useStorefront();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const wrapperClasses =
    dark && !scrolled
      ? "border-white/15 bg-black/30 text-white backdrop-blur-xl"
      : scrolled
        ? "border-[color:var(--line)] bg-[rgba(255,250,243,0.92)] text-[color:var(--foreground)] backdrop-blur-xl shadow-[0_4px_32px_rgba(34,27,19,0.08)]"
        : "border-[color:var(--line)] bg-[rgba(255,250,243,0.84)] text-[color:var(--foreground)] backdrop-blur-xl";

  const linkClasses =
    dark && !scrolled
      ? "text-white/78 hover:text-[color:var(--gold)]"
      : "text-[color:var(--text-muted)] hover:text-[color:var(--gold)]";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`luxury-shell mt-4 rounded-full border px-6 md:px-8 transition-all duration-300 ${wrapperClasses}`}
        >
          <div className="flex h-18 items-center justify-between md:h-20">
            <BrandMark
              dark={dark && !scrolled}
              onClick={() => setMobileNavOpen(false)}
            />

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={
                    item.label === "Collections"
                      ? "/collections"
                      : `/${item.href}`
                  }
                  className={`text-xs tracking-[0.24em] uppercase transition ${linkClasses}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-5">
              <form
                action="/collections"
                method="get"
                className="hidden lg:flex"
                role="search"
              >
                <div className="relative">
                  <SearchIcon className="pointer-events-none absolute left-4 top-1/2 text-black -translate-y-1/2" />
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="luxury-input w-36 rounded-full border-current/10 bg-white/10 py-1 pl-11 pr-5 text-sm outline-none placeholder:text-current/45"
                    aria-label="Search"
                  />
                </div>
              </form>

              <Link
                href="/collections"
                className={`transition lg:hidden ${linkClasses}`}
                aria-label="Search collections"
              >
                <SearchIcon />
              </Link>

              <button
                type="button"
                onClick={() => openDrawer("account", user ? "login" : "login")}
                className={`hidden transition lg:block ${linkClasses}`}
                aria-label={user ? "Open account" : "Login or sign up"}
              >
                <span className="relative block">
                  <UserIcon />
                  {user ? (
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-(--gold)" />
                  ) : null}
                </span>
              </button>

              <button
                type="button"
                onClick={() => openDrawer("wishlist")}
                className={`hidden transition lg:block ${linkClasses}`}
                aria-label={`Wishlist${wishlistCount > 0 ? ` (${wishlistCount} items)` : ""}`}
              >
                <span className="relative block">
                  <HeartIcon />
                  {wishlistCount > 0 ? (
                    <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--gold) px-1 text-[10px] text-black">
                      {wishlistCount}
                    </span>
                  ) : null}
                </span>
              </button>

              <button
                type="button"
                onClick={() => openDrawer("cart")}
                className={`transition ${linkClasses}`}
                aria-label={`Shopping bag${cartCount > 0 ? ` (${cartCount} items)` : ""}`}
              >
                <span className="relative block">
                  <BagIcon />
                  {cartCount > 0 ? (
                    <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--gold) px-1 text-[10px] text-black">
                      {cartCount}
                    </span>
                  ) : null}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className={`flex flex-col items-center justify-center gap-1.25 p-2 lg:hidden ${linkClasses}`}
                aria-label="Open navigation menu"
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-nav"
              >
                <span className="block h-px w-5 bg-current transition-all duration-300" />
                <span className="block h-px w-4 bg-current transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-90 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNavOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileNavOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-100 flex h-full w-full max-w-sm flex-col bg-(--surface-dark) text-white lg:hidden transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">
          <BrandMark dark compact onClick={() => setMobileNavOpen(false)} />
          <button
            type="button"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col justify-center px-7"
          aria-label="Mobile primary"
        >
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                style={{
                  transitionDelay: mobileNavOpen
                    ? `${index * 60 + 80}ms`
                    : "0ms",
                }}
                className={`transition-all duration-500 ${
                  mobileNavOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <Link
                  href={
                    item.label === "Collections"
                      ? "/collections"
                      : `/${item.href}`
                  }
                  onClick={() => setMobileNavOpen(false)}
                  className="luxury-title block py-5 text-4xl text-white/85 transition hover:text-(--gold-pale)"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {[
              { label: "Lookbook", href: "/lookbook" },
              { label: "Appointments", href: "/appointments" },
              { label: "Account", href: "/account" },
            ].map((item, index) => (
              <li
                key={item.label}
                style={{
                  transitionDelay: mobileNavOpen
                    ? `${(navItems.length + index) * 60 + 80}ms`
                    : "0ms",
                }}
                className={`transition-all duration-500 ${
                  mobileNavOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="luxury-title block py-5 text-4xl text-white/85 transition hover:text-(--gold-pale)"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          style={{ transitionDelay: mobileNavOpen ? "400ms" : "0ms" }}
          className={`border-t border-white/10 px-7 py-6 transition-all duration-500 ${
            mobileNavOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex gap-5">
            <button
              type="button"
              onClick={() => {
                setMobileNavOpen(false);
                openDrawer("cart");
              }}
              className="flex items-center gap-2 text-xs tracking-[0.22em] text-white/60 uppercase transition hover:text-white"
              aria-label={`Shopping bag (${cartCount} items)`}
            >
              <BagIcon />
              Bag {cartCount > 0 ? `(${cartCount})` : ""}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileNavOpen(false);
                openDrawer("wishlist");
              }}
              className="flex items-center gap-2 text-xs tracking-[0.22em] text-white/60 uppercase transition hover:text-white"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <HeartIcon />
              Wishlist {wishlistCount > 0 ? `(${wishlistCount})` : ""}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileNavOpen(false);
                openDrawer("account", "login");
              }}
              className="flex items-center gap-2 text-xs tracking-[0.22em] text-white/60 uppercase transition hover:text-white"
              aria-label={user ? "Account" : "Sign in"}
            >
              <UserIcon />
              {user ? user.firstName : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
