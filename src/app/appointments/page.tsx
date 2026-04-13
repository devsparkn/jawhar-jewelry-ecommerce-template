import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Appointments",
  description:
    "Book a private Jawhar appointment for styling, gifting, and bespoke jewellery consultation.",
};

const appointmentTypes = [
  {
    title: "Private Styling",
    description:
      "A one-to-one salon appointment to build a personal edit across rings, necklaces, earrings, and evening pieces.",
  },
  {
    title: "Bridal Consultation",
    description:
      "Compare diamond profiles, discuss ring sizing, and review delivery timelines for ceremony and gifting.",
  },
  {
    title: "Bespoke Commission",
    description:
      "Meet with Jawhar to shape a custom project around stone preference, metal palette, and timeline.",
  },
] as const;

export default function AppointmentsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="luxury-eyebrow text-xs font-medium">Appointments</p>
              <h1 className="luxury-title mt-5 text-5xl md:text-6xl">
                Reserve private time with Jawhar.
              </h1>
              <p className="luxury-copy mt-6 max-w-xl text-base md:text-lg">
                Appointments are offered in person and virtually for collectors,
                bridal clients, and bespoke commissions.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8">
              <div className="grid gap-4">
                {appointmentTypes.map((type) => (
                  <article
                    key={type.title}
                    className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-5"
                  >
                    <h2 className="luxury-title text-2xl">{type.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                      {type.description}
                    </p>
                  </article>
                ))}
              </div>
              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Preferred date"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none"
                />
                <input
                  placeholder="Preferred time"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none"
                />
                <input
                  placeholder="Full name"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none md:col-span-2"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="luxury-input rounded-[1.25rem] px-4 py-3 outline-none md:col-span-2"
                />
                <button
                  type="submit"
                  className="luxury-button luxury-button-solid rounded-full px-6 py-4 text-xs tracking-[0.2em] uppercase md:col-span-2"
                >
                  Request Appointment
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
