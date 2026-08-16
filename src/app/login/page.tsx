import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "./auth-form";
import { getAuthenticatedProfile, getSupabaseConfig, safeRedirectPath } from "@/lib/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string; mode?: string; next?: string }>;
}) {
  const config = getSupabaseConfig();
  const profile = await getAuthenticatedProfile();
  const params = await searchParams;
  const nextPath = safeRedirectPath(params?.next);
  const initialMode = params?.mode === "driver" ? "driver-signup" : params?.mode === "signup" ? "signup" : "signin";
  const pageCopy =
    initialMode === "driver-signup"
      ? {
          description: "Create an account to apply as a volunteer driver.",
          title: "Become a driver",
        }
      : initialMode === "signup"
        ? {
            description: "Create an account to request food for your household.",
            title: "Request a delivery",
          }
        : {
            description: "Sign in to access your account.",
            title: "Welcome back",
          };

  if (config && profile) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center bg-[#f4f5f1] px-4 py-10 text-[#17201f]">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-[#53645f] transition hover:bg-white/70 hover:text-[#1f5d54]"
          href="/"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
          <section>
            <p className="text-xs font-bold tracking-wide text-[#53645f]">Masjid Al-Wasatiyah Wal-Itidaal</p>
            <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-[#111817] sm:text-4xl">
              {pageCopy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#53645f]">{pageCopy.description}</p>
            {!config && (
              <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
                Supabase authentication is ready in code, but the project needs `NEXT_PUBLIC_SUPABASE_URL` and
                `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local` before sign-in can work.
              </div>
            )}
            {params?.error && (
              <div className="mt-6 rounded-md border border-rose-200 bg-rose-50 p-4 text-sm font-semibold leading-6 text-rose-800">
                {params.error}
              </div>
            )}
            {!config && (
              <Link className="mt-5 inline-flex text-sm font-bold text-[#1f5d54]" href="/dashboard">
                View local demo dashboard
              </Link>
            )}
          </section>
          <AuthForm initialMode={initialMode} nextPath={nextPath} />
        </div>
      </div>
    </main>
  );
}
