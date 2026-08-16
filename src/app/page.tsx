import Link from "next/link";
import { getAuthenticatedProfile } from "@/lib/auth";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path d="m4 7.5 8-4 8 4m-16 0 8 4m-8-4v9l8 4m0-9 8-4m-8 4v9m8-13v9l-8 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path d="m5.5 16-1.6-1.2a2 2 0 0 1-.8-1.6V11h17.8v2.2a2 2 0 0 1-.8 1.6L18.5 16M6 11l1.6-4.1A3 3 0 0 1 10.4 5h3.2a3 3 0 0 1 2.8 1.9L18 11M6.5 15h.01M17.5 15h.01M6 16v2M18 16v2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

const choices = [
  {
    title: "Request a delivery",
    description: "Sign up to receive food for your household.",
    action: "Request food",
    href: "/login?mode=signup",
    icon: <BoxIcon />,
    style: "border-[#d7e1da] bg-[#f5f8f5] text-[#214f3f] hover:border-[#8eaa9b] hover:bg-[#eef4ef]",
  },
  {
    title: "Become a driver",
    description: "Apply to volunteer for food deliveries.",
    action: "Sign up to drive",
    href: "/login?mode=driver",
    icon: <CarIcon />,
    style: "border-[#e5ddcf] bg-[#fbf8f2] text-[#684a2b] hover:border-[#bda98c] hover:bg-[#f7f1e7]",
  },
];

export default async function Home() {
  const profile = await getAuthenticatedProfile();
  const firstName = profile?.name.trim().split(/\s+/)[0];
  const dashboardDescription =
    profile?.role === "admin"
      ? "Manage requests, drivers, and deliveries."
      : profile?.role === "driver"
        ? "View available and assigned deliveries."
        : "View your request and delivery status.";
  const visibleChoices = profile
    ? [
        {
          title: "Open your dashboard",
          description: dashboardDescription,
          action: "Continue",
          href: "/dashboard",
          icon: <DashboardIcon />,
          style: "border-[#d7e1da] bg-[#f5f8f5] text-[#214f3f] hover:border-[#8eaa9b] hover:bg-[#eef4ef]",
        },
      ]
    : choices;

  return (
    <main className="flex min-h-screen flex-col bg-[#fcfbf8] text-[#1d2824]">
      <header className="border-b border-[#e5e5de]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
          <Link className="min-w-0" href="/" aria-label="Masjid Al Wasatiyyah Wal Itidaal home">
            <span className="block truncate text-sm font-bold tracking-[-0.01em] text-[#1d2924] sm:text-base">
              Masjid Al Wasatiyyah Wal Itidaal
            </span>
          </Link>

          <Link
            className="shrink-0 rounded-md px-3 py-2 text-sm font-semibold text-[#41534b] transition hover:bg-[#f0f2ee] hover:text-[#1e4b3b]"
            href={profile ? "/dashboard" : "/login"}
          >
            {profile ? "Dashboard" : "Sign in"}
          </Link>
        </div>
      </header>

      <section className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <h1 className="text-4xl font-bold tracking-[-0.045em] text-[#18251f] sm:text-5xl">
            {profile ? `Welcome back${firstName ? `, ${firstName}` : ""}.` : "What would you like to do?"}
          </h1>

          <div className={`mt-9 grid gap-4 sm:mt-11 ${profile ? "max-w-xl" : "md:grid-cols-2"}`}>
            {visibleChoices.map((choice) => (
              <Link
                className={`group flex min-h-56 flex-col rounded-2xl border p-6 transition duration-200 sm:min-h-64 sm:p-8 ${choice.style}`}
                href={choice.href}
                key={choice.title}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/80 shadow-[0_1px_2px_rgba(20,35,28,0.06)]">{choice.icon}</span>
                <h2 className="mt-8 text-2xl font-bold tracking-[-0.03em] text-[#1e2b25]">{choice.title}</h2>
                <p className="mt-2 text-base leading-7 text-[#65706a]">{choice.description}</p>
                <span className="mt-auto flex items-center justify-between pt-7 text-sm font-bold">
                  {choice.action}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
