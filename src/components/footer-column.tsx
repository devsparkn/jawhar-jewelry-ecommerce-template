import Link from "next/link";

type FooterColumnProps = {
  title: string;
  items: readonly string[];
};

const footerHrefByLabel: Record<string, string> = {
  About: "/about",
  Atelier: "/about",
  Heritage: "/about",
  Appointments: "/appointments",
  Bespoke: "/bespoke",
  FAQ: "/faq",
  Gifts: "/gifts",
  Journal: "/journal",
  Lookbook: "/lookbook",
  Contact: "/contact",
  Shipping: "/checkout",
  "Care Guide": "/care-guide",
  Sustainability: "/sustainability",
  Warranty: "/care-guide",
};

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-sm tracking-[0.22em] uppercase text-white/95">
        {title}
      </h4>
      <ul className="mt-6 space-y-3 text-sm text-white/60">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={footerHrefByLabel[item] ?? "/"}
              className="transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
