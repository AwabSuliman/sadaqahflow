import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Receive requests",
    description: "Families submit structured requests while intake controls keep each distribution season organized.",
  },
  {
    number: "02",
    title: "Coordinate the team",
    description: "Administrators review requests, approve volunteers, and assign deliveries from one operational view.",
  },
  {
    number: "03",
    title: "Close the loop",
    description: "Drivers claim routes, record outcomes, and give every stakeholder a clear, auditable status history.",
  },
];

const capabilities = [
  {
    title: "Role-aware workflows",
    description: "Dedicated experiences for recipients, volunteer drivers, and distribution administrators.",
    icon: "users",
  },
  {
    title: "Live operations",
    description: "Realtime updates keep request, assignment, and delivery activity synchronized across the team.",
    icon: "pulse",
  },
  {
    title: "Secure by design",
    description: "Supabase Auth, trusted role claims, row-level security, and atomic database functions protect sensitive data.",
    icon: "shield",
  },
  {
    title: "Decision-ready reporting",
    description: "Season summaries, route manifests, CSV exports, and lifecycle history support confident coordination.",
    icon: "chart",
  },
];

function CapabilityIcon({ name }: { name: string }) {
  if (name === "users") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87m-2-12a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (name === "pulse") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2.5-7 5 14 2.5-7h4" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f4] text-[#16201d]">
      <section className="relative border-b border-[#dfe5dd] bg-[#f2f5ef]">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full bg-[#dcecdf] blur-3xl" />
          <div className="absolute -left-36 top-64 h-96 w-96 rounded-full bg-[#f4ead2] opacity-80 blur-3xl" />
        </div>

        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-3" aria-label="Zakat Distribution home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#174f43] text-white shadow-sm">
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.5-2.7 7-6.2 7-10.2V5l-7-3-7 3v5.8C5 14.8 7.5 18.3 12 21Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.2 11 14.7l4.8-5" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-bold tracking-[-0.01em] text-[#17231f]">Zakat Distribution</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6c7a74]">Operations platform</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-semibold text-[#50605a] transition hover:text-[#174f43]" href="#overview">Overview</a>
            <a className="text-sm font-semibold text-[#50605a] transition hover:text-[#174f43]" href="#capabilities">Capabilities</a>
            <a className="text-sm font-semibold text-[#50605a] transition hover:text-[#174f43]" href="#engineering">Engineering</a>
          </div>

          <Link className="inline-flex items-center gap-2 rounded-full bg-[#173f37] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0f332c]" href="/dashboard">
            Open app
            <ArrowIcon />
          </Link>
        </nav>

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cbd9cf] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#315e52] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#dc8a32]" />
              Full-stack community logistics
            </div>
            <h1 className="max-w-3xl text-[2.75rem] font-bold leading-[1.02] tracking-[-0.055em] text-[#13201c] sm:text-6xl lg:text-[4.35rem]">
              Every delivery.<br />One clear system.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#52625c] sm:text-xl sm:leading-9">
              A secure operations platform that helps community organizations move food assistance from request to doorstep—with clarity at every handoff.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#174f43] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(23,79,67,0.18)] transition hover:-translate-y-0.5 hover:bg-[#103d34]" href="#product">
                Explore the product
                <ArrowIcon />
              </a>
              <Link className="inline-flex items-center justify-center rounded-xl border border-[#cbd5ce] bg-white/80 px-5 py-3.5 text-sm font-bold text-[#24352f] transition hover:border-[#97aa9f] hover:bg-white" href="/login">
                Sign in to the platform
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.12em] text-[#718079]">
              <span>Next.js 16</span>
              <span className="h-1 w-1 rounded-full bg-[#aab5af]" />
              <span>Supabase</span>
              <span className="h-1 w-1 rounded-full bg-[#aab5af]" />
              <span>PostgreSQL</span>
            </div>
          </div>

          <div id="product" className="relative mx-auto w-full max-w-2xl scroll-mt-24 lg:mx-0">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-[#b9d4c1]/35 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/80 bg-[#fdfefc] p-2.5 shadow-[0_32px_90px_rgba(32,60,49,0.18)]">
              <div className="overflow-hidden rounded-[1.25rem] border border-[#dce3dd] bg-[#f5f7f3]">
                <div className="flex items-center justify-between border-b border-[#dde4de] bg-white px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e5a75d]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d8dfd9]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d8dfd9]" />
                  </div>
                  <span className="rounded-md bg-[#f0f3ef] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#68766f]">Product preview</span>
                </div>

                <div className="grid min-h-[430px] sm:grid-cols-[132px_1fr]">
                  <aside className="hidden border-r border-[#e0e6e1] bg-[#173f37] p-4 text-white sm:block">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-[10px] font-bold">ZD</span>
                      <span className="text-[10px] font-bold leading-tight">Distribution<br />Center</span>
                    </div>
                    <div className="mt-5 space-y-2 text-[9px] font-semibold">
                      <div className="rounded-lg bg-white/12 px-3 py-2.5 text-white">Overview</div>
                      <div className="px-3 py-2.5 text-white/60">Requests</div>
                      <div className="px-3 py-2.5 text-white/60">Drivers</div>
                      <div className="px-3 py-2.5 text-white/60">Reports</div>
                    </div>
                  </aside>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7b8982]">Active season</p>
                        <h2 className="mt-1 text-base font-bold tracking-tight text-[#1d2d27]">Distribution overview</h2>
                      </div>
                      <span className="rounded-full bg-[#e0efe5] px-2.5 py-1 text-[9px] font-bold text-[#2e6c58]">Intake open</span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                      {[
                        ["Families", "128", "+12 this week"],
                        ["Approved", "96", "75% reviewed"],
                        ["Drivers", "18", "14 active"],
                        ["Delivered", "74", "77% complete"],
                      ].map(([label, value, detail]) => (
                        <div key={label} className="rounded-xl border border-[#e0e6e1] bg-white p-3 shadow-sm">
                          <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#7b8982]">{label}</p>
                          <p className="mt-1.5 text-xl font-bold tracking-tight text-[#20312b]">{value}</p>
                          <p className="mt-1 text-[8px] font-semibold text-[#648075]">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_0.7fr]">
                      <div className="rounded-xl border border-[#e0e6e1] bg-white p-3.5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-bold text-[#273a33]">Request progress</p>
                          <span className="text-[8px] font-semibold text-[#7b8982]">Current season</span>
                        </div>
                        <div className="mt-5 flex h-24 items-end gap-2">
                          {[42, 60, 49, 76, 88, 68, 94, 82].map((height, index) => (
                            <div key={index} className="flex h-full flex-1 items-end rounded-sm bg-[#edf2ed]">
                              <span className="block w-full rounded-sm bg-[#4d8974]" style={{ height: `${height}%` }} />
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-between text-[7px] font-semibold uppercase tracking-wider text-[#91a098]">
                          <span>Submitted</span><span>Delivered</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#e0e6e1] bg-white p-3.5 shadow-sm">
                        <p className="text-[10px] font-bold text-[#273a33]">Recent activity</p>
                        <div className="mt-4 space-y-3">
                          {[
                            ["Delivery completed", "2m"],
                            ["Request approved", "8m"],
                            ["Driver assigned", "14m"],
                          ].map(([event, time], index) => (
                            <div key={event} className="flex items-start gap-2">
                              <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${index === 0 ? "bg-[#dc8a32]" : "bg-[#4d8974]"}`} />
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-[8px] font-bold text-[#384a43]">{event}</p>
                                <p className="mt-0.5 text-[7px] text-[#8b9891]">{time} ago</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-[#d7e1da] bg-white px-4 py-3 shadow-xl sm:-left-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#7a8881]">Workflow status</p>
              <p className="mt-1 flex items-center gap-2 text-xs font-bold text-[#25493e]"><span className="h-2 w-2 rounded-full bg-[#53a276]" /> Realtime sync active</p>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="scroll-mt-20 border-b border-[#e1e6e1] bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b36926]">The challenge</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#18241f] sm:text-4xl">Community care deserves better than scattered spreadsheets.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <p className="text-base leading-7 text-[#596861]">Food distribution brings together sensitive family information, volunteer coordination, time-critical assignments, and real-world delivery updates.</p>
              <p className="text-base leading-7 text-[#596861]">This platform turns that complexity into a single role-aware workflow—giving every person exactly the information and actions they need.</p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#dfe5df] bg-[#dfe5df] shadow-sm lg:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.number} className="bg-[#f9faf7] p-7 sm:p-8">
                <span className="text-xs font-bold tracking-[0.14em] text-[#b36926]">{step.number}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-0.025em] text-[#203029]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#63716a]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 bg-[#173f37] py-20 text-white sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e7a55d]">Built for the full operation</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">From intake to impact.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">A focused product surface backed by strong data controls and dependable operational tooling.</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.title} className="bg-[#173f37] p-7 transition hover:bg-[#1b493f] sm:p-9">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e2f0e7] text-[#174f43]">
                  <CapabilityIcon name={capability.icon} />
                </span>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.025em]">{capability.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/62">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="engineering" className="scroll-mt-20 border-b border-[#e2e7e1] bg-[#f7f8f4] py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-24 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b36926]">Engineering approach</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#18241f] sm:text-5xl">Designed beyond the happy path.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5b6962]">The system handles concurrent delivery claims, enforces authorization in PostgreSQL, preserves an audit trail, retries transactional notifications, and validates operational limits at both the interface and database layers.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Row-level security", "Atomic workflows", "Realtime sync", "Audit history", "Retryable email queue", "CSV safety"].map((item) => (
                <span key={item} className="rounded-full border border-[#d5ddd6] bg-white px-3 py-2 text-xs font-bold text-[#4f6058] shadow-sm">{item}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#dce3dd] bg-white p-6 shadow-[0_18px_55px_rgba(36,55,46,0.08)] sm:p-8">
            <div className="flex items-end justify-between border-b border-[#e5e9e5] pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7b8881]">Quality signal</p>
                <p className="mt-2 text-4xl font-bold tracking-[-0.05em] text-[#1b3028]">79/79</p>
              </div>
              <span className="rounded-full bg-[#e4f2e8] px-3 py-1.5 text-xs font-bold text-[#2e6c58]">Passing</span>
            </div>
            <div className="mt-6 space-y-4">
              {["Authentication and role boundaries", "Request and delivery lifecycle", "Database access hardening", "Reporting and export integrity"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#45564f]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#edf4ee] text-[#388064]">
                    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4 4 8-8" /></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b36926]">Ready to explore</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-[#19251f] sm:text-5xl">See the workflow in action.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#617069]">The secure application supports the complete recipient, administrator, and volunteer-driver experience.</p>
          <Link className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#174f43] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(23,79,67,0.18)] transition hover:-translate-y-0.5 hover:bg-[#103d34]" href="/dashboard">
            Open secure application
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#dfe5df] bg-[#f2f5ef]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-7 text-xs font-semibold text-[#6d7a74] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Community food distribution, coordinated with care.</p>
          <div className="flex items-center gap-5">
            <span>Next.js</span><span>Supabase</span><span>PostgreSQL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
