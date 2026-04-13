import Link from "next/link";
import { collectionsCatalog } from "@/content/catalog";
import { BrandMark } from "./brand-mark";
import { FooterColumn } from "./footer-column";

export function SiteFooter() {
  return (
    <footer className="bg-[#120f0c] py-20 text-white">
      <div className="luxury-shell">
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <BrandMark dark className="w-fit" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Fine jewelry shaped in Paris since 1892, composed for private
              collections, ceremonial gifting, and modern heirlooms.
            </p>
            <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email for private news"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/30 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]"
              />
              <button
                type="submit"
                className="luxury-button rounded-full bg-white px-6 py-3 text-xs tracking-[0.22em] uppercase text-black hover:bg-(--surface-strong)"
              >
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.22em] uppercase text-white/95">
              Collections
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {collectionsCatalog.map((collection) => (
                <li key={collection.slug}>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="transition hover:text-white"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FooterColumn
            title="Jawhar"
            items={["About", "Journal", "Lookbook", "Sustainability"]}
          />
          <FooterColumn
            title="Client Care"
            items={[
              "Contact",
              "Appointments",
              "Care Guide",
              "FAQ",
              "Bespoke",
              "Gifts",
            ]}
          />
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs tracking-[0.18em] text-white/40 uppercase md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Jawhar</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
