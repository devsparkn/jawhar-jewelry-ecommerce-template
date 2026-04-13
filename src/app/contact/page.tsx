import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jawhar for client care, private appointments, and concierge support.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="luxury-eyebrow text-xs font-medium">Contact</p>
              <h1 className="luxury-title mt-5 text-5xl md:text-6xl">
                Speak with Jawhar.
              </h1>
              <p className="luxury-copy mt-6 max-w-xl text-base md:text-lg">
                Our client care team can assist with appointments, delivery,
                sizing, custom requests, and special gifting.
              </p>
              <div className="mt-10 space-y-5 text-sm leading-7 text-[color:var(--text-muted)]">
                <p>Atelier: 18 Place Vendome, Paris 75001</p>
                <p>Telephone: +33 1 84 00 18 92</p>
                <p>Email: concierge@jawhar.fr</p>
                <p>Hours: Monday to Saturday, 10:00 to 18:30</p>
              </div>
            </div>

            <form className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
                    First Name
                  </span>
                  <input className="luxury-input w-full rounded-[1.25rem] px-4 py-3 outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
                    Last Name
                  </span>
                  <input className="luxury-input w-full rounded-[1.25rem] px-4 py-3 outline-none" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
                  Email
                </span>
                <input
                  type="email"
                  className="luxury-input w-full rounded-[1.25rem] px-4 py-3 outline-none"
                />
              </label>
              <label className="mt-4 block">
                <span className="mb-2 block text-xs tracking-[0.18em] uppercase text-[color:var(--text-muted)]">
                  Message
                </span>
                <textarea
                  rows={6}
                  className="luxury-input w-full rounded-[1.25rem] px-4 py-3 outline-none"
                />
              </label>
              <button
                type="submit"
                className="luxury-button luxury-button-solid mt-6 rounded-full px-6 py-4 text-xs tracking-[0.2em] uppercase"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
