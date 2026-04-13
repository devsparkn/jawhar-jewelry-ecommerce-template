"use client";

import { useState } from "react";

type QuantitySelectorProps = {
  initialQuantity?: number;
  value?: number;
  onChange?: (quantity: number) => void;
};

export function QuantitySelector({
  initialQuantity = 1,
  value,
  onChange,
}: QuantitySelectorProps) {
  const [internalQuantity, setInternalQuantity] = useState(initialQuantity);
  const quantity = value ?? internalQuantity;

  function updateQuantity(nextQuantity: number) {
    if (value === undefined) {
      setInternalQuantity(nextQuantity);
    }

    onChange?.(nextQuantity);
  }

  function decreaseQuantity() {
    updateQuantity(Math.max(1, quantity - 1));
  }

  function increaseQuantity() {
    updateQuantity(quantity + 1);
  }

  return (
    <div className="mt-10">
      <label className="block text-sm tracking-[0.18em] uppercase">
        Quantity
      </label>
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-(--line) text-xl transition hover:border-foreground disabled:cursor-not-allowed disabled:opacity-40"
        >
          -
        </button>
        <span
          className="w-10 text-center text-lg"
          aria-live="polite"
          aria-atomic="true"
        >
          {quantity}
        </span>
        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-(--line) text-xl transition hover:border-foreground"
        >
          +
        </button>
      </div>
    </div>
  );
}
