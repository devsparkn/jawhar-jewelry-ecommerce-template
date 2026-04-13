"use client";

import Link from "next/link";
import { useMemo } from "react";
import { productsCatalog } from "@/content/catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useStorefront } from "@/components/storefront-provider";

export default function AccountPage() {
  const { cartItems, wishlist, user, openDrawer, logout } = useStorefront();

  const savedProducts = useMemo(
    () =>
      wishlist
        .map((slug) =>
          productsCatalog.find(
            (catalogProduct) => catalogProduct.slug === slug,
          ),
        )
        .filter((product) => product !== undefined),
    [wishlist],
  );

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-24">
          {user ? (
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
                <p className="luxury-eyebrow text-xs font-medium">
                  Private Client
                </p>
                <h1 className="luxury-title mt-4 text-4xl">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                  {user.email}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <AccountMetric
                    label="Bag Items"
                    value={`${cartItems.reduce((sum, item) => sum + item.quantity, 0)}`}
                  />
                  <AccountMetric
                    label="Wishlist"
                    value={`${wishlist.length}`}
                  />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openDrawer("cart")}
                    className="luxury-button luxury-button-solid rounded-full px-5 py-3 text-xs tracking-[0.18em] uppercase"
                  >
                    Open Bag
                  </button>
                  <button
                    type="button"
                    onClick={() => openDrawer("wishlist")}
                    className="luxury-button luxury-button-outline rounded-full px-5 py-3 text-xs tracking-[0.18em] uppercase"
                  >
                    Open Wishlist
                  </button>
                  <button
                    type="button"
                    onClick={logout}
                    className="rounded-full border border-[color:var(--line)] px-5 py-3 text-xs tracking-[0.18em] uppercase"
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-8">
                <h2 className="luxury-title text-3xl">Saved Pieces</h2>
                {savedProducts.length > 0 ? (
                  <div className="mt-6 grid gap-4">
                    {savedProducts.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 transition hover:border-[color:var(--foreground)]"
                      >
                        <p className="luxury-title text-2xl">{product.name}</p>
                        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                          {product.price}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="luxury-copy mt-6 text-base">
                    Save your favorite pieces from any product page and they
                    will appear here.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-10 text-center">
              <p className="luxury-eyebrow text-xs font-medium">
                Jawhar Account
              </p>
              <h1 className="luxury-title mt-4 text-5xl">
                Sign in for your private client space.
              </h1>
              <p className="luxury-copy mx-auto mt-6 max-w-2xl text-base">
                Create an account to save wishlist pieces, review your shopping
                bag, and continue the luxury buying journey across visits.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openDrawer("account", "login")}
                  className="luxury-button luxury-button-solid rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => openDrawer("account", "signup")}
                  className="luxury-button luxury-button-outline rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function AccountMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-5">
      <p className="text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
        {label}
      </p>
      <p className="luxury-title mt-3 text-3xl">{value}</p>
    </div>
  );
}
