"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { productsCatalog } from "@/content/catalog";
import { getProductExperience } from "@/content/product-experience";
import { useStorefront } from "./storefront-provider";

function parsePrice(price: string) {
  return Number(price.replace(/[$,]/g, ""));
}

export function StorefrontSidebar() {
  const {
    activeDrawer,
    authView,
    cartItems,
    wishlist,
    user,
    closeDrawer,
    openDrawer,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    removeFromWishlist,
    login,
    signup,
    logout,
  } = useStorefront();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const cartProducts = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = productsCatalog.find(
            (catalogProduct) => catalogProduct.slug === item.slug,
          );

          if (!product) {
            return null;
          }

          return {
            ...product,
            id: item.id,
            quantity: item.quantity,
            selections: item.selections,
          };
        })
        .filter((product) => product !== null),
    [cartItems],
  );

  const wishlistProducts = useMemo(
    () =>
      wishlist
        .map((slug) =>
          productsCatalog.find((catalogProduct) => catalogProduct.slug === slug),
        )
        .filter((product) => product !== undefined),
    [wishlist],
  );

  const cartSubtotal = cartProducts.reduce(
    (sum, product) => sum + parsePrice(product.price) * product.quantity,
    0,
  );
  const uniquePairedProducts = cartProducts
    .flatMap((product) =>
      getProductExperience(product).pairedSlugs
        .map((slug) =>
          productsCatalog.find((catalogProduct) => catalogProduct.slug === slug),
        )
        .filter((pairedProduct) => pairedProduct !== undefined),
    )
    .filter(
      (product, index, allProducts) =>
        allProducts.findIndex((candidate) => candidate.slug === product.slug) ===
        index,
    );

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({ email: loginEmail });
    setLoginEmail("");
    setLoginPassword("");
  }

  function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signup({
      firstName: signupFirstName,
      lastName: signupLastName,
      email: signupEmail,
    });
    setSignupFirstName("");
    setSignupLastName("");
    setSignupEmail("");
    setSignupPassword("");
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-60 bg-black/35 transition ${
          activeDrawer ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
      />
      <aside
        className={`fixed right-0 top-0 z-70 flex h-full w-full max-w-xl flex-col border-l border-(--line) bg-(--surface) shadow-2xl transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeDrawer ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={activeDrawer ? "false" : "true"}
      >
        <div className="flex items-center justify-between border-b border-(--line) px-6 py-5">
          <div>
            <p className="luxury-title text-3xl">
              {activeDrawer === "cart"
                ? "Shopping Bag"
                : activeDrawer === "wishlist"
                  ? "Wishlist"
                  : "Jawhar Account"}
            </p>
            <p className="mt-1 text-xs tracking-[0.2em] uppercase text-(--text-muted)">
              {activeDrawer === "cart"
                ? "Your current selection"
                : activeDrawer === "wishlist"
                  ? "Pieces reserved for later"
                  : user
                    ? "Client profile"
                    : authView === "signup"
                      ? "Create your account"
                      : "Sign in to continue"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close panel"
            className="rounded-full border border-(--line) px-4 py-2 text-sm transition hover:border-foreground"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {activeDrawer === "cart" ? (
            cartProducts.length > 0 ? (
              <div className="space-y-5">
                {cartProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-3xl border border-(--line) bg-white p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[1.25rem] bg-(--surface)">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="luxury-title text-2xl">{product.name}</p>
                        <p className="mt-1 text-sm text-(--text-muted)">
                          {product.price}
                        </p>
                        {product.selections ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {Object.entries(product.selections).map(([label, value]) => (
                              <span
                                key={`${product.id}-${label}`}
                                className="rounded-full bg-(--surface) px-3 py-1 text-[10px] tracking-[0.16em] uppercase text-(--text-muted)"
                              >
                                {label}: {value}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-xs tracking-[0.18em] uppercase text-(--text-muted) transition hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(product.id, product.quantity - 1)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-(--line)"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{product.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(product.id, product.quantity + 1)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-(--line)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyPanel
                title="Your bag is empty"
                description="Build a private selection of rings, pendants, and heirloom pieces for appointment or delivery."
                actionHref="/collections"
                actionLabel="Browse Collections"
                onAction={closeDrawer}
              />
            )
          ) : null}

          {activeDrawer === "wishlist" ? (
            wishlistProducts.length > 0 ? (
              <div className="space-y-5">
                {wishlistProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="rounded-3xl border border-(--line) bg-white p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="luxury-title text-2xl">{product.name}</p>
                        <p className="mt-1 text-sm text-(--text-muted)">
                          {product.price}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.slug)}
                        className="text-xs tracking-[0.18em] uppercase text-(--text-muted) transition hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={closeDrawer}
                      className="luxury-button luxury-button-outline mt-5 inline-flex rounded-full px-5 py-2 text-xs tracking-[0.18em] uppercase"
                    >
                      View Piece
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyPanel
                title="Nothing saved yet"
                description="Use the heart button on any product page to build your private wishlist."
                actionHref="/collections"
                actionLabel="Explore Pieces"
                onAction={closeDrawer}
              />
            )
          ) : null}

          {activeDrawer === "account" ? (
            user ? (
              <div className="space-y-6">
                <div className="rounded-[1.75rem] border border-(--line) bg-white p-6">
                  <p className="luxury-title text-3xl">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="mt-2 text-sm text-(--text-muted)">
                    {user.email}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <MetricCard label="Saved Pieces" value={`${wishlist.length}`} />
                  <MetricCard
                    label="Bag Items"
                    value={`${cartItems.reduce(
                      (count, item) => count + item.quantity,
                      0,
                    )}`}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/account"
                    onClick={closeDrawer}
                    className="luxury-button luxury-button-solid rounded-full flex items-center px-5 py-3 text-xs tracking-[0.18em] uppercase"
                  >
                    View Account
                  </Link>
                  <button
                    type="button"
                    onClick={logout}
                    className="rounded-full border border-foreground px-5 py-3 text-xs tracking-[0.18em] uppercase"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => openDrawer("account", "login")}
                    className={`rounded-full px-4 py-2 text-xs tracking-[0.18em] uppercase ${
                      authView === "login"
                        ? "luxury-button-solid"
                        : "border border-(--line)"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => openDrawer("account", "signup")}
                    className={`rounded-full px-4 py-2 text-xs tracking-[0.18em] uppercase ${
                      authView === "signup"
                        ? "luxury-button-solid"
                        : "border border-(--line)"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {authView === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <Input
                      label="Email"
                      type="email"
                      value={loginEmail}
                      onChange={setLoginEmail}
                    />
                    <Input
                      label="Password"
                      type="password"
                      value={loginPassword}
                      onChange={setLoginPassword}
                    />
                    <div className="text-right">
                      <Link
                        href="#"
                        className="text-xs tracking-[0.14em] uppercase text-(--text-muted) transition hover:text-foreground"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="luxury-button luxury-button-solid w-full rounded-full px-5 py-4 text-xs tracking-[0.2em] uppercase"
                    >
                      Sign In
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSignup} className="space-y-4">
                    <Input
                      label="First Name"
                      value={signupFirstName}
                      onChange={setSignupFirstName}
                    />
                    <Input
                      label="Last Name"
                      value={signupLastName}
                      onChange={setSignupLastName}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={signupEmail}
                      onChange={setSignupEmail}
                    />
                    <Input
                      label="Password"
                      type="password"
                      value={signupPassword}
                      onChange={setSignupPassword}
                    />
                    <button
                      type="submit"
                      className="luxury-button luxury-button-solid w-full rounded-full px-5 py-4 text-xs tracking-[0.2em] uppercase"
                    >
                      Create Account
                    </button>
                  </form>
                )}
              </div>
            )
          ) : null}
        </div>

        {activeDrawer === "cart" && cartProducts.length > 0 ? (
          <div className="border-t border-(--line) px-6 py-5">
            {uniquePairedProducts.length > 0 ? (
              <div className="mb-5">
                <p className="text-xs tracking-[0.2em] uppercase text-(--text-muted)">
                  Frequently Paired With
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {uniquePairedProducts.slice(0, 3).map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={closeDrawer}
                      className="rounded-full border border-(--line) bg-white px-3 py-2 text-[10px] tracking-[0.18em] uppercase transition hover:border-foreground hover:text-foreground"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-(--text-muted)">Subtotal</p>
              <p className="luxury-title text-2xl">
                $
                {cartSubtotal.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="luxury-button luxury-button-solid block w-full rounded-full px-5 py-4 text-center text-xs tracking-[0.2em] uppercase"
            >
              Proceed to Checkout
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full rounded-full border border-(--line) px-5 py-4 text-xs tracking-[0.2em] uppercase text-(--text-muted)"
            >
              Clear Bag
            </button>
          </div>
        ) : null}
      </aside>
    </>
  );
}

function EmptyPanel({
  title,
  description,
  actionHref,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="rounded-4xl border border-(--line) bg-white p-8 text-center">
      <h3 className="luxury-title text-3xl">{title}</h3>
      <p className="luxury-copy mt-4 text-base">{description}</p>
      <Link
        href={actionHref}
        onClick={onAction}
        className="luxury-button luxury-button-solid mt-6 inline-flex rounded-full px-5 py-3 text-xs tracking-[0.18em] uppercase"
      >
        {actionLabel}
      </Link>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-(--line) bg-white p-5">
      <p className="text-xs tracking-[0.18em] uppercase text-(--text-muted)">
        {label}
      </p>
      <p className="luxury-title mt-3 text-3xl">{value}</p>
    </div>
  );
}

function Input({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-(--text-muted)">
        {label}
      </span>
      <input
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="luxury-input w-full rounded-[1.25rem] px-4 py-3 outline-none"
      />
    </label>
  );
}
