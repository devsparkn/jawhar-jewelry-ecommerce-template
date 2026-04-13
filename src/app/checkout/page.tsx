"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { productsCatalog } from "@/content/catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useStorefront } from "@/components/storefront-provider";

function parsePrice(price: string) {
  return Number(price.replace(/[$,]/g, ""));
}

export default function CheckoutPage() {
  const { cartItems, user, clearCart, openDrawer } = useStorefront();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingName, setShippingName] = useState(
    user ? `${user.firstName} ${user.lastName}` : "",
  );
  const [shippingEmail, setShippingEmail] = useState(user?.email ?? "");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingCountry, setShippingCountry] = useState("United States");

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

          return { ...product, quantity: item.quantity };
        })
        .filter((product) => product !== null),
    [cartItems],
  );

  const subtotal = cartProducts.reduce(
    (sum, product) => sum + parsePrice(product.price) * product.quantity,
    0,
  );
  const shipping = cartProducts.length > 0 ? 0 : 0;
  const total = subtotal + shipping;

  function handlePlaceOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOrderPlaced(true);
    clearCart();
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-24">
          {cartProducts.length === 0 && !orderPlaced ? (
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-10 text-center">
              <p className="luxury-eyebrow text-xs font-medium">Checkout</p>
              <h1 className="luxury-title mt-4 text-5xl">Your bag is empty.</h1>
              <p className="luxury-copy mx-auto mt-6 max-w-2xl text-base">
                Add a few pieces from the collection before moving into
                checkout.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="/collections"
                  className="luxury-button luxury-button-solid rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase flex items-center"
                >
                  Browse Collections
                </Link>
                <button
                  type="button"
                  onClick={() => openDrawer("cart")}
                  className="rounded-full border border-[color:var(--foreground)] px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  Open Bag
                </button>
              </div>
            </div>
          ) : orderPlaced ? (
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-10 text-center">
              <p className="luxury-eyebrow text-xs font-medium">
                Order Confirmed
              </p>
              <h1 className="luxury-title mt-4 text-5xl">
                Thank you for your order.
              </h1>
              <p className="luxury-copy mx-auto mt-6 max-w-2xl text-base">
                Your Jawhar order has been placed successfully. A confirmation
                will be sent to {shippingEmail}.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="/account"
                  className="luxury-button luxury-button-solid rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  View Account
                </Link>
                <Link
                  href="/collections"
                  className="luxury-button luxury-button-outline rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <form
                onSubmit={handlePlaceOrder}
                className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8"
              >
                <p className="luxury-eyebrow text-xs font-medium">Checkout</p>
                <h1 className="luxury-title mt-4 text-5xl">
                  Shipping and payment.
                </h1>
                <p className="luxury-copy mt-5 max-w-2xl text-base">
                  Finalize delivery details for your current selection and
                  confirm the preferred method of secure payment.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    value={shippingName}
                    onChange={setShippingName}
                    className="sm:col-span-2"
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={shippingEmail}
                    onChange={setShippingEmail}
                    className="sm:col-span-2"
                  />
                  <Input
                    label="Address"
                    value={shippingAddress}
                    onChange={setShippingAddress}
                    className="sm:col-span-2"
                  />
                  <Input
                    label="City"
                    value={shippingCity}
                    onChange={setShippingCity}
                  />
                  <Input
                    label="Country"
                    value={shippingCountry}
                    onChange={setShippingCountry}
                  />
                </div>

                <div className="mt-10 rounded-[1.5rem] border border-[color:var(--line)] bg-white p-6">
                  <p className="text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
                    Payment Method
                  </p>
                  <p className="mt-3 text-base">Credit card ending in 0427</p>
                  <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                    Payments are reviewed and confirmed through our concierge
                    team before dispatch.
                  </p>
                </div>

                <button
                  type="submit"
                  className="luxury-button luxury-button-solid mt-10 w-full rounded-full px-6 py-5 text-xs tracking-[0.2em] uppercase"
                >
                  Place Order
                </button>
              </form>

              <aside className="rounded-[2rem] border border-[color:var(--line)] bg-white p-8">
                <h2 className="luxury-title text-4xl">Order Summary</h2>
                <div className="mt-8 space-y-4">
                  {cartProducts.map((product) => (
                    <div
                      key={product.slug}
                      className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="luxury-title text-2xl">
                            {product.name}
                          </p>
                          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                            Qty {product.quantity}
                          </p>
                        </div>
                        <p className="text-sm">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3 border-t border-[color:var(--line)] pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[color:var(--text-muted)]">
                      Subtotal
                    </span>
                    <span>${subtotal.toLocaleString("en-US")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[color:var(--text-muted)]">
                      Shipping
                    </span>
                    <span>
                      {shipping === 0 ? "Complimentary" : `$${shipping}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[color:var(--line)] pt-4">
                    <span className="luxury-title text-2xl">Total</span>
                    <span className="luxury-title text-2xl">
                      ${total.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Input({
  label,
  type = "text",
  value,
  onChange,
  className,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
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
