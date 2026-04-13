"use client";

import { useState } from "react";
import type { Product } from "@/content/catalog";
import { getProductExperience } from "@/content/product-experience";
import { BagIcon, HeartIcon } from "./icons";
import { QuantitySelector } from "./quantity-selector";
import { useStorefront } from "./storefront-provider";

type ProductPurchasePanelProps = {
  product: Product;
};

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);
  const experience = getProductExperience(product);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(
        experience.options.map((option) => [option.label, option.selected]),
      ),
  );
  const { addToCart, toggleWishlist, wishlist } = useStorefront();
  const isWishlisted = wishlist.includes(product.slug);
  const availabilityToneClasses =
    experience.availability.tone === "limited"
      ? "border-[color:var(--gold)] bg-[rgba(184,144,82,0.08)] text-[color:var(--foreground)]"
      : experience.availability.tone === "made-to-order"
        ? "border-[color:var(--line-strong)] bg-[color:var(--surface)] text-[color:var(--foreground)]"
        : "border-[rgba(52,86,58,0.14)] bg-[rgba(211,228,215,0.45)] text-[color:var(--foreground)]";

  return (
    <>
      <div
        className={`mt-10 rounded-3xl border p-5 ${availabilityToneClasses}`}
      >
        <p className="text-xs tracking-[0.22em] uppercase text-(--gold-deep)">
          Availability
        </p>
        <p className="luxury-title mt-3 text-2xl">{experience.availability.label}</p>
        <p className="mt-2 text-sm leading-7 text-(--text-muted)">
          {experience.availability.detail}
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {experience.options.map((option) => (
          <div key={option.label}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label className="text-xs tracking-[0.22em] uppercase text-(--text-muted)">
                {option.label}
              </label>
              <span className="text-xs text-(--text-muted)">
                {option.helperText}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const isSelected = selectedOptions[option.label] === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setSelectedOptions((currentOptions) => ({
                        ...currentOptions,
                        [option.label]: value,
                      }))
                    }
                    aria-pressed={isSelected}
                    className={`rounded-full border px-4 py-2.5 text-xs tracking-[0.18em] uppercase transition ${
                      isSelected
                        ? "border-foreground bg-foreground text-white"
                        : "border-(--line) bg-(--surface) text-(--text-muted) hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <QuantitySelector value={quantity} onChange={setQuantity} />

      <div className="mt-10 space-y-4">
        <button
          type="button"
          onClick={() => addToCart(product.slug, quantity, selectedOptions)}
          className="luxury-button luxury-button-solid flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-xs tracking-[0.26em] uppercase hover:opacity-92"
        >
          <BagIcon />
          Add to Bag
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          className={`luxury-button flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-xs tracking-[0.26em] uppercase ${
            isWishlisted
              ? "luxury-button-solid"
              : "luxury-button-outline"
          }`}
        >
          <HeartIcon />
          {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
        </button>
      </div>

      <div className="mt-6 rounded-3xl border border-(--line) bg-(--surface) p-5">
        <p className="text-xs tracking-[0.22em] uppercase text-(--text-muted)">
          Selected Configuration
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {Object.entries(selectedOptions).map(([label, value]) => (
            <div key={label} className="rounded-[1.25rem] bg-white px-4 py-3">
              <p className="text-[11px] tracking-[0.18em] uppercase text-(--text-muted)">
                {label}
              </p>
              <p className="mt-1 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
