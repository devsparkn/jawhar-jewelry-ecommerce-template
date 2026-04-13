import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bespoke",
  description:
    "Commission a bespoke Jawhar piece through private consultation and atelier guidance.",
};

const bespokeSteps = [
  "Initial conversation around stone, silhouette, and occasion.",
  "Material and gemstone direction with sketches from the atelier.",
  "Approval of final proposal, timeline, and finishing details.",
  "Handcrafting, fitting, and presentation through private appointment.",
] as const;

export default function BespokePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="luxury-eyebrow text-xs font-medium">Bespoke</p>
              <h1 className="luxury-title mt-5 text-5xl md:text-6xl">
                Pieces commissioned around a single story.
              </h1>
              <p className="luxury-copy mt-6 max-w-xl text-base md:text-lg">
                Our bespoke service begins with a private conversation and moves
                toward a jewel shaped around sentiment, proportion, and time.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
              <div className="space-y-4">
                {bespokeSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.5rem] border border-[color:var(--line)] bg-white px-5 py-4"
                  >
                    <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <form className="mt-6 grid gap-4">
                <input
                  placeholder="Preferred gemstone or material"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none"
                />
                <input
                  placeholder="Desired timeline"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none"
                />
                <textarea
                  rows={5}
                  placeholder="Tell us about the commission"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none"
                />
                <button
                  type="submit"
                  className="luxury-button luxury-button-solid rounded-full px-6 py-4 text-xs tracking-[0.2em] uppercase"
                >
                  Request Bespoke Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
