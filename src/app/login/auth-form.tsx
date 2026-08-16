"use client";

import { useActionState, useState } from "react";
import { requestPasswordReset, signIn, signUp, type AuthFormState } from "./actions";

const initialState: AuthFormState = {};
type AuthMode = "driver-signup" | "forgot" | "signin" | "signup";
type AuthIntent = "driver" | "recipient" | "signin";

export function AuthForm({
  initialMode = "signin",
  intent = "signin",
  nextPath,
}: {
  initialMode?: AuthMode;
  intent?: AuthIntent;
  nextPath: string;
}) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [signInState, signInAction, signInPending] = useActionState(signIn, initialState);
  const [signUpState, signUpAction, signUpPending] = useActionState(signUp, initialState);
  const [resetState, resetAction, resetPending] = useActionState(requestPasswordReset, initialState);
  const isSignUp = mode === "signup" || mode === "driver-signup";
  const state = mode === "signin" ? signInState : isSignUp ? signUpState : resetState;
  const pending = mode === "signin" ? signInPending : isSignUp ? signUpPending : resetPending;
  const formAction = mode === "signin" ? signInAction : isSignUp ? signUpAction : resetAction;
  const allowsSignup = intent !== "signin";
  const signupMode = intent === "driver" ? "driver-signup" : "signup";
  const signInLabel = intent === "driver" ? "Driver sign in" : intent === "recipient" ? "Recipient sign in" : "Sign in";

  return (
    <div className="mx-auto grid w-full max-w-md gap-5">
      <div className={`grid rounded-lg border border-[#d7ded7] bg-white p-1 shadow-sm ${allowsSignup ? "grid-cols-2" : "grid-cols-1"}`}>
        <button
          className={`rounded-md px-4 py-3 text-sm font-bold ${mode === "signin" ? "bg-[#1f5d54] text-white" : "text-[#293532]"}`}
          onClick={() => setMode("signin")}
          type="button"
        >
          {signInLabel}
        </button>
        {allowsSignup && (
          <button
            className={`rounded-md px-4 py-3 text-sm font-bold ${isSignUp ? "bg-[#1f5d54] text-white" : "text-[#293532]"}`}
            onClick={() => setMode(signupMode)}
            type="button"
          >
            {intent === "driver" ? "Apply to drive" : "Create account"}
          </button>
        )}
      </div>

      <form action={formAction} className="grid gap-4 rounded-lg border border-[#d8ded7] bg-white p-5 shadow-sm">
        <input name="next" type="hidden" value={nextPath} />
        {mode === "signin" && intent !== "signin" && <input name="expectedRole" type="hidden" value={intent} />}

        {mode === "forgot" && <h2 className="text-lg font-bold text-[#17201f]">Reset password</h2>}

        {mode === "driver-signup" && (
          <div className="grid gap-1">
            <h2 className="text-lg font-bold text-[#17201f]">Create a driver account</h2>
            <p className="text-sm leading-6 text-[#5d6966]">
              Driver accounts are for delivery volunteers and require administrator approval.
            </p>
          </div>
        )}

        {isSignUp && (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold text-[#26312f]">
              First name
              <input
                autoComplete="given-name"
                className="rounded-md border border-[#c9d3ce] bg-white px-3 py-2 text-base font-normal outline-none transition focus:border-[#1f5d54] focus:ring-2 focus:ring-[#1f5d54]/15"
                maxLength={50}
                name="firstName"
                required
                type="text"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#26312f]">
              Last name
              <input
                autoComplete="family-name"
                className="rounded-md border border-[#c9d3ce] bg-white px-3 py-2 text-base font-normal outline-none transition focus:border-[#1f5d54] focus:ring-2 focus:ring-[#1f5d54]/15"
                maxLength={50}
                name="lastName"
                required
                type="text"
              />
            </label>
          </div>
        )}

        <label className="grid gap-1.5 text-sm font-semibold text-[#26312f]">
          Email
          <input
            autoComplete="email"
            className="rounded-md border border-[#c9d3ce] bg-white px-3 py-2 text-base font-normal outline-none transition focus:border-[#1f5d54] focus:ring-2 focus:ring-[#1f5d54]/15"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </label>

        {mode !== "forgot" && (
          <label className="grid gap-1.5 text-sm font-semibold text-[#26312f]">
            Password
            <input
              autoComplete={isSignUp ? "new-password" : "current-password"}
              className="rounded-md border border-[#c9d3ce] bg-white px-3 py-2 text-base font-normal outline-none transition focus:border-[#1f5d54] focus:ring-2 focus:ring-[#1f5d54]/15"
              minLength={isSignUp ? 8 : undefined}
              name="password"
              required
              type="password"
            />
          </label>
        )}

        {mode === "signin" && (
          <button
            className="justify-self-start text-sm font-bold text-[#1f5d54]"
            onClick={() => setMode("forgot")}
            type="button"
          >
            Forgot password?
          </button>
        )}

        {isSignUp && <input name="role" type="hidden" value={mode === "driver-signup" ? "driver" : "recipient"} />}

        {state.error && (
          <p
            aria-live="polite"
            className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-800"
          >
            {state.error}
          </p>
        )}
        {state.message && (
          <p
            aria-live="polite"
            className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-800"
          >
            {state.message}
          </p>
        )}

        <button
          className="rounded-md bg-[#1f5d54] px-4 py-3 font-bold text-white shadow-sm disabled:cursor-not-allowed disabled:bg-[#9aaaa5]"
          disabled={pending}
          type="submit"
        >
          {pending
            ? "Working..."
            : mode === "signin"
              ? "Sign in"
              : isSignUp
                ? mode === "driver-signup"
                  ? "Create driver account"
                  : "Create account"
                : "Send reset link"}
        </button>

        {mode === "forgot" && (
          <button className="text-sm font-bold text-[#1f5d54]" onClick={() => setMode("signin")} type="button">
            Back to sign in
          </button>
        )}

      </form>
    </div>
  );
}
